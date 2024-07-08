import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import MainMenu from "../../components/ip-tv/main-menu/MainMenu";
import Breadcum from "../../components/ip-tv/breadcum/Breadcum";
import "./IpTvLayout.css";
import IpTvFooter from "../../pages/ip-tv/iptv-footer/IpTvFooter";
import IpMobile from "../../components/ip-tv/iptv-mobile-menu/IpMobile";

const IpTvLayout = () => {
  const location = useLocation();
  const route = location?.pathname;

  const bgClass =
    route === "/ip-tv/ip-subscription"
      ? "Subscription"
      : route === "/ip-tv/ip-channel-list"
      ? "ChannelList"
      : route === "/ip-tv/ip-contact"
      ? "ContactUs"
      : route === "/ip-tv/ip-faq"
      ? "FAQ"
      : "Home";

  return (
    <div>
      <div className={`w-full commonContainer ${bgClass} relative font-inter `}>
        <div className="hidden lg:block ">
          <Navbar />
          <MainMenu />
        </div>
        <IpMobile />
        {route !== "/ip-tv" && <Breadcum />}

      </div>

      <Outlet />
      <IpTvFooter />
    </div>
  );
};

export default IpTvLayout;
