import { Outlet } from "react-router-dom";
import NotFound from "../components/NotFound";
import Main from "../pages/Main";
import ShowWeather from "../pages/ShowWeather";

export const AppRouter = () => [
  {
    element: <Outlet />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/weather",
        element: <ShowWeather />,
      },
    ],
  },
];
