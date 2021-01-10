import React, { useState } from "react";
import "./Search.css";
import axios from 'axios';
import WeatherData from "./WeatherData";
import Forecast from "./Forecast";

export default function Search() {
    const [city, setCity] = useState(null);
    const [weather, setWeather] = useState({});
    const [forecast, setForecast] = useState({});

    function getWeather(response) {
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

    function getForecast(response) {
        setForecast({
            dayOneTemp: Math.round(response.data.list[7].main.temp_min),
            dayTwoTemp: Math.round(response.data.list[15].main.temp_min),
            dayThreeTemp: Math.round(response.data.list[23].main.temp_min),
            dayFourTemp: Math.round(response.data.list[31].main.temp_min),
            dayFiveTemp: Math.round(response.data.list[39].main.temp_min),
            dayOneIcon: `https://openweathermap.org/img/wn/${response.data.list[0].weather[0].icon}@2x.png`,
            dayTwoIcon: `https://openweathermap.org/img/wn/${response.data.list[15].weather[0].icon}@2x.png`,
            dayThreeIcon: `https://openweathermap.org/img/wn/${response.data.list[23].weather[0].icon}@2x.png`,
            dayFourIcon: `https://openweathermap.org/img/wn/${response.data.list[31].weather[0].icon}@2x.png`,
            dayFiveIcon: `https://openweathermap.org/img/wn/${response.data.list[39].weather[0].icon}@2x.png`,
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


    let apiKey = "c4c23d1ca620276b9ce0b65fc26ed639";
    function getLocation(position) {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(getWeather);
        apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(getForecast);
    }

    function handleSumbit(event) {
        event.preventDefault();
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(getWeather);
        apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(getForecast);
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
            <Forecast data={forecast} />
        </div>
    );
}