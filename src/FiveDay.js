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
            <div className="row five-day-temp">
                <div className="col">{props.data[0].dayOneHigh}°C</div>
                <div className="col">{props.data[0].dayTwoHigh}°C</div>
                <div className="col">{props.data[0].dayThreeHigh}°C</div>
                <div className="col">{props.data[0].dayFourHigh}°C</div>
                <div className="col">{props.data[0].dayFiveHigh}°C</div>
            </div>
            <div className="row icon">
                <div className="col">⛅</div>
                <div className="col">⛅</div>
                <div className="col">⛅</div>
                <div className="col">⛅</div>
                <div className="col">⛅</div>
            </div>
            <div className="row five-day-temp">
                <div className="col">{props.data[0].dayOneLow}°C</div>
                <div className="col">{props.data[0].dayTwoLow}°C</div>
                <div className="col">{props.data[0].dayThreeLow}°C</div>
                <div className="col">{props.data[0].dayFourLow}°C</div>
                <div className="col">{props.data[0].dayFiveLow}°C</div>
            </div>
           
        </div>
    );
}