import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
import "./App.css";
import CitiesProvider from "./context/CitiesProvider";

function App() {
  return (
    <CitiesProvider>
      <BrowserRouter router={AppRouter} />
    </CitiesProvider>
  );
}

export default App;
