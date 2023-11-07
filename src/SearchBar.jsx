import React, { useState } from "react";
import searchIcon from "./assets/icon-search.svg";

const SearchBar = ({ setUsername }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    setUsername(event.target.elements.username.value);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSearch}>
      <div className="searchContainer">
        <img src={searchIcon} alt="searchIcon" className="searchIcon" />
        <input
          type="text"
          name="username"
          placeholder={
            inputValue || "Search GitHub username..."
          }
          className="inputField"
          style={{
            color: "var(--color-text)",
          }}
        ></input>
      </div>
      <button type="submit" className="searchBtn">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
