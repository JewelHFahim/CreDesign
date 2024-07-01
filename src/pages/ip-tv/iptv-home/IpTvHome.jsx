import ConnectIpTv from "./connect-iptv/ConnectIpTv";
import HeroSection from "./hero-section/HeroSection";
import MovieSliderSection from "./movie-display-slider/MovieSliderSection";
import PricingPackage from "./pricing-package/PricingPackage";
import WhoWeAre from "./who-we-are/WhoWeAre";

const IpTvHome = () => {
  return (
    <div className="">
      <HeroSection />
      <ConnectIpTv />
      <WhoWeAre/>
      <MovieSliderSection/>
      <PricingPackage/>
    </div>
  );
};

export default IpTvHome;
