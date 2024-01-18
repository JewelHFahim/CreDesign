import TechnologyStack from "../home/technology-stack/TechnologyStack";
import WelcomeSection from "./WelcomeSection";
import ServiceWeOffer from "./offered-services/ServiceWeOffer";
import OurProcess from "./our-process/OurProcess";
import WebAppDevSerivices from "./web-app-services/WebAppDevSerivices";

const HomePageTwo = () => {
  return (
    <div className="bg-[#F6F6F6] px-[120px]">
      <WelcomeSection />
      <TechnologyStack />
      <ServiceWeOffer />
      <WebAppDevSerivices />
      <OurProcess />
    </div>
  );
};

export default HomePageTwo;
