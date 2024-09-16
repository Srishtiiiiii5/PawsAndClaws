
import { Route, Routes } from 'react-router-dom';



import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProductsPage from './pages/ProductsPage';
import AllProductsPage from './pages/AllProductsPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CartPage from './pages/CartPage';
import ProfilePage from './pages/ProfilePage';
import Navbar from './components/Navbar';



function App() {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/login'} element={<LoginPage />} />
        <Route path={'/products'} element={<ProductsPage/>} />
        <Route path={'/products'} element={<AllProductsPage/>} />
        <Route path={'/products/:id'} element={<ProductDetailsPage/>} />
        <Route path={'/account/cart'} element={<CartPage/>} />
        <Route path={'/account/profile'} element={<ProfilePage/>} />
    </Routes>
    </>
  );
}

export default App;
