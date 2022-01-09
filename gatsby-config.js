module.exports = {
  siteMetadata: {
    title: `收集优质资源`,
    description: `追求极简语言，说明事物因果！`,
    author: `@learn-anything.cn`,
    siteUrl: `https://learn-anything.cn`,
    email:`lh@learn-anything.cn`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Learn-anything.cn`,
        short_name: `Learn`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/learn-anything-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        // apiURL: "http://localhost:1337",
        apiURL: `https://api.learn-anything.cn`,
        queryLimit: 1000,
        collectionTypes: [`articles`, `categories`, `tags`, `tag-parents`, `book-tags`, `books`, `movie-tags`, `movies`, `recommendations`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/mdx/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-plugin-baidu-analytics`,
      options: {
        // 百度统计站点ID
        siteId: "5bf866742286ec3b256ef7169826ee03",
        // 配置统计脚本插入位置，默认值为 false, 表示插入到 body 中, 为 true 时插入脚本到 head 中
        head: false,
      },
    },
    `gatsby-plugin-advanced-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://learn-anything.cn',
        sitemap: 'https://learn-anything.cn/sitemap-pages.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
