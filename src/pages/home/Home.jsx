import MainSlider from "../../components/slider/MainSlider";
import Blog from "../blog/Blog";
import ContactUs from "../contact-us/ContactUs";
import OurPartner from "./our-partner/OurPartner";
import Services from "./services/Services";
import TechnologyStack from "./technology-stack/TechnologyStack";

const Home = () => {
  return (
    <div>
      <MainSlider />

      <div className="px-10 lg:px-[120px]">
        <Services />
        <TechnologyStack title={"Technology Stack"} />
        <OurPartner />
        <Blog />
      </div>


      <ContactUs />
    </div>
  );
};

export default Home;
