
import { Route, Routes } from 'react-router-dom';



import './App.css';
import LoginPage from './pages/LoginPage';
import ProductsPage from './pages/ProductsPage';

import ProductDetailsPage from './pages/ProductDetailsPage';
import Navbar from './components/Navbar';
import CheckoutPage from './pages/CheckoutPage';
import ThankYouPage from './pages/ThankYouPage';
import Home from './pages/Home';
import Footer from './components/Footer';



function App() {
  return (
    <div className='bg-white'>
    <Navbar/>
    <Routes>
        <Route path={'/login'} element={<LoginPage />} />
        <Route path={'/'} element={<Home/>} />
        <Route path={'/products'} element={<ProductsPage/>} />
        <Route path={'/products/:id'} element={<ProductDetailsPage/>} />
        <Route path={'/checkout'} element={<CheckoutPage/>} />
        <Route path={'/thankyou'} element={<ThankYouPage/>} />
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
