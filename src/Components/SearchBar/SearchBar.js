import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./SearchBar.scss";

function SearchBar({ cityName, setCityObject, setCityName, api }) {
  const fetchData = async () => {
    const response = await fetch(
      `${api.base}forecast?q=${cityName}&units=metric&APPID=${api.key}`
    );
    const jsonData = await response.json();
    setCityObject(jsonData);
    setCityName(jsonData.name);
    console.log(jsonData);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCityNameChange = (e) => {
    setCityName(e.target.value);
  };

  return (
    <div className="searchBar">
      <input
        type="text"
        className="city-name"
        placeholder="Enter city"
        onChange={handleCityNameChange}
      />
      <button
        onClick={fetchData}
        type="submit"
        className="submitButton"
        value="search"
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </div>
  );
}

export default SearchBar;
