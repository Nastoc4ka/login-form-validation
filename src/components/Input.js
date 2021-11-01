import React from 'react';
import './input.css';

const Input = ({message, ...props}) => {
  return <>
    <div className='inputWrapper'>
      <input
        className='input'
        {...props}
      />
    </div>
    <div className='messageWrapper'>
      {!!message && <p className='message'>{message}</p>}
    </div>
  </>
}

export default Input