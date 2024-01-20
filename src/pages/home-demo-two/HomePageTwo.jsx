import TechnologyStack from "../home/technology-stack/TechnologyStack";
import WelcomeSection from "./WelcomeSection";
import ServiceWeOffer from "./offered-services/ServiceWeOffer";
import OurProcess from "./our-process/OurProcess";
import WebAppDevSerivices from "./web-app-services/WebAppDevSerivices";

const HomePageTwo = () => {
  return (
    <div className="bg-[#F6F6F6] px-[120px]">
      <WelcomeSection
        title={"Web Application Development Company"}
        des={
          "With a dedicated team of experts, we provide customized web application development services that cater to your specific needs."
        }
      />
      <TechnologyStack title={"TECHNOLOGY STACK"}/>
      <ServiceWeOffer />
      <WebAppDevSerivices title={"Web Application Development Services We Offer"} />
      <OurProcess />
    </div>
  );
};

export default HomePageTwo;
