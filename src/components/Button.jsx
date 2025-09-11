import React from 'react'

const Button = ({name, className, children, onClick}) => {
  return (
    <button className={className} onClick={onClick}>{name?name:children}</button>
  )
}

export default Button