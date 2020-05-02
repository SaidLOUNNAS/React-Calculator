import React, { Component } from 'react';
import './App.css';
import ResultComponent from './result';
import KeyPadComponent from "./Button";

class App extends Component {
  constructor() {
    super();

    this.state = {
      result: ""
    }
  }

  onClick = button => {

    if (button === "=") {
      this.calculate()
    }

    else if (button === "C") {
      this.reset()
    }
    else if (button === "CE") {
      this.backspace()
    }

    else {
      this.setState({
        result: this.state.result + button
      })
    }

  };


  calculate = () => {
    var checkResult = ''
    if (this.state.result.includes('--')) {
      checkResult = this.state.result.replace('--', '+')
    }

    else {
      checkResult = this.state.result

      console.log(checkResult);


    }

    try {
      this.setState({
        result: checkResult + "=" + (eval(checkResult) || "") + ""
      })
    } catch (e) {
      this.setState({
        result: "We Can't do that"
      })

    }
  };
  reset = () => {
    this.setState({
      result: ""
    })
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  };

  render() {
    return (
      <div>
        <div className="root">
          <h1>Welcome</h1>
          <ResultComponent result={this.state.result} />
          <KeyPadComponent onClick={this.onClick} />
        </div>
      </div>
    );
  }
}

export default App;
