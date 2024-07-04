/* eslint-disable react/prop-types */
import { FaBitcoin } from "react-icons/fa";

const CryptoBtn = ({ bgColor }) => {
  return (
    <button
      className={`w-full h-[54px] ${
        bgColor === "bg-slate-900" ? "bg-red-600" : "bg-black"
      } rounded-full text-white flex justify-between items-center gap-x-5 px-8 uppercase`}
    >
      <FaBitcoin />

      <p>CryptoCureency- 10</p>
      <p></p>
    </button>
  );
};

export default CryptoBtn;
