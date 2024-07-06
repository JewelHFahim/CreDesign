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
import IpTvLayout from "../layout/ip-tv/IpTvLayout";
import IpTvHome from "../pages/ip-tv/iptv-home/IpTvHome";
import ChannelList from "../pages/ip-tv/channel-list/ChannelList";
import Subscription from "../pages/ip-tv/subscription/Subscription";
import IpContact from "../pages/ip-tv/ip-contact/IpContact";
import IpFaq from "../pages/ip-tv/IpFaq/IpFaq";
import IpTvTrial from "../pages/ip-tv/iptv-trail/IpTvTrial";

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
  // ========================>> IP TV ROUTES <<==========================
  {
    path: "ip-tv",
    element: <IpTvLayout />,
    children: [
      {
        path: "/ip-tv",
        element: <IpTvHome />,
      },

      {
        path: "/ip-tv/ip-channel-list",
        element: <ChannelList />,
      },

      {
        path: "/ip-tv/ip-subscription",
        element: <Subscription />,
      },

      {
        path: "/ip-tv/ip-contact",
        element: <IpContact />,
      },

      {
        path: "/ip-tv/ip-faq",
        element: <IpFaq />,
      },

      {
        path: "/ip-tv/iptv-trail",
        element: <IpTvTrial />,
      },
    ],
  },
]);

export default router;
