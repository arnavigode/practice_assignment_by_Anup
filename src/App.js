import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home/Home";
import DisplayCarousel from "./Components/Carousal/DisplayCarousel";
import Search from "./Components/SearchBar/Search";
import Card from "./Components/Card/Card";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Search />
        <DisplayCarousel />
        <Card/>
      </header>
    </div>
  );
}

export default App;
