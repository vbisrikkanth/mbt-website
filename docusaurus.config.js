/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: 'MBT Bundle',
  tagline: 'An open source model-based testing tool',
  url: 'https://mbtbundle.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'mbtbundle', // Usually your GitHub org/user name.
  projectName: 'mbtbundle.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'MBT Bundle',
      logo: {
        alt: 'MBT Bundle Logo',
        src: 'img/logo.svg',
      },
      links: [
        {to: 'docs/intro/mbt', label: 'Docs', position: 'left'},
        {to: 'blog', label: 'Blog', position: 'left'},
        {to: 'showcase', label: 'Showcase', position: 'left'},
        {to: 'docs/tutorial', label: 'Tutorial', position: 'left'},
        {
          href: 'https://github.com/tienvx/mbt-bundle',
          label: 'GitHub',
          position: 'right',
        },
        {to: 'screenshots', label: 'Screenshots', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Docs',
              to: 'docs/intro/mbt',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Slack',
              href: 'https://mbt-bundle.slack.com/',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
          ],
        },
      ],
      /*logo: {
        alt: 'Docusaurus Logo',
        src: 'img/docusaurus-logo.svg',
      },*/
      copyright: `Copyright © ${new Date().getFullYear()} Tien Vo. Built with Docusaurus.`,
    },
    googleAnalytics: {
      trackingID: 'UA-40149047-4',
    },
    algolia: {
      apiKey: '562cb171575211627118ad5ffda03139',
      indexName: 'mbtbundle',
      algoliaOptions: {}, // Optional, if provided by Algolia
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
