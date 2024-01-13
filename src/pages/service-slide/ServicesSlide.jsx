import { FaRegCircleDot } from "react-icons/fa6";
import SliderService from "./SliderService";

const ServicesSlide = () => {
  return (
    <div className="p-[120px]">
      <div className="">

        <div className="flex flex-col justify-center items-center">
          <p className="flex items-center gap-2">
            <FaRegCircleDot className="bg-orange-600 rounded-full" /> Services
          </p>
          <h2 className="text-[44px] text-black font-semibold">OUR SERVICES</h2>
        </div>

        <div className="my-10">
          <SliderService />
        </div>

      </div>
    </div>
  );
};

export default ServicesSlide;
