import React from 'react'
import './App.css'
import WithoutUseMemo from './WithoutUseMemo'
import WithUseMemo from './WithUseMemo'
import Parent from './Parent'
const App = () => {
  return (
    <div>
      <h1>hii</h1>
      <WithoutUseMemo/>

   <h1>ok</h1>
      <WithUseMemo/>


      <Parent/>
    </div>
  )
}

export default App

