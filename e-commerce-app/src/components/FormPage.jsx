import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {useProducts} from '../hooks/useProducts';


const FormPage = () => {

  const navigate = useNavigate();
  const {addProduct, loading} = useProducts();

  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    price: '',
    description: '',
    category: '',
    image: '',
    stock: '', 
    rating: ''
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: ''}));
    }
  };

  const validateForm = () => {
    const errors = {};
    if(!formData.name.trim()) errors.name = 'Product name is required';
    if(!formData.brand.trim()) errors.brand = 'Brand is required';
    if(!formData.price || formData.price <= 0) errors.price = 'Price must be greater than 0';
    if(!formData.description.trim()) errors.description = 'Description is required';
    if(!formData.stock || formData.stock < 0) errors.stock = 'Stock must be 0 or more';
    if (formData.rating && (formData.rating < 0 || formData.rating > 5)) {
      errors.rating = 'Rating must be between 0 and 5';
    }
    return errors;

  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm();
    if(Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    try{
      const productData = {
        ...formData, 
        price: parseFloat(formData.price), 
        stock: parseInt(formData.stock),
        rating: parseFloat(formData.rating) || 0,
        specifications: {}
      };

      await addProduct(productData);
      alert('Product added successfully');
      navigate('/products');

    } catch (err) {
      alert('Failed to add product. Please try again');
      console.error('Error adding product', err);
    }
  };

  const handleCancel = () => {
    navigate('/products');
  };


  return (
    <div className="form-page">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Product Name:</label>
          <input 
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter product name"
            className={formErrors.name ? 'input-error' : ''}
          />
          {formErrors.name && <span className="error-message">{formErrors.name}</span>}
        </div>


        <div className="form-group">
          <label>Price:</label>
          <input 
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="100.00"
            step='0.01'
            min='0'
            className={formErrors.price ? 'input-error' : ''}
          />
          {formErrors.price && <span className="error-message">{formErrors.price}</span>}
        </div>

        <div className="form-group">
          <label>Brand</label>
          <input 
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            placeholder="Enter brand name"
            className={formErrors.brand ? 'input-error' : ''}
          />
          {formErrors.brand && <span className="error-message">{formErrors.brand}</span>}
        </div>

        <div className="form-group">
          <label>Description</label>
          <input 
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe the product"
            className={formErrors.description ? 'input-error' : ''}
          />
          {formErrors.description && <span className="error-message">{formErrors.description}</span>}
        </div>

        <div className="form-group">
          <label>Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="Phones">Phones</option>
            <option value="Tablets">Tablets</option>
            <option value="Laptops">Laptops</option>
            <option value="Accessories">Accessories</option>
            <option value="Audio">Audio</option>
            <option value="Smart Home">Smart Home</option>
          </select>
        </div>

        <div className="form-group">
          <label>Image URL</label>
          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="https://example.com/product-image.jpg"
          />
        </div>

        <div className="form-group">
          <label>Stock Quantity *</label>
          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            placeholder="25"
            min="0"
            className={formErrors.stock ? 'input-error' : ''}
          />
          {formErrors.stock && <span className="error-message">{formErrors.stock}</span>}
        </div>

        <div className="form-group">
          <label>Rating (0-5)</label>
          <input
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
          {formErrors.rating && <span className="error-message">{formErrors.rating}</span>}
        </div>


        <div className="form-actions">
          <button 
            type="submit" 
            className="btn-submit" 
            disabled={loading}
          >
            {loading ? 'Adding...' : 'Add Product'}
          </button>
          <button 
            type="button" 
            className="btn-cancel" 
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormPage;

//Hii pia ni yangu 