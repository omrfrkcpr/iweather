import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

//! Create Context
export const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [cities, setCities] = useState(
    JSON.parse(localStorage.getItem("cities")) || []
  );

  // Variables
  const apiKey = "19fadf383f77445c7ead85a8d7ccce88";
  const apiUrl = "https://api.openweathermap.org/data/3.0/onecall?";
  let latitude = 80;
  let longitude = 44;

  // const apiKey = process.env.REACT_APP_MY_API_KEY;
  // const apiUrl = process.env.REACT_APP_URL;

  const getWeatherData = async () => {
    try {
      const response = await axios(
        `${apiUrl}lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=standartc&appid=${apiKey}`
      );

      if (response.status !== 200) {
        console.log("Error");
      }

      const newCity = response.data;

      // Push new city into Cities
      // City daha önceden cities dizisinde bulunmuyorsa ekle
      if (!cities.some((city) => city?.current?.dt === newCity.current.dt)) {
        setCities((prevCities) => [...prevCities, newCity]);

        // Save updated cities after adding new city
        localStorage.setItem("cities", JSON.stringify([...cities, newCity]));
      }

      console.log(cities);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <WeatherContext.Provider value={{ cities, setCities }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const WeatherContextComp = () => {
  return useContext(WeatherContext);
};

export default WeatherProvider;
