import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  let codeMapping = {
    "clear-sky-day": "CLEAR_DAY",
    "clear-sky-night": "CLEAR_NIGHT",
    "few-clouds-day": "PARTLY_CLOUDY_DAY",
    "few-clouds-night": "PARTLY_CLOUDY_NIGHT",
    "scattered-clouds-day": "PARTLY_CLOUDY_DAY",
    "scattered-clouds-night": "PARTLY_CLOUDY_NIGHT",
    "broken-clouds-day": "PARTLY_CLOUDY_DAY",
    "broken-clouds-night": "PARTLY_CLOUDY_NIGHT",
    "shower-rain-day": "SLEET",
    "shower-rain-night": "SLEET",
    "thunderstorm-day": "RAIN",
    "thunderstorm-night": "RAIN",
    "rain-day": "RAIN",
    "rain-night": "RAIN",
    "snow-day": "SNOW",
    "mist-day": "FOG",
    "mist-night": "FOG",
  };

  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color="black"
      size={props.size}
      animate={true}
    />
  );
}
