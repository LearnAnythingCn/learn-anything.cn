import React from "react";
import BookTagRow from "./bookTagRow";
import SearchOutside from "./searchOutside";


const SearchResultList = ({ query, results }) => {

  console.log("SearchResultList:", results);
  return (
    <>
      {
        results.length > 0 ? (
          <BookTagRow
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
