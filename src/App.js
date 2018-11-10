import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  constructor() {
    super()
    this.state = {
      input: '',
      randomNumber: '',
      message: '',
      toggleReset: false,
      togglePlay: false,
      toggleSubmit: false
    }
  }

  handleInput = (e) => {
    this.setState({
      input: e.target.value
    })
    console.log(e.target.value)
  }

  componentDidMount = () => {
    this.generateNumber()
  }

  generateNumber = () => {
    let generated = Math.floor((Math.random() * 10) + 1)
    this.setState({
      randomNumber: generated
    })
  }

  displayMessage = () => {
    let userGuess = parseInt(this.state.input)
    if (this.state.input === '') {
      this.setState({
        message: "Please input a value"
      })
    }
    else if (userGuess > 10 || userGuess < 1) {
      this.setState({
        message: "Please input a value between 1 and 10"
      })
    }
    else if (userGuess === this.state.randomNumber) {
      this.setState({
        message: "You are correct!",
        togglePlay: !this.state.togglePlay,
        toggleReset: this.state.toggleReset,
        toggleSubmit: !this.state.toggleSubmit
      })
    } else if (userGuess !== this.state.randomNumber) {
      this.setState ({
        message: "You are incorrect!",
        toggleReset: !this.state.toggleReset,
        togglePlay: this.state.togglePlay,
        toggleSubmit: !this.state.toggleSubmit
      })
    }
  }

  resetInput = () => {
    this.setState({
      input: '',
      message: '',
      toggleReset: false,
      togglePlay: false,
      toggleSubmit: false
    })
    this.generateNumber()
  }

  render() {
    console.log(this.state.randomNumber)

    return (
      <div className="Main">
        <h1>Guess a Number!</h1>
        <div className="MainInput">
          <input disabled={this.state.toggleReset} value={this.state.input} onChange={this.handleInput} />
        </div>
        <div className="MainDisplay">
          {this.state.message}

          {this.state.toggleReset ?
            <div>
              <h2>You guessed: {this.state.input}</h2>
              <h2>Correct number: {this.state.randomNumber} </h2>
              <button onClick={this.resetInput}>Try Again</button>
            </div>
              :
            null
          }

          {this.state.togglePlay ? <button onClick={this.resetInput}>Play Again!</button> : null}
          {!this.state.toggleSubmit ? <button onClick={this.displayMessage}>Submit</button> : null}

        </div>
      </div>
    );
  }
}

export default App;
