// for getting dynamic weather icons
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

// for getting dynamic weather backgrounds
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

const errorMessages = {
  400: "400 - Bad Request",
  401: "401 - Unauthorized",
  404: "404 - Not Found",
  429: "429 - Too many requests",
  "5xx": "5xx - Unexpected Error",
  default: "Unexpected Error",
  requestError: "Request Error",
};

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

export default errorMessages;

export { iconUrls, bgUrls, errorMessages };
