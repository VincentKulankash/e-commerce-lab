import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import ProductPage from './components/ProductPage';
import FormPage from './components/FormPage';
import EditProduct from './components/EditProduct';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/add-product" element={<FormPage />} />
            <Route path="/products/:id/edit" element={<EditProduct />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App
