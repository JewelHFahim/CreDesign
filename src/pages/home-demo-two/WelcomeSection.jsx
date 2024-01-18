import home from "../../assets/h2.png";

const WelcomeSection = () => {
  return (
    <div className="flex justify-center items-center py-8">


      <div className="w-[45%]">
        <h1 className="text-[44px] font-semibold leading-[55px]">Web Application Development Company</h1>
        <p className="mt-5 w-[70%]">With a dedicated team of experts, we provide customized web application development services that cater to your specific needs.</p>
      </div>
      <div>
        <img src={home} alt="" />
      </div>


    </div>
  );
};

export default WelcomeSection;
