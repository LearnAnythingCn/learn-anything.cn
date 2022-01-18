import React from "react";
import MovieTagRow from "./movieTagRow";
import SearchOutside from "./searchOutside";


const SearchResultList = ({ query, results }) => {

  console.log("SearchResultList:", results);
  return (
    <>
      {
        results.length > 0 ? (
          <MovieTagRow
            tagsData={results}
            name={"有关 「 " + query + " 」 内容："}
          />

        ) : (
          <div>
            <SearchOutside search={query} />
          </div>

        )
      }
    </>
  )
}

export default SearchResultList
