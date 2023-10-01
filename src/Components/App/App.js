import "./App.scss";
import Weather from "../Weather/Weather";
import SearchBar from "../SearchBar/SearchBar";
import Forecast from "../Forecast/Forecast";

import { useState } from "react";

function App() {
  const [cityObject, setCityObject] = useState([]);
  const [cityName, setCityName] = useState("Lisbon");

  const api = {
    key: process.env.REACT_APP_API_KEY,
    base: process.env.REACT_APP_API_KEY_URL,
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
