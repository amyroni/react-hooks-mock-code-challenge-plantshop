import React from "react";

function Search({ setFilter }) {
  function handleFilter(event) {
    console.log("Searching...");
    setFilter(event.target.value.toLowerCase());
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => handleFilter(e)}
      />
    </div>
  );
}

export default Search;
