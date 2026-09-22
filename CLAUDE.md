# CLAUDE.md

本文件为 Claude Code 在本仓库中的长期参考, 记录技术栈, 目录结构, 关键模块, 常用命令, 开发约定和已知坑. 内容写在 Git 中以便团队共享.

> 本文件已合并 `AGENTS.md`(Codex 时期的接手指南, 被 `.gitignore` 忽略, 不进 Git) 的关键经验, 并按代码实际状态做了修正. 两份文件如有冲突, **以本文件为准**.

## 一. 项目概况

- 类型: Docusaurus 3.7 静态文档站, 中英文双语
- 站点名: `SENSING WIKI`, tagline `Provide High-Quality Images for AI`
- 站点配置: `url: https://1214658495.github.io`, `baseUrl: '/'`, `trailingSlash: false`
- 自定义域名: `wiki.sensing-world.com`
  - ⚠️ `CNAME` 文件在**仓库根目录**, 不在 `static/`, 因此**不会被 `yarn build` 复制进 `build/`**. 线上域名实际由 GitHub Pages 仓库设置承载. 如果哪天域名掉了, 先查 Settings → Pages 的 Custom domain, 不要只看根目录 CNAME
- 部署: GitHub Actions, push 到 `main` 触发 `.github/workflows/deploy.yml`
  - 当前使用官方 Pages 流程: `actions/upload-pages-artifact@v3` + `actions/deploy-pages@v4`, Node 20
  - ⚠️ 文件顶部那段 `yarn deploy` + `GH_PAGES_DEPLOY` SSH key 的 workflow **已整段注释掉**, 是历史方案. 不要再按它排查部署问题
- 语言: 默认 `en`, 本地化 `zh-Hans`; 中文路径前缀 `/zh-Hans/`
- 运行要求: Node `>=18.0`(CI 用 20), 使用 `yarn`(仓库带 `yarn.lock`)
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
│   ├── *_category_.json           # 每个分类的 label / position / link / collapsed / customProps
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
│   └── css/custom.css             # 站点样式, 品牌色, 导航图标(nav-icon-*)
├── static/                        # 静态资产(img/, .nojekyll) —— 注意: 这里没有 CNAME
├── CNAME                          # 根目录, 不进 build/, 见"项目概况"
├── api/                           # Vercel 风格 serverless 函数
│   ├── lead.js                    # 下载登记: 写飞书多维表 + Resend 邮件
│   └── coze.js                    # 签发 Coze 会话 JWT
├── scripts/
│   ├── translate-sync.js          # 中文翻译同步, 调 OpenAI GPT-4o
│   ├── product-visibility.cjs     # 产品下架: 扫描 hidden 分类, 产出 docs exclude 模式
│   └── cache/file_hashes.json     # 翻译同步源文件哈希缓存
├── .github/workflows/deploy.yml   # GitHub Pages 部署
├── generate-sidebar.js            # 侧边栏生成主程序, 输出两份 sidebars.js
├── docusaurus.config.js           # 站点, 导航, i18n, 主题配置
├── sidebars.js                    # 英文侧边栏(生成产物)
├── typesense-scraper-config.json  # 搜索索引爬虫配置
├── .env.docsearch                 # Typesense scraper 凭据
├── AGENTS.md                      # 本机 Codex 接手笔记, 已被 .gitignore 忽略, 不进 Git
└── package.json
```

## 四. 关键模块职责

| 模块 | 职责 |
| --- | --- |
| `docusaurus.config.js` | 站点元信息, navbar(Wiki AI / Product Resources / GitHub / 语言切换), footer, i18n, Prism 主题; 顶部 import `scripts/product-visibility.cjs`, 在 `presets.docs.exclude` 注入隐藏产品目录 |
| `generate-sidebar.js` | 递归扫描 `docs/`, 根据 `_category_.json` 的 `position` / `link` / `collapsed` / `customProps.hidden` 和文档 frontmatter 的 `sidebar_position` 构建侧边栏; 合并中文 `_category_.json` 翻译标签; 分别写出英文和中文 `sidebars.js` |
| `scripts/product-visibility.cjs` | 递归扫描 `docs/`, 收集 `customProps.hidden === true` 的分类目录, 导出 `getHiddenProductDirectories()` 和 `getHiddenDocExcludePatterns()`; 被 `docusaurus.config.js` 消费 |
| `scripts/translate-sync.js` | 用文件哈希检测变更, 分批(默认 5 个/批)调用 OpenAI GPT-4o 翻译 `.md` / `.mdx` / `_category_.json`, 写入 `i18n/zh-Hans/.../current/`, 末尾调用 `generate-sidebar.js` |
| `src/pages/index.js` | 根路径按当前 locale 客户端重定向到对应文档首页(`/docs/home` 或 `/zh-Hans/docs/home`) |
| `src/components/WikiHome/index.js` | 首页内容唯一源, `PAGE_CONTENT.en` / `PAGE_CONTENT['zh-Hans']` 分别保存两套文案, CTA 和产品卡片入口 |
| `src/components/DownloadCenter.js` | 资源页: 从 Aliyun OSS CSV 取产品清单, 登记打 lead API, 按 SN 取相机内参 |
| `src/theme/DocSidebarItem/Category/index.js` | 自定义 linked category 行为, 点击文字进入入口文档, 独立 caret 控制折叠 |
| `api/lead.js` | 下载登记后端, 飞书多维表写入 + Resend 邮件通知 |
| `api/coze.js` | 发放 Coze 聊天会话 JWT, 依赖 `COZE_CLIENT_ID` / `COZE_KEY_ID` / `COZE_PRIVATE_KEY` |

## 五. 常用命令

```powershell
# 开发预览(默认英文站点)
yarn start
# Windows 下遇到执行策略问题改用:
npm.cmd run start -- --host 127.0.0.1 --port 3000

