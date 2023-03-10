import React from "react";
import "./SearchBar.css";
export default function SearchBar({
  formSubmit,
  value,
  handleSearchKey,
  clearSearch,
}) {
  return (
    <div className="searchBar-wrap">
      <form onSubmit={formSubmit}>
        <input
          type="text"
          placeholder="Search By Category"
          value={value}
          onChange={handleSearchKey}
          style={{ width: "100%" }}
        />
        {value && <span onClick={clearSearch}>X</span>}
        <button>Go</button>
      </form>
    </div>
  );
}
