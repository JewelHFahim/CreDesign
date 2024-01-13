import { FaRegCircleDot } from "react-icons/fa6";
import img1 from "../../assets/testimonialFour.png";

const Testimonial = () => {
  return (
    <div className="px-[120px] bg-white">
      <div className="flex gap-x-12">

        <div className="text-[45%]">
          <img src={img1} alt="" />
        </div>

        <div className="w-[55%]">
          <div className="flex flex-col">
            <p className="flex items-center gap-2">
              <FaRegCircleDot className="bg-orange-600 rounded-full" />{" "}
              Testimonial
            </p>
            <h2 className="text-[44px] text-black font-semibold">
              My Customer Say
            </h2>
          </div>

          <div className="flex items-center gap-x-4 mt-6">
            <img src={img1} alt="" className="w-[60px] h-[60px] rounded-full object-cover border border-orange-500"/>
            <img src={img1} alt="" className="w-[60px] h-[60px] rounded-full object-cover border border-orange-500"/>
            <img src={img1} alt="" className="w-[60px] h-[60px] rounded-full object-cover border border-orange-500"/>
            <img src={img1} alt="" className="w-[60px] h-[60px] rounded-full object-cover border border-orange-500"/>
          </div>

          <p className="text-slate-600 text-lg w-[90%] mt-10 italic"> “Contrary to popular belief, Lorem Ipsum is not simply random
              text. It has roots in a piece of classical Latin literature fr45
              BC, making it over 2000 years old. Richard McClintock, a Ltin
              professor at Hampden-Sydney College. professor at Hampden-Sydney
              College.”                                     
          </p>

          <p className="text-xl text-black font-semibold mt-4">Johan Smith</p>
          <p className="text-slate-600">CEO, Google</p>

        </div>

      </div>
    </div>
  );
};

export default Testimonial;
