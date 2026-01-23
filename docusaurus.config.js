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



  scripts: [
    {
      src: '//cdn.busuanzi.cc/busuanzi/3.6.9/busuanzi.min.js',
      defer: true,
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
