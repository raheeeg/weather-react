import React from "react";
import "./Search.css";

export default function Search() {
    return (
        <div className="Search">
            <form>
                <input className="search-form" type="search" placeholder="Search city" />
                <input className="search-button" type="submit" value="Search" />
                <button className="location-button">Current city</button>
            </form> 
        </div>
    )
}