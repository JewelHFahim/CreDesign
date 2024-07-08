import { Link, useLocation } from "react-router-dom";

const Breadcum = () => {
  const location = useLocation();
  const route = location?.pathname;

  const breadcum =
    route === "/ip-tv/ip-subscription"
      ? "Subscription"
      : route === "/ip-tv/ip-channel-list"
      ? "Channel List"
      : route === "/ip-tv/ip-contact"
      ? "Contact Us"
      : route === "/ip-tv/ip-faq"
      ? "FAQ"
      : route === "/ip-tv/iptv-trail"
      ? "Free IPTV Trial"
      : "";

  return (
    <div className="px-[20px] lg:px-[120px] py-24">
      <h1 className="text-3xl lg:text-[50px] font-bold">{breadcum}</h1>

      <div className="mt-4 text-lg lg:text-xl font-bold flex items-center gap-x-1 text-black text-opacity-[80%]">
        <Link> Home </Link>
        <span className="text-red-600">/</span>
        <Link>{breadcum}</Link>
      </div>
    </div>
  );
};

export default Breadcum;
