import * as React from "react"
import { graphql } from "gatsby"

import "../components/index.css"
import 'antd/dist/antd.compact.css';// 引入官方提供的「紧凑样式」入口文件
import "../components/movie.css"

import Seo from "../components/seo.js"
import RecommendationTag from "../templates/recommendation/recommendationTag.js";

const RecommendationPage = ({ data }) => {

  var desc = "";
  if (data.site && data.site.siteMetadata) {
    desc = data.site.siteMetadata.description + "用极简的方式，收集整理优质互联网资源，包括人文社科、历史、学习教育、技术、经济管理、自然科学等！";
  }

  // 只显示前五条数据
  data.allStrapiRecommendations.edges.forEach(element => {
    if(element.node.articles.length>5){
      // 通过索引删除元素
      element.node.articles.splice(5,element.node.articles.length-1);
    }
  });
  return (
    <>
      <Seo title="Learn-anything.cn" description={desc} />

      <RecommendationTag node={data} />
    </>
  )
}

export default RecommendationPage


export const recommendationsQuery = graphql`
  query recommendationsQuery {

    allStrapiRecommendations(
      sort: {fields: updated_at, order: DESC}
    ) {
      edges {
        node {
          name
          slug
          articles {
            slug
            title
            author
            description
            rank
            published_at
            image {
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 15, height:15)
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