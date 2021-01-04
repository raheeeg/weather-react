import './App.css';
import Search from "./Search";
import Footer from "./Footer";
import WeatherData from "./WeatherData";

export default function App() {
  return (
    <div>
    <div className="App container">
      <Search />
    </div>
      <Footer />
    </div>
  );
}