# 构建静态站点(同时产出英文和中文)
yarn build

# 构建后预览(验证 en / zh-Hans 上线效果)
yarn serve

# 重新生成英文和中文侧边栏
node generate-sidebar.js

# 查看当前被下架(hidden)的产品目录
node -e "console.log(require('./scripts/product-visibility.cjs').getHiddenProductDirectories())"

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

⚠️ `node scripts/translate-sync.js`(不带 `--dry-run`) 会**真实写入中文翻译文件并消耗 OpenAI 额度**. 除非用户明确要求同步翻译, 一律只跑 `--dry-run`.

## 六. 开发约定

### 内容与结构

- **英文 `docs/` 是事实来源**: 新增, 改名, 调序优先在英文目录完成; 中文 `i18n/zh-Hans/.../current/` 跟随同构
- **不要手改生成产物**: 两份 `sidebars.js` 都是 `generate-sidebar.js` 的输出; 持久修复落在 `_category_.json`, frontmatter(`sidebar_position`), `generate-sidebar.js` 或 `scripts/translate-sync.js`
- **改生成逻辑要成对改**: `generate-sidebar.js` 和 `scripts/translate-sync.js` 的行为必须保持一致, 否则下一次翻译同步会覆盖掉之前的侧边栏修复
- **侧边栏排序**以 `_category_.json` 的 `position` 和文档 frontmatter 的 `sidebar_position` 为准
- **Linked category** 必须同时保留 `link.id` 和合理的 `items` 去重; 不要为了"修复"入口文档消失而删掉 `link`
- **首页改动**必须同时维护 `WikiHome` 的 `PAGE_CONTENT.en` 与 `PAGE_CONTENT['zh-Hans']` 两套内容
- 若将来接入飞书 FAQ 同步, 保持 "飞书为协作源, Markdown 为发布产物" 模式, 并在生成文件顶部加显式自动生成标记

### 首页与路由

