/* eslint-disable react/prop-types */
import { FaBitcoin } from "react-icons/fa";

const CryptoBtn = ({ bgColor }) => {
  return (
    <button
      className={`w-full h-[45px] lg:h-[54px] ${
        bgColor === "bg-slate-900" ? "bg-red-600" : "bg-black"
      } rounded-full text-white flex justify-center lg:justify-between items-center gap-x-5 text-sm lg:text-base lg:px-8 uppercase`}
    >
      <FaBitcoin />

      <p>CryptoCureency- 10</p>
      <p></p>
    </button>
  );
};

export default CryptoBtn;
