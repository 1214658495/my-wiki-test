/**
 * Migrate documentation images off raw.githubusercontent.com onto the company
 * Aliyun OSS bucket.
 *
 * Background: 113 image/PDF references across docs/ and i18n/ still point at
 * raw.githubusercontent.com/1214658495/myWikiFiles -- a personal GitHub repo.
 * raw.githubusercontent is not a CDN, is rate limited, is slow/blocked from
 * mainland China, and disappears if that personal repo is renamed or deleted.
 * The other ~680 references already live on the company OSS bucket, so this
 * finishes a migration that was left half done.
 *
 * The upload step is deliberately NOT automated: it needs OSS credentials that
 * belong to you, not to this repo. Run the phases in order:
 *
 *   1. node scripts/migrate-images.js --scan
 *        Builds scripts/cache/image-migration.json (the manifest).
 *
 *   2. node scripts/migrate-images.js --fetch
 *        Downloads every asset into .image-migration/ mirroring its OSS path.
 *        Reports anything that 404s so you can fix it before going further.
 *
 *   3. Upload the contents of .image-migration/ to the bucket root, preserving
 *      directory structure (ossutil cp -r .image-migration/wiki-images/ \
 *        oss://sgword-service/wiki-images/ or the web console).
 *
 *   4. node scripts/migrate-images.js --verify
 *        HEADs every target URL. Do not proceed until this is clean.
 *
 *   5. node scripts/migrate-images.js --rewrite
 *        Rewrites all references in docs/ and i18n/. Add --dry-run first.
 *
 * Every phase is idempotent and safe to re-run.
 */

const fs = require('fs');
const path = require('path');

const CONFIG = {
  contentDirs: ['./docs', './i18n/zh-Hans/docusaurus-plugin-content-docs/current'],
  manifestFile: './scripts/cache/image-migration.json',
  stagingDir: './.image-migration',
  // Matches the URL up to the first character that cannot appear in a bare
  // markdown/JSX asset URL. Trailing punctuation is trimmed separately.
  sourcePattern: /https:\/\/raw\.githubusercontent\.com\/1214658495\/myWikiFiles\/[^\s)'"<>\]]+/g,
  // raw.githubusercontent.com/<user>/<repo>/<ref>/<rest> -> wiki-images/<rest>
  // `wiki-images/` is the prefix every existing OSS asset already uses.
  ossPrefix: 'wiki-images',
  ossBaseUrl: 'https://sgword-service.oss-cn-heyuan.aliyuncs.com',
  fetchConcurrency: 4,
};

function log(message) {
  console.log(`[migrate-images] ${message}`);
}

function readText(filePath) {
  return fs.readFileSync(filePath, 'utf8');
}

function writeText(filePath, content) {
  fs.mkdirSync(path.dirname(filePath), {recursive: true});
  fs.writeFileSync(filePath, content, 'utf8');
}

function collectContentFiles(dir, acc = []) {
  if (!fs.existsSync(dir)) {
    return acc;
  }
  for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      collectContentFiles(fullPath, acc);
    } else if (entry.name.endsWith('.md') || entry.name.endsWith('.mdx')) {
      acc.push(fullPath);
    }
  }
  return acc;
}

// Markdown often ends a URL with punctuation that is not part of it, e.g.
// "see ![x](https://.../a.png)." or a trailing comma in a table cell.
function trimTrailingPunctuation(url) {
  return url.replace(/[.,;:!?]+$/, '');
}

// https://raw.githubusercontent.com/<owner>/<repo>/<ref>/<rest>
function toOssPath(sourceUrl) {
  const withoutHost = sourceUrl.replace('https://raw.githubusercontent.com/', '');
  const segments = withoutHost.split('/');
  // drop owner, repo and the git ref (branch/tag/sha)
  const rest = segments.slice(3).join('/');
  if (!rest) {
    return null;
  }
  return `${CONFIG.ossPrefix}/${rest}`;
}

