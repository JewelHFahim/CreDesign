import img1 from "../../assets/gs-global.png";
import "./GSGlobalBanner.css";

const GSGlobalBanner = () => {
  return (
    <div className="flex justify-center items-center p-[120px]">
      <div className="w-[1080px] flex">
        <div className=" w-[40%]">
          <img src={img1} alt="" className="animationBounce"/>
        </div>

        <div className="w-[60%] flex flex-col items-end">

          <div className="flex items-end">

            <div className="text-black text-right mr-[-50px] mb-[-22px]">
              <h2 className="text-[22px] font-medium leading-[25px]"> SET YOUR IGAMING BRAND APART WITH </h2>
              <h1 className="text-[38px] font-semibold leading-[40px]"> GSGLOBAL WHITE LABEL SOLUTION </h1>
            </div>

            <div className="squareSymbol2 bg-orange-600 rotate-90 mr-2"></div>
          </div>

          <div className=" mt-14 w-[80%]">
            <p className="text-black text-lg leading-[25px] text-right">
              Kickstart your online gambling business in the Asian market with a
              competitive edge! Seamlessly launch a comprehensive white label
              online casino, equipped with a range of cutting-edge tools,
              products, and services specifically tailored to cater to the
              region's requirements. With our meticulously designed and curated
              solutions, we provide everything an iGaming operator needs to
              succeed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GSGlobalBanner;
