


import React from 'react'
import { useContext } from 'react';
import { AuthContext } from './AuthContext';

const Navbar = () => {
    const {isLoggedIn,login,logout}=useContext(AuthContext)
  return (
    <nav>
      {
        isLoggedIn?(
            <button onClick={logout}>Logout</button>
        ):(
        <button onClick={login}>Logint</button>
        )
      }
    </nav>
  )
}

export default Navbar
