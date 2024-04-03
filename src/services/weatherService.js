import axios from "axios";

const BASE_URL = "https://api.openweathermap.org/data";
const API_KEY = process.env.REACT_APP_API_KEY;

const fetchWeatherData = async (urlType, searchParams) => {
  const url = new URL(BASE_URL + "/" + urlType);
  url.search = new URLSearchParams({
    ...searchParams,
    appid: API_KEY,
  });

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export default fetchWeatherData;
