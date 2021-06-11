/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Natico',
  tagline: 'Natico the all in one discordeno framework',
  url: 'https://naticoo.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'naticoo', // Usually your GitHub org/user name.
  projectName: 'naticoo.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Natico',
      logo: {
        alt: 'Natico Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Tutorial',
        },

        {
          href: 'https://github.com/naticoo/framework',
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
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [

            {
              label: 'Discord',
              href: 'https://discord.gg/KkMKCchJb8',
            },

          ],
        },
        {
          title: 'More',
          items: [

            {
              label: 'GitHub',
              href: 'https://github.com/naticoo/framework',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Natico, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/naticoo/naticoo.github.io/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
