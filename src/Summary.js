import React from "react";
import "./Summary.css";

export default function Summary() {
    return (
    <div className="Summary card">
      <div className="Summary card-body">
        <div className="row">
        <div className="summary-text temp-low col-8">
          <span>4</span>
        </div>
        <div className="summary-text temp-current col-4">
          <span className="temperature">5</span>
          <span className="unit float-right">
            <a href="https://github.com/raheeeg/weather-react" className="active">
              °C
            </a>
            |<a href="https://github.com/raheeeg/weather-react">°F</a>
          </span>
        </div>
        <div className="summary-text temp-high col-8">
          <span id="temp-high">6</span>
        </div>
        <div className="summary-text current-city col-6">Paris</div>
        <div className="summary-text current-date-time col-6">Sunday 27, 19:31</div>
      </div>
    </div>
    </div>
    )
}