import { useState } from "react";

const Search = ({ onSearch, searchProducts, term, setTerm }) => {

  const handleSearch = () => {
    const results = term.trim() ? searchProducts(term) : null;
    onSearch(results);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        placeholder="Search products..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;

//Hii ni ya Enock