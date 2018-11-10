import React from 'react'
import './Input.scss'

const Input = (props) => {
  console.log(props)
  return (
    <div className="Input">
      <input
        disabled={props.toggleReset}
        value={props.input}
        onChange={props.handleInput}
        />
    </div>
  )
}

export default Input
