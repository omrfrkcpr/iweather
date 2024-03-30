import React, { useContext } from "react";
import GeneralInfos from "../components/GeneralInfos";
import WeatherDetails from "../components/WeatherDetails";
import Forecast from "../components/Forecast";
import { WeatherContext } from "../context/WeatherProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logo from "../components/Logo";

const ShowWeather = () => {
  const { weather } = useContext(WeatherContext);
  return (
    <div className="flex-col flex justify-center items-center h-screen p-4">
      <div className="absolute p-4 top-0">
        <Logo />
      </div>
      <div className="max-[600]">
        {weather && (
          <div className="gap-1 px-8 py-0 flex justify-center text-white flex-col md:flex-row mt-40 ">
            <GeneralInfos />
            <div className="p-1">
              <WeatherDetails />
              <Forecast />
            </div>
          </div>
        )}
        <ToastContainer />
      </div>
    </div>
  );
};

export default ShowWeather;
