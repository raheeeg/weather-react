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

    return <div><FiveDay data={[forecast]} /></div>;
}