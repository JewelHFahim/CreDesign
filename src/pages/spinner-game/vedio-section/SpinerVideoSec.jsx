import "./SpinerVideoSec.css";

const SpinerVideoSec = () => {
  return (
    <div className="mt-[50px] flex flex-col justify-center items-center gap-y-5">
      <div className="text-center">
        <h1 className="text-[30px] lg:text-[44px] font-medium leading-[40px] lg:leading-[55px]">
          Online Spinner Wheel Game
        </h1>
        <p className="lg:w-[70%] mx-auto">
          We take a personalized approach to creating web applications that
          perfectly align with your business objectives. From concept to
          deployment, we ensure your digital solution is as unique as your
          vision.
        </p>
      </div>

      <div>
        <iframe
          className="video-sec"
          src="https://www.youtube.com/embed/KPPjOTw1NPc?si=bP1AbdnPSWWeaB-Q"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <div className="flex justify-center items-center">
        <button className="px-8 lg:px-14 py-2 lg:py-4 rounded-[10px] lg:rounded-[20px] bg-[#F00] text-[18px] lg:text-[22px] font-medium text-white hover:bg-red-700">
          Contact With Us
        </button>
      </div>
    </div>
  );
};

export default SpinerVideoSec;
