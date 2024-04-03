import React, { useContext } from "react";
import GeneralInfos from "../components/GeneralInfos";
import WeatherDetails from "../components/WeatherDetails";
import Forecast from "../components/Forecast";
import { WeatherContext } from "../context/WeatherProvider";

const ShowWeather = () => {
  const { weather } = useContext(WeatherContext);

  return (
    <div
      className="flex-col flex justify-start items-center"
      style={{ height: "calc(100vh - 168px)" }}
    >
      <div className="max-w-[1000px]">
        {weather && (
          <div className="gap-1 p-4 flex justify-center text-white flex-col md:flex-row">
            <GeneralInfos item={weather} />
            <div className="p-1">
              <WeatherDetails item={weather} />
              <Forecast item={weather} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowWeather;