function buildManifest() {
  const files = CONFIG.contentDirs.flatMap((dir) => collectContentFiles(dir));
  const assets = new Map();
  let totalRefs = 0;

  for (const file of files) {
    const lines = readText(file).split('\n');
    lines.forEach((line, index) => {
      const matches = line.match(CONFIG.sourcePattern);
      if (!matches) {
        return;
      }
      for (const rawMatch of matches) {
        const sourceUrl = trimTrailingPunctuation(rawMatch);
        const ossPath = toOssPath(sourceUrl);
        if (!ossPath) {
          log(`WARN unparseable URL in ${file}:${index + 1} -> ${sourceUrl}`);
          continue;
        }
        if (!assets.has(sourceUrl)) {
          assets.set(sourceUrl, {
            sourceUrl,
            ossPath,
            targetUrl: `${CONFIG.ossBaseUrl}/${ossPath}`,
            refs: [],
          });
        }
        assets.get(sourceUrl).refs.push({file: file.split(path.sep).join('/'), line: index + 1});
        totalRefs += 1;
      }
    });
  }

  return {
    generatedAt: new Date().toISOString(),
    totalReferences: totalRefs,
    totalAssets: assets.size,
    assets: [...assets.values()].sort((a, b) => a.sourceUrl.localeCompare(b.sourceUrl)),
  };
}

function loadManifest() {
  if (!fs.existsSync(CONFIG.manifestFile)) {
    throw new Error(`Manifest not found. Run --scan first: ${CONFIG.manifestFile}`);
  }
  return JSON.parse(readText(CONFIG.manifestFile));
}

// Run `worker` over `items` with a bounded number of in-flight promises, so a
// 34-asset download does not open 34 sockets at once.
async function mapWithConcurrency(items, limit, worker) {
  const results = [];
  let cursor = 0;
  const runners = Array.from({length: Math.min(limit, items.length)}, async () => {
    while (cursor < items.length) {
      const index = cursor++;
      results[index] = await worker(items[index], index);
    }
  });
  await Promise.all(runners);
  return results;
}

async function runScan() {
  const manifest = buildManifest();
  writeText(CONFIG.manifestFile, JSON.stringify(manifest, null, 2));

  log(`Found ${manifest.totalReferences} references to ${manifest.totalAssets} unique assets.`);
  log(`Manifest written to ${CONFIG.manifestFile}`);
  log('');
  log('Path mapping (first 5):');
  for (const asset of manifest.assets.slice(0, 5)) {
    log(`  ${asset.sourceUrl}`);
    log(`    -> ${asset.targetUrl}`);
  }
  if (manifest.assets.length > 5) {
    log(`  ... and ${manifest.assets.length - 5} more (see manifest)`);
  }
  log('');
  log('Next: node scripts/migrate-images.js --fetch');
}

async function runFetch() {
  const manifest = loadManifest();
  log(`Downloading ${manifest.totalAssets} assets into ${CONFIG.stagingDir}/ ...`);

  const outcomes = await mapWithConcurrency(manifest.assets, CONFIG.fetchConcurrency, async (asset) => {
    const destination = path.join(CONFIG.stagingDir, asset.ossPath);
    if (fs.existsSync(destination) && fs.statSync(destination).size > 0) {
      return {asset, status: 'cached'};
    }
    try {
      const response = await fetch(asset.sourceUrl);
      if (!response.ok) {
        return {asset, status: 'failed', detail: `HTTP ${response.status}`};
      }
      const buffer = Buffer.from(await response.arrayBuffer());
      fs.mkdirSync(path.dirname(destination), {recursive: true});
      fs.writeFileSync(destination, buffer);
      return {asset, status: 'downloaded', bytes: buffer.length};
    } catch (error) {
      return {asset, status: 'failed', detail: error.message};
    }
  });

  const failed = outcomes.filter((o) => o.status === 'failed');
  const downloaded = outcomes.filter((o) => o.status === 'downloaded');
  const cached = outcomes.filter((o) => o.status === 'cached');

  // Record what is migratable so --rewrite never points a reference at an OSS
  // object that will never exist.
  const deadUrls = new Set(failed.map((o) => o.asset.sourceUrl));
  for (const asset of manifest.assets) {
    asset.status = deadUrls.has(asset.sourceUrl) ? 'dead' : 'ok';
  }
  manifest.deadAssets = deadUrls.size;
  writeText(CONFIG.manifestFile, JSON.stringify(manifest, null, 2));

  log(`Downloaded ${downloaded.length}, already present ${cached.length}, failed ${failed.length}.`);

  if (failed.length > 0) {
    log('');
    log('DEAD — gone from the source repo. Marked status:"dead" in the manifest and');
    log('skipped by --rewrite. Check whether each reference is still wanted:');
    for (const {asset, detail} of failed) {
      log(`  ${detail}  ${asset.sourceUrl}`);
      for (const ref of asset.refs.slice(0, 3)) {
        log(`      referenced at ${ref.file}:${ref.line}`);
      }
      if (asset.refs.length > 3) {
        log(`      ... and ${asset.refs.length - 3} more references`);
      }
    }
  }

  log('');
  log(`Next: upload ${CONFIG.stagingDir}/${CONFIG.ossPrefix}/ to the bucket, then run --verify`);
}

