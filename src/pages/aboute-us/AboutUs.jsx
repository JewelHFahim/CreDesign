import aboutBanner from "../../assets/aboutFourImg.png";
import { FaRegCircleDot } from "react-icons/fa6";

const AboutUs = () => {
    
  return (
    <div className="lg:p-[120px] bg-white">
      <div className="flex items-center">
        <div className="p-4 w-[45%]">
          <img src={aboutBanner} alt="" />
        </div>

        <div className="p-10 w-[55%]">
          <p className="flex items-center gap-2">
            <FaRegCircleDot className="bg-orange-600 rounded-full" />
            About Us
          </p>

          <h2 className="text-[44px] font-bold leading-[50px] mt-5">
            I design that help user more easily to use
          </h2>

          <p className="mt-12 text-slate-600">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
            <br />
            <br />
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </p>

          <div className="flex justify-between items-center gap-4 mt-8">
            <div className="">
              <h3 className="text-[32px] text-orange-500 font-bold">0+</h3>
              <p className="text-black text-[17px] font-medium">
                Complete Project
              </p>
            </div>

            <div className="">
              <h3 className="text-[32px] text-orange-500 font-bold">0+</h3>
              <p className="text-black text-[17px] font-medium">
                Clients on worldwide
              </p>
            </div>

            <div className="">
              <h3 className="text-[32px] text-orange-500 font-bold">0+</h3>
              <p className="text-black text-[17px] font-medium">
                Client Satisfied
              </p>
            </div>
          </div>

          <div className="flex mt-14">
            <button className="px-14 py-[10px] bg-orange-500 text-white text-xl font-medium rounded-lg border">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
