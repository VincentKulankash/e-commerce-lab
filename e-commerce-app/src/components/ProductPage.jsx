import { useState } from 'react'; 
import { useLocation } from 'react-router-dom';
import ProductCard from './ProductCard';
import { useProducts } from '../hooks/useProducts';
import Search from './Search';

const ProductPage = () => {
  const { products, loading, error, searchProducts, deleteProduct } = useProducts();
  const location = useLocation();
  const [searchResults, setSearchResults] = useState(null);
  const [term, setTerm] = useState('');
  
  const queryParams = new URLSearchParams(location.search);
  const selectedCategory = queryParams.get('category');

  let displayProducts = products;
  
  if (searchResults !== null) {
    displayProducts = searchResults;
  } else if (selectedCategory) {
    displayProducts = products.filter(product => product.category === selectedCategory);
  }

  const handleSearch = (results) => {
    setSearchResults(results);
  };

  const clearSearch = () => {
    setSearchResults(null);
    setTerm('');
  };

  if (loading) {
    return <p className="products-loading">Loading products...</p>;
  }

  if (error) {
    return <p className="products-error">Error: {error}</p>;
  }

  return (
    <div className="products-page"> 
      <div className="products-header">
        <h2 className="products-page-title">
          {searchResults !== null 
            ? 'Search Results' 
            : selectedCategory ? `${selectedCategory}` : 'All Products'}
        </h2>
        
        <Search 
          onSearch={handleSearch} 
          searchProducts={searchProducts}
          term={term}
          setTerm={setTerm}
        />
        
        {searchResults !== null && (
          <button onClick={clearSearch} className="clear-search-btn">
            Clear Search
          </button>
        )}
      </div>

      {displayProducts.length === 0 ? (
        <p className="products-empty">
          {searchResults !== null 
            ? 'No products found matching your search.' 
            : selectedCategory 
              ? `No products found in ${selectedCategory} category.` 
              : 'No products available. Add some!'}
        </p>
      ) : (
        <div className="products-list">
          {displayProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onDelete={deleteProduct}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductPage;