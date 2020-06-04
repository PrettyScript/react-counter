import React, { Component } from "react";
import "../Counter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

export default class Counter extends Component {
  state = {
    count: 0,
    animate: false,
    fade: false,
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
    const { fade } = this.state;
    return (
      <div className="main-container">
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
          <label onClick={this.handleCustomIncrement}>
            + {this.state.incrementValue}
          </label>
        </div>
        <div>
          <input
            id="custom-input-value"
            placeholder="Enter custom increment value"
            onChange={this.handleCustomValues}
            type="number"
          />
        </div>
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
