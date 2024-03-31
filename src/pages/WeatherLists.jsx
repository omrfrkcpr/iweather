import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherProvider";
import GeneralInfos from "../components/GeneralInfos";
import WeatherDetails from "../components/WeatherDetails";
import Forecast from "../components/Forecast";
import { Carousel } from "@material-tailwind/react";

const WeatherLists = () => {
  const { weatherList, setWeatherList } = useContext(WeatherContext);

  const handleRemoveListItem = (dt) => {
    const updatedWeatherList = weatherList.filter((item) => item.dt !== dt);
    setWeatherList(updatedWeatherList);
  };

  return (
    <Carousel
      transition={{ duration: 1 }}
      className="rounded-xl m-auto font-sans h-[auto] md:h-[700px] max-h-[1200px] max-w-[1000px] my-8"
    >
      {weatherList.length &&
        weatherList.map((listItem, index) => (
          <div
            className="gap-1 p-2 my-8 mx-16 flex justify-center text-white bg-product flex-col md:flex-row rounded-12"
            key={index}
          >
            <GeneralInfos
              item={listItem}
              handleRemoveListItem={handleRemoveListItem}
            />
            <div className="p-1 flex flex-col justify-center">
              <WeatherDetails item={listItem} />
              <Forecast item={listItem} />
            </div>
          </div>
        ))}
    </Carousel>
  );
};

export default WeatherLists;
