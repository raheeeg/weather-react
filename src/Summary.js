import React from "react";
import "./Summary.css";
import Search from "./Search";

export default function Summary() {
    return (
    <div className="Summary card">
      <Search />
      <div className="Summary card-body">
        <div className="row">
        <div className="summary-text col-9">
          <ul>
            <li className="temp-low">
              4
            </li>
            <li className="temp-high">
              6
            </li>
          </ul>
        </div>
        <div className="summary-text temp-current col-3">
          <span className="temperature">5</span>
          <span className="unit">
            <a href="https://github.com/raheeeg/weather-react" className="active">
              °C
            </a>
            |<a href="https://github.com/raheeeg/weather-react">°F</a>
          </span>
        </div>
        <div className="summary-text current-city col-6">Paris</div>
        <div className="summary-text current-date-time col-6">Sunday 27, 19:31</div>
      </div>
    </div>
    </div>
    )
}