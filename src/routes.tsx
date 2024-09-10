import { createBrowserRouter } from "react-router-dom";
import { Timeline } from "./pages/Timeline";

// localhost:3000/

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Timeline />,
  },
  {
    path: "/explore",
    element: <h3>Explore</h3>,
  },
]);