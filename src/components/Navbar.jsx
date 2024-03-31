import React, { useContext, useEffect, useState } from "react";
import IWeatherLogo from "../assets/iWeather-Logo.svg";
import { House } from "@phosphor-icons/react";
import { FaCity } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { WeatherContext } from "../context/WeatherProvider";

const Navbar = () => {
  const { setQuery, weatherList } = useContext(WeatherContext);
  const [imgWidth, setImgWidth] = useState(300);
  const navigate = useNavigate();

  const handleGoHome = () => {
    setQuery({ q: "" });
    navigate("/");
  };

  const handleGoCities = () => {
    weatherList.length && navigate("/cities");
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
    <div className="font-sans m-3 flex flex-col justify-between space-y-8 mt-10 md:me-20 md:flex-row md:space-y-0">
      <div>
        <img
          src={IWeatherLogo}
          alt="iweather-logo"
          className="mx-auto"
          style={{ width: `${imgWidth}px` }}
        />
      </div>
      <div className="center space-x-6">
        <House size={30} className="icon-underlined" onClick={handleGoHome} />
        <div className="relative hover:scale-125">
          <FaCity
            size={30}
            className="icon-nohover-underlined"
            onClick={handleGoCities}
          />
          <span
            className={`absolute top-5 left-5 text-black ${
              weatherList.length > 0 && "bg-white"
            }  w-2/3 center rounded-12 h-2/3 `}
          >
            {weatherList.length > 0 && weatherList.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
