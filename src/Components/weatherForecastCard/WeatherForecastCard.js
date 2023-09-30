import React from "react";
import "./WeatherForecastCard.scss";
import Icons from "../WeatherIcons/Icons";

function WeatherForecastCard({ hour, tempMin, tempMax, icon }) {
  function forecastHours() {
    let date = new Date(hour * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

  return (
    <div className="weather_card">
      <p className="forecast_hours">{forecastHours()}</p>
      <div className="forecast_icon">
        <Icons icon={icon} size={30} />
      </div>

      <div className="forecast_description">
        <p>
          <span>{Math.round(tempMin)}</span> - {Math.round(tempMax)} ºC
        </p>
      </div>
    </div>
  );
}

export default WeatherForecastCard;
