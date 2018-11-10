import React from 'react'
import './Display.scss'

const Display = (props) => {
  console.log(props)
  return (
    <div className="Display">
      <div className="DisplayMessage">
        {props.message}
      </div>

      {props.toggleReset ?
        <div className="MainReset">
          <h2>You guessed: {props.input}</h2>
          <h2>Correct number: {props.randomNumber} </h2>
          <button onClick={props.resetInput}>Try Again</button>
        </div>
          :
        null
      }

      {props.togglePlay ? <button onClick={props.resetInput}>Play Again!</button> : null}
      {!props.toggleSubmit ? <button onClick={props.displayMessage}>Submit</button> : null}
    </div>
  )
}


export default Display
