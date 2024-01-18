import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import UserLayout from "../layout/UserLayout";
import HomePageTwo from "../pages/home-demo-two/HomePageTwo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home-2",
        element: <HomePageTwo />,
      },
    ],
  },
]);

export default router;
