const SpinerVideoSec = () => {
  return (
    <div className="mt-[50px] flex flex-col justify-center items-center gap-y-5">
      <div className="text-center">
        <h1 className="text-[44px] font-medium ">Online Spinner Wheel Game</h1>
        <p className="w-[70%] mx-auto">
          We take a personalized approach to creating web applications that
          perfectly align with your business objectives. From concept to
          deployment, we ensure your digital solution is as unique as your
          vision.
        </p>
      </div>

      <div>
        <iframe
          width="660"
          height="350"
          style={{ borderRadius: "40px" }}
          src="https://www.youtube.com/embed/KPPjOTw1NPc?si=bP1AbdnPSWWeaB-Q"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <div className="flex justify-center items-center">
        <button className="px-14 py-4 rounded-[20px] bg-[#F00] text-[22px] font-medium text-white">Contact With Us</button>
      </div>
    </div>
  );
};

export default SpinerVideoSec;
