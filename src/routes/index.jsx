import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import Gallery from "../pages/Gallery";
import Game from "../pages/Game";
import Settings from "../pages/Settings";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/game",
    element: <Game />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
];

export default routes;
