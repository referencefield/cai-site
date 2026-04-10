// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Compliance as Infrastructure',
  tagline: 'Compliance as Infrastructure',
  favicon: 'img/favicon.svg',

  future: {
    v4: true,
  },

  url: 'https://cai.referencefield.com',
  baseUrl: '/',
  trailingSlash: true,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          filename: 'sitemap.xml',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/og-image.png',
    metadata: [
      {name: 'description', content: 'Compliance as Infrastructure is a reference corpus on governance that binds at execution.'},

      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: 'Compliance as Infrastructure'},
      {name: 'twitter:description', content: 'A reference corpus on governance that binds at execution.'},
      {name: 'twitter:image', content: 'https://cai.referencefield.com/img/og-image.png'},

      {property: 'og:title', content: 'Compliance as Infrastructure'},
      {property: 'og:description', content: 'A reference corpus on governance that binds at execution.'},
      {property: 'og:type', content: 'website'},
      {property: 'og:url', content: 'https://cai.referencefield.com/'},
      {property: 'og:image', content: 'https://cai.referencefield.com/img/og-image.png'},
    ],

    navbar: {
      title: 'Compliance as Infrastructure',
      logo: {
        alt: 'Reference Field, Inc.',
        src: 'img/logo.svg',
      },
      items: [],
    },

    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Reference Field, Inc. <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">Licensed under CC BY 4.0</a>.<br/>Compliance as Infrastructure (CAI) is a structural argument about governance architecture, not legal advice, regulatory guidance, or a compliance program. <a href="/practitioner-reliance-disclaimer/">Practitioner Reliance Disclaimer</a>.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },

  plugins: [
    function structuredDataPlugin() {
      return {
        name: 'structured-data-plugin',
        injectHtmlTags() {
          return {
            headTags: [
              {
                tagName: 'script',
                attributes: {
                  type: 'application/ld+json',
                },
                innerHTML: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "TechArticle",
                  "headline": "Compliance as Infrastructure",
                  "description": "Compliance as Infrastructure is a reference manuscript arguing that compliance must bind at execution, not be applied after systems run.",
                  "author": {
                    "@type": "Person",
                    "name": "Christopher Caruso"
                  },
                  "publisher": {
                    "@type": "Organization",
                    "name": "Reference Field, Inc."
                  },
                  "url": "https://cai.referencefield.com/"
                }),
              },
            ],
          };
        },
      };
    },
  ],
};

export default config;