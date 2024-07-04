import { FaPaypal } from "react-icons/fa";

const PaypalBtn = () => {
  return (
    <button className="w-full h-[54px] bg-white rounded-full flex justify-between items-center gap-x-5 px-8 uppercase border-[3.5px] border-blue-600 text-blue-500">
      <FaPaypal className=""/>

      <p>Paypal</p>

      <p></p>
    </button>
  );
};

export default PaypalBtn;
