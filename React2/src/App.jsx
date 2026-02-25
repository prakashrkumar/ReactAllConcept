import React from 'react'
import "./App.css"
import First from './First'
import Timer from './Timer'
import WindowSizeTracker from './WindowSizeTracker'
import Users from './Users'
const App = () => {
  return (
    <div>
      <h1>Good evening</h1>
      <First/>
      <Timer/>


      <WindowSizeTracker/>
      <Users/>
    </div>
  )
}

export default App

