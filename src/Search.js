import React from "react";

export default function Search() {
    return (
        <div className="Search">
            <form>
                <input type="search" placeholder="Search city" />
                <input type="submit" value="Search" />
            </form>
            <button>Current location</button>
        </div>
    )
}