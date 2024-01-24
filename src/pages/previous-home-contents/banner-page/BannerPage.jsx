import bg from "../../assets/bg.jpg";
import "./BannerPage.css";

const BannerPage = () => {
  return (
    <div
      className="flex justify-center items-center p-[120px]"
      style={{ backgroundImage: `url(${bg})`, backgroundPositionY: "center", backgroundSize: "cover" }}
    >
      <div className="w-[1080px]">

            <div className="flex items-end">
                <div className="squareSymbol bg-orange-600"></div>
                <div className="text-white ml-[-70px] mb-4">
                    <h2 className="text-[24px] font-medium"> TAKE YOUR IGAMING BUSINESS TO NEW HEIGHTS WITH </h2>
                    <h1 className="text-[40px] font-medium leading-[50px]"> GSGLOBAL WHITE LABEL SOLUTION </h1>
                </div>
            </div>
    
            <div className=" mt-5 w-[80%]">
            <p className="text-white text-lg leading-[25px]">
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
  );
};

export default BannerPage;
