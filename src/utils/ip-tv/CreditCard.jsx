/* eslint-disable react/prop-types */
import { GrCreditCard } from "react-icons/gr";

const CreditCard = ({ bgColor }) => {
  return (
    <button
      className={`w-full h-[54px] bg-red-600 rounded-full text-white flex justify-between items-center gap-x-5 px-8 uppercase hover:bg-blue-700 transition-colors duration-400 ${
        bgColor === "bg-black" ? "border-[3.5px] border-white" : ""
      }`}
    >
      <GrCreditCard />
      <p>Credit Card</p>
      <p></p>
    </button>
  );
};

export default CreditCard;
