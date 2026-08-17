import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, updateProduct, loading } = useProducts();

  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    price: '',
    description: '',
    category: '',
    image: '',
    stock: '',
    rating: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [productNotFound, setProductNotFound] = useState(false);

  // Load the product data when the component opens
  useEffect(() => {
    if (products.length === 0) return;

    const product = products.find(
      (product) => String(product.id) === String(id)
    );

    if (!product) {
      setProductNotFound(true);
      return;
    }

    setFormData({
      name: product.name ?? '',
      brand: product.brand ?? '',
      price: product.price ?? '',
      description: product.description ?? '',
      category: product.category ?? '',
      image: product.image ?? '',
      stock: product.stock ?? '',
      rating: product.rating ?? '',
    });
  }, [id, products]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    // Remove the error as soon as the user starts correcting it
    if (formErrors[name]) {
      setFormErrors((previousErrors) => ({
        ...previousErrors,
        [name]: '',
      }));
    }
  };

  // Validate form
  const validateForm = () => {
    const errors = {};

    const price = Number(formData.price);
    const stock = Number(formData.stock);
    const rating = Number(formData.rating);

    if (!formData.name.trim()) {
      errors.name = 'Product name is required';
    }

    if (!formData.brand.trim()) {
      errors.brand = 'Brand is required';
    }

    if (!formData.price || Number.isNaN(price) || price <= 0) {
      errors.price = 'Price must be greater than 0';
    }

    if (!formData.description.trim()) {
      errors.description = 'Description is required';
    }

    if (!formData.category) {
      errors.category = 'Please select a category';
    }

    if (
      formData.stock === '' ||
      Number.isNaN(stock) ||
      stock < 0 ||
      !Number.isInteger(stock)
    ) {
      errors.stock = 'Stock must be a whole number of 0 or more';
    }

    if (
      formData.rating !== '' &&
      (Number.isNaN(rating) || rating < 0 || rating > 5)
    ) {
      errors.rating = 'Rating must be between 0 and 5';
    }

    if (formData.image) {
      try {
        new URL(formData.image);
      } catch {
        errors.image = 'Please enter a valid image URL';
      }
    }

    return errors;
  };

  // Submit updated product
  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    try {
      const updates = {
        ...formData,
        price: Number(formData.price),
        stock: Number(formData.stock),
        rating:
          formData.rating === ''
            ? 0
            : Number(formData.rating),
      };

      await updateProduct(id, updates);

      alert('Product updated successfully!');
      navigate('/products');
    } catch (error) {
      console.error('Error updating product:', error);
      alert('Failed to update product. Please try again.');
    }
  };

  // Cancel editing
  const handleCancel = () => {
    navigate('/products');
  };

  // Product does not exist
  if (productNotFound) {
    return (
      <div className="form-page">
        <h2>Product Not Found</h2>
        <p>
          The product you are trying to edit does not exist.
        </p>

        <button
          type="button"
          className="btn-cancel"
          onClick={handleCancel}
        >
          Back to Products
        </button>
      </div>
    );
  }

  return (
    <div className="form-page">
      <h2>Edit Product</h2>

      <form onSubmit={handleSubmit} noValidate>
        {/* Product Name */}
        <div className="form-group">
          <label htmlFor="name">Product Name</label>

          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter product name"
            className={formErrors.name ? 'input-error' : ''}
          />

          {formErrors.name && (
            <span className="error-message">
              {formErrors.name}
            </span>
          )}
        </div>

        {/* Brand */}
        <div className="form-group">
          <label htmlFor="brand">Brand</label>

          <input
            id="brand"
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            placeholder="Enter brand name"
            className={formErrors.brand ? 'input-error' : ''}
          />

          {formErrors.brand && (
            <span className="error-message">
              {formErrors.brand}
            </span>
          )}
        </div>

        {/* Price */}
        <div className="form-group">
          <label htmlFor="price">Price</label>

          <input
            id="price"
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="100.00"
            step="0.01"
            min="0"
            className={formErrors.price ? 'input-error' : ''}
          />

          {formErrors.price && (
            <span className="error-message">
              {formErrors.price}
            </span>
          )}
        </div>

        {/* Description */}
        <div className="form-group">
          <label htmlFor="description">Description</label>

          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe the product"
            rows="4"
            className={
              formErrors.description ? 'input-error' : ''
            }
          />

          {formErrors.description && (
            <span className="error-message">
              {formErrors.description}
            </span>
          )}
        </div>

        {/* Category */}
        <div className="form-group">
          <label htmlFor="category">Category</label>

          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className={formErrors.category ? 'input-error' : ''}
          >
            <option value="">Select a category</option>
            <option value="Phones">Phones</option>
            <option value="Tablets">Tablets</option>
            <option value="Laptops">Laptops</option>
            <option value="Accessories">Accessories</option>
            <option value="Audio">Audio</option>
            <option value="Smart Home">Smart Home</option>
          </select>

          {formErrors.category && (
            <span className="error-message">
              {formErrors.category}
            </span>
          )}
        </div>

        {/* Image */}
        <div className="form-group">
          <label htmlFor="image">Image URL</label>

          <input
            id="image"
            type="url"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="https://example.com/product-image.jpg"
            className={formErrors.image ? 'input-error' : ''}
          />

          {formErrors.image && (
            <span className="error-message">
              {formErrors.image}
            </span>
          )}
        </div>

        {/* Stock */}
        <div className="form-group">
          <label htmlFor="stock">Stock Quantity</label>

          <input
            id="stock"
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            placeholder="25"
            min="0"
            step="1"
            className={formErrors.stock ? 'input-error' : ''}
          />

          {formErrors.stock && (
            <span className="error-message">
              {formErrors.stock}
            </span>
          )}
        </div>

        {/* Rating */}
        <div className="form-group">
          <label htmlFor="rating">Rating (0-5)</label>

          <input
            id="rating"
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            step="0.1"
            min="0"
            max="5"
            placeholder="4.5"
            className={formErrors.rating ? 'input-error' : ''}
          />

          {formErrors.rating && (
            <span className="error-message">
              {formErrors.rating}
            </span>
          )}
        </div>

        {/* Buttons */}
        <div className="form-actions">
          <button
            type="submit"
            className="btn-submit"
            disabled={loading}
          >
            {loading ? 'Saving...' : 'Save Changes'}
          </button>

          <button
            type="button"
            className="btn-cancel"
            onClick={handleCancel}
            disabled={loading}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;