import axios from "axios";

const API_URL = "https://countriesnow.space/api/v0.1/countries";

const getCitiesData = async () => {
  try {
    const response = await axios.get(API_URL);

    return response.data;
  } catch (err) {
    console.log("getCitiesData - Error", err);
  }
};

export default getCitiesData;
