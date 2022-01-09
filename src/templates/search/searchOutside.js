import React from "react"
import TagPage from "../tag/tagPage"
import lorefreeImg from "../../images/lorefree.jpg"
import sobooksImg from "../../images/sobooks.jpg"
import jiumodiaryImg from "../../images/jiumodiary.png"
import shadowsocksImg from "../../images/shadowsocks.png"

const SearchOutside = ({search}) => {

    let results = [];

    let lorefree={};
    lorefree.title = "lorefree";
    lorefree.desc = "首个去中心化免费中文电子书共享社区，7万多本电子书可供下载。";
    lorefree.imgLocal = lorefreeImg;
    lorefree.url = "https://ebook2.lorefree.com/site/index?s=" + search;
    results.push(lorefree);
    
    let sobooks={};
    sobooks.title = "sobooks";
    sobooks.desc = "免费下载各种格式中文电子书，包含人文、社科、历史、小说、经济、管理等。";
    sobooks.imgLocal = sobooksImg;
    sobooks.url = "https://sobooks.cc/search/" + search;
    results.push(sobooks);

    let jiumodiary={};
    jiumodiary.title = "鸠摩";
    jiumodiary.desc = "中文电子书搜索引擎，提供中文电子图书搜索和免费下载。";
    jiumodiary.imgLocal = jiumodiaryImg;
    jiumodiary.url = "https://www.jiumodiary.com/";
    results.push(jiumodiary);

    let shadowsocks={};
    shadowsocks.title = "shadowsocks";
    shadowsocks.desc = "真是一把【好梯子】，无缝体验真实的互联网世界！";
    shadowsocks.imgLocal = shadowsocksImg;
    shadowsocks.url = "https://portal.shadowsocks.nz/aff.php?aff=20800";
    results.push(shadowsocks);

    return (
        <TagPage
            data={results}
            tagName={"本站无「"+search+"」相关数据，推荐下面站点！"}
            style={{ textAlign:'left' }}
          />
    )

}

export default SearchOutside