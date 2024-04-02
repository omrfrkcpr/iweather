import getCitiesData from "./cityService";

const specialCharsMap = {
  ı: "i",
  İ: "I",
  ş: "s",
  Ş: "S",
  ğ: "g",
  Ğ: "G",
  ü: "u",
  Ü: "U",
  ö: "o",
  Ö: "O",
  ç: "c",
  Ç: "C",
};

const transformToEnglish = (text) => {
  let transformedText = "";
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    transformedText += specialCharsMap[char] || char;
  }
  return transformedText;
};

const formatCityName = (cityName) => {
  const formattedName = transformToEnglish(cityName).toLowerCase();
  return formattedName.charAt(0).toUpperCase() + formattedName.slice(1);
};

const unformattedCityList = async () => {
  const cityData = await getCitiesData();
  const formattedCityList = [];

  cityData.data.forEach(({ country, cities }) => {
    cities.forEach((cityName) => {
      const formattedCityName = formatCityName(cityName);
      formattedCityList.push({
        cityName: formattedCityName,
        country: country,
      });
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
