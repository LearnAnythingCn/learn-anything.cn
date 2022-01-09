/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)

const makeRequest = (graphql, request) =>
  new Promise((resolve, reject) => {
    // Query for nodes to use in creating pages.
    resolve(
      graphql(request).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        return result
      })
    )
  })

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ graphql, actions }) => {
  //   const  createPage  = boundActionCreators
  const { createPage } = actions

  // 用正则过滤掉smallpdf.cn的节点，不需要生成导航节点的静态页面 - 2021年10月01日
  // allStrapiArticles(filter: {category: {name: {regex: "/^((?!-small).)*$/"}}}) {
  const getArticles = makeRequest(
    graphql,
    `{
      allStrapiArticles {
        edges {
          node {
            title
            slug
          }
        }
      }

      allStrapiBookTags {
        edges {
          node {
            name
            slug
            books {
              slug
            }
          }
        }
      }

      allStrapiMovieTags {
        edges {
          node {
            name
            slug
            movies {
              slug
            }
          }
        }
      }

      allStrapiRecommendations {
        edges {
          node {
            name
            slug
            articles {
              slug
            }
          }
        }
      }

      allStrapiTags {
        edges {
          node {
            slug
            name
          }
        }
      }
    }`
  ).then(result => {
    // Create pages for each article.
    result.data.allStrapiArticles.edges.map(elem => {
      createPage({
        path: `/${elem.node.slug}`,//用slug代替id
        component: path.resolve(`src/templates/article/articleDetailGen.js`),
        context: {
          title: elem.node.title,
          slug: elem.node.slug,
        },
      })



      /* 此处是自动生成category的html，暂时用不上，不生成 - 2021年10月01日
      createPage({
        path: `/${elem.node.category.slug}`,//用slug代替id
        component: path.resolve(`src/templates/category.js`),
        context: {
          id:elem.node.category.id,
          name:elem.node.category.name,
          slug: elem.node.category.slug,
        },
      })
      */
    })


    // 生成tags页面
    result.data.allStrapiTags.edges.map(element => {
      createPage({
        path: `/tag/${element.node.slug}`,//用slug代替id
        component: path.resolve(`src/templates/tag/tagGen.js`),
        context: {
          slug: element.node.slug
        },
      })
    });

    // 生成 book的tag页面 和 book的详情页
    result.data.allStrapiBookTags.edges.map(elem => {
      // 每页条数
      let pageSize = 24;
      // 总数据量
      let total = elem.node.books.length;
      // 页数
      let numPages = Math.ceil(total / pageSize);

      Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
          path: i === 0 ? `/tag/${elem.node.slug}` : `/tag/${elem.node.slug}/${i + 1}`,
          component: path.resolve(`src/templates/book/bookTagGen.js`),
          context: {
            slug: elem.node.slug,
            pageSize: pageSize,
            total: total,
            numPages: numPages,
            currentPage: i + 1,
            skip: i * pageSize
          },
        });
      });

      // 生成detail页面
      elem.node.books.map(info => {
        createPage({
          path: `/book/${info.slug}`,
          component: path.resolve(`src/templates/book/bookDetailGen.js`),
          context: {
            slug: info.slug
          },
        })
      })
    });

    // 生成 movie的tag页面 和 movie的详情页
    result.data.allStrapiMovieTags.edges.map(elem => {
      // 每页条数
      let pageSize = 24;
      // 总数据量
      let total = elem.node.movies.length;
      // 页数
      let numPages = Math.ceil(total / pageSize);

      Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
          path: i === 0 ? `/tag/${elem.node.slug}` : `/tag/${elem.node.slug}/${i + 1}`,
          component: path.resolve(`src/templates/movie/movieTagGen.js`),
          context: {
            slug: elem.node.slug,
            pageSize: pageSize,
            total: total,
            numPages: numPages,
            currentPage: i + 1,
            skip: i * pageSize
          },
        });
      });

      // 生成detail页面
      elem.node.movies.map(info => {
        createPage({
          path: `/movie/${info.slug}`,
          component: path.resolve(`src/templates/movie/movieDetailGen.js`),
          context: {
            slug: info.slug
          },
        })
      })
    });


    // 生成recommendations页面
    result.data.allStrapiRecommendations.edges.map(elem => {
      // 每页条数
      let pageSize = 20;
      // 总数据量
      let total = elem.node.articles.length;
      // 页数
      let numPages = Math.ceil(total / pageSize);

      Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
          path: i === 0 ? `/recommendation/${elem.node.slug}` : `/recommendation/${elem.node.slug}/${i + 1}`,
          component: path.resolve(`src/templates/recommendation/recommendationTagGen.js`),
          context: {
            slug: elem.node.slug,
            pageSize: pageSize,
            total: total,
            numPages: numPages,
            currentPage: i + 1,
            skip: i * pageSize
          },
        });
      });

    });

  });

  // Query for articles nodes to use in creating pages.
  return getArticles
}