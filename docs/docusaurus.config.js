import {themes as prismThemes} from 'prism-react-renderer';

module.exports = {
  title: 'AgentMark',
  tagline: 'The declarative, extensible, and composable approach for developing LLM prompts using Markdown and JSX.',
  url: 'https://puzzlet-ai.github.io/',
  baseUrl: '/agentmark/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'puzzlet-ai',
  projectName: 'agentmark',
  scripts: [
    {
      src: 'https://plausible.io/js/script.outbound-links.js',
      async: true,
      defer: true,
      'data-domain': 'puzzlet-ai.github.io/agentmark',
      'data-spa': 'auto',
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/puzzlet-ai/agentmark-docs/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
    },
    navbar: {
      title: 'AgentMark',
      logo: {
        alt: 'AgentMark Logo',
        src: 'https://www.puzzlet.ai/images/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'right',
          label: 'Docs',
        },
        {
          label: 'Discord',
          to: 'https://discord.gg/P2NeMDtXar',
          position: 'right'
        },
        {
          to: 'https://github.com/puzzlet-ai/agentmark',
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
              label: 'Getting Started',
              to: '/docs/getting-started',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/puzzlet-ai/agentmark',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/P2NeMDtXar',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Puzzlet.ai`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['jsx', 'bash'],
    },
  },
};