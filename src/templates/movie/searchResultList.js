import React from "react";
import MovieTagRow from "./movieTagRow";
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
          <MovieTagRow
            tagsData={results}
            name={"有关 「 " + query + " 」 影视："}
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
