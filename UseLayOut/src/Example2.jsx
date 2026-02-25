import React, { useRef } from 'react'
import {useLayoutEffect} from 'react'
const Example2 = () => {
    const boxRef=useRef(null)

 useLayoutEffect(()=>{
  const el=boxRef.current;
  const width=el.offsetWidth;
  el.style.transition=`translateX(${width}px)`
 },[])
 
  return (
   <div>
     <div ref={boxRef} style={{padding:"30px", background:"skyblue", transition:"3s"}}>
      Animated Box
    </div>
    
   </div>
  )
}

export default Example2
