import { Link } from "react-router-dom";
import img1 from "../../../assets/logo ip tv.png";
import { FaCircle } from "react-icons/fa";

const IpTvFooter = () => {
  return (
    <div className="bg-slate-950 px-[120px] py-16">
      <img src={img1} alt="" className="w-[450px]" />
      <hr className="my-5" />
      <div className="flex items-center justify-between">
        <p className="text-white">
          Copyright 2023 © <span className="font-semibold">Protoiptv</span> |
          All rights reserved.
        </p>

        <ul className="text-white flex items-center gap-3">
          <Link>Privacy Policy</Link>
          <Link className="flex items-center gap-2">
            <FaCircle className="text-red-600 text-sm" />
            Terms & Conditions
          </Link>
          <Link className="flex items-center gap-2">
            <FaCircle className="text-red-600 text-sm" />
            Refund Policy
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default IpTvFooter;
