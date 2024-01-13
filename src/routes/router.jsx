import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import UserLayout from "../layout/UserLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
