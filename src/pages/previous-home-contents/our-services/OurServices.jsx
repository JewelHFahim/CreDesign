import { FaRegCircleDot } from "react-icons/fa6";
import { MdOutlineSettingsBrightness } from "react-icons/md";

const OurServices = () => {
  return (
    <div className="lg:px-[120px] py-10">
      
      <div>
        <div className="flex flex-col justify-center items-center">
          <p className="flex items-center gap-2">
            <FaRegCircleDot className="bg-orange-600 rounded-full" /> Services
          </p>
          <h2 className="text-[44px] text-black font-semibold">OUR SERVICES</h2>
        </div>

        <div className="flex justify-between items-center gap-x-6 my-16">

          <div className="border flex flex-col gap-y-7 border-orange-100 px-6 py-12 rounded-md transition duration-200 hover:bg-orange-100">
            <div className="text-[26px] bg-orange-100 flex justify-center items-center w-[55px] h-[55px] text-orange-600 rounded-md"> <MdOutlineSettingsBrightness /> </div>

            <h3 className="text-[25px] text-black leading-[30px] font-medium">Web Design</h3>

            <p className="text-slate-700">
              Sugary sweet lorem ipsum? You got it with Cup cake Ipsum, the only
              text generator treatment contrary.
            </p>
          </div>

          <div className="border flex flex-col gap-y-5 border-orange-100 px-6 py-12 rounded-md transition duration-200 hover:bg-orange-100">
          <div className="text-[26px] bg-orange-100 flex justify-center items-center w-[55px] h-[55px] text-orange-600 rounded-md"> <MdOutlineSettingsBrightness /> </div>

            <h3 className="text-[25px] text-black leading-[30px] font-medium">Web Development</h3>

            <p className="text-slate-700">
              Sugary sweet lorem ipsum? You got it with Cup cake Ipsum, the only
              text generator treatment contrary.
            </p>
          </div>

          <div className="border flex flex-col gap-y-5 border-orange-100 px-6 py-12 rounded-md transition duration-200 hover:bg-orange-100">

          <div className="text-[26px] bg-orange-100 flex justify-center items-center w-[55px] h-[55px] text-orange-600 rounded-md"> <MdOutlineSettingsBrightness /> </div>

            <h3 className="text-[25px] text-black leading-[30px] font-medium">Mobile Development</h3>

            <p className="text-slate-700">
              Sugary sweet lorem ipsum? You got it with Cup cake Ipsum, the only
              text generator treatment contrary.
            </p>

          </div>

          <div className="border flex flex-col gap-y-5 border-orange-100 px-6 py-12 rounded-md transition duration-200 hover:bg-orange-100">

          <div className="text-[26px] bg-orange-100 flex justify-center items-center w-[55px] h-[55px] text-orange-600 rounded-md"> <MdOutlineSettingsBrightness /> </div>

            <h3 className="text-[25px] text-black leading-[30px] font-medium">IOS Development</h3>

            <p className="text-slate-700">
              Sugary sweet lorem ipsum? You got it with Cup cake Ipsum, the only
              text generator treatment contrary.
            </p>

          </div>

        </div>
      </div>

    </div>
  );
};

export default OurServices;
