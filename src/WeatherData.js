import React from "react";
import Summary from "./Summary";
import Detailed from "./Detailed";
import FiveDay from "./FiveDay";

export default function WeatherData(props) {
    let temp = props.data.temp;
    let tempLow = props.data.low;
    let tempHigh = props.data.high;
    let humidity = props.data.humidity;
    let wind = props.data.wind;
    let description = props.data.description;
    let date = props.data.date;
    let city = props.data.city;
    if (city) {
    city = city.trim();
    city = city[0].toUpperCase() + city.substring(1);
    }

    return (<div className="Weather">
        <Summary city={city} temp={temp} tempLow={tempLow} tempHigh={tempHigh} date={date}/>
        <Detailed description={description} humidity={humidity} wind={wind} />
        <FiveDay />
    </div>);
}