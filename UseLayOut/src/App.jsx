import React from 'react'
import "./App.css"
import Test from './Test'
import Example from './Example2'
import Parent from '../../useCallBack/src/Parent'
import Example2 from './Examople1'
import Chat from './Chat'

const App = () => {
  return (
    <div>
      <h1>All most end Hook</h1>
    
        <Parent/>
      <Test/>
      <Example2/>

      <Example/>


      <Chat/>
    </div>
  )
}

export default App

