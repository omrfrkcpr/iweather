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
      icon: <ThermometerSimple size={iconSize} className="mt-[7px]" />,
      label: "Thermal sensation",
      value: `${Math.trunc(feels_like)}°${unit === "metric" ? "C" : "F"}`,
    },
    {
      icon: <CloudRain size={iconSize} className="mt-[7px]" />,
      label: "Probability of rain",
      value: `${Math.trunc(daily[0].pop * 100)}%`,
    },
    {
      icon: <Wind size={iconSize} className="mt-[7px]" />,
      label: "Wind speed",
      value: `${Math.trunc(speed)} km/h`,
    },
    {
      icon: <Drop size={iconSize} className="mt-[7px]" />,
      label: "Air humidity",
      value: `${Math.trunc(humidity)}%`,
    },
    {
      icon: <SunDim size={iconSize} className="mt-[7px]" />,
      label: "UV Index",
      value: `${daily[0].uvi.toFixed(2)}`,
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
            } ${index === 0 && "pt-2 md:pb-2"}`}
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
