import React from "react";
import { WeatherContextComp } from "../context/WeatherProvider";
import GeneralInfos from "../components/GeneralInfos";

const ShowWeather = () => {
  const { cities, setCities } = WeatherContextComp();
  return (
    <div className="bg-main-container mx-auto max-w-screen-lg mt-4 py-5 px-5 h-fit shadow-wl-shadgray flex flex-col justify-between align-middle text-white">
      <GeneralInfos />
    </div>
  );
};

export default ShowWeather;
