import React from "react";
import { WeatherContextComp } from "../context/WeatherProvider";
import IWeatherLogo from "../assets/iWeather-Logo.svg";
import { MagnifyingGlass, MapPin } from "@phosphor-icons/react";
import Loading from "../assets/Loading.svg";

const Main = () => {
  const { cities, setCities } = WeatherContextComp();
  return (
    <div className="bg-main-container mx-auto max-w-screen-lg mt-4 py-5 px-32 h-fit shadow-wl-shadgray flex flex-col justify-between align-middle">
      <div className="logo">
        <img src={IWeatherLogo} alt="" className="mx-auto" width="400px" />
      </div>
      <div className="message text-center my-6">
        <h1 className="text-white text-lg">
          Welcome to <span className="text-product">TypeWeather</span>
        </h1>
        <p className="text-white font-thin">
          Choose a location to see the weather forecast
        </p>
      </div>
      <div className="search-box my-6 flex flex-row justify-center ">
        <div className="flex flex-row w-2/4 items-center justify-center space-x-4 ms-10 relative">
          <input
            type="text"
            className="text-cl font-light p-2 w-full shadow-xl bg-base-input text-white rounded-8 focus:outline-none capitalize "
            placeholder="Search location"
          />
          <img src={Loading} alt="loading-gif" className="absolute right-20" />
          <MagnifyingGlass
            className="text-product cursor-pointer transition ease-out hover:scale-125 "
            size={32}
          />
          <MapPin
            size={32}
            className="text-product cursor-pointer transition ease-out hover:scale-125"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
