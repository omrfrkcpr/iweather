import React, { useEffect, useState } from "react";
import IWeatherLogo from "../assets/iWeather-Logo.svg";

const Logo = () => {
  const [imgWidth, setImgWidth] = useState(300);

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
    <div className="m-3">
      <img
        src={IWeatherLogo}
        alt="iweather-logo"
        className="mx-auto"
        style={{ width: `${imgWidth}px` }}
      />
    </div>
  );
};

export default Logo;
