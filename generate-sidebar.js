const fs = require('fs');
const path = require('path');

const docsDir = './docs';
const i18nDir = './i18n/zh-Hans/docusaurus-plugin-content-docs/current';
const HIDDEN_SIDEBAR_DOC_IDS = new Set(['home']);

function getCategoryInfo(dirPath, isI18n = false) {
  const baseDir = isI18n ? i18nDir : docsDir;
  const relativePath = path.relative(docsDir, dirPath);
  const categoryFile = path.join(baseDir, relativePath, '_category_.json');

  if (fs.existsSync(categoryFile)) {
    try {
      const data = JSON.parse(fs.readFileSync(categoryFile, 'utf8'));
      return {
        label: data.label,
        position: Number.isFinite(data.position) ? data.position : undefined,
        link: data.link || null,
        collapsed: data.collapsed,
        collapsible: data.collapsible
      };
    } catch (e) {
      return null;
    }
  }
  return null;
}

function getMergedCategoryInfo(dirPath, isI18n = false, fallbackLabel = path.basename(dirPath)) {
  const defaultInfo = { label: fallbackLabel, position: Infinity, link: null };
  const originalInfo = { ...defaultInfo, ...(getCategoryInfo(dirPath, false) || {}) };

  if (!isI18n) {
    return originalInfo;
  }

  const translatedInfo = getCategoryInfo(dirPath, true);
  if (!translatedInfo) {
    return originalInfo;
  }

  return {
    ...originalInfo,
    ...translatedInfo,
    position: originalInfo.position
  };
}

function createCategoryItem(categoryInfo, items) {
  const linkedDocId =
    categoryInfo.link?.type === 'doc' ? categoryInfo.link.id : null;
  const sidebarItems = linkedDocId
    ? items.filter(item => item !== linkedDocId)
    : items;

  const sidebarItem = {
    type: 'category',
    label: categoryInfo.label,
    collapsed: categoryInfo.collapsed ?? true,
    collapsible: categoryInfo.collapsible ?? true,
    items: sidebarItems
  };

  if (categoryInfo.link) {
    sidebarItem.link = categoryInfo.link;
  }

  return sidebarItem;
}

function shouldIgnore(dirName) {
  const ignoreList = ['node_modules', '.git', 'build', 'i18n'];
  return ignoreList.includes(dirName);
}

function getSidebarPosition(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const match = content.match(/(?:^|\n)\s*sidebar_position:\s*([0-9]+(?:\.[0-9]+)?)/);
    return match ? parseFloat(match[1]) : Infinity;
  } catch (e) {
    return Infinity;
  }
}

const naturalCollator = new Intl.Collator(undefined, {
  numeric: true,
  sensitivity: 'base'
});

function compareByPosition(a, b) {
  if (a.position !== b.position) return a.position - b.position;
  return naturalCollator.compare(a.name, b.name);
}

function getFiles(dir, basePath = '', isI18n = false) {
  const items = fs.readdirSync(dir);
  const result = { type: 'category', items: [] };

  const sidebarEntries = [];

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isFile() && (item.endsWith('.md') || item.endsWith('.mdx'))) {
      const docId = path.posix.join(basePath, item.replace(/\.(md|mdx)$/, ''));
      if (HIDDEN_SIDEBAR_DOC_IDS.has(docId)) {
        continue;
      }

      sidebarEntries.push({
        type: 'doc',
        name: item,
        position: getSidebarPosition(fullPath),
        id: docId
      });
      continue;
    }

    if (stat.isDirectory() && !shouldIgnore(item)) {
      const categoryInfo = getMergedCategoryInfo(fullPath, isI18n, item);
      sidebarEntries.push({
        type: 'category',
        name: item,
        position: categoryInfo.position,
        dirName: item,
        fullPath,
        categoryInfo
      });
    }
  }

  sidebarEntries.sort(compareByPosition);

  for (const entry of sidebarEntries) {
    if (entry.type === 'doc') {
      result.items.push(entry.id);
      continue;
    }

    const subBasePath = path.posix.join(basePath, entry.dirName);
    const subResult = getFiles(entry.fullPath, subBasePath, isI18n);

    if (subResult.items.length > 0) {
      result.items.push(createCategoryItem(entry.categoryInfo, subResult.items));
    }
  }

  return result;
}

function createSidebarContent(items) {
  return `// @ts-check

/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: ${JSON.stringify(items, null, 2)}
};

export default sidebars;
`;
}

function generateSidebars() {
  const enSidebar = {
    tutorialSidebar: getFiles(docsDir, '', false).items
  };

  const zhSidebar = {
    tutorialSidebar: getFiles(docsDir, '', true).items
  };

  fs.writeFileSync('sidebars.js', createSidebarContent(enSidebar.tutorialSidebar), 'utf8');

  const zhSidebarPath = path.join(i18nDir, '..', 'sidebars.js');
  fs.writeFileSync(zhSidebarPath, createSidebarContent(zhSidebar.tutorialSidebar), 'utf8');
}

if (require.main === module) {
  generateSidebars();
  console.log('sidebars.js generated successfully!');
}

module.exports = {generateSidebars};
