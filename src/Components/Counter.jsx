import React, { Component } from "react";
import "../Counter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

export default class Counter extends Component {
  state = {
    count: 0,
    animate: false,
    fade: false
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
    const { fade } = this.state;
    return (
      <div className="counter-display">
        <label onClick={this.handleReset}>Reset</label>
        <FontAwesomeIcon
          className="font-awesome"
          icon={faMinus}
          onClick={this.handleDecrement}
        />
        <div className="number">
          <h2 id="number" onChange={this.handleAnimationAndValueChange}>
            {this.displayCount()}
          </h2>
        </div>
        <FontAwesomeIcon
          className="font-awesome"
          icon={faPlus}
          onClick={this.handleIncrement}
        />
        <label onClick={this.handleDoubleIncrement}>+ 2</label>
      </div>
    );
  }
}

// <button
//           onClick={() => this.setState({ fade: true })}
//           onAnimationEnd={() => this.setState({ fade: false })}
//           className={fade ? "fade" : ""}
//         >
//           Click me!
//         </button>
