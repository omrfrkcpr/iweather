import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherProvider";
import GeneralInfos from "../components/GeneralInfos";
import WeatherDetails from "../components/WeatherDetails";
import Forecast from "../components/Forecast";
import { Carousel, IconButton } from "@material-tailwind/react";

const WeatherLists = () => {
  const { weatherList } = useContext(WeatherContext);

  console.log(weatherList);

  return (
    <Carousel
      transition={{ duration: 0.5 }}
      className="rounded-xl m-auto h-[auto] md:h-[700px] max-h-[1200px] max-w-[1000px] my-8"
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={() => {
            handlePrev();
            console.log("myPrevFunction");
          }}
          className="!absolute top-2/4 left-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={() => {
            handleNext();
            console.log("myNextFunction");
          }}
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}
    >
      {weatherList.length &&
        weatherList.map((listItem, index) => (
          <div
            className="gap-0 md:gap-1 py-0 px-1 my-8 mx-12 flex justify-center text-white bg-product flex-col md:flex-row rounded-12"
            key={index}
          >
            <GeneralInfos item={listItem} />
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
