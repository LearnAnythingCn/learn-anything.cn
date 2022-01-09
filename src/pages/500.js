import * as React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import 'antd/dist/antd.compact.css';// 引入官方提供的「紧凑样式」入口文件

import { Layout, BackTop } from 'antd';
import FooterTemplate from "../templates/footer";
import SearchInput from "../templates/search/searchInput";
import AdsImg from "../templates/adImg";
import SearchOutside from "../templates/search/searchOutside";

const { Content } = Layout;

const ServerError = ({ data }) => (
  <div>
    <Seo title="500" description="本站暂无此资源！" />

    <Layout>
      <Content style={{ minHeight: 'calc(100vh - 88px)', maxWidth: 960, left: 0, right: 0, width: '100%', margin: 'auto' }}>
        <SearchInput />
        <SearchOutside search="" />
        <div style={{ margin: "10px 10px 0 10px" }}>
          <AdsImg />
        </div>
      </Content>
        <FooterTemplate data={data.site.siteMetadata} />
        <BackTop visibilityHeight={50} />
    </Layout>

  </div>
)

export default ServerError


export const pageQuery500 = graphql`
  query pageQuery500 {
    site {
      siteMetadata {
        title
        author
        description
        email
      }
    }
  }`
