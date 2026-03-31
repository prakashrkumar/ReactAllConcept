import React from 'react'
import UserProfile from './UserProfile'
import ErrorBoundry from './ErrorBoundry';

const App = () => {
  const userData={
    name:"Prakash kumar",
    age:25
  };
   const userData1=null
  return (
    <div>
      <h1>Hello bro kay hal </h1>
    {/*<ErrorBoundry> */}  
       <UserProfile userData={userData}/>
    {/*</ErrorBoundry> */}
     {/*<ErrorBoundry fallback={<p>Error in User Profile</p>}> */} 
      
        <UserProfile userData={userData1}/>
     {/*  </ErrorBoundry>*/}
      
    </div>
  )
}

export default App




