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
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

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
            to: '/docs/ai',
            activeBaseRegex: '^/docs/(?!4_0_Resources)',
            position: 'left',
            label: 'Quick Start',
            className: 'nav-btn',
          },
          {
            label: 'Downloads',
            position: 'left',
            to: '/docs/4_0_Resources',
            activeBaseRegex: '^/docs/4_0_Resources',
            className: 'nav-btn',
          },
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
            ],
          },
          {
            title: 'More',
            items: [
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
    }),
};

export default config;
