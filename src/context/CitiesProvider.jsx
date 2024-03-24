import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

//! Create Context
export const CitiesContext = createContext();

const CitiesProvider = ({ children }) => {
  const [cities, setCities] = useState(
    JSON.parse(localStorage.getItem("cities")) || []
  );
  const [city, setCity] = useState();

  // Variables
  const apiKey = "19fadf383f77445c7ead85a8d7ccce88";
  const apiUrl = "https://api.openweathermap.org/data/3.0/onecall?";
  let latitude = 50.34;
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

      setCity(response.data);

      // Push new city into Cities
      setCities((prevCities) => [...prevCities, city]);

      // Save cities after set new city
      localStorage.setItem(
        "cities",
        JSON.stringify([...cities, response.data])
      );

      console.log(cities);
    } catch (err) {
      console.log(err);
    }
  };

  // useEffect(() => {
  //   // GET cities from local storage (ComponentDidMount)
  //   const storedCities = JSON.parse(localStorage.getItem("cities"));
  //   if (storedCities) {
  //     setCities(storedCities);
  //   }
  // }, []);

  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <CitiesContext.Provider value={{ cities, setCities }}>
      {children}
    </CitiesContext.Provider>
  );
};

export const CitiesContextComp = () => {
  return useContext(CitiesContext);
};

export default CitiesProvider;
