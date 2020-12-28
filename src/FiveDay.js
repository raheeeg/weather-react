import React from "react";
import "./FiveDay";

export default function FiveDay() {
    return (
        <div className="FiveDay card row">
            <table class="table table-borderless">
            <tbody>
                <tr>
                    <td>Monday</td>
                    <td>Tuesday</td>
                    <td>Wednesday</td>
                    <td>Thursday</td>
                    <td>Friday</td>
                </tr>
                <tr>
                    <td>3°C</td>
                    <td>3°C</td>
                    <td>3°C</td>
                    <td>3°C</td>
                    <td>3°C</td>
                </tr>
                <tr>
                    <td>⛅</td>
                    <td>⛅</td>
                    <td>⛅</td>
                    <td>⛅</td>
                    <td>⛅</td>
                </tr>
                <tr>
                    <td>6°C</td>
                    <td>6°C</td>
                    <td>6°C</td>
                    <td>6°C</td>
                    <td>6°C</td>
                </tr>
            </tbody>
            </table>
        </div>
    );
}