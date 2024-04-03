import React, { createContext, useEffect, useState } from "react";
import getFormattedWeatherData from "../services/weatherFormatters";
import {
  toastErrorNotify,
  toastSuccessNotify,
  toastWarnNotify,
} from "../helpers/toastNotify";

export const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [query, setQuery] = useState({ q: "" });
  const [units, setUnits] = useState("metric"); // metric or imperial
  const [weather, setWeather] = useState(null);
  const [weatherList, setWeatherList] = useState(
    JSON.parse(localStorage.getItem("weatherList")) || []
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [iconSize, setIconSize] = useState(32);

  const getWeatherData = async () => {
    // Get fetched weather data only if there is any query
    if (query.q !== "") {
      setLoading(true);

      try {
        const result = await getFormattedWeatherData({ ...query, units });
        setTimeout(() => {
          toastSuccessNotify(
            `Successfully fetched weather for ${result.name}, ${result.country}`
          );
        }, 1000);

        setWeather(result);
        setError(null);
      } catch (err) {
        const errorMessages = {
          400: "Bad Request",
          401: "Unauthorized",
          404: "Not Found",
          429: "Too Many Requests",
        };

        // Get the status code from the error message
        const statusCode = parseInt(err.message.match(/\d+/)?.[0]) || 500;

        const errorMessage = `Error ${statusCode} - ${
          errorMessages[statusCode] || "Unexpected Error"
        }`;

        setTimeout(() => {
          setError(err.message);
          toastErrorNotify(errorMessage);
        }, 1000);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    }
  };

  const handleAddFavorite = (item) => {
    if (isUniqueWeather(item, weatherList)) {
      setWeatherList([item, ...weatherList]);
      setLocalStorage();
      toastSuccessNotify(`Added ${item.name}, ${item.country}  to favorites`);
    }
  };

  const handleRemoveFavorite = (item) => {
    const updatedWeatherList = weatherList.filter(
      (weatherItem) => weatherItem.dt !== item.dt
    );
    setWeatherList(updatedWeatherList);
    setLocalStorage();
    toastWarnNotify(`Removed ${item.name}, ${item.country} from favorites`);
  };

  const isUniqueWeather = (newItem, array) => {
    return !array.some((item) => item.name === newItem.name);
  };

  const setLocalStorage = () => {
    localStorage.setItem("weatherList", JSON.stringify(weatherList));
  };

  useEffect(() => {
    getWeatherData();
  }, [query, units]);

  useEffect(() => {
    setLocalStorage();
  }, [getWeatherData]);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      let newSize;
      if (windowWidth < 500) {
        newSize = 24;
      } else if (windowWidth >= 500) {
        newSize = 32;
      }
      setIconSize(newSize);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // WeatherProvider values
  const values = {
    query,
    setQuery,
    units,
    setUnits,
    weather,
    weatherList,
    setWeatherList,
    loading,
    setLoading,
    error,
    setError,
    iconSize,
    handleAddFavorite,
    handleRemoveFavorite,
  };

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

export default WeatherProvider;
