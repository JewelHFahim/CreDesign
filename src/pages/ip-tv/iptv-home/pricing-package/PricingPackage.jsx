import { FaRegCheckCircle } from "react-icons/fa";
import { FaWifi } from "react-icons/fa6";
import PricingBtn from "../../../../utils/ip-tv/PricingBtn";
import PaypalBtn from "../../../../utils/ip-tv/PaypalBtn";
import CryptoBtn from "../../../../utils/ip-tv/CryptoBtn";

const PricingPackage = () => {
  const datas = [
    { title: "+30K Worldwide Channels" },
    { title: "+95,000 VODs & Series." },
    { title: "4K & Full HD Quality" },
    { title: "PPV Channels" },
    { title: "EPG Available" },
    { title: "Friendly With VPN" },
  ];

  const priceData = [
    {
      name: "Free IpTv Trail",
      duration: "24H",
      price: "Free",
      facilities: datas,
      trailBtn: true,
      paypalBtn: false,
      cryptoBtn: false,
      moneyBack: false,
      bgColor: "",
      textColor: "text-black"
    },
    {
      name: "Simple Package",
      duration: "1 Monoth",
      price: "16,99 $",
      facilities: datas,
      trailBtn: true,
      paypalBtn: true,
      cryptoBtn: true,
      moneyBack: true,
      bgColor: "",
      textColor: "text-black"
    },
    {
      name: "Basic Package",
      duration: "3 Monoth",
      price: "35,99 $",
      facilities: datas,
      trailBtn: true,
      paypalBtn: true,
      cryptoBtn: true,
      moneyBack: true,
      bgColor: "",
      textColor: "text-black"
    },
    {
      name: "Premium Package",
      duration: "6 Months",
      price: "46,99 $",
      facilities: datas,
      trailBtn: true,
      paypalBtn: true,
      cryptoBtn: true,
      moneyBack: true,
      bgColor: "bg-black",
      textColor: "text-white"
    },
    {
      name: "Luxury Package",
      duration: "12 Months",
      price: "63,99 $",
      facilities: datas,
      trailBtn: true,
      paypalBtn: true,
      cryptoBtn: true,
      moneyBack: true,
      bgColor: "bg-black",
      textColor: "text-white"
    },
    {
      name: "Platinuim Package",
      duration: "24 Months",
      price: "99,99 $",
      facilities: datas,
      trailBtn: true,
      paypalBtn: true,
      cryptoBtn: true,
      moneyBack: true,
      bgColor: "bg-black",
      textColor: "text-white"
    },
  ];

  return (
    <div className="px-12 mt-[230px]">

      <div className="pb-10">
        <div className="flex flex-col justify-center items-center">
          <h3 className="flex items-center gap-2 tracking-widest uppercase font-bold">
            <FaWifi className="text-xl text-red-600" />
            PRICING PACKAGE
          </h3>
          <h1 className="mt-2 text-[52px] font-bold leading-tight">
            Choose The Right One For You
          </h1>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-x-5 gap-y-24">
          {priceData.map((item, i) => (
            <div
              key={i}
              className={`w-full h-[900px] shadow-xl hover:shadow-2xl transition-shadow duration-300 px-10 py-12 rounded-[18px] border border-slate-100 ${item.bgColor} ${item.textColor}`}
            >
              <div className="flex flex-col justify-center items-center border-b border-black border-opacity-[30%] pb-10">
                <h2 className="text-3xl font-semibold">{item.name}</h2>
                <h2 className="text-4xl font-bold mt-3">{item.duration}</h2>
                <h1 className="text-5xl text-red-600 font-bold mt-4">
                  {item.price}
                </h1>
              </div>

              <div className="flex flex-col gap-3 mt-10 border-b border-black border-opacity-[30%] pb-10">
                {datas.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-lg font-semibold"
                  >
                    <FaRegCheckCircle className="text-red-600 text-2xl" />
                    <p>{item.title}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-4">
                {item.trailBtn && <PricingBtn></PricingBtn>}
                {item.paypalBtn && <PaypalBtn></PaypalBtn>}
                {item.cryptoBtn && <CryptoBtn></CryptoBtn>}
              </div>

              {item.moneyBack && (
                <p className="mt-5 text-center font-medium">
                  7 Days Money-Back Guarantee
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPackage;
