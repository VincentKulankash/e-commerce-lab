import NavBar from './components/NavBar';
import EditProduct from './components/EditProduct';
import LandingPage from './components/LandingPage';
import FormPage from './components/FormPage';
import './App.css';
import ProductPage from './components/ProductPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
    <div className='app'>
      <NavBar/>
      <main className='main-content'>
        <Routes>
          <Route path='/' element={ <LandingPage/>}/>
          <Route path='/products' element={ <ProductPage/>}/>
          <Route path='/add-product' element={ <FormPage/>}/>
          <Route path='/edit-product/:id' element={ <EditProduct/>}/>
        </Routes>
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
