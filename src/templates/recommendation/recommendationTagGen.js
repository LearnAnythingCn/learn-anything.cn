import * as React from "react"
import { graphql } from "gatsby"

import "../../components/index.css"
import 'antd/dist/antd.compact.css';// 引入官方提供的「紧凑样式」入口文件

import { Layout, BackTop } from 'antd';
import FooterTemplate from "../footer";
import SearchInput from "../search/searchInput";
import AdsImg from "../adImg";
import RecommendationTagRow from "./recommendationTagRow";

const { Content } = Layout;

const RecommendationTagGen = ({ location, data, pageContext }) => {

  pageContext.pathname = location.pathname;

  let name = "";
  if (data.strapiRecommendations) {
    name = data.strapiRecommendations.name;
  }

  return (
    <Layout>
      <Content style={{ minHeight: '100vh', maxWidth: 960, left: 0, right: 0, width: '100%', margin: 'auto' }}>
        {
          <SearchInput />
        }
        {
          // articles 推荐
          <RecommendationTagRow
            name={name}
            tagsData={data.allStrapiArticles.nodes}
            fixPath={"/"}
            pagination={pageContext}
            style={{ marginTop: 10, backgroundColor: 'white' }}
          />
        }
        {
          <div style={{ margin: "10px 10px 0 10px" }}>
            <AdsImg />
          </div>
        }
      </Content>
      <FooterTemplate data={data.site.siteMetadata} />
      <BackTop visibilityHeight={50} />
    </Layout>

  )
}

export default RecommendationTagGen

export const queryRecommendationData = graphql`
          query queryRecommendationData($slug:String, $skip: Int!, $pageSize: Int!){

            allStrapiArticles (
              filter: {recommendations: {elemMatch: {slug: {eq: $slug}}}}
              limit: $pageSize
              skip: $skip
              sort: {fields: updated_at, order: DESC}
            ){
              nodes {
                recommendations {
                  name
                  slug
                }
                slug
                title
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

            strapiRecommendations(
              slug: {eq: $slug}
            ) {
              name
              slug
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