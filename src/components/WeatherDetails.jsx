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
  const { iconSize } = useContext(WeatherContext);

  const { daily, feels_like, humidity, speed, unit } = item;

  const weatherDetails = [
    {
      icon: <ThermometerSimple size={iconSize} />,
      label: "Thermal sensation",
      value: `${Math.trunc(feels_like)}°${unit === "metric" ? "C" : "F"}`,
    },
    {
      icon: <CloudRain size={iconSize} />,
      label: "Probability of rain",
      value: `${daily[0].pop * 100}%`,
    },
    {
      icon: <Wind size={iconSize} />,
      label: "Wind speed",
      value: `${Math.trunc(speed)} km/h`,
    },
    {
      icon: <Drop size={iconSize} />,
      label: "Air humidity",
      value: `${humidity}%`,
    },
    {
      icon: <SunDim size={iconSize} />,
      label: "UV Index",
      value: `${daily[0].uvi}`,
    },
  ];

  return (
    <ul className="bg-base-800 md:p-2 rounded-12">
      {weatherDetails.map(({ icon, label, value }, index) => (
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
              {icon}
              <p className="weather-details-label">{label}</p>
            </div>
            <div className="weather-details-value-container">
              <p className="text-responsive">{value}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default WeatherDetails;
