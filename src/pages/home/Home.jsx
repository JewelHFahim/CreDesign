import AboutUs from "../aboute-us/AboutUs";
import GSGlobalBanner from "../banner-gs-global/GSGlobalBanner";
import BannerPage from "../banner-page/BannerPage";
import Blog from "../blog/Blog";
import ContactUs from "../contact-us/ContactUs";
import Experties from "../experties/Experties";
import OurServices from "../our-services/OurServices";
import OurSoftwareSolutions from "../our-software-solutions/OurSoftwareSolutions";
import Portfolio from "../portfolio/Portfolio";
import PriceList from "../price-list/PriceList";
import ServicesSlide from "../service-slide/ServicesSlide";
import SoftwareSolutions from "../software-solutions/SoftwareSolutions";
import Testimonial from "../testimonial/Testimonial";
import WelcomePage from "../welcome-page/WelcomePage";

const Home = () => {
  return (
    <div>
      
      <WelcomePage />
      <BannerPage/>
      <GSGlobalBanner/>
      <OurSoftwareSolutions />

      <SoftwareSolutions />

      <AboutUs />
      <PriceList />
      <OurServices />
      <Experties />
      <Portfolio />
      <Testimonial />
      <ServicesSlide />
      <Blog />
      <ContactUs />
    </div>
  );
};

export default Home;
