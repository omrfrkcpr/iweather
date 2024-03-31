import React, { useContext } from "react";
import { iconUrlFromCode } from "../services/AppService";
import { WeatherContext } from "../context/WeatherProvider";

const Forecast = () => {
  const { weather, units } = useContext(WeatherContext);

  const items = weather.daily;
  // console.log(items);
  return (
    <ul className="bg-base-800 p-2 mt-2 rounded-12 flex flex-row font-sans">
      {items.map((item, index) => (
        <li className="p-3 flex flex-col text-center" key={index}>
          <p className="text-md text-base-200">{item.title}</p>
          <img src={iconUrlFromCode(item.icon)} alt="" width="150px" />
          <p className="text-base-100">
            {`${Math.round(item.max)}`}°{units === "metric" ? "C" : "F"}
          </p>
          <p className="text-base-400">
            {`${Math.round(item.min)}`}°{units === "metric" ? "C" : "F"}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Forecast;
