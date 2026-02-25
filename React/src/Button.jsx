import React from 'react'

const Button = ({label,handleClick}) => {
  return (
    <div>
      <buttonn onClick={handleClick}>{label}</buttonn>
    </div>
  )
}

export default Button
