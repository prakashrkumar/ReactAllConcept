import React from 'react'
import "./App.css"
import {BrowserRouter,Link,Route ,Routes} from "react-router-dom"
import Home from './Home'
import About from './About'
import Contact from './Contact'
import User from './User'
import NotFound from './NotFound'
import Products from './Products'
import Phone from './Phone'
import Laptop from './Laptop'
const App = () => {
  return (
    <BrowserRouter>
    <h1>React Router Example</h1>

    {/*
    <a href='/'>Home</a>|
    <a href='/about'>About</a>|
    <a href='/contact'>Contact</a>
    
    */}
   <nav>
     <Link to='/'>Home</Link>|
    <Link to='/about'>About</Link>|
    <Link to='/contact'>Contact</Link>|
    <Link to='/product'>Product</Link>|
     <Link to='/user/10'>User</Link>
   </nav>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/product" element={<Products/>}>
        <Route path="phone" element={<Phone/>}/>
          <Route path="laptop" element={<Laptop/>}/>
      
      </Route>
      <Route path="/user/:id" element={<User/>}/>
       <Route path="*" element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App

