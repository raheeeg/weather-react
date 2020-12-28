import React from "react";
import axios from 'axios';

export default function Weather(props) {
    let apiKey = "14aa63322308690f6e8ffb6257ee41e5";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getWeather);

    function getWeather(response) {
        alert(`The weather in ${props.city} is ${Math.round(response.data.main.temp)}°C`)
    }

    return (
        <div className="Weather card">
            <div class="row">
                <div class="weather col-6">
                Sunny, patchy clouds<br />Humidity: 10%<br />Wind: 2mph
            </div>
            <div class="sun col-6">
                Sunrise: 06:57<br />Solar noon: 12:50<br />Sunser: 18:48
            </div>
        </div>
    </div>
    );
}