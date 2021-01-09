import React, { useState } from "react";
import "./Search.css";
import axios from 'axios';
import WeatherData from "./WeatherData";

export default function Search() {
    const [city, setCity] = useState(`Liverpool`);
    const [weather, setWeather] = useState({});

    function getWeather(response) {
        console.log(response);
        setWeather({
            temp: Math.round(response.data.main.temp),
            low: Math.round(response.data.main.temp_min),
            high: Math.round(response.data.main.temp_max),
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            description: response.data.weather[0].description,
            sunrise: response.data.sys.sunrise,
            sunset: new Date(response.data.sys.sunset * 1000),
            city: response.data.name
        });
    }

    function updateCity(event) {
        event.preventDefault();
        setCity(event.target.value);
    }

    function handlePosition(event) {
        event.preventDefault();
        navigator.geolocation.getCurrentPosition(getLocation);
    }

    let apiKey = "14aa63322308690f6e8ffb6257ee41e5";
    function getLocation(position) {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(getWeather);
    }
    function handleSumbit(event) {
        event.preventDefault();
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(getWeather);
    }

    let form = (
        <form className="Search" onSubmit={handleSumbit} >
                <input className="search-form" type="search" placeholder="Search city" onChange={updateCity} />
                <input className="search-button" type="submit" value="Search" />
                <button className="location-button" onClick={handlePosition}>Current city</button>
        </form> 
    )

    return (
        <div>
            {form}
            <WeatherData data={weather} />
        </div>
    );
}