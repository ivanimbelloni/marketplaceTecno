import './styles/App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Error404Page } from './views/Error404Page'
import NavBar from './components/NavBar';
import { HomePage } from './views/HomePage';
import { ContactoPage } from './views/ContactoPage';
import { ProductDetailPage } from './views/ProductDetailPage';
import { CartProvider } from './context/CartContext';
import { CheckoutPage } from './views/CheckoutPage';
import { Footer } from './components/Footer';
import { CartPage } from './views/CartPage';

function App() {
  return (
    <>
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/:id' element={<ProductDetailPage/>} />
          <Route path='/products' element={<HomePage/>} />
          <Route path='/products/:category' element={<HomePage/>} />
          <Route path='/contacto' element={<ContactoPage/>} />
          <Route path="/checkout" element={<CheckoutPage/>} />
          <Route path="/cart" element={<CartPage/>} />
          <Route path='*' element={<Error404Page/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </CartProvider>
    </>
  )
}

export default App
