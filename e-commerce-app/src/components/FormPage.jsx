const FormPage = () => {
  return (
    <div>
      <h2>Add New Product</h2>
      <form>
        <div>
          <label>Product Name:</label>
          <input type="text" />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default FormPage;

//Hii pia ni yangu 