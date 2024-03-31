import React, { useContext } from "react";
import GeneralInfos from "../components/GeneralInfos";
import WeatherDetails from "../components/WeatherDetails";
import Forecast from "../components/Forecast";
import { WeatherContext } from "../context/WeatherProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ShowWeather = () => {
  const { weather } = useContext(WeatherContext);

  return (
    <div
      className="flex-col flex justify-start items-center font-sans"
      style={{ height: "calc(100vh - 145px)" }}
    >
      <div className="max-[600]">
        {weather && (
          <div className="gap-1 p-8 flex justify-center text-white flex-col md:flex-row">
            <GeneralInfos item={weather} />
            <div className="p-1">
              <WeatherDetails item={weather} />
              <Forecast item={weather} />
            </div>
          </div>
        )}
        <ToastContainer
          style={{ maxWidth: "50%", margin: ".5rem .5rem .5rem auto" }}
        />
      </div>
    </div>
  );
};

export default ShowWeather;
