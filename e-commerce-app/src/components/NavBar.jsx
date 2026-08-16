import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-container'>
        <Link to="/" className='nav-logo'>
          E-Commerce Admin
        </Link>
      </div>

      <ul className='nav-menu'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/add-product">Add Product</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

//Hii ni yangu usiguze 