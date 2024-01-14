import { FaArrowRightLong } from "react-icons/fa6";
import { PiLeafThin } from "react-icons/pi";



const SoftwareSolutions = () => {
  return (
    <div className="px-[120px] py-16">

      <div className="">

        <div className="flex items-center justify-between">
          <h1 className="text-[44px] font-bold w-[40%] leading-[55px]">
            Our casino software solutions
          </h1>
          <p className="w-[45%] text-lg text-slate-600 font-medium">
            <span className="text-orange-400 font-semibold">
              If you do not have an online casino
            </span>
            or want to move to our modern, fully-functional platform, this
            section is for you.
          </p>
        </div>

        <div className="mt-[40px] grid grid-cols-4 mx-auto ">
            {[1,2,3,4].map((item,i)=>(<div key={i} className="w-[300px] h-[350px] bg-orange-200 hover:bg-orange-300 transition-all duration-200 px-6 pt-6 pb-4 flex flex-col justify-between relative">
                <h1 className="text-[30px] font-medium">Graphic Design</h1>
                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempore officiis veniam neque, ullam impedit officia fuga illum laudantium alias dolor perferendis, placeat ipsum odio?</p>

                <button className=" flex items-center gap-2 text-lg font-medium text-slate-600 hover:text-black "><p className="hover:underline">Learn More</p> <FaArrowRightLong /> </button>

                <div className="absolute top-7 right-0 text-white text-[80px] z-0"><PiLeafThin /></div>
            </div>))}
        </div>

        <div className="flex justify-end mt-14 mx-5">
            <div className="flex items-center gap-3 bg-orange-200 hover:bg-orange-300 transition-all duration-200 w-[450px] py-2 text-lg font-medium px-5">
                <p>Compare Our Solutions</p>
                <FaArrowRightLong/>
            </div>
        </div>


      </div>
    </div>
  );
};

export default SoftwareSolutions;
