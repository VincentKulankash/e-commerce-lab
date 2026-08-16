import ProductCard from './ProductCard';
import useProducts from '../hooks/useProducts';

const ProductPage = () => {
  const { products, loading, error } = useProducts();

  if (loading) {
    return (
      <p className="products-loading">
        Loading products...
      </p>
    );
  }

  if (error) {
    return (
      <p className="products-error">
        Error: {error}
      </p>
    );
  }

  const iphones = products.filter(
    (product) => product.brand === 'Apple'
  );

  return (
    <div className="products-page">
      <h2 className="products-page-title">
        iPhones for Sale
      </h2>

      {iphones.length === 0 ? (
        <p className="products-empty">
          No iPhones available.
        </p>
      ) : (
        <div className="products-list">
          {iphones.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductPage;
// Hii ni ya Imran 
