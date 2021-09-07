require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Mario Gilezan`,
    description: `Portfolio website for Mario Gilezan, front-end developer based in Serbia`,
    keywords: [
      "mario gilezan",
      "web developer",
      "front-end developer",
      "react developer",
      "gatsby",
      "sanity",
      "vršac",
    ],
    siteUrl: `http://localhost:8000/`,
    menuLinks: [
      {
        name: `Home`,
        href: `#home`,
      },
      {
        name: `About`,
        href: `#about`,
      },
      {
        name: `Projects`,
        href: `#projects`,
      },
      {
        name: `Contact`,
        href: `#contact`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mario Gilezan`,
        short_name: `MG`,
        start_url: `/`,
        background_color: `#FEFEFE`,
        theme_color: `#0081CF`,
        display: `standalone`,
        icon: `content/assets/page-icon.png`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        // token: process.env.SANITY_TOKEN,
        watchMode: process.env.NODE_ENV === "development",
      },
    },
  ],
}
