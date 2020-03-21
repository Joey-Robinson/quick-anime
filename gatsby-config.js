module.exports = {
  siteMetadata: {
    title: "Quick Anime",
    description: `
      Find the anime you're looking for, quickly and easily. 
    `,
    // siteUrl: '',
    // image: '',
    author: {
      name: "Joey Robinson",
      minibio: `
      <strong>Joey Robinson</strong> is an avid manga and anime fan.
      He has been consuming both mediums for 25 years and wants to use
      his skills in the development world to bring the joy of both
      manga and anime to more people.
    `,
    },
    organization: {
      name: "us Weebs united",
      url: "twitter.com/joeyrobinsondev",
      // logo: "",
    },
    social: {
      twitter: "@joeyrobinsondev",
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog images`,
        path: `${__dirname}/content/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        tableOfContents: {
          heading: null,
          maxDepth: 6,
        },
      },
    },
    "gatsby-transformer-json",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Quick Anime`,
        short_name: `@joeyrobinsondev`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
  ],
}
