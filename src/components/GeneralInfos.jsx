import React, { useContext, useEffect, useState } from "react";
import {
  formatToLocalTime,
  formatBackground,
  iconUrlFromCode,
} from "../services/weatherFormatters";
import { WeatherContext } from "../context/WeatherProvider";
import { useLocation } from "react-router-dom";
import { Backspace, Heart } from "@phosphor-icons/react";

const GeneralInfos = ({ item, handleRemoveListItem }) => {
  const {
    units,
    iconSize,
    weatherList,
    handleAddFavorite,
    handleRemoveFavorite,
  } = useContext(WeatherContext);
  const location = useLocation();
  const [isFavorite, setIsFavorite] = useState(false);

  const { daily, icon, dt, timezone, name, country, description, temp } = item;

  const checkFavoriteItem = (dt) => {
    const isFavoriteItem = weatherList.some(
      (weatherItem) => weatherItem.dt === dt
    );
    setIsFavorite(isFavoriteItem);
  };

  useEffect(() => {
    checkFavoriteItem(item.dt);
  }, [item.dt, weatherList]);

  const handleFavorite = () => {
    if (isFavorite) {
      handleRemoveFavorite(item);
      setIsFavorite(false);
    } else {
      handleAddFavorite(item);
      setIsFavorite(true);
    }
  };

  return (
    <div className="bg-base-800 w-full p-2 my-1 text-responsive rounded-12 relative">
      {location.pathname === "/favorites" ? (
        <Backspace
          size={32}
          weight="fill"
          className="icon-remove absolute top-5 right-5 z-50 "
          onClick={() => handleRemoveListItem(item)}
        />
      ) : (
        <Heart
          size={32}
          weight="fill"
          color={isFavorite ? "red" : "white"}
          className="icon-remove absolute top-6 right-6 z-50 "
          onClick={handleFavorite}
        />
      )}
      <div
        className="p-1 rounded-8 bg-cover h-full flex flex-col justify-between"
        style={{ backgroundImage: `url(${formatBackground(icon)})` }}
      >
        <div className="me-4 ms-8 mb-0 mt-5 md:mt-10">
          <div className="location flex flex-wrap flex-row gap-3 mb-0 md:mb-3">
            <h1 className="mt-2 header-responsive">{`${name}, ${country}`}</h1>
            <img
              src={`https://flagsapi.com/${country}/flat/${iconSize}.png`}
              alt={`${country}-flag`}
              className="h-fit w-fit mt-1"
            />
          </div>
          <div className="time">
            <p className="text-responsive">{formatToLocalTime(dt, timezone)}</p>
          </div>
        </div>
        <div className="flex flex-row justify-between me-8 ms-8 mb-0 md:mb-4 ">
          <div className="w-1/2 flex flex-col justify-center ">
            <h1 className="header-responsive">
              {Math.round(temp)}°{units === "metric" ? "C" : "F"}
            </h1>
            <p className="text-responsive">{`${Math.round(daily[0].min)}°${
              units === "metric" ? "C" : "F"
            } / ${Math.round(daily[0].max)}°${
              units === "metric" ? "C" : "F"
            }`}</p>
            <p className="text-responsive">
              {description.charAt(0).toUpperCase() + description.slice(1)}
            </p>
          </div>
          <div className="w-1/2">
            <img
              src={iconUrlFromCode(icon)}
              alt="weather-icon"
              className="ms-auto h-fit w-fit"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralInfos;
