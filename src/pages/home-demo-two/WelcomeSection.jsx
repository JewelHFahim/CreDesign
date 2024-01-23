import home from "../../assets/h2.png";

const WelcomeSection = ({title, des}) => {
  
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-center items-center py-5 lg:py-8">

      <div className="lg:w-[45%] text-center lg:text-left">
        <h1 className="text-[18px] lg:text-[44px] font-semibold lg:leading-[55px]">{title}</h1>
        <p className="mt-3 lg:mt-5">{des}</p>
      </div>

      <div> <img src={home} alt="" /> </div>

    </div>
  );
};

export default WelcomeSection;
