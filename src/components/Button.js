import React from 'react';
import './button.css';

const Button = ({text, ...props}) => {
  return <div className='buttonWrapper'>
    <button
      className={`button ${props.disabled && `disabled`}`}
      {...props}
    >
      {text}
    </button>

  </div>
}

export default Button