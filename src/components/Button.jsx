import React from 'react'

const Button = ({type, className, children, onClick}) => {
  return (
    <div className={className} type={type} onClick={onClick}>{children}</div>
  )
}

export default Button