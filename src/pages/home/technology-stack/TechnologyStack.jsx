import react from "../../../assets/react.png";
import angular from "../../../assets/angular.png";
import html from "../../../assets/html.png";
import tailwind from "../../../assets/tailwind.png";
import nodejs from "../../../assets/nodejs.png";
import laravel from "../../../assets/laravel.png";
import mongodb from "../../../assets/mongodb.png";

const TechnologyStack = ({title}) => {
  return (
    <div data-aos="zoom-in-up" data-aos-delay="50" data-aos-duration="1500" className="mt-[50px] bg-white flex flex-col justify-center items-center lg:gap-y-5 border p-5 lg:p-8">

      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-[18px] lg:text-[25px] font-medium uppercase">{title}</h1>
        <p className="lg:w-[80%] font-medium">
          Our engineers apprehend your business requirements and help you choose
          the right technology for your solution.
        </p>
      </div>

      <div className="mt-5 w-full flex flex-col lg:flex-row items-center justify-between lg:px-[150px] gap-y-4 lg:gap-y-0">

        <div className="flex flex-col items-center justify-center">
          <h3 className="text-[20px] font-medium">Frontend</h3>
          <div className="flex items-center gap-x-3 lg:gap-x-5 mt-2">

            <div className="flex flex-col justify-center items-center">
            <img src={react} alt="" className="w-[55px] lg:w-full"/>
            <p className="text-sm lg:text-[16px]">React JS</p>
            </div>

            <div className="flex flex-col justify-center items-center">
            <img src={angular} alt="" className="w-[55px] lg:w-full"/>
            <p className="text-sm lg:text-[16px]">Angular</p>
            </div>

            <div className="flex flex-col justify-center items-center">
            <img src={html} alt="" className="w-[55px] lg:w-full"/>
            <p className="text-sm lg:text-[16px]">HTML5</p>
            </div>

            <div className="flex flex-col justify-center items-center">
            <img src={tailwind} alt="" className="w-[55px] lg:w-full" />
            <p className="text-sm lg:text-[16px]">Tailwind</p>
            </div>

          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <h3 className="text-[20px] font-medium">Backend</h3>
          <div className="flex items-center gap-x-3 lg:gap-x-5 mt-2">

          <div className="flex flex-col justify-center items-center">
          <img src={nodejs} alt="" className="w-[55px] lg:w-full"/>
          <p className="text-sm lg:text-[16px]">Node JS</p>
          </div>

          <div className="flex flex-col justify-center items-center">
          <img src={laravel} alt="" className="w-[55px] lg:w-full"/>
          <p className="text-sm lg:text-[16px]">Laravel</p>
          </div>

          <div className="flex flex-col justify-center items-center">
          <img src={mongodb} alt="" className="w-[55px] lg:w-full"/>
          <p className="text-sm lg:text-[16px]">Laravel</p>
          </div>

          </div>
        </div>

      </div>

    </div>
  );
};

export default TechnologyStack;
