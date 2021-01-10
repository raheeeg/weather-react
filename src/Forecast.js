import React from "react";
import FiveDay from "./FiveDay";

export default function Forecast(props) {
    let forecast = {
    dayOneTemp: props.data.dayOneTemp,
    dayTwoTemp: props.data.dayTwoTemp,
    dayThreeTemp: props.data.dayThreeTemp,
    dayFourTemp: props.data.dayFourTemp,
    dayFiveTemp: props.data.dayFiveTemp,
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

    let icon = {
        dayOneIcon: props.data.dayOneIcon,
        dayTwoIcon: props.data.dayTwoIcon,
        dayThreeIcon: props.data.dayThreeIcon,
        dayFourIcon: props.data.dayFourIcon,
        dayFiveIcon: props.data.dayFiveIcon,
    }

    console.log(icon.dayFiveIcon);

    

    return <div><FiveDay data={[forecast]} days={[nextFiveDays]} image={[icon]} /></div>;
}