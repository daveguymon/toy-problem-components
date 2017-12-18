import React from 'react';
import './../styles/style.css';

export default function ReausableInput (props) {
  return (
    <input
      placeholder={props.text} value={props.input} onChange={props.handleInputChange}/>
  )
}