- `/` 不渲染内容, 由 `src/pages/index.js` 按 locale 重定向: 英文 `/docs/home`, 中文 `/zh-Hans/docs/home`
- `docs/home.mdx` 及其中文镜像只负责挂载 `WikiHome`; 真正内容在组件里
- 首页稳定入口: `/docs/6_0_Robotics`, `/docs/1_0_Camera`, `/docs/intro`, `/docs/3_0_Data_collection_and_Playback`, `/docs/5_0_Vision_Core_SDK`, `/docs/4_0_Resources`, `/docs/ai`
- 首页链接统一走组件内的 locale-aware helper 处理中文前缀, **不要在中文分支手写一套独立路由**
- 中文内部链接使用 `/zh-Hans/docs/...`, **不要写 `.md` 后缀**; 硬编码 `/docs/...` 会跳回英文站点
- 导航项 `Wiki AI` / `Product Resources` 使用 `^/(zh-Hans/)?...` 形式的 `activeBaseRegex`, 修改 navbar 时保留中英文路径激活行为

### Product Resources 资源页

- 导航项名称已统一为 `Product Resources`(不是旧的 `Downloads`), 文案 / 侧边栏 / 中文翻译要一致
- 导航图标由 `src/css/custom.css` 的 `nav-icon-*` 类控制, 用 CSS mask + `currentColor`, 以保证 hover / active / 深色模式颜色一致. 改图标不要换成固定色 `background-image`
- 资源页依赖外部服务: OSS CSV, lead API, SN intrinsic 文件, `localStorage`
- ⚠️ `yarn build` 只能证明页面可构建, **不能证明 OSS / lead API / 下载 / 跨域链路可用**. 资源页改动必须补浏览器交互验证

### 产品临时下架

- 整个产品临时下架: **只**在**英文**产品目录的 `_category_.json` 加 `"customProps": {"hidden": true}`. 英文配置是中英文站点共同的可见性事实来源
- 生效链路: `scripts/product-visibility.cjs` 扫描 → `docusaurus.config.js` 的 `docs.exclude` 排除 → `generate-sidebar.js` 跳过该分类
- 下架后该目录不进中英文侧边栏, 也不进生产构建, 原 URL 返回 404
- **不要删除**英文文档, 中文翻译或图片资源
- 自然语言里的入口不会自动消失: 下架时用 `rg` 搜产品名, 手工清理总览页, 首页卡片, 导航和其他文档里的链接, 否则构建会报 broken link
- 恢复: 删掉 `hidden` 或设为 `false` → `node generate-sidebar.js` → 翻译 dry-run → 完整构建
- 当前已下架: `5_1_sDepth`

### Robotics 文档

- Robotics 入口覆盖 Astra S56x 系列 / S36, 单目机器人相机, NRDCK, Jetson AGX Thor 机器人视觉方案, 人形机器人视觉方案
- **S56 命名坑**: `S56x` 是**系列名**, 系列下有两个型号 —— `S56`(130° HFOV, legacy, 正在淘汰) 和 `S56C`(140° HFOV, 新项目推荐). 写文档时不要把 S56x 当成单个型号
- 路由文件仍是 `docs/6_1_Camera/Binocular_Camera/S56.md`(title 为 `Astra S56x Series Stereo Camera`). **不要**因为显示名是 S56x/S56C 就重命名这个文件, 会断链
- 双目目录: `S36.md`, `S56.md`
- 单目目录 `docs/6_1_Camera/Monocular_Camera/`: `M3A.md`, `SHF3L.md`, `SHW3G_SHF3G.md`, `SHW3H.md`, `SHW5G_SHF5G.md`
- 中英文单目目录必须同构; 改英文目录时同步检查 `i18n/zh-Hans/docusaurus-plugin-content-docs/current/6_1_Camera/Monocular_Camera/`
- Robotics 改动常同时牵涉 overview / 产品页 / 方案页 / 侧边栏. 改完至少检查中英文的 `6_0_Robotics`, `6_1_Camera`, `6_2_Vision_Solution`

### Windows 环境

- 推荐使用 `npm.cmd` / `yarn.cmd` / `.\node_modules\.bin\docusaurus.cmd`, 避免 PowerShell 执行策略阻断 `.ps1`
- 读取或写入中文文件显式使用 UTF-8, PowerShell 默认编码会乱码
- 搜索代码/文件优先使用 ripgrep 或 Grep 工具, 不要 `find`

