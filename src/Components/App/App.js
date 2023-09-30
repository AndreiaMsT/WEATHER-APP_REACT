import "./App.scss";
import Weather from "../Weather/Weather";
import SearchBar from "../SearchBar/SearchBar";
import Forecast from "../Forecast/Forecast";

import { useState } from "react";

function App() {
  const [cityObject, setCityObject] = useState([]);
  const [cityName, setCityName] = useState("Lisbon");
  console.log(cityName);
  console.log("API Key:", process.env.REACT_APP_API_KEY);
  console.log("API URL:", process.env.REACT_APP_API_URL);

  const key = process.env.REACT_APP_API_KEY;
  const base = process.env.REACT_APP_API_KEY_URL;
  const api = {
    key: key,
    base: base,
  };

  console.log(key);
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
