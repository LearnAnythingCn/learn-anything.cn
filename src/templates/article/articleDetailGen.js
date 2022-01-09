import React from "react"
import { graphql, Link } from "gatsby"
import { Divider } from "antd"
import { useMediaQuery } from 'react-responsive'

// import uslugify from 'uslug'
import markdownItAnchor from 'markdown-it-anchor'
import markdownItTocDoneRight from 'markdown-it-toc-done-right'
import markdownItFootnote from 'markdown-it-footnote'
import markdownItMultimdTable from 'markdown-it-multimd-table'

import ArticleDetailComputer from "./articleDetailComputer";
import ArticleDetailMobile from "./articleDetailMobile";
import Seo from "../../components/seo"

// 引入ant-design
// import 'antd/dist/antd.css'; // 引入官方提供的「暗色样式」入口文件
// import 'antd/dist/antd.min.css';
import 'antd/dist/antd.compact.css';// 引入官方提供的「紧凑样式」入口文件
import 'highlight.js/styles/rainbow.css'
import "../../components/article.css"


const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 })
  return isNotMobile ? children : null
}


const ArticleDetailGen = ({ data }) => {

  var title = "";
  if (data.strapiArticles && data.strapiArticles.title) {
    title = data.strapiArticles.title;
  }

  var desc = "";
  if (data.strapiArticles && data.strapiArticles.description) {
    desc = data.strapiArticles.description;
  }

  var author = "麻手";
  if (data.strapiArticles && data.strapiArticles.author) {
    author = data.strapiArticles.author.name;
  }

  var tags = [], keyId = 1;
  if (data.strapiArticles && data.strapiArticles.tags) {
    data.strapiArticles.tags.forEach(element => {
      // tags.push(<a href={element.slug} >{element.name}</a>);
      tags.push(<Divider key={(keyId++).toString()} type="vertical" />);
      tags.push(<Link key={(keyId++).toString()} to={"/tag/" + element.slug}>{element.name}</Link>);
    });
  }

  var hljs = require('highlight.js'); // https://highlightjs.org/

  const uslug = require('uslug')
  const uslugify = s => uslug(s)

  var tocStr = "";
  var md = require("markdown-it")({
    html: true,
    xhtmlOut: true,
    typographer: true,
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externally.
    // If result starts with <pre... internal wrapper is skipped.
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return '<pre class="hljs"><code>' +
            hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
            '</code></pre>';
        } catch (__) { }
      }

      return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
    }
  })
    .use(markdownItFootnote)
    .use(markdownItMultimdTable, {
      multiline: false,
      rowspan: false,
      headerless: false,
    })
    .use(markdownItAnchor, {
      permalink: false,
      permalinkBefore: false,//这些有需要就去看文档吧
      slugify: uslugify
    })
    .use(markdownItTocDoneRight, {
      containerClass: 'toc',//生成的容器的类名，这样最后返回来的字符串是 <nav class="toc"><nav/>
      containerId: 'toc',//生成的容器的ID，这样最后返回来的字符串是 <nav id="toc"><nav/>
      listType: 'ul',//导航列表使用ul还是ol
      listClass: 'listClass',//li标签的样式名
      linkClass: 'linkClass',//a标签的样式名
      slugify: uslugify,
      callback: function (html, ast) {
        //把目录单独列出来
        tocStr = html;
      }
    });

  var mdStr = "";
  if (data.strapiArticles && data.strapiArticles.content) {
    // 增加文章标题、简介、作者：
    var tn = "";
    // tn += "### " + title +"  \n";
    // tn += "[首页](http://www.learn-anything.cn)";
    // if(author){
    //   tn += "  |  "+author;
    // }
    // tn += "  |  "+ time + "  \n  ";
    // tn += "\n---  \n";
    mdStr = md.render(tn + data.strapiArticles.content);
  }



  return (

    <div style={{ backgroundColor: '#f0f2f5' }}>
      <Seo title={title} description={desc} />

      {/* 手机客户端页面 */}
      <Mobile>
        <ArticleDetailMobile toc={tocStr} md={mdStr} node={data} author={author} tags={tags} />
      </Mobile>

      {/* 非手机客户端页面 */}
      <Default>
        <ArticleDetailComputer toc={tocStr} md={mdStr} node={data} author={author} tags={tags} />
      </Default>

    </div>

  );
}

export default ArticleDetailGen

export const queryArticle = graphql`
  query ArticleTemplate($slug: String!) {
    strapiArticles(
      slug: {  eq: $slug }
    ){
      id
      title
      description
      content
      url
      author {
        name
      }
      published_at
      tags {
        name
        slug
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