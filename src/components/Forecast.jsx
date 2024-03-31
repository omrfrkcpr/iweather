import React, { useContext } from "react";
import { iconUrlFromCode } from "../services/AppService";
import { WeatherContext } from "../context/WeatherProvider";

const Forecast = ({ item }) => {
  const { units } = useContext(WeatherContext);

  const days = item.daily;
  // console.log(days);
  return (
    <ul className="bg-base-800 p-2 mt-2 rounded-12 flex flex-row font-sans">
      {days.map((day, index) => (
        <li className="p-3 flex flex-col text-center" key={index}>
          <p className="text-md text-base-200">{day.title}</p>
          <img src={iconUrlFromCode(day.icon)} alt="" width="150px" />
          <p className="text-base-100">
            {`${Math.round(day.max)}`}°{units === "metric" ? "C" : "F"}
          </p>
          <p className="text-base-400">
            {`${Math.round(day.min)}`}°{units === "metric" ? "C" : "F"}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Forecast;
