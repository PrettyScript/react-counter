import React, { Component } from "react";
import "./App.css";
import Counter from "./Components/Counter";

export default class App extends Component {
  state = {
    count: 0,
    animate: false,
    incrementValue: 2
  };

  handleIncrement = () => {
    this.handleAnimationAndValueChange(1, "up");
  };

  handleDecrement = () => {
    this.handleAnimationAndValueChange(-1, "down");
  };

  handleReset = () => {
    this.setState({ count: 0 });
  };

  handleCustomIncrement = () => {
    this.handleAnimationAndValueChange(this.state.incrementValue, "up");
  };

  displayCount = () => this.state.count;

  handleAnimationAndValueChange = (inc, dir) => {
    document.getElementById(
      "number"
    ).className = `counter-text animate-number-${dir}`;
    setTimeout(() => {
      this.setState({ count: this.state.count + inc });
      document.getElementById("number").className = "counter-text";
    }, 250);
  };

  handleCustomValues = e => {
    this.setState({
      incrementValue: e.target.value == "" ? 2 : parseInt(e.target.value)
    });
  };

  render() {
    const {
      handleIncrement,
      handleDecrement,
      handleReset,
      handleCustomValues,
      handleCustomIncrement,
      handleAnimationAndValueChange,
      displayCount,
      count,
      animate,
      incrementValue
    } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h2>Counter App</h2>
        </header>
        <Counter
          count={count}
          animate={animate}
          incrementValue={incrementValue}
          onDisplayCount={displayCount}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onReset={handleReset}
          onCustomValues={handleCustomValues}
          onCustomeIncrement={handleCustomIncrement}
          onAnimation={handleAnimationAndValueChange}
        />
      </div>
    );
  }
}
