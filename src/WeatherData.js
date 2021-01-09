import React from "react";
import Summary from "./Summary";
import Detailed from "./Detailed";
import FiveDay from "./FiveDay";

export default function WeatherData(props) {
    let temp = props.data.temp;
    let tempLow = props.data.low;
    let tempHigh = props.data.high;
    let humidity = props.data.humidity;
    let wind = Math.round(props.data.wind);
    let description = props.data.description;
    if (description) {
    description = description[0].toUpperCase() + description.substring(1);
    }
    let city = props.data.city;
    if (city) {
    city = city.trim();
    city = city[0].toUpperCase() + city.substring(1);
    }

    let sunrise = new Date (props.data.sunrise * 1000);
    let sunriseHour = sunrise.getUTCHours();
    let sunriseMinutes = sunrise.getUTCMinutes();
    if (sunriseHour < 10) {
        sunriseHour = `0${sunriseHour}`;
    }
    if (sunriseMinutes < 10) {
        sunriseMinutes = `0${sunriseMinutes}`;
    }
    let sunriseFormatted = `${sunriseHour}:${sunriseMinutes}`;

    let sunset = new Date (props.data.sunset * 1000);
    let sunsetHour = sunset.getUTCHours();
    let sunsetMinutes = sunset.getUTCMinutes();
    if (sunsetHour < 10) {
        sunsetHour = `0${sunsetHour}`;
    }
    if (sunsetMinutes < 10) {
        sunsetMinutes = `0${sunsetMinutes}`;
    }
    let sunsetFormatted = `${sunsetHour}:${sunsetMinutes}`;

    return (<div className="Weather">
        <Summary city={city} temp={temp} tempLow={tempLow} tempHigh={tempHigh} />
        <Detailed description={description} humidity={humidity} wind={wind} sunrise={sunriseFormatted} sunset={sunsetFormatted} />
        <FiveDay />
    </div>);
}