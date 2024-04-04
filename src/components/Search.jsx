import React from "react";

const Search = ({ searchTerm, handleSearchChange, searchPokemon }) => {
  return (
    <div className="serch-container">
      <input type="search" className="input-search" placeholder="masukin nama pokemon" value={searchTerm} onChange={handleSearchChange} />
      <div onClick={searchPokemon} className="search-btn">
        <img src="/Search.svg" alt="search-icon" className="w-7 h-7" />
      </div>
    </div>
  );
};

export default Search;
