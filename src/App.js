import AppRouter from "./router/AppRouter";
import WeatherProvider from "./context/WeatherProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <WeatherProvider>
        <AppRouter />
        <ToastContainer
          style={{ maxWidth: "50%", margin: ".5rem .5rem .5rem auto" }}
        />
      </WeatherProvider>
    </Router>
  );
}

export default App;
