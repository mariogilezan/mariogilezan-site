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
        slug: `/`,
      },
      {
        name: `About`,
        slug: `/#about`,
      },
      {
        name: `Projects`,
        slug: `/#projects`,
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
        background_color: `#1E282D`,
        theme_color: `#00A4EA`,
        display: `standalone`,
        icon: `content/assets/page-icon.png`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100,
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
