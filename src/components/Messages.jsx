import React from "react";

const Messages = () => {
  return (
    <div className="message text-center my-6">
      <h1 className="text-white text-lg">
        Welcome to <span className="text-product">TypeWeather</span>
      </h1>
      <p className="text-white font-thin">
        Choose a location to see the weather forecast
      </p>
    </div>
  );
};

export default Messages;
