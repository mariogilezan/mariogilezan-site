require("dotenv").config()

module.exports = {
  flags: {
    DEV_SSR: false,
  },
  siteMetadata: {
    title: `Mario Gilezan`,
    description: `Portfolio website for Mario Gilezan, front-end developer based in Serbia`,
    keywords: [
      "mario gilezan",
      "web development",
      "frontend",
      "react",
      "gatsby",
      "web developer",
      "frontend developer",
      "react developer",
      "vrsac",
      "vršac",
    ],
    siteUrl: `https://mariogilezan.com/`,
    menuLinks: [
      {
        name: `Home`,
        slug: `/`,
      },
      {
        name: `About`,
        slug: `/about/`,
      },
      {
        name: `Projects`,
        slug: `/projects/`,
      },
      {
        name: `Contact`,
        slug: `/contact/`,
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
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        token: process.env.SANITY_TOKEN,
        watchMode: process.env.NODE_ENV === "development",
      },
    },
  ],
}
