import homeBanner1 from "../../assets/homeBannerFourImg.png";
import { FaDribbble, FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";

const WelcomePage = () => {

  return (
    <div className="bg-[#fff3ea] lg:pl-[120px] lg:pr-[60px] lg:pt-[170px] flex bg-gradient-to-b from-[#fff3ea] to-[#fff3ea]">
      
      <div className="w-[65%] font-jost pb-[50px]">
        <p className=" text-black font-medium">I'M GLAD YOU'RE HERE.</p>

        <div className="text-[70px] mt-8">
          <h1 className="font-medium leading-[80px]">
            Hi 👋 I’m Beery Solving
          </h1>
          <h1 className="leading-[80px] font-bold text-orange-500">
            <TypeAnimation
              sequence={["modern problem", 2000, "modern solutions", 2000]}
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <h1 className="leading-[80px]">through design</h1>
        </div>

        <p className="mt-8 text-slate-600">
          I'm creative UX/UI Designer based in Canada, and I'm very passionate
          and dedicated to my work. Solving modern problem through design. I'm
          creative UX/UI Designer based in Canada, and I'm very passionate and
          dedicated to my work. Solving modern problem through design.
        </p>

        <div className="mt-20">
          <p className=" font-medium text-black">FIND WITH ME</p>
          <div className="flex items-center gap-4 mt-2">
            <div className=" bg-orange-600 w-[50px] h-[50px] flex justify-center items-center rounded-md">
              <FaFacebookF className="text-xl text-white" />
            </div>
            <div className=" bg-orange-600 w-[50px] h-[50px] flex justify-center items-center rounded-md">
              <FaLinkedinIn className="text-xl text-white" />
            </div>
            <div className=" bg-orange-600 w-[50px] h-[50px] flex justify-center items-center rounded-md">
              <FaDribbble className="text-xl text-white" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-[35%]">
        <img src={homeBanner1} alt="" className="object-cover w-full h-full" />
      </div>

    </div>
  );
};

export default WelcomePage;
