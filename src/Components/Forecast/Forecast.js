import React from "react";
import "./Forecast.scss";
import WeatherForecastCard from "../weatherForecastCard/WeatherForecastCard";

function Forecast({ cityObject }) {
  return (
    <div className="forecast">
      <div className="forecast_col">
        {cityObject.list?.slice(1, 6).map((forecast) => (
          <div>
            <WeatherForecastCard
              hour={forecast.dt}
              icon={forecast.weather?.[0].icon}
              tempMin={forecast.main?.temp_min}
              tempMax={forecast.main?.temp_max}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
