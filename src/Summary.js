import React from "react";
import "./Summary.css";
import DateTime from "./DateTime";

export default function Summary(props) {
    return (
    <div className="Summary card">
      <div className="Summary card-body">
        <div className="row">
        <div className="summary-text col-9">
          <ul>
            <li className="temp-low">
              {props.tempLow}
            </li>
            <li className="temp-high">
              {props.tempHigh}
            </li>
          </ul>
        </div>
        <div className="summary-text temp-current col-3">
          <span className="temperature">{props.temp}</span>
          <span className="unit">
            <a href="https://github.com/raheeeg/weather-react" className="active">
              °C
            </a>
            |<a href="https://github.com/raheeeg/weather-react">°F</a>
          </span>
        </div>
        <div className="summary-text current-city col-6">{props.city}</div>
        <div className="summary-text current-date-time col-6"><DateTime /></div>
      </div>
    </div>
    </div>
    )
}