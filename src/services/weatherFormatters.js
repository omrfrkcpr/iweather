import { DateTime } from "luxon";
import { iconUrls, bgUrls } from "./constants";
import fetchWeatherData from "./weatherService";

const formatCurrentWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;

  const { main: details, description, icon } = weather[0];

  return {
    lat,
    lon,
    temp,
    temp_min,
    temp_max,
    feels_like,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    details,
    description,
    icon,
    speed,
  };
};

const formatForecastWeather = (data) => {
  let { timezone, daily } = data;
  daily = daily.slice(0, 5).map((d) => {
    return {
      title: formatToLocalTime(d.dt, timezone, `ccc`),
      temp: d.temp.day,
      min: d.temp.min,
      max: d.temp.max,
      icon: d.weather[0].icon,
      uvi: d.uvi,
      pop: d.pop,
    };
  });
  return { timezone, daily };
};

const getFormattedUpdatedTime = () => {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1; // Months are zero indexed, so we add 1
  const year = currentDate.getFullYear();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  const formattedDate = `${day}/${month}/${year}-${hours}:${minutes}:${seconds}`;
  return formattedDate;
};

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await fetchWeatherData(
    "2.5/weather",
    searchParams
  ).then(formatCurrentWeather);

  const { lat, lon } = formattedCurrentWeather;

  const formattedForecastWeather = await fetchWeatherData("3.0/onecall", {
    lat,
    lon,
    exclude: "current, minutely, alerts",
    units: searchParams.units,
  }).then(formatForecastWeather);

  return { ...formattedCurrentWeather, ...formattedForecastWeather };
};

const formatToDate = (secs, zone, formatDate = "cccc, LLL dd, yyyy") =>
  DateTime.fromSeconds(secs).setZone(zone).toFormat(formatDate);

const formatToLocalTime = (
  secs,
  zone,
  formatLocalTime = "'Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(formatLocalTime);

const defaultIconUrl = "https://openweathermap.org/img/wn/";

const iconUrlFromCode = (code) => {
  if (iconUrls.hasOwnProperty(code)) {
    return iconUrls[code];
  } else {
    return `${defaultIconUrl}${code}@4x.png`;
  }
};

const formatBackground = (code) => {
  if (bgUrls.hasOwnProperty(code)) {
    return bgUrls[code];
  } else {
    return;
  }
};

export default getFormattedWeatherData;

export {
  getFormattedUpdatedTime,
  formatToDate,
  formatToLocalTime,
  iconUrlFromCode,
  formatBackground,
};
