import { FaRegCircleCheck, FaWifi } from "react-icons/fa6";
import img1 from "../../../../assets/hyf.jpg";

const WhoWeAre = () => {
  const points = [
    {
      title: "Up to +22000 Channels",
    },
    {
      title: "Unlimited Movies",
    },
    {
      title: "Server up-time 99.9%",
    },
    {
      title: "24/7 support",
    },
  ];
  return (
    <div className="commonPadding font-inter">
      <div className="my-[100px] flex justify-between items-center">
        <div className="w-1/2 border-b border-black border-opacity-[20%] pb-8 mr-8">
          <h3 className="flex items-center gap-2 tracking-widest uppercase font-bold">
            <FaWifi className="text-xl text-red-600" />
            Who We Are?
          </h3>
          <h1 className="mt-2 text-[52px] font-bold leading-tight">
            An IPTV Subscription In World At The Best Price
          </h1>
          <p className="mt-6 leading-loose">
            Would you like to view all your favorite channels from Worldwide ?
            In this case, we advise you to choose a PROTOIPTV subscription,
            which will allow you to benefit from a quality subscription, for the
            viewing of all of your favorite programs. Everything is done to
            facilitate your use, and why you can enjoy the best advantages while
            enjoying our service.
          </p>
          

          <div className="grid grid-cols-2 gap-5 mt-4">
            {points.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <FaRegCircleCheck className="text-xl text-red-600" />
                <p className=" font-semibold">{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-1/2 r relative">
          <img src={img1} alt="" className="w-full h-full rounded-[18px]" />

          <div className="absolute right-[-50px] top-[-50px] bg-white border-black rounded-full w-[140px] h-[140px] shadow-2xl flex justify-center items-center">
            <FaWifi className="text-6xl text-red-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
