import ConnectIpTv from "./connect-iptv/ConnectIpTv";
import HeroSection from "./hero-section/HeroSection";
import MovieSliderSection from "./movie-display-slider/MovieSliderSection";
import WhoWeAre from "./who-we-are/WhoWeAre";

const IpTvHome = () => {
  return (
    <div className="">
      <HeroSection />
      <ConnectIpTv />
      <WhoWeAre/>
      <MovieSliderSection/>
    </div>
  );
};

export default IpTvHome;