### 验证流程

- `yarn start` 只能看英文开发站点, **无法完整代表双语上线效果**; 上线前必须 `yarn build` + `yarn serve` 检查 `/docs/...` 与 `/zh-Hans/docs/...`
- 涉及首页, 导航, 资源页, CSS 图标的改动, 必须补浏览器/DOM 可见性检查, 构建成功不等于功能正常; 只看 HTTP 200 不算验证
- 构建失败时优先排查顺序: Docusaurus broken link → MDX 语法 → 中文链接是否漏了 `/zh-Hans` 前缀 → 侧边栏生成结果 → 是否引用了已 hidden 的产品目录

### 提交前清单

1. `git status --short` 仅含预期文件
2. `node --check generate-sidebar.js`
3. `node --check scripts/translate-sync.js`
4. 改了路由/首页: `node --check src/pages/index.js`
5. `node scripts/translate-sync.js --dry-run` 看中文差异
6. `yarn build` 全量构建通过
7. 涉及多语言路由: `yarn serve` 检查 `/docs/...` 和 `/zh-Hans/docs/...`
8. 涉及首页/导航/资源页/CSS 图标: 补浏览器 DOM 可见性检查

## 七. 环境变量

| 名称 | 用途 | 用在 |
| --- | --- | --- |
| `OPENAI_API_KEY` | 调用 GPT-4o 翻译中文 | `scripts/translate-sync.js` |
| `COZE_CLIENT_ID` / `COZE_KEY_ID` / `COZE_PRIVATE_KEY` | 生成 Coze 会话 JWT | `api/coze.js` |
| 飞书多维表 + Resend 凭据 | 下载登记后端 | `api/lead.js` |
| `TYPESENSE_API_KEY` / `TYPESENSE_HOST` / `TYPESENSE_PORT` / `TYPESENSE_PROTOCOL` | 搜索 scraper 索引 | `.env.docsearch`(仅 scraper 容器使用) |

部署不再需要 `GH_PAGES_DEPLOY` SSH key —— 当前 workflow 走 GitHub Pages 官方 OIDC(`pages: write` + `id-token: write`), 旧的 SSH 方案在 `deploy.yml` 里已注释.

`.env.local`, `.env.development.local` 等已被 `.gitignore` 忽略, **不要把真实密钥提交进 Git**.

## 八. 外部依赖速查

- Aliyun OSS 产品清单: `https://sgword-service.oss-cn-heyuan.aliyuncs.com/configs/models.csv`
- Aliyun OSS SN 内参: `https://sgword-service.oss-cn-heyuan.aliyuncs.com/intrinsics/<SN>.txt`
- Lead API: `https://ai-api.sensing-world.com/api/lead`
- 浏览器 `localStorage` 键: `sensing_registered_user`
- 不蒜子统计: `//cdn.busuanzi.cc/busuanzi/3.6.9/busuanzi.min.js`

## 九. 已知非阻断构建警告

以下警告属于已知噪音, **不要误判为构建失败**, 但交付说明里应保留残余风险提示:

- `ws` 的可选依赖 `bufferutil` 缺失
- `ws` 的可选依赖 `utf-8-validate` 缺失
- Browserslist 数据过期(提示约 12 months old)
- Docusaurus update check 无法写入 `C:\Users\Lenovo\.config`

另: 中文翻译同步长期有存量差口, 历史快照(2026-06-16)为新增 66 / 更新 19 / 未变 95. 这是待办, 不是回归.

## 十. Agent 工作约定

- 动手前先 `git status --short`, 不要覆盖用户已有改动
- 搜索优先用 `rg` / `rg --files`, 不用 `find`
- 改任何文件前先判断它是**内容源**, **生成脚本**, **主题覆盖**还是**生成产物**; 改错层级的修复活不过下一次同步
- 中文文档改动注意 UTF-8 编码和 `/zh-Hans/` 链接形态
- 不要把 `--dry-run` 擅自改成真实同步
- 交付时如实说明: 哪些验证跑了, 哪些没跑, 残余风险是什么
