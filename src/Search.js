import React from "react";
import "./Search.css";

export default function Search() {
    return (
        <div className="Search">
            <form className="enter-city">
                <input type="search" placeholder="Search city" />
                <input type="submit" value="Search" />
            </form>
            <button className="btn btn-dark float-right">Current city</button>
        </div>
    )
}