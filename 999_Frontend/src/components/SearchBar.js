import React from "react";
import "../css/search.css";

function SearchBar() {
  return (
    <div className="searchDiv">
      <div id="search">
        <div className="item1">
          <input className="searchBar" name="SearchBar"></input>
        </div>
        <div className="item2">
          <button className="magBtn">
            <img
              className="magGlass"
              src="https://cdn-icons-png.flaticon.com/512/2120/2120967.png"
              alt="magGlass"
            ></img>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
