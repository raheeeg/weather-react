import React from "react";

export default function DateTime() {
    let now = new Date();
    let days = ["Sunday", "Monday", "Tueday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tueday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let currentDay = days[now.getDay()];
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let currentMonth = months[now.getMonth()];
    let currentDate = now.getDate();
    let currentHour = now.getHours();
    if (currentHour < 10) {
        currentHour = `0${currentHour}`;
    }
    let currentMin = now.getMinutes();
    if (currentMin < 10) {
        currentMin = `0${currentMin}`;
    }

    return (
        <div>{currentDay} {currentDate} {currentMonth}, {currentHour}:{currentMin}</div>        
    );
}