/* eslint-disable react/prop-types */
import { FaArrowRightLong } from "react-icons/fa6";

const PricingBtn = ({bgColor}) => {
  return (
    <button className={`w-full h-[54px] bg-red-600 rounded-full text-white flex justify-between items-center gap-x-5 px-8 uppercase hover:bg-blue-700 transition-colors duration-400 ${bgColor === "bg-black" ? "border-[3.5px] border-white" : ""}`}>
        <p></p>
      <p>Free Trail</p>
      <FaArrowRightLong />
    </button>
  );
};

export default PricingBtn;
