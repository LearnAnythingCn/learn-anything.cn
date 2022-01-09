import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby";
import { Layout, BackTop, Divider, PageHeader, Input } from 'antd';
import HtmlReactParser from 'html-react-parser';
import AdsMiniProgram from "../templates/adMiniProgram";
import FooterTemplate from "../templates/footer";

import 'antd/dist/antd.compact.css';// 引入官方提供的「紧凑样式」入口文件
import "highlight.js/styles/rainbow.css"
import "../components/article.css"

const { Search } = Input;
const { Content } = Layout;


const AboutPage = ({ data }) => {

    let title = "关于本站";
    let author = "麻手";
    let time = "2021年11月05日20:55:12";
    let tags = "";

    let md = require("markdown-it")({
        html: true,
        xhtmlOut: true,
        typographer: true,
    });
    let mdAbout = md.render(data.allMdx.nodes[0].rawBody);

    return (
        <Layout >
            <div style={{ minHeight: 'calc(100vh - 78px)', maxWidth: 960, left: 0, right: 0, width: '100%', margin: 'auto' }}>
                <div style={{
                    height: 50,
                    margin: '10px 10px 0 10px',
                    backgroundColor: 'white',
                    border: 'solid 1px #ddd',
                    borderRadius: 10,
                }} >
                    <Link to="/">
                        <PageHeader
                            className="site-page-header"
                            onBack={() => (window.open("/"))}
                            title="返回首页"
                            style={{ float: 'left', color: '#999' }}
                        />
                    </Link>

                    <Search
                        placeholder="输入查询内容..."
                        allowClear
                        enterButton
                        size="large"
                        style={{ width: 200, marginRight: 10, marginTop: 9, float: 'right' }}
                        onSearch={(text) => {
                            if (text.trim() !== "") {
                                window.open("/search?input=" + text)
                            }
                            return;
                        }}
                    />
                </div>

                <div className="articleHeader" style={{
                    backgroundColor: 'white',
                    margin: '10px 10px 0px 10px',
                    borderTop: 'solid 1px #ddd',
                    borderRight: 'solid 1px #ddd',
                    borderLeft: 'solid 1px #ddd',
                    borderRadius: '10px 10px 0 0',
                    paddingTop: 30,
                    paddingLeft: 24,
                    paddingRight: 24
                }}>
                    <h1 style={{ textAlign: 'center', marginBottom: 0, lineHeight: '35px', fontSize: 28, color: '#dc5922', letterSpacing: 1.5 }}>{title}</h1>
                    <div style={{ color: '#777', paddingTop: 30 }}> {author} <Divider type="vertical" /> {time} {tags}</div>
                    <div><Divider style={{ marginTop: 10, marginBottom: 0, height: '2px' }} /></div>
                </div>

                <Content style={{ margin: '0px 10px 0 10px', overflow: 'initial' }}>
                    <div className="site-layout-background" style={{
                        padding: 24,
                        borderRight: 'solid 1px #ddd',
                        borderBottom: 'solid 1px #ddd',
                        borderLeft: 'solid 1px #ddd',
                        borderRadius: '0 0 10px 10px',
                        textAlign: 'left',
                        backgroundColor: 'white'
                    }}>
                        <article className="markdown-body" >
                            {HtmlReactParser(mdAbout)}
                        </article>
                    </div>
                    <div style={{ marginTop: 10 }}>
                        <AdsMiniProgram />
                    </div>
                </Content>
            </div>
            <FooterTemplate data={data.site.siteMetadata} />
            <BackTop visibilityHeight={50} />
        </Layout>
    )
}

export default AboutPage


export const pageAbout = graphql`
  query pageQueryAbout {

    allMdx {
        nodes {
          rawBody
          
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