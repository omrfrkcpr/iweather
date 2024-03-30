import { DateTime } from "luxon";
import axios from "axios";

// all weather icons
import clearD from "../assets/weather-icons/Clear_Day.svg";
import clearN from "../assets/weather-icons/Clear_Night.svg";
import cloudyD from "../assets/weather-icons/Cloudy_Day.svg";
import cloudyN from "../assets/weather-icons/Cloudy_Night.svg";
import fewCloudsD from "../assets/weather-icons/Few-Clouds_Day.svg";
import fewCloudsN from "../assets/weather-icons/Few-Clouds_Night.svg";
import rainD from "../assets/weather-icons/Rain_Day.svg";
import rainN from "../assets/weather-icons/Rain_Night.svg";
import stormD from "../assets/weather-icons/Storm_Day.svg";
import stormN from "../assets/weather-icons/Storm_Night.svg";

// all weather backgrounds
import bgClearD from "../assets/bg-images/Clear_Day.svg";
import bgClearN from "../assets/bg-images/Clear_Night.svg";
import bgCloudyD from "../assets/bg-images/Cloudy_Day.svg";
import bgCloudyN from "../assets/bg-images/Cloudy_Night.svg";
import bgFewCloudsD from "../assets/bg-images/Few-Clouds_Day.svg";
import bgFewCloudsN from "../assets/bg-images/Few-Clouds_Night.svg";
import bgRainD from "../assets/bg-images/Rain_Day.svg";
import bgRainN from "../assets/bg-images/Rain_Night.svg";
import bgStormD from "../assets/bg-images/Storm_Day.svg";
import bgStormN from "../assets/bg-images/Storm_Night.svg";

const API_KEY = "75b251ce9d3d5c7bf9e4f1832b237076";
const BASE_URL = "https://api.openweathermap.org/data";

const errorMessages = {
  400: "400 - Bad Request",
  401: "401 - Unauthorized",
  404: "404 - Not Found",
  429: "429 - Too many requests",
  "5xx": "5xx - Unexpected Error",
  default: "Unexpected Error",
  requestError: "Request Error",
};

const getWeatherData = async (urlType, searchParams) => {
  const url = new URL(BASE_URL + "/" + urlType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  try {
    const response = await axios.get(url);

    const data = response.data;
    return data;
  } catch (error) {
    let errorMessage = errorMessages.default;

    if (error.response) {
      const status = error.response.status;
      errorMessage = errorMessages[status] || errorMessages.default;
    } else if (error.request) {
      errorMessage = errorMessages.requestError;
    }

    throw new Error(errorMessage);
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
  let { timezone, daily } = data;
  daily = daily.slice(1, 6).map((d) => {
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

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "2.5/weather",
    searchParams
  ).then(formatCurrentWeather);

  const { lat, lon } = formattedCurrentWeather;

  const formattedForecastWeather = await getWeatherData("3.0/onecall", {
    lat,
    lon,
    exclude: "current, minutely, alerts",
    units: searchParams.units,
  }).then(formatForecastWeather);

  return { ...formattedCurrentWeather, ...formattedForecastWeather };
};

const formatToLocalTime = (
  secs,
  zone,
  format = "cccc, LLL dd, yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconUrls = {
  "01d": clearD,
  "01n": clearN,
  "02d": fewCloudsD,
  "02n": fewCloudsN,
  "03d": cloudyD,
  "03n": cloudyN,
  "04d": cloudyD,
  "04n": cloudyN,
  "09d": rainD,
  "09n": rainN,
  "10d": rainD,
  "10n": rainN,
  "11d": stormD,
  "11n": stormN,
};

const defaultIconUrl = "http://openweather.org/img/wn/";

const iconUrlFromCode = (code) => {
  if (iconUrls.hasOwnProperty(code)) {
    return iconUrls[code];
  } else {
    return defaultIconUrl + `${code}@2x.png`;
  }
};

const bgUrls = {
  "01d": bgClearD,
  "01n": bgClearN,
  "02d": bgFewCloudsD,
  "02n": bgFewCloudsN,
  "03d": bgCloudyD,
  "03n": bgCloudyN,
  "04d": bgCloudyD,
  "04n": bgCloudyN,
  "09d": bgRainD,
  "09n": bgRainN,
  "10d": bgRainD,
  "10n": bgRainN,
  "11d": bgStormD,
  "11n": bgStormN,
};

const formatBackground = (code) => {
  if (bgUrls.hasOwnProperty(code)) {
    return bgUrls[code];
  } else {
    return;
  }
};

export default getFormattedWeatherData;

export { formatToLocalTime, iconUrlFromCode, formatBackground };
