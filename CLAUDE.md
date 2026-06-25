# CLAUDE.md

本文件为 Claude Code 在本仓库中的长期参考, 记录技术栈, 目录结构, 关键模块, 常用命令和开发约定. 内容写在 Git 中以便团队共享.

## 一. 项目概况

- 类型: Docusaurus 3.7 静态文档站, 中英文双语
- 站点名: `SENSING WIKI`, 生产域名 `wiki.sensing-world.com`(见 `static/CNAME`)
- 部署: GitHub Pages, 由 `.github/workflows/deploy.yml` 在 push 到 `main` 时执行 `yarn deploy`
- 语言: 默认 `en`, 本地化 `zh-Hans`; 中文路径前缀 `/zh-Hans/`
- 运行要求: Node `>=18.0`, 使用 `yarn`(仓库带 `yarn.lock`)
- 无单元测试, 验证依赖 build + serve + 浏览器交互

## 二. 技术栈

- 框架: `@docusaurus/core` 3.7.0 + `@docusaurus/preset-classic` 3.7.0
- React 19, MDX 3
- 搜索: `docusaurus-theme-search-typesense` + Typesense DocSearch scraper
- AI 集成: `@coze/api`, `jsonwebtoken`(Coze 聊天会话签名)
- 数据/交互: `papaparse`(解析 OSS CSV), `resend`(邮件), `typesense`(搜索客户端)
- 统计: footer 注入 `busuanzi.min.js`

## 三. 目录结构

```
.
├── docs/                          # 英文文档源(结构与排序的事实来源)
│   ├── *_category_.json           # 每个分类的 label / position / link / collapsed
│   ├── home.mdx                   # Wiki 首页, 仅挂载 WikiHome 组件
│   └── 4_0_Resources.mdx          # 资源页, 挂载 DownloadCenter
├── i18n/zh-Hans/
│   ├── docusaurus-plugin-content-docs/
│   │   ├── current/               # 中文文档镜像, 结构与 docs/ 同构
│   │   ├── sidebars.js            # 生成产物, 勿手改
│   │   └── code.json              # i18n 翻译键
│   └── docusaurus-theme-classic/  # 主题文案翻译
├── src/
│   ├── components/
│   │   ├── WikiHome/              # 首页内容, PAGE_CONTENT 同时维护 en / zh-Hans
│   │   ├── DownloadCenter.js      # 资源页主组件, OSS CSV + lead API + SN 内参
│   │   ├── AIHomePanel/           # Wiki AI 聊天面板, 调 Coze
│   │   └── HomepageFeatures/      # 备用 feature 卡组件
│   ├── pages/
│   │   ├── index.js               # 根路径按 locale 重定向
│   │   └── ai-home.js             # Wiki AI 着陆页
│   ├── theme/
│   │   └── DocSidebarItem/Category/  # swizzle 自定义 linked category 行为
│   └── css/custom.css             # 站点样式, 品牌色, 导航图标
├── static/                        # 静态资产(img/, CNAME, .nojekyll)
├── api/                           # Vercel 风格 serverless 函数
│   ├── lead.js                    # 下载登记: 写飞书多维表 + Resend 邮件
│   └── coze.js                    # 签发 Coze 会话 JWT
├── scripts/
│   ├── translate-sync.js          # 中文翻译同步, 调 OpenAI GPT-4o
│   └── cache/file_hashes.json     # 翻译同步源文件哈希缓存
├── .github/workflows/deploy.yml   # GitHub Pages 部署
├── generate-sidebar.js            # 侧边栏生成主程序, 输出两份 sidebars.js
├── docusaurus.config.js           # 站点, 导航, i18n, 主题配置
├── sidebars.js                    # 英文侧边栏(生成产物)
├── typesense-scraper-config.json  # 搜索索引爬虫配置
├── .env.docsearch                 # Typesense scraper 凭据
└── package.json
```

## 四. 关键模块职责

| 模块 | 职责 |
| --- | --- |
| `docusaurus.config.js` | 站点元信息, navbar(Wiki AI / Product Resources / GitHub / 语言切换), footer, i18n, Prism 主题 |
| `generate-sidebar.js` | 递归扫描 `docs/`, 根据 `_category_.json` 的 `position` / `link` / `collapsed` 和文档 frontmatter 的 `sidebar_position` 构建侧边栏; 合并中文 `_category_.json` 翻译标签; 分别写出英文和中文 `sidebars.js` |
| `scripts/translate-sync.js` | 用文件哈希检测变更, 分批(默认 5 个/批)调用 OpenAI GPT-4o 翻译 `.md` / `.mdx` / `_category_.json`, 写入 `i18n/zh-Hans/.../current/`, 末尾调用 `generate-sidebar.js` |
| `src/pages/index.js` | 根路径按当前 locale 客户端重定向到对应文档首页 |
| `src/components/WikiHome/index.js` | 首页内容唯一源, `PAGE_CONTENT.en` / `PAGE_CONTENT['zh-Hans']` 分别保存两套文案, CTA 和产品卡片入口 |
| `src/components/DownloadCenter.js` | 资源页: 从 Aliyun OSS CSV 取产品清单, 登记打 lead API, 按 SN 取相机内参 |
| `src/theme/DocSidebarItem/Category/index.js` | 自定义 linked category 行为, 点击文字进入入口文档, 独立 caret 控制折叠 |
| `api/lead.js` | 下载登记后端, 飞书多维表写入 + Resend 邮件通知 |
| `api/coze.js` | 发放 Coze 聊天会话 JWT, 依赖 `COZE_CLIENT_ID` / `COZE_KEY_ID` / `COZE_PRIVATE_KEY` |

