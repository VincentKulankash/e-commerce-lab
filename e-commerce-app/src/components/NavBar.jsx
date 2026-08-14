import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <h2>E-Commerce Admin</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/add-product">Add Product</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;

//Hii ni yangu usiguze 