import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import UserLayout from "../layout/UserLayout";
import ContactUs from "../pages/contact-us/ContactUs";
import BlogDetails from "../pages/blog/BlogDetails";
import CasinoSoftware from "../pages/casino-software/CasinoSoftware";
import SpinnerGame from "../pages/spinner-game/SpinnerGame";
import WebApplication from "../pages/web-application/WebApplication";
import About from "../pages/about/About";
import Blog from "../pages/blog/Blog";

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
        path: "/services/1",
        element: <CasinoSoftware />,
      },

      {
        path: "/services/2",
        element: <SpinnerGame />,
      },

      {
        path: "/services/5",
        element: <WebApplication />,
      },

      {
        path: "/contact-us",
        element: <ContactUs />,
      },

      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },

      {
        path: "/blog/:id",
        element: <BlogDetails />,
      },
    ],
  },
]);

export default router;
