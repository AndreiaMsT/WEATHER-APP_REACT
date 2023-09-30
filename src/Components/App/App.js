import "./App.scss";
import Weather from "../Weather/Weather";
import SearchBar from "../SearchBar/SearchBar";
import Forecast from "../Forecast/Forecast";

import { useState } from "react";

function App() {
  const [cityObject, setCityObject] = useState([]);
  const [cityName, setCityName] = useState("Lisbon");

  const api = {
    key: "a1f85cdae8da289f667d039cb5e21acc",
    base: "http://api.openweathermap.org/data/2.5/",
  };

  return (
    <div className="App">
      <SearchBar
        cityName={cityName}
        setCityName={setCityName}
        setCityObject={setCityObject}
        api={api}
      />
      <Weather cityObject={cityObject} />
      <Forecast cityObject={cityObject} />
    </div>
  );
}

export default App;
