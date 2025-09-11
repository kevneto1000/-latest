import React from 'react'
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';
import ManualPayment from './components/ManualPayment';
import PaystackPayment from './components/PaystackPayment';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>

        <Routes>
          <Route path='/' element={ <Home /> }/>
          <Route path='/login' element={ <Login /> }/>
          <Route path='/signup' element={ <Signup /> }/>
          <Route path='/cart' element={ <Cart /> }/>
          <Route path='/product/:id' element={ <ProductDetails /> }/>
          <Route path='/manual_payment' element={ <ManualPayment /> }/>
          <Route path='/paystack_payment' element={ <PaystackPayment /> }/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App