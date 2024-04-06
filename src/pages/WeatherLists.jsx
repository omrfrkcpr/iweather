import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherProvider";
import GeneralInfos from "../components/GeneralInfos";
import WeatherDetails from "../components/WeatherDetails";
import Forecast from "../components/Forecast";
import { Carousel } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { toastInfoNotify, toastWarnNotify } from "../helpers/toastNotify";

const WeatherLists = () => {
  const { weatherList, setWeatherList } = useContext(WeatherContext);
  const navigate = useNavigate();

  const handleRemoveListItem = (item) => {
    const updatedWeatherList = weatherList.filter(
      (weather) => weather.dt !== item.dt
    );
    setWeatherList(updatedWeatherList);
    toastWarnNotify(
      `Removed ${item.name}, ${item.country} from your favorites.`
    );
    if (!updatedWeatherList.length) {
      navigate("/");
      toastInfoNotify(`You no longer have any favorite cities.`);
    }
  };

  return (
    <Carousel
      transition={{ duration: 0.5 }}
      className="rounded-xl m-auto h-[auto] md:h-[700px] max-h-[1200px] max-w-[1000px] my-8"
    >
      {weatherList.length &&
        weatherList.map((listItem, index) => (
          <div
            className="gap-0 md:gap-1 py-0 px-1 my-8 mx-12 flex justify-center text-white bg-product flex-col md:flex-row rounded-12"
            key={index}
          >
            <GeneralInfos
              item={listItem}
              handleRemoveListItem={handleRemoveListItem}
            />
            <div className="mt-0 flex flex-col justify-center md:mt-1">
              <WeatherDetails item={listItem} />
              <Forecast item={listItem} />
            </div>
          </div>
        ))}
    </Carousel>
  );
};

export default WeatherLists;
