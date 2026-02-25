import React from 'react'
import {createContext,useState} from "react"
import Parent from './Parent'
import "./App.css"
import ThemeButtin from './ThemeButtin'
import { AuthContext, AuthProvider } from './Auth/AuthContext'
import Navbar from './Auth/Navbar'


//export const NameContext=createContext() 
//export const themeContext=createContext()


const App = () => {
  //const [theme,setTheme] = useState("light")
  /*
  const user={
    name:"prakash",
    role:"Developer"
  }
    */
  return (
    <div>
     {/*
     // first code kiya gaya tha
      <NameContext.Provider value={user}>
        <Parent/> 
      </NameContext.Provider>
     */}
     {/* 
     <themeContext.Provider value={{theme,setTheme}}>
        <ThemeButtin/> 
      </themeContext.Provider>
     
     */}
     <AuthProvider>
      <Navbar/>
     </AuthProvider>
      
    
    </div>
  )
}

export default App












