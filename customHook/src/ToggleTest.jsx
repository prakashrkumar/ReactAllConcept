import React from 'react'
import useToggle from './hooks/useToggle'

const ToggleTest = () => {
    const [isOpen,toggleOpen]=useToggle()
    const [isTest,toggleTest]=useToggle()
  return (
   <div>
     <div>
     <button onClick={toggleOpen}>Toggle</button> 
     {isOpen && <p>Hello, this is visible</p>}
    </div>
     <div>
     <button onClick={toggleTest}>Toggle</button> 
     {isTest && <p>Hello, this is Prakash kumar</p>}
    </div>
   </div>
  )
}

export default ToggleTest

