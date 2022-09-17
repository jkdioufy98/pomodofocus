import React from 'react'
import './Button.css'

const Button = ({name}) => {
    console.log(name);

  return (
    <div className='btn-class'>
        <input type="button" value={name} />
    </div>
  )
}

export default Button;