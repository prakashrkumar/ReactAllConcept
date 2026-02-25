import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate=useNavigate()
    const goToAbout=()=>{
      navigate("/about")
    
    }
  return (
    <div>
      <h1>Wellcom to Home page</h1>
      <button onClick={goToAbout}>Go to  about</button>
    </div>
  )
}

export default Home
