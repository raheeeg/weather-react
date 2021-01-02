import './App.css';
import Detailed from "./Detailed";
import Summary from "./Summary";
import FiveDay from "./FiveDay";
import Footer from "./Footer";

export default function App() {
  return (
    <div>
    <div className="App container">
      <Summary />
      <Detailed />
      <FiveDay />
    </div>
    <Footer />
    </div>
  );
}
