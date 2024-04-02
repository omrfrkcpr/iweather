import getCitiesData from "./cityService";


const unformattedCityList = async () => {
  const cityData = await getCitiesData();
  const formattedCityList = [];

  cityData.data.forEach(({ country, cities }) => {
    cities.forEach((cityName) => {
      formattedCityList.push({ cityName, country });
    });
  });

  return formattedCityList;
};

export const selectMatchingCities = async (count, text) => {
  const formattedCityList = await unformattedCityList();
  return formattedCityList
    .filter((city) =>
      city.cityName.toLowerCase().startsWith(text.toLowerCase())
    )
    .slice(0, count);
};
