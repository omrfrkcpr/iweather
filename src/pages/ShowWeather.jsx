import React from "react";
import { WeatherContextComp } from "../context/WeatherProvider";
import GeneralInfos from "../components/GeneralInfos";
import WeatherDetails from "../components/WeatherDetails";
import Forecast from "../components/Forecast";

const ShowWeather = () => {
  const { cities, setCities } = WeatherContextComp();
  return (
    <div className="bg-main-container mx-auto max-w-screen-lg mt-4 p-3 h-fit shadow-wl-shadgray flex flex-col justify-between align-middle text-white ">
      <GeneralInfos />
      <WeatherDetails />
      <Forecast />
    </div>
  );
};

export default ShowWeather;
