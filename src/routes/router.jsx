import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import UserLayout from "../layout/UserLayout";
import HomePageTwo from "../pages/home-demo-two/HomePageTwo";
import HomeDemoThree from "../pages/home-demo-three/HomeDemoThree";
import HomeDemoFour from "../pages/home-demo-four/HomeDemoFour";

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
      {
        path: "/home-3",
        element: <HomeDemoThree />,
      },
      {
        path: "/home-4",
        element: <HomeDemoFour />,
      },
    ],
  },
]);

export default router;