async function runVerify() {
  const manifest = loadManifest();
  log(`Checking ${manifest.totalAssets} target URLs on OSS ...`);

  const outcomes = await mapWithConcurrency(manifest.assets, CONFIG.fetchConcurrency, async (asset) => {
    try {
      const response = await fetch(asset.targetUrl, {method: 'HEAD'});
      return {asset, ok: response.ok, detail: `HTTP ${response.status}`};
    } catch (error) {
      return {asset, ok: false, detail: error.message};
    }
  });

  const missing = outcomes.filter((o) => !o.ok);
  log(`Reachable ${outcomes.length - missing.length}/${outcomes.length}.`);

  if (missing.length > 0) {
    log('');
    log('NOT yet on OSS — do not run --rewrite until these are uploaded:');
    for (const {asset, detail} of missing) {
      log(`  ${detail}  ${asset.targetUrl}`);
    }
    process.exitCode = 1;
    return;
  }

  log('All assets are live on OSS. Next: node scripts/migrate-images.js --rewrite');
}

function runRewrite({dryRun}) {
  const manifest = loadManifest();
  const dead = manifest.assets.filter((a) => a.status === 'dead');
  const migratable = manifest.assets.filter((a) => a.status !== 'dead');

  if (dead.length > 0) {
    log(`Skipping ${dead.length} asset(s) marked dead by --fetch (404 at the source).`);
    log('Their references are left pointing at GitHub — decide separately whether to');
    log('restore the images or delete the references.');
    log('');
  }

  // Longest source URL first, so a URL that is a prefix of another cannot
  // partially clobber it.
  const replacements = [...migratable].sort((a, b) => b.sourceUrl.length - a.sourceUrl.length);

  const touchedFiles = new Set(migratable.flatMap((a) => a.refs.map((r) => r.file)));
  let totalReplacements = 0;
  let changedFiles = 0;

  for (const file of [...touchedFiles].sort()) {
    if (!fs.existsSync(file)) {
      log(`WARN listed file no longer exists, skipping: ${file}`);
      continue;
    }
    const original = readText(file);
    let updated = original;
    let fileReplacements = 0;

    for (const {sourceUrl, targetUrl} of replacements) {
      if (!updated.includes(sourceUrl)) {
        continue;
      }
      const occurrences = updated.split(sourceUrl).length - 1;
      updated = updated.split(sourceUrl).join(targetUrl);
      fileReplacements += occurrences;
    }

    if (fileReplacements === 0) {
      continue;
    }
    changedFiles += 1;
    totalReplacements += fileReplacements;
    log(`${dryRun ? 'would rewrite' : 'rewrote'} ${fileReplacements.toString().padStart(3)} ref(s)  ${file}`);
    if (!dryRun) {
      fs.writeFileSync(file, updated, 'utf8');
    }
  }

  log('');
  log(`${dryRun ? 'Would replace' : 'Replaced'} ${totalReplacements} reference(s) across ${changedFiles} file(s).`);
  if (dryRun) {
    log('Re-run without --dry-run to apply.');
  } else {
    log('Next: yarn build && yarn serve, then spot-check images in both locales.');
  }
}

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');

  if (args.includes('--scan')) {
    await runScan();
  } else if (args.includes('--fetch')) {
    await runFetch();
  } else if (args.includes('--verify')) {
    await runVerify();
  } else if (args.includes('--rewrite')) {
    runRewrite({dryRun});
  } else {
    console.log(readText(__filename).split('*/')[0].replace(/^\/\*\*?/, '').replace(/^ \* ?/gm, ''));
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(`[migrate-images] ${error.message}`);
  process.exit(1);
});
