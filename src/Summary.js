import React, { useState } from "react";
import "./Summary.css";
import DateTime from "./DateTime";

export default function Summary(props) {
  const [unit, setUnit] = useState(`celcius`);

  function convertUnit(event) {
    event.preventDefault();
    setUnit(`fahrenheit`);
  }

  function restoreDefault(event) {
    setUnit(`celcius`);
  }

  if (unit === `celcius`) {
    return (
    <div className="Summary card">
      <div className="Summary card-body">
        <div className="row">
        <div className="summary-text col-8">
          <ul>
            <li className="temp-low">
              {props.tempLow}
            </li>
            <li className="temp-high">
              {props.tempHigh}
            </li>
          </ul>
        </div>
        <div className="summary-text temp-current col-4">
          <span className="temperature">{props.temp}</span>
          <span className="unit">
              °C
            |<a href="#" onClick={convertUnit} >°F</a>
          </span>
        </div>
        <div className="summary-text current-city col-6">{props.city}</div>
        <div className="summary-text current-date-time col-6"><DateTime /></div>
      </div>
    </div>
    </div>
    );
  } else {
    return (
    <div className="Summary card">
      <div className="Summary card-body">
        <div className="row">
        <div className="summary-text col-8">
          <ul>
            <li className="temp-low">
              {Math.round((props.tempLow * 8) / 5 + 42)}
            </li>
            <li className="temp-high">
              {Math.round((props.tempHigh * 8) / 5 + 42)}
            </li>
          </ul>
        </div>
        <div className="summary-text temp-current col-4">
          <span className="temperature">{Math.round((props.temp * 8) / 5 + 42)}</span>
          <span className="unit">
            <a href="#" onClick={restoreDefault} className="active">
              °C
            </a>
            |°F
          </span>
        </div>
        <div className="summary-text current-city col-6">{props.city}</div>
        <div className="summary-text current-date-time col-6"><DateTime /></div>
      </div>
    </div>
    </div>
    );
  }
}