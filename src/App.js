
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
import CheckoutPage from './pages/CheckoutPage';
import ThankYouPage from './pages/ThankYouPage';



function App() {
  return (
    <div className='bg-white'>
    <Navbar/>
    <Routes>
        <Route path={'/login'} element={<LoginPage />} />
        <Route path={'/'} element={<ProductsPage/>} />
        <Route path={'/products/:id'} element={<ProductDetailsPage/>} />
        <Route path={'/checkout'} element={<CheckoutPage/>} />
        <Route path={'/thankyou'} element={<ThankYouPage/>} />
    </Routes>
    </div>
  );
}

export default App;
