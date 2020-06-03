import React, { Component } from "react";
import "../Counter.css";

//TODO:
// - delete framer motion
// - delete styled coponent
// - refactor code to use hooks

export default class ButtonPad extends Component {
  state = {
    count: 0,
    animate: false
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

  handleDoubleIncrement = () => {
    this.handleAnimationAndValueChange(2, "up");
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

  render() {
    return (
      <div className='counter-display'>
        <label onClick={this.handleIncrement}>+</label>
        <label onClick={this.handleDoubleIncrement}>+2</label>
        <div className='number'>
          <h2 id='number' onChange={this.handleAnimationAndValueChange}>
            {this.displayCount()}
          </h2>
        </div>
        <label onClick={this.handleDecrement}>-</label>
        <label onClick={this.handleReset}>Reset</label>
      </div>
    );
  }
}
