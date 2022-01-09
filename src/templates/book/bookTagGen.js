import * as React from "react"
import { graphql } from "gatsby"

import 'antd/dist/antd.compact.css';// 引入官方提供的「紧凑样式」入口文件

import { Layout, BackTop } from 'antd';
import FooterTemplate from "../footer";
import SearchInput from "../search/searchInput";
import AdsImg from "../adImg";
import BookTagRow from "./bookTagRow";
const { Content } = Layout;


const BookTagGen = ({ location, data, pageContext }) => {

  pageContext.pathname = location.pathname;

  let name = "";
  if (data.strapiBookTags) {
    name = data.strapiBookTags.name;
  }

  return (
    // <>

    //   <BookTag node={data} allShow={true}/>
    // </>

    <Layout>
      <Content style={{ minHeight: '100vh', maxWidth: 960, left: 0, right: 0, width: '100%', margin: 'auto' }}>
        {
          <SearchInput />
        }
        {
          <BookTagRow
            name={name}
            tagsData={data.allStrapiBooks.nodes}
            fixPath={"/"}
            pagination={pageContext}
            allShow={true}
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

export default BookTagGen

// allStrapiArticles(filter: {tags: {slug: {eq: $slug}}}) {
// allStrapiTagParents(sort: {order: ASC, fields: rank}) {
export const queryBookTagsData = graphql`
          query queryBookTagsData($slug:String, $skip: Int!, $pageSize: Int!){
           
            allStrapiBooks (
              filter: {book_tags: {elemMatch: {slug: {eq: $slug}}}}
              limit: $pageSize
              skip: $skip
            ){
              nodes {
                slug
                title
                author
                description
                rank
                published_at
                image {
                  localFile {
                    childImageSharp {
                      gatsbyImageData(width: 100, height:140)
                    }
                  }
                }
              }
            }

            strapiBookTags(
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

