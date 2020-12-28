import './App.css';
import Weather from "./Weather";
import Search from "./Search";
import Summary from "./Summary";
import FiveDay from "./FiveDay";

export default function App() {
  return (
    <div>
    <div className="App container">
      <Search />
      <Summary />
      <Weather city="Paris" />
      <FiveDay />
    </div>
    <a href="https://github.com/raheeeg/weather-react">Open-source code</a> by Raheeg Ibrahim
    </div>
  );
}
