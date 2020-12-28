import React from "react";
import "./Summary.css";

export default function Summary() {
    return (
        <div className="Summary card">
                <div className="Summary card-body">
      <div class="row">
        <div class="summary-text temp-low col-9">
          <span>4</span>
        </div>
        <div class="summary-text temp-current col-3">
          <span class="temperature">5</span>
          <span class="unit float-right">
            <a href="#" class="active">
              °C
            </a>
            |<a href="#">°F</a>
          </span>
        </div>
        <div class="summary-text temp-high col-9">
          <span id="temp-high">6</span>
        </div>
        <div class="summary-text current-city col-6">Paris</div>
        <div class="summary-text current-date-time col-6">Sunday 27, 19:31</div>
      </div>
    </div>
        </div>
    )
}