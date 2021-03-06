module.exports = {
  pathPrefix: "/react-hour-heatmap",
  siteMetadata: {
    title: `React-Heatmap Documentation`,
    name: `Nick Romano`,
    siteUrl: `https://nick-romano.github.io/react-hour-heatmap/`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    social: [
      {
        name: `github`,
        url: `https://github.com/nick-romano/react-hour-heatmap`
      },
      {
        name: `twitter`,
        url: `https://github.com/nick-romano/react-hour-heatmap`
      }
    ],
    sidebarConfig: {
      forcedNavOrder: ["/props", "/simple-demo"],
      ignoreIndex: true
    }
  },
  plugins: [{ resolve: `gatsby-theme-document` }]
};
