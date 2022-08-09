module.exports = {
  siteMetadata: {
    title: `curriculum-vitae`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", `gatsby-plugin-fontawesome-css`,
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