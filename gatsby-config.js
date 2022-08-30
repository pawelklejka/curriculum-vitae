

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `curriculum-vitae`,
    siteUrl: `https://www.yourdomain.tld`,
    languages: {
      langs: ['en', 'pl'],
      defaultLangKey: 'en'
    }
  },
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", 
  // {
  //   resolve: `gatsby-plugin-react-redux`,
  //   options: {
  //     // [required] - path to your createStore module
  //     pathToCreateStoreModule: './src/state/createStore',
  //     // [optional] - options passed to `serialize-javascript`
  //     // info: https://github.com/yahoo/serialize-javascript#options
  //     // will be merged with these defaults:
  //     serialize: {
  //       space: 0,
  //       // if `isJSON` is set to `false`, `eval` is used to deserialize redux state,
  //       // otherwise `JSON.parse` is used
  //       isJSON: true,
  //       unsafe: false,
  //       ignoreFunction: true,
  //     },
  //     // [optional] - if true will clean up after itself on the client, default:
  //     cleanupOnClient: true,
  //     // [optional] - name of key on `window` where serialized state will be stored, default:
  //     windowKey: '__PRELOADED_STATE__',
  //   }
  // },
  {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: `ijw420xqp37t`,
      accessToken: process.env.API_KEY,
    },
  },
  {
    resolve: 'gatsby-plugin-i18n',
    options: {
      langKeyForNull: 'any',
      langKeyDefault: {
        langs: ['en', 'pl'],
        defaultLangKey: 'en'
      },
      useLangKeyLayout: false,
      prefixDefault: false,
    }
  },
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/assets/images/icon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", 
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: './src/assets/images/',
    },
    __key: 'images',
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `styles`,
      path: `${__dirname}/src/assets/css`,
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'pages',
      path: './src/pages/',
    },
    __key: 'pages',
  },
  {
    resolve: 'gatsby-plugin-react-svg',
    options: {
      rule: {
        include: /svg/
      }
    }
  }

]
};