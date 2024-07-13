/* eslint-disable react/prop-types */
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ContactWhatsApp = ({ bgColor }) => {
  return (
    <Link
      to="https://web.whatsapp.com/"
      target="_blank"
      className={`w-full h-[45px] lg:h-[54px] bg-red-600 rounded-full text-white flex justify-between items-center gap-x-5 px-8 uppercase hover:bg-green-700 transition-colors duration-400 ${
        bgColor === "bg-black" ? "border-[3.5px] border-white" : ""
      }`}
    >
      <p></p>
      <p>Get Us On What&apos;sApp</p>
      <FaArrowRightLong />
    </Link>
  );
};

export default ContactWhatsApp;
