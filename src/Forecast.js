import React from "react";
import FiveDay from "./FiveDay";

export default function Forecast(props) {
    let forecast = {
    dayOneLow: props.data.dayOneLow,
    dayTwoLow: props.data.dayTwoLow,
    dayThreeLow: props.data.dayThreeLow,
    dayFourLow: props.data.dayFourLow,
    dayFiveLow: props.data.dayFiveLow,

    dayOneHigh: props.data.dayOneHigh,
    dayTwoHigh: props.data.dayTwoHigh,
    dayThreeHigh: props.data.dayThreeHigh,
    dayFourHigh: props.data.dayFourHigh,
    dayFiveHigh: props.data.dayFiveHigh
    }

    let now = new Date();
    let days = ["Sunday", "Monday", "Tueday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tueday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let nextFiveDays = {
        dayOne: days[now.getDay()+1],
        dayTwo: days[now.getDay()+2],
        dayThree: days[now.getDay()+3],
        dayFour: days[now.getDay()+4],
        dayFive: days[now.getDay()+5]
    }
    

    return <div><FiveDay data={[forecast]} days={[nextFiveDays]} /></div>;
}