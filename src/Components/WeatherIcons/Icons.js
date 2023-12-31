import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

function Icons({ icon, size }) {
  const wheatherIconCode = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "PARTLY_CLOUDY_DAY",
    "03n": "PARTLY_CLOUDY_NIGHT",
    "04n": "CLOUDY",
    "04d": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "RAIN",
    "13d": "SNOW",
    "50d": "FOG",
  };

  return (
    <ReactAnimatedWeather
      icon={wheatherIconCode[icon]}
      color="black"
      size={size}
      animate={true}
    />
  );
}

export default Icons;
