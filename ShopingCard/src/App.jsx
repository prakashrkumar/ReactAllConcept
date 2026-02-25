import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import CartPage from './Pages/CartPage';
import Navbar from './Pages/Navbar';


const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/cart' element={<CartPage/>}/>


    </Routes>
    
    
    </BrowserRouter>
  )
}

export default App

