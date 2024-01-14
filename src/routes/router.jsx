import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import UserLayout from "../layout/UserLayout";
import VideoPlayerJW from "../components/navbar/player/JWPlayer";

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
        path: "/video-player",
        element: <VideoPlayerJW />,
      },
    ],
  },
]);

export default router;
