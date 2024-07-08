import { Link } from "react-router-dom";
import img1 from "../../../assets/logo ip tv.png";
import { FaCircle } from "react-icons/fa";

const IpTvFooter = () => {
  return (
    <div className="bg-slate-950 px-[20px] lg:px-[120px] py-[70px]">

      <img src={img1} alt="" className="w-[450px]" />

      <hr className="my-10 lg:my-5" />

      <div className="flex flex-col lg:flex-row items-center justify-between">

        <p className="text-white text-sm lg:text-base text-center lg:text-left w-full">
          Copyright 2023 © <span className="font-semibold">Protoiptv</span> |
          All rights reserved.
        </p>

        <ul className="mt-10 lg:mt-0 text-white text-xs lg:text-base flex justify-between lg:justify-end items-center gap-3 w-full">
          <Link>Privacy Policy</Link>
          <Link className="flex items-center gap-1 lg:gap-2">
            <FaCircle className="text-red-600 lg:text-sm" />
            Terms & Conditions
          </Link>
          <Link className="flex items-center gap-1 lg:gap-2">
            <FaCircle className="text-red-600 lg:text-sm" />
            Refund Policy
          </Link>
        </ul>

      </div>

    </div>
  );
};

export default IpTvFooter;
