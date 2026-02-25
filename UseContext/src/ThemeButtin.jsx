import React from 'react'
import { themeContext } from './App'
import { useContex } from 'react';

const ThemeButtin = () => {
    const {theme,setTheme}=useContex(themeContext)
  return (
    <div>
      <button
      onClick={()=>setTheme(theme === "light" ? "dark" :"light")}
      style={{
        backgroundColor:theme ==="light" ? "#fff" :"#333",
        color:theme ==="light" ? "#000" :"#fff"
      }}
      >Current theme : {theme}</button>
    </div>
  )
}

export default ThemeButtin
