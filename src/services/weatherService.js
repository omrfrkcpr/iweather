import axios from "axios";
import errorMessages from "./constants";

const BASE_URL = "https://api.openweathermap.org/data";
const API_KEY = process.env.REACT_APP_API_KEY;

const getWeatherData = async (urlType, searchParams) => {
  const url = new URL(BASE_URL + "/" + urlType);
  url.search = new URLSearchParams({
    ...searchParams,
    appid: API_KEY,
  });

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

export default getWeatherData;
