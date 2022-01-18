import React from "react";
import BookTagRow from "./bookTagRow";
import SearchOutside from "./searchOutside";


const SearchResultList = ({ query, results, recommendShow }) => {

  let bShow = true;
  if (recommendShow !== undefined) {
    bShow = recommendShow;
  }
  
  return (
    <>
      {
        results.length > 0 ? (
          <BookTagRow
            tagsData={results}
            name={"有关 「 " + query + " 」 内容："}
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
