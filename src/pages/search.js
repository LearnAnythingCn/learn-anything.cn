import React, { useState, useEffect } from "react";
import { graphql } from "gatsby"
import Seo from "../components/seo"
import logo from "../images/learn-anything.webp"

import 'antd/dist/antd.compact.css';// 引入官方提供的「紧凑样式」入口文件

import { Input, Layout, Row, BackTop } from 'antd';
import FooterTemplate from "../templates/footer";
import SearchResultList from "../templates/search/searchResultList";
import AdsImg from "../templates/adImg";
import { Content } from "antd/lib/layout/layout";
import { QuestionCircleOutlined } from '@ant-design/icons';
import Loading from "../templates/loading";

const { Search } = Input;
const axios = require('axios');

const SearchPage = ({ location, data }) => {

  // 此类链接特殊处理，中文字符：?input=弄懂
  const urlParse = require('url');

  var parsedUrl = urlParse.parse(location.search, true);
  var text = parsedUrl.query.input;
  if (text === undefined || text === null) {
    text = "";
  }

  const [query, setQuery] = useState(text)
  const [loading, setLoading] = useState(true)
  const [results, setResults] = useState([])

  useEffect(
    () => {
      if (query) {
        // 采用 strapi 的REST API 方式进行查询 - 2021年12月30日

        const qs = require('qs');
        const queryData = qs.stringify({
          _where: {
            _or: [
              { title_contains: query },
              { description_contains: query },
              { content_contains: query }
            ]
          },
          _limit: 30
        }
        );

        axios.get(`https://api.learn-anything.cn/Articles?${queryData}`)
          // {params:queryData})
          .then(function (response) {
            setResults(response.data);
            setLoading(false);
          })
          .catch(function (error) {
            console.log(error);
            setResults([]);
          })
          .then(function () {
            // 总是会执行
          });
      } else {
        // setResults([]);
        setLoading(false);
      }

    },
    [query]
  )
  /*
    弃用 index，采用 REST API - 2021年12月30日
    // 把最新的 props 保存在一个 ref 中
    const latestText = useRef(text);
  
    useEffect(() => {
      var nLoop = 0;
      function tick() {
        // if (nLoop > 200) {
        //   setLoading(false);
        //   clearInterval(id);
        // } else {
        //   if (window.__LUNR__ && window.__LUNR__['zh']) {
        //     setQuery(latestText.current);
        //     setLoading(false);
        //     clearInterval(id);
        //   }
        //   console.log("window.__LUNR__ : ", window.__LUNR__, window.__LUNR__['zh'], latestText.current, nLoop);
        //   nLoop++;
        // }
  
        // 不做次数限制，就一直等待搜索index文件下载完成
        if (window.__LUNR__ && window.__LUNR__['zh']) {
          setLoading(false);
          clearInterval(id);
          setQuery(latestText.current);
          console.log("搜索完成 : ", window.__LUNR__, window.__LUNR__['zh'], latestText.current, nLoop);
        }else{
          console.log("index 文件下载中 : ", window.__LUNR__, window.__LUNR__['zh'], latestText.current, nLoop);
        }
        nLoop++;
        
      }
      const id = setInterval(tick, 200);
      return () => clearInterval(id);
    }, []); // 这个 effect 从不会重新执行
  */

  return (
    <Layout>
      <Content style={{ maxWidth: 960, left: 0, right: 0, width: '100%', margin: 'auto' }}>
        <Seo title={"有关 「 " + query + " 」 内容"} />

        <div style={{ margin: "10px 10px 0 10px", backgroundColor: 'white', border: 'solid 1px #ddd', borderRadius: 10 }}>
          <div style={{ height: '40px', borderBottom: 'solid 1px #f0f0f0' }}>
            <a href="/">
              <img src={logo} alt="logo" style={{ height: 22, width: 142, margin: '9px 0 0 10px' }} />
            </a>
            <a href="/about" target="_blank" rel="noreferrer">
              <QuestionCircleOutlined style={{ float: 'right', lineHeight: '40px', fontSize: 15, color: '#0089e1', marginRight: 15 }} />
            </a>
          </div>

          <Row style={{ padding: 10 }}>
            {
              <Search
                placeholder="输入查询内容..."
                allowClear
                enterButton
                size="large"
                style={{ left: 0, right: 0, width: 300, marginTop: 84, borderRadius: 20, margin: 'auto' }}
                onSearch={(text) => {
                  if (text.trim() !== "") {
                    if (text !== query) {
                      setLoading(true);
                      setQuery(text)
                    }
                  }
                  return;
                }}
              />
            }
          </Row>
        </div>

        <div style={{ minHeight: 'calc(100vh - 192px)' }}>
          {
            loading ? <Loading /> : <SearchResultList query={query} results={results} />
          }
          <div style={{ margin: "10px 10px 0 10px" }}>
            <AdsImg />
          </div>
        </div>

        <BackTop visibilityHeight={50} />
        <FooterTemplate data={data.site.siteMetadata} />
      </Content>
    </Layout>
  )
}

export default SearchPage



export const pageSearchSite = graphql`
  query pageSearchSite {
    site {
      siteMetadata {
        title
        author
        description
        email
      }
    }
  }`