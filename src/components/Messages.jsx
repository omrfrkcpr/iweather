import React from "react";

const Messages = () => {
  return (
    <div className="text-center my-6 font-sans">
      <h1 className="text-white xs:text-md sm:text-md md:text-lg lg:text-xl ">
        Welcome to <span className="text-product">TypeWeather</span>
      </h1>
      <p className="text-white font-thin sm:text-sm md:text-md lg:text-md">
        Choose a location to see the weather forecast
      </p>
    </div>
  );
};

export default Messages;
