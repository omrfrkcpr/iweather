import React from "react";
import { iconUrlFromCode } from "../services/weatherFormatters";

const Forecast = ({ item }) => {
  const { daily, unit } = item;
  const days = daily;
  const tempUnit = unit === "metric" ? "C" : "F";

  // console.log(days);
  return (
    <ul className="bg-base-800 p-1 md:p-2 mt-1 mb-1 rounded-12 flex flex-row">
      {days.map(({ title, icon, max, min }, index) => (
        <li className="p-2 md:p-3 flex flex-col text-center" key={index}>
          <p className="text-responsive text-base-200">{title}</p>
          <img src={iconUrlFromCode(icon)} alt="" width="100%" loading="lazy" />
          <p className="text-base-100 text-responsive">
            {`${Math.round(max)}`}°{tempUnit}
          </p>
          <p className="text-base-400 text-responsive">
            {`${Math.round(min)}`}°{tempUnit}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Forecast;