## 五. 常用命令

```powershell
# 开发预览(默认英文站点)
yarn start

# 构建静态站点(同时产出英文和中文)
yarn build

# 构建后预览(验证 en / zh-Hans 上线效果)
yarn serve

# 部署到 GitHub Pages(CI 自动执行, 一般不本地跑)
yarn deploy

# 重新生成英文和中文侧边栏
node generate-sidebar.js

# 只看中文需要同步的源文件, 不写盘
node scripts/translate-sync.js --dry-run

# 真正同步翻译(写中文文件 + 调 OpenAI, 需要 OPENAI_API_KEY)
node scripts/translate-sync.js

# 语法体检
node --check generate-sidebar.js
node --check scripts/translate-sync.js
node --check src/pages/index.js

# 搜索索引爬虫(容器, 需要 .env.docsearch)
yarn typesense-docsearch-scraper
```

无 `*.test.*` / `*.spec.*` 文件, 也没有 lint/typecheck 脚本. 主要验证手段是 `yarn build` + `yarn serve` + 浏览器交互检查.

## 六. 开发约定

### 内容与结构

- **英文 `docs/` 是事实来源**: 新增, 改名, 调序优先在英文目录完成; 中文 `i18n/zh-Hans/.../current/` 跟随同构
- **不要手改生成产物**: 两份 `sidebars.js` 都是 `generate-sidebar.js` 的输出; 持久修复落在 `_category_.json`, frontmatter(`sidebar_position`), `generate-sidebar.js` 或 `scripts/translate-sync.js`
- **侧边栏排序**以 `_category_.json` 的 `position` 和文档 frontmatter 的 `sidebar_position` 为准
- **Linked category** 必须同时保留 `link.id` 和合理的 `items` 去重; 不要为了"修复"入口文档消失而删掉 `link`
- **首页改动**必须同时维护 `WikiHome` 的 `PAGE_CONTENT.en` 与 `PAGE_CONTENT['zh-Hans']` 两套内容

### 路由与链接

- 中文内部链接使用 `/zh-Hans/docs/...`, **不要写 `.md` 后缀**; 硬编码 `/docs/...` 会跳回英文站点
- 导航项 `Wiki AI` / `Product Resources` 使用 `^/(zh-Hans/)?...` 形式的 `activeBaseRegex`, 修改 navbar 时保留中英文路径激活行为

### Windows 环境

- 推荐使用 `npm.cmd` / `yarn.cmd` / `.\node_modules\.bin\docusaurus.cmd`, 避免 PowerShell 执行策略阻断 `.ps1`
- 读取或写入中文文件显式使用 UTF-8, PowerShell 默认编码会乱码
- 搜索代码/文件优先使用 ripgrep 或 Grep 工具, 不要 `find`

### 验证流程

- `yarn start` 只能看英文开发站点, **无法完整代表双语上线效果**; 上线前必须 `yarn build` + `yarn serve` 检查 `/docs/...` 与 `/zh-Hans/docs/...`
- 涉及首页, 导航, 资源页, CSS 图标的改动, 必须补浏览器/DOM 可见性检查, 构建成功不等于功能正常
- 资源页(`DownloadCenter`)依赖外部服务: OSS CSV, lead API, SN intrinsic 文件, `localStorage`; 构建通过不证明这些链路可用

### 提交前清单

1. `git status --short` 仅含预期文件
2. `node --check generate-sidebar.js`
3. `node --check scripts/translate-sync.js`
4. 改了路由/首页: `node --check src/pages/index.js`
5. `node scripts/translate-sync.js --dry-run` 看中文差异
6. `yarn build` 全量构建通过

## 七. 环境变量

| 名称 | 用途 | 用在 |
| --- | --- | --- |
| `OPENAI_API_KEY` | 调用 GPT-4o 翻译中文 | `scripts/translate-sync.js` |
| `COZE_CLIENT_ID` / `COZE_KEY_ID` / `COZE_PRIVATE_KEY` | 生成 Coze 会话 JWT | `api/coze.js` |
| 飞书多维表 + Resend 凭据 | 下载登记后端 | `api/lead.js` |
| `TYPESENSE_API_KEY` / `TYPESENSE_HOST` / `TYPESENSE_PORT` / `TYPESENSE_PROTOCOL` | 搜索 scraper 索引 | `.env.docsearch`(仅 scraper 容器使用) |
| GitHub Actions `GH_PAGES_DEPLOY` | 部署 SSH key | `.github/workflows/deploy.yml` |

`.env.local`, `.env.development.local` 等已被 `.gitignore` 忽略, **不要把真实密钥提交进 Git**.

## 八. 外部依赖速查

- Aliyun OSS 产品清单: `https://sgword-service.oss-cn-heyuan.aliyuncs.com/configs/models.csv`
- Aliyun OSS SN 内参: `https://sgword-service.oss-cn-heyuan.aliyuncs.com/intrinsics/<SN>.txt`
- Lead API: `https://ai-api.sensing-world.com/api/lead`
- 浏览器 `localStorage` 键: `sensing_registered_user`
- 不蒜子统计: `//cdn.busuanzi.cc/busuanzi/3.6.9/busuanzi.min.js`
