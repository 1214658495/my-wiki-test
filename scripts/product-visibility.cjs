const fs = require('fs');
const path = require('path');

function readCategoryConfig(dirPath) {
  const categoryPath = path.join(dirPath, '_category_.json');

  if (!fs.existsSync(categoryPath)) {
    return {};
  }

  try {
    return JSON.parse(fs.readFileSync(categoryPath, 'utf8'));
  } catch (error) {
    throw new Error(`Invalid category config: ${categoryPath}\n${error.message}`);
  }
}

function getHiddenProductDirectories(docsDir = path.resolve('docs')) {
  const hiddenDirectories = [];

  function visit(dirPath) {
    for (const entry of fs.readdirSync(dirPath, {withFileTypes: true})) {
      if (!entry.isDirectory()) {
        continue;
      }

      const childPath = path.join(dirPath, entry.name);
      const categoryConfig = readCategoryConfig(childPath);

      if (categoryConfig.customProps?.hidden === true) {
        hiddenDirectories.push(path.relative(docsDir, childPath).split(path.sep).join('/'));
        continue;
      }

      visit(childPath);
    }
  }

  visit(docsDir);
  return hiddenDirectories;
}

function getHiddenDocExcludePatterns(docsDir = path.resolve('docs')) {
  return getHiddenProductDirectories(docsDir).map(directory => `${directory}/**`);
}

module.exports = {
  getHiddenDocExcludePatterns,
  getHiddenProductDirectories,
  readCategoryConfig,
};
