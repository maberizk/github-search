import React from "react";
import searchIcon from "./assets/icon-search.svg";

const SearchBar = ({ setUsername }) => {
  const handleSearch = (event) => {
    event.preventDefault();
    setUsername(event.target.elements.username.value);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="searchBar"
      style={{
        backgroundColor: "var(--body-color)",
        color: "var(--color-text)",
      }}
    >
      <div className="searchContainer">
        <img src={searchIcon} alt="searchIcon" className="searchIcon" />
        <input
          type="text"
          name="username"
          placeholder="Search Github username..."
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
