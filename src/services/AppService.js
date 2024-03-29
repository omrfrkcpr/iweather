import { DateTime } from "luxon";
import { toast } from "react-toastify";

const API_KEY = "19fadf383f77445c7ead85a8d7ccce88";
const BASE_URL = "https://api.openweathermap.org/data";

// const weatherURL =
//   "https://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=19fadf383f77445c7ead85a8d7ccce88";
// const opencallURL =
//   "https://api.openweathermap.org/data/3.0/onecall?lat=44.34&lon=10.99&exclude=current,minutely,alerts&appid=19fadf383f77445c7ead85a8d7ccce88";

const getWeatherData = (urlType, searchParams) => {
  const url = new URL(BASE_URL + "/" + urlType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  try {
    return fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        if (error.message.includes("HTTP error! status: 400")) {
          toast.error(
            "Bad Request. You can get 400 error if either some mandatory parameters in the request are missing or some of request parameters have incorrect format or values out of allowed range. List of all parameters names that are missing or incorrect will be returned in `parameters` attribute of the `ErrorResponse` object."
          );
        } else if (error.message.includes("HTTP error! status: 401")) {
          toast.error(
            "Unauthorized. You can get 401 error if API token did not providen in the request or in case API token provided in the request does not grant access to this API. You must add API token with granted access to the product to the request before returning it"
          );
        } else if (error.message.includes("HTTP error! status: 404")) {
          toast.error(
            "Not Found. You can get 404 error if data with requested parameters (lat, lon, date etc) does not exist in service database. You must not retry the same request"
          );
        } else if (error.message.includes("HTTP error! status: 429")) {
          toast.error(
            "Too Many Requests. You can get 429 error if key quota of requests for provided API to this API was exceeded. You may retry request after some time or after extending your key quota"
          );
        } else if (
          error.message.includes("HTTP error! status: 5") &&
          error.message.length === 18
        ) {
          toast.error(
            "Unexpected Error. You can get '5xx' error in case of other internal errors. Error Response code will be `5xx`. Please contact us and enclose an example of your API request that receives this error into your email to let us analyze it and find a solution for you promptly. You may retry the request which led to this error."
          );
        } else {
          toast.error("An unexpected error occurred:", error.message);
        }
        throw error;
      });
  } catch (err) {
    toast.error("Error fetching weather data:", err);
    throw err;
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
      min: d.temp.min,
      max: d.temp.max,
      icon: d.weather[0].icon,
    };
  });

  hourly = hourly.slice(1, 6).map((h) => {
    return {
      title: formatToLocalTime(h.dt, timezone, `hh:mm a`),
      temp: h.temp,
      icon: h.weather[0].icon,
    };
  });

  return { timezone, daily, hourly };
};

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "/2.5/weather",
    searchParams
  ).then(formatCurrentWeather);

  const { lat, lon } = formattedCurrentWeather;

  const formattedForecastWeather = await getWeatherData("/3.0/onecall", {
    lat,
    lon,
    exclude: "current, minutely, alerts",
    units: searchParams.unit,
  }).then(formatForecastWeather);

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
