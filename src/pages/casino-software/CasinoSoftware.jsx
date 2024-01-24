import FAQSec from "../../components/faq/FAQSec";
import TechnologyStack from "../home/technology-stack/TechnologyStack";
import WelcomeSection from "../web-application/WelcomeSection";
import ServiceWeOffer from "../web-application/offered-services/ServiceWeOffer";
import GameFeatures from "./GameFeatures";

const CasinoSoftware = () => {
  return (
    <div className="bg-[#F6F6F6] pb-[50px] px-10 lg:px-[120px]">
      <WelcomeSection
        title={"ONLINE CASINO SOFTWARE"}
        des={
          "CloudySign is online casino software provides a dynamic platform for both new and existing iGaming operators. Our cutting edge software offers a comprehensive range of gambling services that boost profitability and attract new players. Not only does it feature an analytics dashboard, affiliate and a gent system, multiple payment methods and content from more than 120 providers, our solution can be integrated into any website. Alternatively, it can be delivered alongside a custom made platform to both enhance and optimize your business."
        }
        width="lg:w-[80%]"
      />
      <TechnologyStack title={"TECHNOLOGY STACK"} />
      <ServiceWeOffer title={"Online Casino game Providers"} />
      <GameFeatures />
      <FAQSec />
    </div>
  );
};

export default CasinoSoftware;
