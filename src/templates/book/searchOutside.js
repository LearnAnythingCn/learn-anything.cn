import React from "react"
import z_libImg from "../../images/z_lib.png"
import lorefreeImg from "../../images/lorefree.jpg"
// import jiumodiaryImg from "../../images/jiumodiary.png"
import shadowsocksImg from "../../images/shadowsocks.png"
import pdfdriveImg from "../../images/pdfdrive.webp"

import TagPage from "../tag/tagPage"

const SearchOutside = ({ search }) => {

    let results = [];

    let z_lib={};
    z_lib.title = "Z-Library";
    z_lib.desc = "免费下载中文电子书，格式包括pdf、epub等。免费账户每天限量5本。";
    z_lib.imgLocal = z_libImg;
    z_lib.url = "https://zh.ng1lib.org/s/" + search;
    results.push(z_lib);

    let pdfdrive = {};
    pdfdrive.title = "PDF DRIVE";
    pdfdrive.desc = "免费下载超过一亿本英文电子书，不用注册即可下载。";
    pdfdrive.imgLocal = pdfdriveImg;
    pdfdrive.url = "https://www.pdfdrive.com/search?q=" + search;
    results.push(pdfdrive);

    let lorefree = {};
    lorefree.title = "lorefree";
    lorefree.desc = "首个去中心化免费中文电子书共享社区，7万多本电子书可供下载。";
    lorefree.imgLocal = lorefreeImg;
    lorefree.url = "https://ebook2.lorefree.com/site/index?s=" + search;
    results.push(lorefree);

    // let jiumodiary = {};
    // jiumodiary.title = "鸠摩";
    // jiumodiary.desc = "中文电子书搜索引擎，提供中文电子图书搜索和免费下载。";
    // jiumodiary.imgLocal = jiumodiaryImg;
    // jiumodiary.url = "https://www.jiumodiary.com/";
    // results.push(jiumodiary);

    let shadowsocks = {};
    shadowsocks.title = "shadowsocks";
    shadowsocks.desc = "真是一把【好梯子】，无缝体验真实的互联网世界！";
    shadowsocks.imgLocal = shadowsocksImg;
    shadowsocks.url = "https://portal.shadowsocks.nz/aff.php?aff=20800";
    results.push(shadowsocks);

    return (
        <TagPage
            data={results}
            tagName={search ? ("本站无「" + search + "」相关数据，推荐下面站点！") : ("无数据，推荐下面站点！")}
            style={{ textAlign: 'left' }}
        />

    )

}

export default SearchOutside