const API_URL = "http://localhost:5000";

const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || `HTTP error! status: ${response.status}`);
  }
  return response.json();
};

export const api = {
  getProducts: () => fetch(`${API_URL}/products`).then(handleResponse),

  getProduct: (id) => fetch(`${API_URL}/products/${id}`).then(handleResponse),

  addProduct: (product) =>
    fetch(`${API_URL}/products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    }).then(handleResponse),

  updateProduct: (id, updates) =>
    fetch(`${API_URL}/products/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updates),
    }).then(handleResponse),

  replaceProduct: (id, product) =>
    fetch(`${API_URL}/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    }).then(handleResponse),

  deleteProduct: (id) =>
    fetch(`${API_URL}/products/${id}`, {
      method: "DELETE",
    }).then(() => ({ success: true })),

  searchProducts: (query) =>
    fetch(`${API_URL}/products?q=${encodeURIComponent(query)}`).then(
      handleResponse,
    ),

  filterByCategory: (category) =>
    fetch(`${API_URL}/products?category=${category}`).then(handleResponse),

  filterByBrand: (brand) =>
    fetch(`${API_URL}/products?brand=${brand}`).then(handleResponse),

  filterByPriceRange: (min, max) =>
    fetch(`${API_URL}/products?price_gte=${min}&price_lte=${max}`).then(
      handleResponse,
    ),

  sortProducts: (field, order = "asc") =>
    fetch(`${API_URL}/products?_sort=${field}&_order=${order}`).then(
      handleResponse,
    ),

  advancedSearch: (params) => {
    const queryParams = new URLSearchParams(params).toString();
    return fetch(`${API_URL}/products?${queryParams}`).then(handleResponse);
  },
};

export default api;
