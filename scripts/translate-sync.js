/**
 * Synchronize translated Docusaurus docs.
 *
 * Usage:
 *   node scripts/translate-sync.js
 *   node scripts/translate-sync.js --dry-run
 *   node scripts/translate-sync.js --file=path/to/doc.md
 *
 * Required for translation runs:
 *   OPENAI_API_KEY=sk-...
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const {generateSidebars} = require('../generate-sidebar');

const CONFIG = {
  docsDir: './docs',
  i18nDir: './i18n/zh-Hans/docusaurus-plugin-content-docs/current',
  hashCacheFile: './scripts/cache/file_hashes.json',
  currentJsonFile: './i18n/zh-Hans/docusaurus-plugin-content-docs/current.json',
  openaiModel: 'gpt-4o',
  batchSize: 5,
};

function log(message, type = 'info') {
  const timestamp = new Date().toISOString().slice(11, 19);
  const prefix = type === 'error' ? 'ERROR' : type === 'warn' ? 'WARN' : 'INFO';
  console.log(`[${timestamp}] ${prefix} ${message}`);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function computeHash(content) {
  return crypto.createHash('sha256').update(content).digest('hex');
}

function readText(filePath) {
  return fs.readFileSync(filePath, 'utf8');
}

function writeText(filePath, content) {
  fs.mkdirSync(path.dirname(filePath), {recursive: true});
  fs.writeFileSync(filePath, content, 'utf8');
}

function getFileHash(filePath) {
  try {
    return computeHash(readText(filePath));
  } catch {
    return null;
  }
}

function loadHashCache() {
  try {
    return fs.existsSync(CONFIG.hashCacheFile)
      ? JSON.parse(readText(CONFIG.hashCacheFile))
      : {};
  } catch {
    return {};
  }
}

function saveHashCache(cache) {
  writeText(CONFIG.hashCacheFile, JSON.stringify(cache, null, 2));
}

function getAllSourceFiles(dir, baseDir = '') {
  const files = [];

  for (const item of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, item);
    const relativePath = baseDir ? path.posix.join(baseDir, item) : item;

    if (fs.statSync(fullPath).isDirectory()) {
      files.push(...getAllSourceFiles(fullPath, relativePath));
    } else if (item.endsWith('.md') || item.endsWith('.mdx') || item === '_category_.json') {
      files.push(relativePath);
    }
  }

  return files;
}

function detectChanges() {
  log('Detecting changed docs...');

  const hashCache = loadHashCache();
  const changes = {new: [], updated: [], unchanged: []};

  for (const file of getAllSourceFiles(CONFIG.docsDir)) {
    const docsPath = path.join(CONFIG.docsDir, file);
    const i18nPath = path.join(CONFIG.i18nDir, file);
    const currentHash = getFileHash(docsPath);
    const cachedHash = hashCache[file];

    if (!fs.existsSync(i18nPath)) {
      changes.new.push(file);
      log(`New: ${file}`, 'warn');
    } else if (currentHash && currentHash !== cachedHash) {
      changes.updated.push(file);
      log(`Updated: ${file}`, 'warn');
    } else {
      changes.unchanged.push(file);
    }
  }

  log(`Detected ${changes.new.length} new, ${changes.updated.length} updated, ${changes.unchanged.length} unchanged files.`);
  return changes;
}

async function translateWithOpenAI(text, retries = 3) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error('OPENAI_API_KEY is not set.');
  }

  for (let attempt = 0; attempt < retries; attempt += 1) {
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: CONFIG.openaiModel,
          messages: [
            {
              role: 'system',
              content: 'You are a professional technical documentation translator. Translate English to Simplified Chinese. Preserve Markdown, MDX, front matter, code blocks, links, paths, and product names. Return only the translated document.',
            },
            {
              role: 'user',
              content: text,
            },
          ],
          temperature: 0.3,
        }),
      });

      if (!response.ok) {
        throw new Error(`OpenAI API error ${response.status}: ${await response.text()}`);
      }

      const data = await response.json();
      return data.choices[0].message.content;
    } catch (error) {
      if (attempt === retries - 1) {
        throw error;
      }
      log(`Translation failed, retrying (${attempt + 1}/${retries})...`, 'warn');
      await sleep(2 ** attempt * 1000);
    }
  }
}

async function updateCurrentJson(englishLabel, chineseLabel) {
  let currentJson = {};
  if (fs.existsSync(CONFIG.currentJsonFile)) {
    currentJson = JSON.parse(readText(CONFIG.currentJsonFile));
  }

  const key = `sidebar.tutorialSidebar.category.${englishLabel}`;
  currentJson[key] = {
    message: chineseLabel,
    description: `The label for category ${englishLabel} in sidebar tutorialSidebar`,
  };

  writeText(CONFIG.currentJsonFile, JSON.stringify(currentJson, null, 2));
}

async function translateCategoryFile(englishPath, i18nPath, dryRun = false) {
  log(`Sync category: ${path.dirname(englishPath)}`);

  if (dryRun) {
    log('  [dry-run] Would sync category label', 'warn');
    return;
  }

  const englishData = JSON.parse(readText(englishPath));
  const i18nData = fs.existsSync(i18nPath)
    ? JSON.parse(readText(i18nPath))
    : {position: englishData.position, link: englishData.link};

  if (englishData.label) {
    const translatedLabel = (await translateWithOpenAI(englishData.label)).trim();
    i18nData.label = translatedLabel;
    await updateCurrentJson(englishData.label, translatedLabel);
  }

  writeText(i18nPath, JSON.stringify(i18nData, null, 2));
}

async function translateFile(filePath, dryRun = false) {
  const fullPath = path.join(CONFIG.docsDir, filePath);
  const i18nPath = path.join(CONFIG.i18nDir, filePath);

  if (path.basename(filePath) === '_category_.json') {
    await translateCategoryFile(fullPath, i18nPath, dryRun);
    return;
  }

  log(`Translate file: ${filePath}`);

  if (dryRun) {
    log('  [dry-run] Would translate file', 'warn');
    return;
  }

  const content = readText(fullPath);
  const translated = await translateWithOpenAI(content);
  writeText(i18nPath, translated);

  const hashCache = loadHashCache();
  hashCache[filePath] = computeHash(content);
  saveHashCache(hashCache);
}

function regenerateSidebars() {
  log('Regenerating sidebars.js...');
  generateSidebars();
  log('sidebars.js updated');
}

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');
  const fileArg = args.find(arg => arg.startsWith('--file='));

  log('Translation sync started');

  if (fileArg) {
    await translateFile(fileArg.replace('--file=', ''), dryRun);
  } else {
    const changes = detectChanges();
    const filesToTranslate = [...changes.new, ...changes.updated];

    for (let i = 0; i < filesToTranslate.length; i += CONFIG.batchSize) {
      const batch = filesToTranslate.slice(i, i + CONFIG.batchSize);
      log(`Processing batch ${Math.floor(i / CONFIG.batchSize) + 1}/${Math.ceil(filesToTranslate.length / CONFIG.batchSize)}`);
      await Promise.all(batch.map(file => translateFile(file, dryRun)));
    }
  }

  if (!dryRun) {
    regenerateSidebars();
  }

  log(dryRun ? 'Dry run complete' : 'Translation sync complete');
}

main().catch(error => {
  log(error.message, 'error');
  process.exit(1);
});
