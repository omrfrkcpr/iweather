import { DateTime } from "luxon";

const API_KEY = "19fadf383f77445c7ead85a8d7ccce88";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const versionWeather = "2.5";
const versionOneCall = "3.0";

const getWeatherData = (version, urlType, searchParams) => {
  const url = new URL(BASE_URL + "/" + version + "/" + urlType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  try {
    return fetch(url).then((res) => res.json());
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error; // Re-throw the error to be caught by the caller
  }
};

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
  let { timezone, daily, hourly } = data;
  daily = daily.slice(1, 6).map((d) => {
    return {
      title: formatToLocalTime(d.dt, timezone, `ccc`),
      temp: d.temp.day,
      icon: d.weather[0].icon,
    };
  });

  hourly = hourly.slice(1, 6).map((h) => {
    return {
      title: formatToLocalTime(h.dt, timezone, `hh:mm a`),
      temp: h.temp,
      icon: h.weather[0].icon,
      uvi: h.uvi,
    };
  });

  return { timezone, daily, hourly };
};

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    versionWeather,
    "weather",
    searchParams
  ).then(formatCurrentWeather);

  const { lat, lon } = formattedCurrentWeather;

  const formattedForecastWeather = await getWeatherData(
    versionOneCall,
    "onecall",
    {
      lat,
      lon,
      exclude: "current, minutely, alerts",
      units: searchParams.unit,
    }
  ).then(formatForecastWeather);

  return { ...formattedCurrentWeather, ...formattedForecastWeather };
};

const formatToLocalTime = (
  secs,
  zone,
  format = "cccc, LLL dd, yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconUrlFromCode = (code) => {
  // if (code === "01d") {
  //   return `../assets/weather-icons/Clear_Day.svg`;
  // } else if (code === "01n") {
  //   return `../assets/weather-icons/Clear_Night.svg`;
  // } else if (code === "")

  return `http://openweather.org/img/wn/${code}@2x.png`;
};

export { formatToLocalTime, iconUrlFromCode };

export default getFormattedWeatherData;
