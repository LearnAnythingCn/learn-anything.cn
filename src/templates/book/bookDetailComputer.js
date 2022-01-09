import React from "react"
import { Link } from "gatsby";
import { Layout, BackTop, Divider, PageHeader, Input } from 'antd';
import HtmlReactParser from 'html-react-parser';
import AdsImg from "../adImg";
import FooterTemplate from "../footer";
import logo from "../../images/learn-anything.webp"

const { Search } = Input;
const { Content, Sider } = Layout;


const BookDetailComputer = ({ toc, md, book, tags, siteMetadata }) => {

  var title = book.title, author = book.author;

  const moment = require('moment')
  moment.locale('zh-cn');
  var time = moment(book.published_at).format('YYYY-MM-DD HH:mm:ss');

  var urlShow = "";
  // if (node.strapiArticles && node.strapiArticles.url) {
  //   if (node.strapiArticles.url.indexOf("learn-anything.cn") === -1) {
  //     urlShow = node.strapiArticles.url;
  //   }
  // }

  return (
    <Layout style={{ maxWidth: 960, margin: 'auto' }}>
      <Sider
        style={{
          overflow: 'auto',
          height: 'calc(100vh - 20px)',
          position: 'fixed',
          backgroundColor: 'white',
          border: 'solid 1px #ddd',
          borderRadius: 10,
          margin: '10px 0 10px 10px'
        }}
      >
        <div style={{
          borderBottom: 'solid 1px #ddd', borderRadius: '10px 10px 0 0',
          height: 50, margin: '0 5px 0 5px', backgroundColor: 'white', position: 'fixed'
        }}>
          <Link to="/">
            <img src={logo} alt="logo" style={{ height: 26, width: 180, margin: '12px 0 0 3px' }} />
          </Link>
        </div>

        <div style={{ marginTop: 70 }} >{HtmlReactParser(toc)}</div>
      </Sider>

      <Layout style={{ marginLeft: 210 }}>
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

        <div style={{ minHeight: 'calc(100vh - 148px)' }}>

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
                {HtmlReactParser(md)}
              </article>

              {
                urlShow !== "" ?
                  (<div style={{
                    height: 30,
                    margin: '10px 0 0 0',
                    backgroundColor: 'white',
                    border: 'solid 1px #ddd',
                    borderRadius: 10,
                    width: '100%',
                    textAlign: 'center'
                  }} >
                    <a href={urlShow} target='_blank' rel="noreferrer" style={{ lineHeight: '30px' }}>{'-----    '}  {title} - 官方网站  {'    -----'}</a>
                  </div>)
                  : (<></>)
              }
            </div>


          </Content>

          <div style={{ margin: "10px 10px 0 10px" }}>
            <AdsImg />
          </div>
        </div>

        <FooterTemplate data={siteMetadata} />
      </Layout>

      <BackTop visibilityHeight={50} />
    </Layout>
  );
}

export default BookDetailComputer
