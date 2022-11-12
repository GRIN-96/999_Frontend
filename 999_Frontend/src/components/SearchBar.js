import React from "react";
import "../css/search.css";

function SearchBar() {
  function onClickSearch() {
    const input = document.getElementById("submit");
    input.addEventListener("click", (e) => {
      e.preventDefault();
      const values = document.getElementById("input_Search").value;
      console.log(values);
    });
  }

  return (
    <div className="searchDiv">
      <div id="search">
        <div className="item1">
          <input
            className="searchBar"
            name="SearchBar"
            id="input_Search"
          ></input>
        </div>
        <div className="item2">
          <button
            type="submit"
            className="magBtn"
            onClick={onClickSearch}
            id="submit"
          >
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
