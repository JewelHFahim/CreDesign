import AboutUs from "../aboute-us/AboutUs";
import Blog from "../blog/Blog";
import ContactUs from "../contact-us/ContactUs";
import Experties from "../experties/Experties";
import OurServices from "../our-services/OurServices";
import Portfolio from "../portfolio/Portfolio";
import ServicesSlide from "../service-slide/ServicesSlide";
import Testimonial from "../testimonial/Testimonial";
import WelcomePage from "../welcome-page/WelcomePage";

const Home = () => {
  return (
    <div>
      <WelcomePage />
      <AboutUs />
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
