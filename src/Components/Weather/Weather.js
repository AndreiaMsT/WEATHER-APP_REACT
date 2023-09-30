import React from "react";
import "./Weather.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faUmbrella,
  faWind,
} from "@fortawesome/free-solid-svg-icons";

import "../WeatherIcons/Icons";
import Icons from "../WeatherIcons/Icons";

function Weather({ cityObject }) {
  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year} `;
  };

  function hours() {
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    if (minutes < 10) minutes = `0${minutes}`;
    if (hours < 10) hours = `0${hours}`;
    return ` ${hours}:${minutes}`;
  }

  return (
    <section className="weather">
      <div className="current_weather">
        <h1 className="current_city">
          <FontAwesomeIcon icon={faLocationDot} /> {cityObject.city?.name}
        </h1>
        <p className="date">{dateBuilder(new Date())} </p>
        <p>{hours()}</p>

        <h2 className="current_temp">
          {Math.round(cityObject.list?.[0].main?.temp)} ºC
        </h2>

        <h5>
          <FontAwesomeIcon icon={faWind} /> {cityObject.list?.[0].wind?.speed}{" "}
          Km/h
          <br />
          Humidity: {cityObject.list?.[0].main?.humidity} %<br />{" "}
          <FontAwesomeIcon icon={faUmbrella} />{" "}
          {Math.round(cityObject.list?.[0].pop * 100)}%
        </h5>
      </div>
      <div className="weather_icon">
        <Icons icon={cityObject.list?.[0].weather?.[0].icon} size={150} />
        <h4 className="weather_description">
          {cityObject.list?.[0].weather?.[0].description}{" "}
        </h4>
      </div>
    </section>
  );
}

export default Weather;
