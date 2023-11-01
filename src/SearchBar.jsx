import React from "react";

const SearchBar = ({ setUsername }) => {
  const handleSearch = (event) => {
    event.preventDefault();
    setUsername(event.target.elements.username.value);
  };

  return (
    <div>
      <form onSubmit={handleSearch} className="searchBar">
        <input
          type="text"
          name="username"
          placeholder="Search Github username..."
        ></input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
