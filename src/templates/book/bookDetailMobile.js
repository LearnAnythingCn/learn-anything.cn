import React from "react"
import { Link } from "gatsby"
import HtmlReactParser from 'html-react-parser';
import { Layout, Menu, BackTop, Divider, PageHeader } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import FooterTemplate from "../footer";
import AdsImg from "../adImg";

const { SubMenu } = Menu;
const { Content } = Layout;

const BookDetailMobile = ({ toc, md, book, tags, siteMetadata }) => {

  var title = book.title, author = book.author;

  const moment = require('moment')
  moment.locale('zh-cn');
  var time = moment(book.published_at).format('YYYY-MM-DD HH:mm:ss');

  var parser = new DOMParser();
  var doc = parser.parseFromString(toc, "text/xml");

  // 分类创建对象
  var keyId = 1, menus = [];
  // 左侧菜单数据解析
  menus.push(
    <Menu.Item key={(keyId++).toString()} style={{ height: 40 }}>
      <Link to="/">首页</Link>
    </Menu.Item>
  );

  const uslug = require('uslug')

  var x = doc.getElementsByTagName('li');
  for (var i = 0; i < x.length; i++) {
    var name = x[i].childNodes[0].textContent;
    menus.push(
      <Menu.Item key={(keyId++).toString()} style={{ height: 40 }} >
        <a href={"#" + uslug(name)} >{name}</a>
      </Menu.Item>
    );
  }

  var urlShow = "";
  // if (node.strapiArticles && node.strapiArticles.url) {
  //   if (node.strapiArticles.url.indexOf("learn-anything.cn") === -1) {
  //     urlShow = node.strapiArticles.url;
  //   }
  // }

  return (
    <Layout>

      <div style={{
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

        <div style={{ paddingRight: 20, float: 'right' }}>
          <Menu style={{ height: 48 }} theme="light" mode="horizontal" defaultSelectedKeys={'1'}>
            <SubMenu key="submenu" icon={<SettingOutlined />} title="目录">
              {menus}
            </SubMenu>
          </Menu>
        </div>
      </div>

      <div style={{ minHeight: 'calc(100vh - 152px)' }}>
        <div className="articleHeader" style={{
          backgroundColor: 'white',
          // margin: '68px 10px 0 10px',
          margin: '10px 10px 0 10px',
          paddingTop: 30,
          paddingLeft: 24,
          paddingRight: 24,
          borderTop: 'solid 1px #ddd',
          borderRight: 'solid 1px #ddd',
          borderLeft: 'solid 1px #ddd',
          borderRadius: '10px 10px 0 0',
        }}>
          <h1 style={{ textAlign: 'center', lineHeight: '30px', fontSize: 22, letterSpacing: 1, marginBottom: 0, color: '#dc5922' }}>{title}</h1>
          <div style={{ color: '#777', paddingTop: 30 }}> {author} <Divider type="vertical" /> {time} {tags}</div>
          <div><Divider style={{ marginTop: 10, marginBottom: 0, height: '2px' }} /></div>
        </div>

        <Content className="site-layout" >
          <div className="site-layout-background" style={{
            padding: 15,
            margin: '0 10px 0 10px',
            textAlign: 'left',
            borderRight: 'solid 1px #ddd',
            borderBottom: 'solid 1px #ddd',
            borderLeft: 'solid 1px #ddd',
            borderRadius: '0 0 10px 10px',
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

      <BackTop visibilityHeight={50} />
    </Layout>
  );
}

export default BookDetailMobile
