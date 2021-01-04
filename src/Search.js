import React, { useState } from "react";
import "./Search.css";
import axios from 'axios';
import WeatherData from "./WeatherData";

export default function Search() {
    const [city, setCity] = useState("Liverpool");
//    let [list, setList] = useState(false);
    const [weather, setWeather] = useState({});

    function getWeather(response) {
    //    setList(true);
        setWeather({
            temp: Math.round(response.data.main.temp),
            low: Math.round(response.data.main.temp_min),
            high: Math.round(response.data.main.temp_max),
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            description: response.data.weather[0].description,
            date: new Date(response.data.dt * 1000)
        });
    }

    function updateCity(event) {
        event.preventDefault();
        if (city) {
            setCity(event.target.value);
        } else {
            setCity(navigator.geolocation.getCurrentPosition());
        }
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
                <button className="location-button" onSubmit={handleSumbit}>Current city</button>
        </form> 
    )

//    if (list) {
    return (
        <div>
            {form}
            <WeatherData city={city} data={weather} />
        </div>
    );
//    } else {
//        return (
//        <div>
//            {form}   
//        </div>
//        );
//    }
    
}