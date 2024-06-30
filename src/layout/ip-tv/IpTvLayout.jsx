// import { Outlet } from "react-router-dom";
// import Navbar from "./navbar/Navbar";
// import MainMenu from "../../components/ip-tv/main-menu/MainMenu";
// import Breadcum from "../../components/ip-tv/breadcum/Breadcum";
// import img1 from "../../assets/call center.jpg";

// const IpTvLayout = () => {
//   return (
//     <div className="border border-green-600">
//       <div
//         className="relative w-full h-screen bg-cover bg-center"
//         style={{ backgroundImage: `url(${img1})` }}
//       >
//         <Navbar />
//         <MainMenu />
//         <Breadcum />
//       </div>

//       <Outlet />
//       <p>Footer</p>
//     </div>
//   );
// };

// export default IpTvLayout;

import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import MainMenu from "../../components/ip-tv/main-menu/MainMenu";
import Breadcum from "../../components/ip-tv/breadcum/Breadcum";
import "./IpTvLayout.css";

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
      <div className={`w-full commonContainer ${bgClass} relative font-inter`}>
        <Navbar />
        <MainMenu />
        {route !== "/ip-tv" && <Breadcum />}
      </div>

      <Outlet />
      <p>Footer</p>
    </div>
  );
};

export default IpTvLayout;
