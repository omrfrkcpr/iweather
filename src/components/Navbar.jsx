import React, { useContext, useEffect, useState } from "react";
import IWeatherLogo from "../assets/iWeather-Logo.svg";
import { House, ArrowClockwise } from "@phosphor-icons/react";
import { FaCity } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { WeatherContext } from "../context/WeatherProvider";
import { toastErrorNotify, toastInfoNotify } from "../helpers/toastNotify";
import getFormattedWeatherData from "../services/weatherFormatters";

const Navbar = () => {
  const { setQuery, weatherList, setWeatherList } = useContext(WeatherContext);
  const [imgWidth, setImgWidth] = useState(300);
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoHome = () => {
    setQuery({ q: "" });
    navigate("/");
  };

  const handleGoFavorites = () => {
    weatherList.length
      ? navigate("/favorites")
      : toastInfoNotify(
          "You don't have any favorite city. Please add your favorite city first."
        );
  };

  const handleRefresh = async () => {
    try {
      const promises = weatherList.map(async (weather) => {
        const result = await getFormattedWeatherData({
          q: weather.name,
          units: weather.unit,
        });
        return { ...result, unit: weather.unit };
      });

      const updatedList = await Promise.all(promises);

      setWeatherList(updatedList);
      localStorage.setItem("weatherList", JSON.stringify(updatedList));

      toastInfoNotify(
        "Weather data has been successfully updated for all your favorite cities.🌥️"
      );
    } catch (error) {
      toastErrorNotify(error.message);
    }
  };
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      let newWidth = 300;
      if (windowWidth < 500) {
        newWidth = 300;
      } else if (windowWidth >= 500 && windowWidth < 900) {
        newWidth = 350;
      } else {
        newWidth = 400;
      }
      setImgWidth(newWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="m-3 flex flex-col justify-between space-y-8 mt-10 md:me-20 md:flex-row md:space-y-0">
      <div>
        <img
          src={IWeatherLogo}
          alt="iweather-logo"
          className="mx-auto cursor-pointer"
          style={{ width: `${imgWidth}px` }}
          onClick={() => navigate("/")}
          loading="lazy"
        />
      </div>
      <div className="center space-x-6">
        <House size={28} className="icon-underlined" onClick={handleGoHome} />
        <div className="relative hover:scale-125">
          <FaCity
            size={28}
            className="icon-nohover-underlined"
            onClick={handleGoFavorites}
          />
          <span
            className={`absolute top-5 left-5 text-base-900 ${
              weatherList.length && "bg-white"
            }  w-2/3 center rounded-12 h-2/3 `}
          >
            {weatherList.length}
          </span>
        </div>
        {location.pathname === "/favorites" && (
          <ArrowClockwise
            size={32}
            className="icon-hover"
            onClick={handleRefresh}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
