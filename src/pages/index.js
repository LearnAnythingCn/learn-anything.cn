import * as React from "react"
import { graphql } from "gatsby"

import Seo from "../components/seo.js"
import IndexTag from "../templates/index/indexTag.js";

import "../components/index.css"
import 'antd/dist/antd.compact.css';// 引入官方提供的「紧凑样式」入口文件

const IndexPage = ({ data }) => {

  var desc = "";
  if (data.site && data.site.siteMetadata) {
    desc = data.site.siteMetadata.description + "用极简的方式，收集整理优质互联网资源，包括人文社科、历史、学习教育、技术、经济管理、自然科学等！";
  }

  return (
    <>
      <Seo title="Learn-anything.cn" description={desc} />

      <IndexTag node={data} />

    </>
  )
}

export default IndexPage


export const pageQueryAll = graphql`
  query pageQueryAll {
    

    allStrapiTagParents(sort: {order: ASC, fields: rank}) {
      edges {
        node {
          id
          name
          slug
          tags {
            name
            rank
            slug
            id
          }
        }
      }
    }

    allStrapiBooks(
      limit: 8
      sort: {fields: updated_at, order: DESC}
    ) {
      nodes {
        slug
        title
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(width: 100, height:140)
            }
          }
        }
      }
    }

    allStrapiMovies(
      limit: 8
      sort: {fields: updated_at, order: DESC}
    ) {
      nodes {
        slug
        title
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(width: 100, height:140)
            }
          }
        }
      }
    }

    recoHot:allStrapiArticles(
      filter: {recommendations: {elemMatch: {slug: {eq: "hot"}}}}
      limit: 10
      sort: {fields: updated_at, order: DESC}
    ) {
      nodes {
        slug
        title
        description
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(width: 15, height:15)
            }
          }
        }
        recommendations {
          name
        }
      }
    }

    recoCode:allStrapiArticles(
      filter: {recommendations: {elemMatch: {slug: {eq: "code"}}}}
      limit: 10
      sort: {fields: updated_at, order: DESC}
    ) {
      nodes {
        slug
        title
        description
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(width: 15, height:15)
            }
          }
        }
        recommendations {
          name
        }
      }
    }


    site {
      siteMetadata {
        title
        author
        description
        email
      }
    }
  }`



/* 查询心理学最新图书

  allStrapiBooks(
    filter: {book_tags: {elemMatch: {slug: {eq: "psychology"}}}}
    limit: 8
    sort: {fields: updated_at, order: DESC}
  ) {
    nodes {
      slug
      title
      image {
        localFile {
          childImageSharp {
            gatsbyImageData(width: 100, height:140)
          }
        }
      }
    }
  }
  */


  /* 查询高分电影

  allStrapiMovies(
      filter: {movie_tags: {elemMatch: {slug: {eq: "good-reputation-100w"}}}}
      limit: 8
      sort: {fields: updated_at, order: DESC}
    ) {
      nodes {
        slug
        title
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(width: 100, height:140)
            }
          }
        }
      }
    }
  */