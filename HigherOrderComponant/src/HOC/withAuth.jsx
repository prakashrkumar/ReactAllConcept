import React from 'react'

const withAuth = (WrappedComponent) => {
    return function Protected(props){
      const isLoggedIn=false;  
      if(!isLoggedIn){
        return (
            <h3>Please login to continue...</h3>
        )
      }
      else{
        return <WrappedComponent {...props}/>
      }
    }
  
}

export default withAuth
