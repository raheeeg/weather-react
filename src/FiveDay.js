import React from "react";
import "./FiveDay";

export default function FiveDay() {
    return (
        <div className="FiveDay card">
            <div className="row day">
                <div className="col">Monday</div>
                <div className="col">Tuesday</div>
                <div className="col">Wednesday</div>
                <div className="col">Thursday</div>
                <div className="col">Friday</div>
            </div>
            <div className="row five-day-temp">
                <div className="col">6°C</div>
                <div className="col">6°C</div>
                <div className="col">6°C</div>
                <div className="col">6°C</div>
                <div className="col">6°C</div>
            </div>
            <div className="row icon">
                <div className="col">⛅</div>
                <div className="col">⛅</div>
                <div className="col">⛅</div>
                <div className="col">⛅</div>
                <div className="col">⛅</div>
            </div>
            <div className="row five-fay-temp">
                <div className="col">3°C</div>
                <div className="col">3°C</div>
                <div className="col">3°C</div>
                <div className="col">3°C</div>
                <div className="col">3°C</div>
            </div>
           
        </div>
    );
}