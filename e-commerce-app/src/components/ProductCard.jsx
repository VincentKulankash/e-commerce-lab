import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product, onDelete }) => {
  const navigate = useNavigate();

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
          Ksh{product.price}
        </p>

        <p className="product-card-stock">
          In stock: {product.stock}
        </p>

        <p className="product-card-rating">
          Rating: {product.rating}
        </p>

        <button
          className="btn-edit"
          onClick={() => navigate(`/products/${product.id}/edit`)}
        >
          Edit
        </button>

        <button
          className="btn-delete"
          onClick={() => {
            if (window.confirm(`Delete "${product.name}"?`)) {
              onDelete(product.id);
            }
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

//Hii ni ya Imran