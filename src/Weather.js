import React from "react";
import axios from 'axios';
import Loader from 'react-loader-spinner';

export default function Weather(props) {
    let apiKey = "14aa63322308690f6e8ffb6257ee41e5";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getWeather);

    function getWeather(response) {
        alert(`The weather in ${props.city} is ${Math.round(response.data.main.temp)}°C`)
    }

    return (
        <Loader
        type="Grid"
        color="black"
        height={80}
        width={80} 
        />
    );
}