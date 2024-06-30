import TrailButton from "../../../../utils/ip-tv/TrailButton";
import { FaWhatsapp, FaWifi } from "react-icons/fa";
import "./HeroSection.css";

const HeroSection = () => {

  
  return (
    <div className="commonPadding w-full heroSection">
      <div className="pt-14 w-[50%]">
        <h3 className="text-xl uppercase font-semibold tracking-widest flex items-center gap-2">
          <FaWifi className="text-red-600" />
          Welcome To Protoiptv
        </h3>

        <h1 className="mt-2 text-[68px] font-bold leading-tight">
          The Fastest IPTV <br /> Service Provider
        </h1>

        <p className="mt-8 font-bold leading-loose text-[17px]">
          +22000 worldwide & sport channels in your Buy IPTV plan, you can watch
          your favorite sport event in best possible picture quality. Buy IPTV
          Service includes VIP Sport channels all arround the world.
        </p>
      </div>

      <TrailButton className="mt-12">Get Free Trail</TrailButton>

      <div className="mt-2 fixed bottom-6 right-6 z-[999]">
        <button className="flex items-center gap-2 bg-green-600 px-6 py-2 rounded-full text-white font-medium">
          <FaWhatsapp className="text-xl" />
          How can I help you?
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
