import React from "react";
import "./FiveDay.css";

export default function FiveDay(props) {
    return (
        <div className="FiveDay card">
            <div className="row day">
                <div className="col">{props.days[0].dayOne}</div>
                <div className="col">{props.days[0].dayTwo}</div>
                <div className="col">{props.days[0].dayThree}</div>
                <div className="col">{props.days[0].dayFour}</div>
                <div className="col">{props.days[0].dayFive}</div>
            </div>
            <div className="row icon">
                <div >
                    <img src={props.image[0].dayOneIcon} alt="weather-icon" />
                </div>
                <div >
                    <img src={props.image[0].dayTwoIcon} alt="weather-icon" />
                </div>
                <div >
                    <img src={props.image[0].dayThreeIcon} alt="weather-icon" />
                </div>
                <div >
                    <img src={props.image[0].dayFourIcon} alt="weather-icon" />
                </div>
                <div >
                    <img src={props.image[0].dayFiveIcon} alt="weather-icon" />
                </div>
            </div>
            <div className="row five-day-temp">
                <div className="col">{props.data[0].dayOneTemp}°C</div>
                <div className="col">{props.data[0].dayTwoTemp}°C</div>
                <div className="col">{props.data[0].dayThreeTemp}°C</div>
                <div className="col">{props.data[0].dayFourTemp}°C</div>
                <div className="col">{props.data[0].dayFiveTemp}°C</div>
            </div>
           
        </div>
    );
}