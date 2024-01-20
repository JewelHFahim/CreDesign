import home from "../../assets/h2.png";

const WelcomeSection = ({title, des}) => {
  return (
    <div className="flex justify-center items-center py-8">


      <div className="w-[45%]">
        <h1 className="text-[44px] font-semibold leading-[55px]">{title}</h1>
        <p className="mt-5">{des}</p>
      </div>
      <div>
        <img src={home} alt="" />
      </div>


    </div>
  );
};

export default WelcomeSection;
