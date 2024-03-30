import React from "react";
import IWeatherLogo from "../assets/iWeather-Logo.svg";

const Logo = () => {
  return (
    <div className="logo m-3">
      <img src={IWeatherLogo} alt="" className="mx-auto" width="400px" />
    </div>
  );
};

export default Logo;
