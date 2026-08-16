const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img
        className="product-card-image"
        src={product.image}
        alt={product.name}
      />

      <div className="product-card-content">
        <h3 className="product-card-name">{product.name}</h3>

        <p className="product-card-brand">
          Brand: {product.brand}
        </p>

        <p className="product-card-description">
          {product.description}
        </p>

        <p className="product-card-price">
          ${product.price}
        </p>

        <p className="product-card-stock">
          In stock: {product.stock}
        </p>

        <p className="product-card-rating">
          Rating: {product.rating}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;

//Hii ni ya Imran 