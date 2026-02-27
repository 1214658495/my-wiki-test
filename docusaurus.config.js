// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SENSING WIKI',
  tagline: 'Provide High-Quality Images for AI',
  favicon: 'img/SENSING_logo_icon2.png',

  // Set the production url of your site here
  url: 'https://1214658495.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: '1214658495', // Usually your GitHub org/user name.
  projectName: 'my-wiki-test', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },



  scripts:[
    {
      src: '//cdn.busuanzi.cc/busuanzi/3.6.9/busuanzi.min.js',
      defer: true,
    },
    // 1. 新增：引入 Coze 的外部依赖脚本
    'https://lf-cdn.coze.cn/obj/unpkg/flow-platform/chat-app-sdk/1.2.0-beta.19/libs/cn/index.js',
  ],

  // 2. 新增：注入 Coze 的悬浮窗初始化代码
  headTags:[
    {
      tagName: 'script',
      attributes: {
        type: 'text/javascript',
      },
      innerHTML: `
        window.addEventListener('load', function() {
          // 第一步：尝试从浏览器存储里获取已有的 ID，如果没有就生成一个随机的
          let visitorId = localStorage.getItem('sensing_wiki_user_id');
          if (!visitorId) {
            visitorId = 'user_' + Math.random().toString(36).substring(2, 15);
            localStorage.setItem('sensing_wiki_user_id', visitorId);
          }
          new CozeWebSDK.WebChatClient({
            config: {
              bot_id: '7610354374371622946',
              // 第二步：必须在这里显式指定用户 ID
              user: {
                id: visitorId,
              },
            },
            componentProps: {
              title: 'SENSING WIKI AI', // 帮你改成了符合你网站的名字
              icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3ClinearGradient id='senBg' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%2300D2C1'/%3E%3Cstop offset='100%25' stop-color='%23007066'/%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx='50' cy='50' r='50' fill='url(%23senBg)'/%3E%3Cpath d='M45 20 Q 45 55 80 55 Q 45 55 45 90 Q 45 55 10 55 Q 45 55 45 20 Z' fill='%23ffffff'/%3E%3Cpath d='M75 10 Q 75 25 90 25 Q 75 25 75 40 Q 75 25 60 25 Q 75 25 75 10 Z' fill='%23ffffff'/%3E%3C/svg%3E",
              lang: 'en', // 强制英文
            },
            auth: {
              type: 'token',
              token: 'pat_z9z1REwVc4J0t1a9tgK82rYVI50PgO0QqL3GDSR7iZcCH7qXhZgn5NkQF74NSy0h', // ⚠️ 这里一定要换成你的 PAT
              onRefreshToken: function () {
                return 'pat_z9z1REwVc4J0t1a9tgK82rYVI50PgO0QqL3GDSR7iZcCH7qXhZgn5NkQF74NSy0h'; // ⚠️ 这里也要换成你的 PAT
              }
            }
          });
        });
      `,
    },
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  // 临时注释掉Typesense配置以禁用搜索功能
  /*
  themes: [
    [
      require.resolve("docusaurus-theme-search-typesense"),
      {
        // Typesense configuration
        typesense: {
          typesenseCollectionName: 'sensing-wiki', // Replace with your collection name
          
          // Required: Typesense server configuration
          typesenseServerConfig: {
            nodes: [
              {
                host: 'YOUR_TYPESENSE_HOST',
                port: 443,
                protocol: 'https',
              },
            ],
            apiKey: 'YOUR_TYPESENSE_SEARCH_API_KEY',
          },
          
          // Optional: Search parameters
          typesenseSearchParameters: {
            limit: 20,
            use_cache: true,
            cache_ttl: 3600,
          },
          
          // Optional: Customization parameters
          contextualSearch: true,
          searchPagePath: 'search',
          // Optional
          // debug: true,
        },
      },
    ],
  ],
  */

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'WIKI',
        logo: {
          alt: 'My Site Logo',
          src: 'img/SENSING_logo_en2.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Quick Start',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/SENSING-Technology',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/1_0_Camera',
              },
            ],
          },
          {
            title: 'Company',
            items: [
              {
                label: 'SENSING',
                href: 'https://sensing-world.com/en/',
              },
              // {
              //   label: 'Discord',
              //   href: 'https://discordapp.com/invite/docusaurus',
              // },
              // {
              //   label: 'X',
              //   href: 'https://x.com/docusaurus',
              // },
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/SENSING-Technology',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SZ SENSING TECH CO.,LTD.<br/>
        Total Views: <span id="busuanzi_site_pv">...</span>
        <span style="margin: 0 10px;">|</span>
        Total Visitors: <span id="busuanzi_site_uv">...</span>
        <span style="margin: 0 10px;">|</span>
        Today Views: <span id="busuanzi_today_pv">...</span>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      // 临时注释掉Typesense配置以禁用搜索功能
      /*
      // Add typesense configuration in themeConfig
      typesense: {
        // The typesense-search-client configuration
        typesenseCollectionName: 'sensing-wiki',
        
        // Required: Typesense server configuration
        typesenseServerConfig: {
          nodes: [
            {
              host: 'YOUR_TYPESENSE_HOST',
              port: 443,
              protocol: 'https',
            },
          ],
          apiKey: 'YOUR_TYPESENSE_SEARCH_API_KEY',
        },
        
        // Optional: Search parameters
        typesenseSearchParameters: {
          limit: 20,
          use_cache: true,
          cache_ttl: 3600,
        },
        
        // Optional: Customization parameters
        contextualSearch: true,
        searchPagePath: 'search',
      },
      */
    }),
};

export default config;
