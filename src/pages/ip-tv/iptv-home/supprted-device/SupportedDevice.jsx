import { FaWifi } from "react-icons/fa6";
import img1 from "../../../../assets/supported devices.png";

const SupportedDevice = () => {
  return (
    <div className="my-20 lg:my-44 commonPadding flex flex-col justify-center items-center gap-8">

      <div className="flex flex-col justify-center items-center text-center">
        <h3 className="flex items-center gap-2 tracking-widest uppercase font-bold">
          <FaWifi className="text-xl text-red-600" />
          WHY WE BETTER
        </h3>
        <h1 className="mt-2 text-[35px] font-bold leading-tight">
          ALL THE DEVICES ARE SUPPORTED
        </h1>
        <p className="mt-5">
          Now you can watch live TV & VOD at home or on-the-go — wherever you
          are, anytime, on your favorite devices.
        </p>
      </div>

      <div>
        <img src={img1} alt="" />
      </div>
    </div>
  );
};

export default SupportedDevice;
