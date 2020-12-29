import './App.css';
import Weather from "./Weather";
import Summary from "./Summary";
import FiveDay from "./FiveDay";
import Footer from "./Footer";

export default function App() {
  return (
    <div>
    <div className="App container">
      <Summary />
      <Weather city="Paris" />
      <FiveDay />
    </div>
    <Footer />
    </div>
  );
}
