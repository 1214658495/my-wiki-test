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

// 1. 专门只放外部 JS 文件的 src 链接
  scripts:[
    {
      src: '//cdn.busuanzi.cc/busuanzi/3.6.9/busuanzi.min.js',
      defer: true,
    },
    {
      src: 'https://lf-cdn.coze.cn/obj/unpkg/flow-platform/chat-app-sdk/1.2.0-beta.19/libs/cn/index.js',
      async: true,
    },
  ],

  // 2. 将所有的初始化逻辑放入 headTags
  headTags:[
    {
      tagName: 'script',
      attributes: { type: 'text/javascript' },
      innerHTML: `
        async function fetchCozeToken() {
          try {
            const response = await fetch('https://ai-api.sensing-world.com/api/coze'); 
            const data = await response.json();
            return data.success ? data.token : null;
          } catch (error) {
            console.error("Token fetch failed:", error);
            return null;
          }
        }

        window.addEventListener('load', async function() {
          const initCoze = setInterval(async function() {
            if (window.CozeWebSDK) {
              clearInterval(initCoze);
              
              const initialToken = await fetchCozeToken();
              if (!initialToken) {
                console.error("Token 获取失败，机器人终止加载。");
                return;
              }

              // 🚨 终极隔离魔法：每次刷新网页都强制生成全新 ID，坚决不读本地缓存！
              // 这能 100% 避开那 8 条带毒的历史记录，给你一个崭新的聊天框！
              const visitorId = 'guest_' + Date.now() + '_' + Math.floor(Math.random() * 10000);

              new CozeWebSDK.WebChatClient({
                config: {
                  bot_id: '7610354374371622946',
                  // 🚨 必须将 ID 强制塞入 config 对象中，打破全局共享！
                  user: visitorId 
                },
                ui: { 
                  chatBot: { width: 800 } 
                },
                componentProps: {
                  title: 'SENSING WIKI AI',
                  icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3ClinearGradient id='senBg' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%2300D2C1'/%3E%3Cstop offset='100%25' stop-color='%23007066'/%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx='50' cy='50' r='50' fill='url(%23senBg)'/%3E%3Cpath d='M45 20 Q 45 55 80 55 Q 45 55 45 90 Q 45 55 10 55 Q 45 55 45 20 Z' fill='%23ffffff'/%3E%3Cpath d='M75 10 Q 75 25 90 25 Q 75 25 75 40 Q 75 25 60 25 Q 75 25 75 10 Z' fill='%23ffffff'/%3E%3C/svg%3E",
                  lang: 'en'
                },
                auth: {
                  type: 'token', 
                  token: initialToken,
                  onRefreshToken: async function () {
                    return await fetchCozeToken();
                  }
                }
              });
            }
          }, 100);
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
            to: '/docs/1_0_Camera',
            activeBaseRegex: '^/docs/(?!4_0_Resources)',
            position: 'left',
            label: 'Quick Start',
            className: 'nav-btn',
          },
          {
            label: 'Downloads',
            position: 'left',
            to: '/docs/4_0_Resources',
            className: 'nav-btn',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/SENSING-Technology',
            label: 'GitHub',
            position: 'right',
            className: 'nav-btn',
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
