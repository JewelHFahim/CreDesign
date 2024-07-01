import { FaBitcoin } from "react-icons/fa";

const CryptoBtn = () => {
  return (
    <button className="w-full h-[54px] bg-black rounded-full text-white flex justify-between items-center gap-x-5 px-8 uppercase">
      <FaBitcoin />

      <p>CryptoCureency- 10</p>
      <p></p>
    </button>
  );
};

export default CryptoBtn;
