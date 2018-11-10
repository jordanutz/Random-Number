import React, { Component } from 'react';
import './App.scss';
import Input from './components/Input/Input'
import Display from './components/Display/Display'

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
    const {toggleReset, input, message, randomNumber, togglePlay, toggleSubmit} = this.state
    const {resetInput, handleInput, displayMessage} = this

    return (
      <div className="Main">
        <h1>Guess a Number!</h1>
        <div className="MainInput">
          <Input
            toggleReset={toggleReset}
            input={input}
            handleInput={handleInput} />
        </div>
        <div className="MainDisplay">
          <Display
            message={message}
            toggleReset={toggleReset}
            input={input}
            randomNumber={randomNumber}
            resetInput={resetInput}
            togglePlay={togglePlay}
            toggleSubmit={toggleSubmit}
            displayMessage={displayMessage}
            />
        </div>
      </div>
    );
  }
}

export default App;
