const fs = require('fs');
const path = require('path');
const {readCategoryConfig} = require('./scripts/product-visibility.cjs');

const docsDir = './docs';
const i18nDir = './i18n/zh-Hans/docusaurus-plugin-content-docs/current';
const HIDDEN_SIDEBAR_DOC_IDS = new Set(['home', 'ai']);

function getCategoryInfo(dirPath, isI18n = false) {
  const baseDir = isI18n ? i18nDir : docsDir;
  const relativePath = path.relative(docsDir, dirPath);
  const categoryFile = path.join(baseDir, relativePath, '_category_.json');

  if (fs.existsSync(categoryFile)) {
    try {
      const data = readCategoryConfig(path.dirname(categoryFile));
      return {
        label: data.label,
        position: Number.isFinite(data.position) ? data.position : undefined,
        link: data.link || null,
        collapsed: data.collapsed,
        collapsible: data.collapsible,
        hidden: data.customProps?.hidden === true,
        sidebarRefs: data.customProps?.sidebarRefs ?? []
      };
    } catch (e) {
      return null;
    }
  }
  return null;
}

function getMergedCategoryInfo(dirPath, isI18n = false, fallbackLabel = path.basename(dirPath)) {
  const defaultInfo = { label: fallbackLabel, position: Infinity, link: null, hidden: false };
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
    position: originalInfo.position,
    hidden: originalInfo.hidden,
    sidebarRefs: originalInfo.sidebarRefs
  };
}

function createCategoryItem(categoryInfo, items) {
  const linkedDocId =
    categoryInfo.link?.type === 'doc' ? categoryInfo.link.id : null;
  const sidebarItems = linkedDocId
    ? items.filter(item => item !== linkedDocId)
    : items;

  // A category holding only its linked doc is collapsed by Docusaurus into a
  // plain link whose label is no longer translated, so emit a labeled doc item
  // instead (translated via the `sidebar.tutorialSidebar.doc.<label>` key).
  if (linkedDocId && sidebarItems.length === 0) {
    return { type: 'doc', id: linkedDocId, label: categoryInfo.label };
  }

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

function getSidebarEntries(dir, basePath = '', isI18n = false, sidebarRefs = []) {
  const items = fs.readdirSync(dir);

  const sidebarEntries = sidebarRefs.map(({ id, position }) => ({
    type: 'ref',
    name: id,
    position: position ?? Infinity,
    id
  }));

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
      if (categoryInfo.hidden) {
        continue;
      }
      sidebarEntries.push({
        type: 'category',
        name: item,
        position: categoryInfo.position,
        basePath: path.posix.join(basePath, item),
        fullPath,
        categoryInfo
      });
    }
  }

  return sidebarEntries.sort(compareByPosition);
}

function getChildEntries(entry, isI18n) {
  return getSidebarEntries(entry.fullPath, entry.basePath, isI18n, entry.categoryInfo.sidebarRefs);
}

function renderEntries(entries, isI18n) {
  const items = [];
  for (const entry of entries) {
    if (entry.type === 'doc') {
      items.push(entry.id);
      continue;
    }
    if (entry.type === 'ref') {
      items.push({ type: 'ref', id: entry.id });
      continue;
    }

    const children = renderEntries(entry.children ?? getChildEntries(entry, isI18n), isI18n);
    if (children.length > 0) {
      items.push(createCategoryItem(entry.categoryInfo, children));
    }
  }

  return items;
}

function groupCategories(entries, names, categoryInfo) {
  const members = entries.filter(entry => entry.type === 'category' && names.includes(entry.name));
  if (members.length === 0) return entries;

  const group = { type: 'category', categoryInfo, children: members };
  return entries.flatMap(entry => {
    if (entry === members[0]) return [group];
    return members.includes(entry) ? [] : [entry];
  });
}

function buildSidebar(isI18n) {
  let entries = getSidebarEntries(docsDir, '', isI18n);
  entries = groupCategories(
    entries,
    ['6_4_Robotic_Camera', '6_1_Camera'],
    { label: isI18n ? '机器人摄像头' : 'Robotic Camera' }
  );
  entries = groupCategories(
    entries,
    ['1_6_Low_Latency_Camera', '1_7_Event_Based_Camera', '1_9_Night_Vision_Camera',
      '1_11_Cockpit_Camera', '1_12_Automatic_Defogging_Camera'],
    { label: isI18n ? '其他摄像头' : 'Other Cameras' }
  );
  entries = groupCategories(
    entries,
    ['2_1_NVIDIA_Jetson', '2_2_NVIDIA_Drive_AGX_Orin', '2_4_NVIDIA_Jetson_AGX_Thor',
      '2_6_NVIDIA_IGX_Thor', '2_5_NVIDIA_Holoscan_Sensor_Bridge'],
    { label: 'NVIDIA' }
  );
  return renderEntries(entries, isI18n);
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
    tutorialSidebar: buildSidebar(false)
  };

  const zhSidebar = {
    tutorialSidebar: buildSidebar(true)
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
