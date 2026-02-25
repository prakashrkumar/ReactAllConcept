
import React from 'react'
import './First.css'
import style from "./First.module.css"

const First = () => {
    const styling={
        backgrounColor:"pink",
        forntSize:"20px"
    }
  return (
    <div className='pk'>
      wow nice method
      <h1 style={styling}>chalo patna</h1>
      <h1 style={{fontSize:"30px",backgroundColor:"pink"}}>Rupam is most beautiful girl</h1>
      {/*<h2 className='Rupam'>hello bro</h2>*/}
      <h2 className={style.Rupam}>es me ye coclor nahi hoga</h2>

    </div>
  )
}

export default First
