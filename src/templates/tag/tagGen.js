import * as React from "react"
import { graphql } from "gatsby"
import { BackTop, Layout } from "antd";

import Seo from "../../components/seo"
import SearchInput from "../search/searchInput";
import FooterTemplate from "../footer";

import AdsImg from "../adImg";
import TagPage from "./tagPage";

import 'antd/dist/antd.compact.css';// 引入官方提供的「紧凑样式」入口文件
import 'highlight.js/styles/rainbow.css'
import "../../components/article.css"

const { Content } = Layout;

const TagGen = ({ data, location }) => {

  let pathName = location.pathname;
  var tagName = "tags";
  if (data.allStrapiArticles.edges[0]) {
    let tags = data.allStrapiArticles.edges[0].node.tags;
    let tagsLength = tags.length;
    for (let i = 0; i < tagsLength; i++) {
      if (pathName.indexOf(tags[i].slug) !== -1) {
        tagName = tags[i].name;
        break;
      }
    }
  }

  var desc = "";
  if (data.site && data.site.siteMetadata) {
    desc = data.site.siteMetadata.description + "包括人文社科、历史、学习教育、技术、经济管理、自然科学等！";
  }

  var dataResult = data.allStrapiArticles.edges.map(element => {
    return element.node;
  })

  return (
    <Layout>
      <Seo title={'有关 「 ' + tagName + ' 」 的内容'} description={desc} />
      <Content style={{ maxWidth: 960, left: 0, right: 0, width: '100%', margin: 'auto' }}>
        <SearchInput />

        <div style={{ minHeight: 'calc(100vh - 192px)' }}>
          <TagPage data={dataResult} tagName={tagName} />
          <div style={{ margin: "10px 10px 0 10px" }}>
            <AdsImg />
          </div>
        </div>

        <FooterTemplate data={data.site.siteMetadata} />
        <BackTop visibilityHeight={50} />
      </Content>
    </Layout>
  )
}

export default TagGen

// allStrapiArticles(filter: {tags: {slug: {eq: $slug}}}) {
// allStrapiTagParents(sort: {order: ASC, fields: rank}) {
export const queryTagsData = graphql`
        query queryTagsData($slug:String){
            allStrapiArticles(
              filter: {tags: {elemMatch: {slug: {eq: $slug}}}}
              sort: {order: ASC, fields: rank}
            ) {
                edges {
                  node {
                    tags {
                      slug
                      name
                    }
                    title
                    slug
                    description
                    url
                    rank

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

            site {
                siteMetadata {
                  title
                  author
                  description
                  email
                }
            }
        }
    `