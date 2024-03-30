import React from "react";

const Messages = () => {
  return (
    <div className="message text-center my-6">
      <h1 className="text-white xs:text-lg sm:text-lg md:text-xl lg:text-xxl ">
        Welcome to <span className="text-product">TypeWeather</span>
      </h1>
      <p className="text-white font-thin sm:text-sd md:text-md lg:text-md">
        Choose a location to see the weather forecast
      </p>
    </div>
  );
};

export default Messages;
