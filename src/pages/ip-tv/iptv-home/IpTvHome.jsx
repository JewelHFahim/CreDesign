import BestQuality from "./best-quality/BestQuality";
import BestService from "./best-service/BestService";
import ConnectIpTv from "./connect-iptv/ConnectIpTv";
import HeroSection from "./hero-section/HeroSection";
import MovieSliderSection from "./movie-display-slider/MovieSliderSection";
import PricingPackage from "./pricing-package/PricingPackage";
import SupportedDevice from "./supprted-device/SupportedDevice";
import Testimonial from "./testimonial/Testimonial";
import WhoWeAre from "./who-we-are/WhoWeAre";

const IpTvHome = () => {
  return (
    <div className="">
      <HeroSection />
      <ConnectIpTv />
      <WhoWeAre />
      <MovieSliderSection />
      <PricingPackage />
      <BestQuality />
      <BestService />
      <SupportedDevice/>
      <Testimonial/>
    </div>
  );
};

export default IpTvHome;
