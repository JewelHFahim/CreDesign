import { FaRegCircleCheck, FaWifi } from "react-icons/fa6";

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

      <div className="my-[100px] border-b border-black border-opacity-[20%] pb-10">
        <h3 className="flex items-center gap-2 tracking-widest uppercase font-bold">
          <FaWifi className="text-xl text-red-600" />
          Who We Are?
        </h3>
        <h1 className="mt-4 text-[52px] font-bold">
          An IPTV Subscription In World At The Best Price
        </h1>
        <p className="mt-5 leading-loose">
          Would you like to view all your favorite channels from Worldwide ? In
          this case, we advise you to choose a PROTOIPTV subscription, which
          will allow you to benefit from a quality subscription, for the viewing
          of all of your favorite programs. Everything is done to facilitate
          your use, and why you can enjoy the best advantages while enjoying our
          service.
        </p>

        <div className="grid grid-cols-2 gap-5 mt-3">
          {points.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <FaRegCircleCheck className="text-xl text-red-600" />
              <p className=" font-semibold">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
