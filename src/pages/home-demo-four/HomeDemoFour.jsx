import img1 from "../../assets/spin.png";
import TechnologyStack from "../home/technology-stack/TechnologyStack";
import SpinerVideoSec from "./vedio-section/SpinerVideoSec";

const HomeDemoFour = () => {
  
  return (
    <div className="bg-[#F6F6F6] pb-[50px] px-10 lg:px-[120px]">

      <div className="flex flex-col-reverse lg:flex-row justify-center items-center py-5 lg:py-8">
        <div className="lg:w-[45%]">
          <h1 className="text-[30px] lg:text-[44px] font-semibold leading-[40px] lg:leading-[55px]">
            Online Spinner Wheel Game
          </h1>
          <p className="mt-3 lg:mt-5">
            CloudySign is online casino software provides a dynamic platform for
            both new and existing iGaming operators. Our cutting edge software
            offers a comprehensive range of gambling services that boost
            profitability and attract new players. Not only does it feature an
            analytics dashboard, affiliate and a gent system, multiple payment
            methods and content from more than 120 providers, our solution can
            be integrated into any website. Alternatively, it can be delivered
            alongside a custom made platform to both enhance and optimize your
            business.
          </p>
        </div>

        <div> <img src={img1} alt=""/> </div>
      </div>

      <TechnologyStack title={"Development Technology "} />
      <SpinerVideoSec />

    </div>
  );
};

export default HomeDemoFour;
