import React from "react"
import { graphql, Link } from "gatsby"

// import uslugify from 'uslug'
import markdownItAnchor from 'markdown-it-anchor'
import markdownItTocDoneRight from 'markdown-it-toc-done-right'
import markdownItFootnote from 'markdown-it-footnote'
import markdownItMultimdTable from 'markdown-it-multimd-table'

// 引入ant-design
// import 'antd/dist/antd.css'; // 引入官方提供的「暗色样式」入口文件
// import 'antd/dist/antd.min.css';
import 'antd/dist/antd.compact.css';// 引入官方提供的「紧凑样式」入口文件

import "highlight.js/styles/rainbow.css"
import "../../components/article.css"

import { useMediaQuery } from 'react-responsive'
import Seo from "../../components/seo"
import { Divider } from "antd"
import BookDetailComputer from "./bookDetailComputer"
import BookDetailMobile from "./bookDetailMobile"

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 })
  return isNotMobile ? children : null
}


const BookDetailTemplate = ({ data }) => {

  var book = data.strapiBooks;
  var title = book.title, desc = book.description, content = book.content;

  var tags = [], keyId = 1;
  book.book_tags.forEach(
    element => {
      // tags.push(<a href={element.slug} >{element.name}</a>);
      tags.push(<Divider key={(keyId++).toString()} type="vertical" />);
      tags.push(<Link key={(keyId++).toString()} to={"/tag/" + element.slug}>{element.name}</Link>);
    }
  )

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

  var mdStr = md.render(content);

  return (

    <div style={{ backgroundColor: '#f0f2f5' }}>
      <Seo title={title} description={desc} />

      {/* 手机客户端页面 */}
      <Mobile>
        <BookDetailMobile toc={tocStr} md={mdStr} book={book} tags={tags} siteMetadata={data.site.siteMetadata} />
        {/* <ArticleMobile toc={tocStr} md={mdStr} node={data} author={author} tags={tags} /> */}
      </Mobile>

      {/* 非手机客户端页面 */}
      <Default>
        <BookDetailComputer toc={tocStr} md={mdStr} book={book} tags={tags} siteMetadata={data.site.siteMetadata} />
      </Default>

    </div>

  );
}

export default BookDetailTemplate


export const queryBook = graphql`
  query queryBookPage($slug:String){
    strapiBooks(
      slug: {  eq: $slug }
    ){
        id
        slug
        title
        author
        description
        content
        rank
        published_at
        book_tags {
          slug
          name
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



// export const queryBook = graphql`
//   query allStrapiBookTags($slug: String!) {
//     strapiArticles(
//       slug: {  eq: $slug }
//     ){
//       id
//       title
//       description
//       content
//       url
//       author {
//         name
//       }
//       published_at
//       tags {
//         name
//         slug
//       }
//     }

//     site {
//       siteMetadata {
//         title
//         author
//         description
//         email
//       }
//     }
//   }
// `