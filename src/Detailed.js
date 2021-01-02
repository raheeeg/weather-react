import React from "react";
import "./Detailed.css";

export default function Detailed() {
        return (
        <div className="Detailed card">
            <div className="row">
                <div className="weather col-6">
                Sunny, patchy clouds<br />Humidity: 10%<br />Wind: 2mph
            </div>
            <div className="sun col-6">
                Sunrise: 06:57<br />Sunser: 18:48
            </div>
        </div>
    </div>
    );
}