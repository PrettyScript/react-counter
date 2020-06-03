import React, { Component } from "react";
import "../Counter.css";
import { motion } from "framer-motion";

export default class ButtonPad extends Component {
  state = {
    count: 0
  };

  handleIncrement = () => {
    // console.log("Increment");
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    // console.log("Decrement");
    this.setState({ count: this.state.count - 1 });
  };

  handleReset = () => {
    // console.log("Reset");
    this.setState({ count: 0 });
  };

  handleDoubleIncrement = () => {
    this.setState({ count: this.state.count + 2 });
  };

  displayCount = () => this.state.count;

  render() {
    return (
      <div className='counter-display'>
        <label onClick={this.handleIncrement}>+</label>
        <label onClick={this.handleDoubleIncrement}>+2</label>
        <div className='number'>
          <motion.div
            animate={{ scale: 2, y: -30, opacity: 0.0 }}
            transition={{ duration: 0.5 }}
          >
            <h2>{this.displayCount()}</h2>
          </motion.div>
        </div>
        <label onClick={this.handleDecrement}>-</label>
        <label onClick={this.handleReset}>Reset</label>
      </div>
    );
  }
}
