import * as React from "react"
import { graphql } from "gatsby"

import "../components/index.css"
import 'antd/dist/antd.compact.css';// 引入官方提供的「紧凑样式」入口文件

import Seo from "../components/seo.js"
import MovieTag from "../templates/movie/movieTag.js";

const MoviePage = ({ data }) => {

  var desc = "";
  if (data.site && data.site.siteMetadata) {
    desc = data.site.siteMetadata.description + "用极简的方式，收集整理优质互联网资源，包括人文社科、历史、学习教育、技术、经济管理、自然科学等！";
  }

  return (
    <>
      <Seo title="Learn-anything.cn" description={desc} />

      <MovieTag node={data} />
    </>
  )
}

export default MoviePage


export const movieQueryAll = graphql`
  query movieQueryAll {

    allStrapiMovieTags (
      sort: {fields: rank, order: ASC}
    ){
        edges {
          node {
            name
            slug
            movies {
              id
              slug
              title
              author
              description
              rank
              updated_at
              image {
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 100, height:140)
                  }
                }
              }
            }
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