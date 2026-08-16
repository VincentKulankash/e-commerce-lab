import { useState } from "react";
import { useProducts } from "../hooks/useProducts";

const Search = ({ onSearch }) => {
  const [term, setTerm] = useState("");
  const { searchProducts } = useProducts();

  const handleSearch = async () => {
    const results = term.trim() ? await searchProducts(term) : null;
    onSearch(results);
  };

  return (
    <div>
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
