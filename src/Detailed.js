import React from "react";
import "./Detailed.css";

export default function Detailed(props) {
        return (
        <div className="Detailed card">
            <div className="row">
                <div className="weather col-6">
                {props.description}<br />Humidity: {props.humidity}%<br />Wind: {props.wind}mph
            </div>
            <div className="sun col-6">
                Sunrise: {props.sunrise}<br />Sunset: {props.sunset}
            </div>
        </div>
    </div>
    );
}