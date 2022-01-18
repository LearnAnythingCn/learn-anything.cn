import React from "react";
import TagPage from "../tag/tagPage";
import SearchOutside from "./searchOutside";


const SearchResultList = ({ query, results, recommendShow }) => {

  let bShow = true;
  if (recommendShow !== undefined) {
    bShow = recommendShow;
  }

  /*
    const [results, setResults] = useState([])
  
    useEffect(
      () => {
        // 弃用索引方式，采用上面 REST API 方式进行查询 - 2021年12月30日
        // if (!query || !window.__LUNR__) {
        //   console.log("***** query , window.__LUNR__ : ", query, window.__LUNR__);
        //   setResults([])
        //   return
        // }
  
        // const lunrIndex = window.__LUNR__['zh']
        // if (lunrIndex && lunrIndex.index) {
  
        //   try {
        //     const searchResults = lunrIndex.index.search(query)
        //     const res = searchResults.map(({ ref }) => {
        //       return lunrIndex.store[ref];
        //     });
        //     setResults(res);
        //     console.log(res);
        //   } catch (error) {
        //     // ~ 这个字符在lunr有特殊含有，会有异常，捕获暂不处理 - 2021年11月01日
        //     // 详情：https://lunrjs.com/guides/searching.html
        //     console.log("[error] - catch : ", error);
        //     setResults({});
        //   }
        // } else {
        //   console.log("[error] - lunrIndex : ", lunrIndex);
        // }
      },
      [query]
    )
  */
  return (
    <>
      {
        results.length > 0 ? (
          <TagPage
            data={results}
            tagName={"有关 「 " + query + " 」 内容："}
          />

        ) : (
          bShow ?
            (<div>
              <SearchOutside search={query} />
            </div>)
            :
            (<></>)
        )
      }
    </>
  )
}

export default SearchResultList
