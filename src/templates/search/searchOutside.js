import React from "react"
import TagPage from "../tag/tagPage"
import z_libImg from "../../images/z_lib.png"
import ddrkImg from "../../images/ddrk.png"
import newfiiImg from "../../images/newfii.png"
import yanetflixImg from "../../images/yanetflix.png"
import shadowsocksImg from "../../images/shadowsocks.png"

const SearchOutside = ({search}) => {

    let results = [];

    let z_lib={};
    z_lib.title = "Z-Library";
    z_lib.desc = "免费下载中文电子书，格式包括pdf、epub等。免费账户每天限量5本。";
    z_lib.imgLocal = z_libImg;
    z_lib.url = "https://zh.ng1lib.org/s/" + search;
    results.push(z_lib);

    let ddrk = {};
    ddrk.title = "低端影视";
    ddrk.desc = "超清在线视频网站（电视剧、电影、美剧、日剧、韩剧、新番、动画等），速度很快。";
    ddrk.imgLocal = ddrkImg;
    ddrk.url = "https://ddrk.me/";
    results.push(ddrk);

    let newfii = {};
    newfii.title = "奈飞中文电影";
    newfii.desc = "免费在线观看奈飞电影、电视剧、动漫、综艺，高清速度快！";
    newfii.imgLocal = newfiiImg;
    newfii.url = "https://yanetflix.com/index.php/vod/search.html?wd=" + search;
    results.push(newfii);

    let yanetflix = {};
    yanetflix.title = "奈落影院";
    yanetflix.desc = "在线免费观看高清电影、电视剧、综艺，无弹窗、速度快。";
    yanetflix.imgLocal = yanetflixImg;
    yanetflix.url = "https://newfii.com/index.php/vod/search.html?wd=" + search;
    results.push(yanetflix);

    let shadowsocks={};
    shadowsocks.title = "shadowsocks";
    shadowsocks.desc = "真是一把【好梯子】，无缝体验真实的互联网世界！";
    shadowsocks.imgLocal = shadowsocksImg;
    shadowsocks.url = "https://portal.shadowsocks.nz/aff.php?aff=20800";
    results.push(shadowsocks);

    return (
        <TagPage
            data={results}
            tagName={search ? ("本站无「" + search + "」相关数据，推荐下面站点！") : ("无数据，推荐下面站点！")}
            style={{ textAlign:'left' }}
          />
    )

}

export default SearchOutside