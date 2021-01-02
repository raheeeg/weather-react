import React, { useState } from "react";
import "./Search.css";
import axios from 'axios';

export default function Search() {
    let [city, setCity] = useState(null);
    let [list, setList] = useState(false);
    let [weather, setWeather] = useState({});

    function getWeather(response) {
        setList(true);
        setWeather({
            temp: response.data.main.temp,
            low: response.data.main.temp_min,
            high: response.data.main.temp_max,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            description: response.data.weather[0].description
        });
        console.log(response.data);
    }

    function updateCity(event) {
        event.preventDefault();
        setCity(event.target.value);
    }

    function handleSumbit(event) {
        event.preventDefault();
        let apiKey = "14aa63322308690f6e8ffb6257ee41e5";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(getWeather);
    }

    let form = (
        <form className="Search" onSubmit={handleSumbit} >
                <input className="search-form" type="search" placeholder="Search city" onChange={updateCity} />
                <input className="search-button" type="submit" value="Search" />
                <button className="location-button">Current city</button>
        </form> 
    )

    if (list) {
    return (
        <div>
            {form}
            {weather.temp}
        </div>
    );
    } else {
        return (
        <div>
            {form}
            
        </div>
        );
    }
    
}