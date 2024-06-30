/* eslint-disable react/prop-types */
import { IoIosArrowRoundForward } from "react-icons/io";

const TrailButton = ({ children, className }) => {
  return (
    <button className={`bg-red-600 px-10 py-3.5 rounded-full uppercase text-white flex items-center gap-2 hover:bg-blue-700 transition-colors duration-300 ease-in-out ${className}`}>
      {children} <IoIosArrowRoundForward className="text-2xl" />
    </button>
  );
};

export default TrailButton;
