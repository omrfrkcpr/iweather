import AppRouter from "./router/AppRouter";
import "./App.css";
import WeatherProvider from "./context/WeatherProvider";

function App() {
  return (
    <WeatherProvider>
      <AppRouter />
    </WeatherProvider>
  );
}

export default App;
