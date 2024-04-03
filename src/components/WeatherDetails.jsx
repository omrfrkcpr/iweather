import {
  CloudRain,
  Drop,
  SunDim,
  ThermometerSimple,
  Wind,
} from "@phosphor-icons/react";
import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherProvider";

const WeatherDetails = ({ item }) => {
  const { units, iconSize } = useContext(WeatherContext);

  const { daily, feels_like, humidity, speed } = item;

  const weatherDetails = [
    {
      label: "Thermal sensation",
      icon: <ThermometerSimple size={iconSize} />,
      value: `${Math.trunc(feels_like)}°${units === "metric" ? "C" : "F"}`,
    },
    {
      label: "Probability of rain",
      icon: <CloudRain size={iconSize} />,
      value: `${daily[0].pop}%`,
    },
    {
      label: "Wind speed",
      icon: <Wind size={iconSize} />,
      value: `${Math.trunc(speed)} km/h`,
    },
    {
      label: "Air humidity",
      icon: <Drop size={iconSize} />,
      value: `${humidity}%`,
    },
    {
      label: "UV Index",
      icon: <SunDim size={iconSize} />,
      value: `${daily[0].uvi}`,
    },
  ];

  return (
    <ul className="bg-base-800 md:p-2 rounded-12">
      {weatherDetails.map((detail, index) => (
        <li
          key={index}
          className={`weather-details-li${
            index === weatherDetails.length - 1 ? " rounded-b-12" : ""
          }`}
        >
          <div
            className={`weather-details-container ${
              index === 4 && "border-b-0 pb-0 md:pb-2"
            }`}
          >
            <div className="weather-details-label-container">
              {detail.icon}
              <p className="weather-details-label">{detail.label}</p>
            </div>
            <div className="weather-details-value-container">
              <p className="text-responsive">{detail.value}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default WeatherDetails;
