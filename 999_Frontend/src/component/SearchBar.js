import React from "react";
import "../css/style.css";

function SearchBar() {
  return (
    <div className="searchDiv">
      <div id="search">
        <input className="searchBar" name="SearchBar"></input>
      </div>
      <button>
        <img
          className="magGlass"
          src="https://cdn-icons-png.flaticon.com/512/2120/2120967.png"
          alt="magGlass"
        ></img>
      </button>
    </div>
    // <div className="searchDiv">
    //   <div id="search">
    //     <input className="searchBar" name="SearchBar"></input>
    //     <img
    //       className="magGlass"
    //       src="https://cdn-icons-png.flaticon.com/512/2120/2120967.png"
    //       alt="magGlass"
    //     ></img>
    //   </div>
    //   <div>
    //     <button className="searchBtn">Search</button>
    //   </div>
    // </div>
  );
}

export default SearchBar;
