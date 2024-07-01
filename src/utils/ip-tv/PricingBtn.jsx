import { FaArrowRightLong } from "react-icons/fa6";

const PricingBtn = () => {
  return (
    <button className="w-full h-[54px] bg-red-600 rounded-full text-white flex justify-between items-center gap-x-5 px-8 uppercase hover:bg-blue-700 transition-colors duration-400">
        <p></p>
      <p>Free Trail</p>
      <FaArrowRightLong />
    </button>
  );
};

export default PricingBtn;
