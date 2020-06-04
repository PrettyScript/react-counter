import React from "react";
import "../Counter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

export default function Counter() {
  const {
    onDisplayCount,
    onIncrement,
    onDecrement,
    onReset,
    onCustomValues,
    onCustomeIncrement,
    onAnimation,
    incrementValue
  } = this.props;
  return (
    <div className="main-container">
      <div className="counter-display">
        <label onClick={onReset}>Reset</label>
        <FontAwesomeIcon
          className="font-awesome"
          icon={faMinus}
          onClick={onDecrement}
        />
        <div className="number">
          <h2 id="number" onChange={onAnimation}>
            {onDisplayCount}
          </h2>
        </div>
        <FontAwesomeIcon
          className="font-awesome"
          icon={faPlus}
          onClick={onIncrement}
        />
        <label onClick={onCustomeIncrement}>+ {incrementValue}</label>
      </div>
      <div>
        <input
          id="custom-input-value"
          placeholder="Enter custom increment value"
          onChange={onCustomValues}
          type="number"
        />
      </div>
    </div>
  );
}
