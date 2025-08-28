import React from 'react'
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';

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
          <Route path='/product' element={ <ProductDetails /> }/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App