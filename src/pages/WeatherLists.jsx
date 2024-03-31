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
    <div
      className=" flex flex-col justify-start m-auto font-sans "
      style={{ height: "80%", maxWidth: "900px" }}
    >
      {weatherList &&
        weatherList.map((listItem, index) => (
          <div className="relative" key={index}>
            <Backspace
              size={32}
              weight="fill"
              className="icon-remove absolute top-11 right-11 "
              onClick={() => handleRemoveListItem(index)}
            />
            <div className="gap-1 py-6 px-8 m-10 flex justify-center text-white bg-product flex-col lg:flex-row rounded-12">
              <GeneralInfos item={listItem} />
              <div className="p-1">
                <WeatherDetails item={listItem} />
                <Forecast item={listItem} />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default WeatherLists;
