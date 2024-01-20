import react from "../../../assets/react.png";
import angular from "../../../assets/angular.png";
import html from "../../../assets/html.png";
import tailwind from "../../../assets/tailwind.png";
import nodejs from "../../../assets/nodejs.png";
import laravel from "../../../assets/laravel.png";
import mongodb from "../../../assets/mongodb.png";

const TechnologyStack = ({title}) => {
  return (
    <div className="mt-[50px] bg-white flex flex-col justify-center items-center gap-y-5 border p-8">

      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-[25px] font-medium uppercase">{title}</h1>
        <p className="w-[80%] font-medium">
          Our engineers apprehend your business requirements and help you choose
          the right technology for your solution.
        </p>
      </div>

      <div className="mt-5 w-full flex items-center justify-between px-[150px]">

        <div className="flex flex-col items-center justify-center">
          <h3 className="text-[20px] font-medium">Frontend</h3>
          <div className="flex items-center gap-x-5 mt-2">

            <div className="flex flex-col justify-center items-center">
            <img src={react} alt="" />
            <p>React JS</p>
            </div>

            <div className="flex flex-col justify-center items-center">
            <img src={angular} alt="" />
            <p>Angular</p>
            </div>

            <div className="flex flex-col justify-center items-center">
            <img src={html} alt="" />
            <p>HTML5</p>
            </div>

            <div className="flex flex-col justify-center items-center">
            <img src={tailwind} alt="" />
            <p>Tailwind</p>
            </div>

          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <h3 className="text-[20px] font-medium">Backend</h3>
          <div className="flex items-center gap-x-5 mt-2">

          <div className="flex flex-col justify-center items-center">
          <img src={nodejs} alt="" />
          <p>Node JS</p>
          </div>

          <div className="flex flex-col justify-center items-center">
          <img src={laravel} alt="" />
          <p>Laravel</p>
          </div>

          <div className="flex flex-col justify-center items-center">
          <img src={mongodb} alt="" />
          <p>Laravel</p>
          </div>

          </div>
        </div>

      </div>

    </div>
  );
};

export default TechnologyStack;
