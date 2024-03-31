import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherProvider";
import GeneralInfos from "../components/GeneralInfos";
import WeatherDetails from "../components/WeatherDetails";
import Forecast from "../components/Forecast";
import { Backspace } from "@phosphor-icons/react";

const WeatherLists = () => {
  const { weatherList, setWeatherList } = useContext(WeatherContext);

  const handleRemoveListItem = (index) => {
    const updatedWeatherList = [
      ...weatherList.slice(0, index),
      ...weatherList.slice(index + 1),
    ];
    setWeatherList(updatedWeatherList);
  };
  return (
    <div className="flex-col flex font-sans" style={{ height: "80%" }}>
      {weatherList &&
        weatherList.map((item, index) => (
          <div className="max-[600]" key={index}>
            <Backspace
              size={32}
              weight="fill"
              className="cursor-pointer"
              onClick={() => handleRemoveListItem(index)}
            />
            <div className="gap-1 p-8 flex justify-center text-white flex-col md:flex-row">
              <GeneralInfos item={item} />
              <div className="p-1">
                <WeatherDetails item={item} />
                <Forecast item={item} />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default WeatherLists;
