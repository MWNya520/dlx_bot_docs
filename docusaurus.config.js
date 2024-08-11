// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '迪拉熊 BOT',
  tagline: '迪拉熊 BOT 的使用文档',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://dlx.miaowing.top',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Miaowing Group', // Usually your GitHub org/user name.
  projectName: '迪拉熊 BOT', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          /*// Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',*/
        }, 
        blog: {
          showReadingTime: true,
          /*// Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',*/
        },
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
        title: '迪拉熊 BOT',
        logo: {
          alt: '迪拉熊 BOT Logo',
          src: './img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '文档',
          },
          /*{to: '/blog', label: '动态', position: 'left'},*/
          /*{
            href: 'https://github.com/shengwang52005',
            label: 'GitHub',
            position: 'right',
          },*/
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '从头看起',
                to: '/docs/概述',
              },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: '迪拉熊 BOT 纯享群 ①：836811770',
                href: 'https://qm.qq.com/q/HjQC8rcjg4',
              },
            ],
          },
          {
            title: '更多',
            items: [
              /*{
                label: '博客',
                to: '/blog',
              },*/
              /*{
                label: 'GitHub',
                href: 'https://github.com/shengwang52005',
              },*/
              {
                label: '状态',
                href: 'https://status.miaowing.top/status/dlxbot',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 迪拉熊 BOT. 文档使用 Docusaurus 构建. 本项目与 SEGA WAHLAP 无任何关联.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
