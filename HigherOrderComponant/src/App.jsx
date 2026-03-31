import React from 'react'

import Greeting from './Greeting'
import GreetingWithStyle from './HOC/GreetingWithStyle'
import PostListWithData from './HOC/PostListWithData'
import withAuth from './HOC/withAuth'
import Dashboard from './HOC/Dashboard'








const ProtectedDashboard=withAuth(Dashboard)
const App = () => {
  return (
    <div>
      
      <Greeting name={"prakash"}/>
      <GreetingWithStyle name="Ramesh"/>


      <PostListWithData/>
      <ProtectedDashboard/>
    </div>
  )
}

export default App

