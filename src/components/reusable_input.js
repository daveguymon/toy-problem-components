import React from 'react';
import './../styles/style.css';

export default function ReausableInput (props) {
  return (
    <div>
    <input
      placeholder={props.text} value={props.input} onChange={props.handleInputChange}/>
      <button onClick={props.handleClick}>
        {props.btnLabel}
      </button>
    </div>
  )
}
