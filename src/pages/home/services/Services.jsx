import { FaArrowRightLong } from "react-icons/fa6";
import img1 from "../../../assets/c1.png";
import img2 from "../../../assets/c2.png";
import img3 from "../../../assets/c3.png";
import img4 from "../../../assets/c4.png";
import img5 from "../../../assets/c5.png";

const Services = () => {
  return (
    <div className="mt-[50px] flex flex-col justify-center items-center">
      <div>
        <h1 className="text-[44px] text-slate-900 font-medium">Our Services</h1>
      </div>

      {/* Srvice 1 */}
      <div className="mt-5 w-full flex flex-col justify-center items-center shadow-lg bg-[#F5F2F2] p-5">
        <h2 className="text-[22px] font-medium uppercase">
          Our Casino Software Solutions
        </h2>

        <div className="mt-4 w-full flex justify-between px-[40px]">
          <div className=" w-1/2 flex flex-col items-start">
            <p className="w-[60%] font-medium">
              Fast track your online casino’s launch with our complete iGaming
              White Label Package. Choose from the top iGaming products and
              payment gateways in Southeast Asia — all fully integrated into our
              advanced CRM platform and marketing toolkit.
            </p>

            <button className="mt-[100px] flex items-center gap-2 border px-5 py-2 rounded-md bg-[#FF3D3D] text-white">
              <p>Find Out More</p> <FaArrowRightLong />
            </button>
          </div>

          <div className="w-1/2">
            <img src={img1} alt="" className=" h-[350px]" />
          </div>
        </div>
      </div>

      {/* Srvice 2 */}
      <div className="mt-10 w-full flex flex-col justify-center items-center shadow-lg bg-[#FEFBEB] p-5">
        <h2 className="text-[22px] font-medium uppercase">
          Spinner API INTEGRATION & DISTRIBUTION
        </h2>

        <div className="mt-4 w-full flex justify-between px-[40px]">
          <div className="w-1/2">
            <img src={img2} alt="" className=" h-[350px]" />
          </div>

          <div className=" w-1/2 flex flex-col items-start">
            <p className="w-[60%] font-medium">
              Fast track your online casino’s launch with our complete iGaming
              White Label Package. Choose from the top iGaming products and
              payment gateways in Southeast Asia — all fully integrated into our
              advanced CRM platform and marketing toolkit.
            </p>

            <button className="mt-[100px] flex items-center gap-2 border px-5 py-2 rounded-md bg-[#FF3D3D] text-white">
              <p>Find Out More</p> <FaArrowRightLong />
            </button>
          </div>
        </div>
      </div>

      {/* Srvice 3 */}
      <div className="mt-10 w-full flex flex-col justify-center items-center shadow-lg bg-[#F5F2F2] p-5">
        <h2 className="text-[22px] font-medium uppercase">
          Movie Streaming and Download Solution
        </h2>

        <div className="mt-4 w-full flex justify-between px-[40px]">
          <div className=" w-1/2 flex flex-col items-start">
            <p className="w-[60%] font-medium">
              Fast track your online casino’s launch with our complete iGaming
              White Label Package. Choose from the top iGaming products and
              payment gateways in Southeast Asia — all fully integrated into our
              advanced CRM platform and marketing toolkit.
            </p>

            <button className="mt-[100px] flex items-center gap-2 border px-5 py-2 rounded-md bg-[#FF3D3D] text-white">
              <p>Find Out More</p> <FaArrowRightLong />
            </button>
          </div>

          <div className="w-1/2">
            <img src={img3} alt="" className=" h-[350px]" />
          </div>
        </div>
      </div>

      {/* Srvice 4 */}
      <div className="mt-10 w-full flex flex-col justify-center items-center shadow-lg bg-[#FEFBEB] p-5">
        <h2 className="text-[22px] font-medium uppercase">
          Movie DataBase API integration
        </h2>

        <div className="mt-4 w-full flex justify-between px-[40px]">
          <div className="w-1/2">
            <img src={img4} alt="" className=" h-[350px]" />
          </div>

          <div className=" w-1/2 flex flex-col items-start">
            <p className="w-[60%] font-medium">
              Fast track your online casino’s launch with our complete iGaming
              White Label Package. Choose from the top iGaming products and
              payment gateways in Southeast Asia — all fully integrated into our
              advanced CRM platform and marketing toolkit.
            </p>

            <button className="mt-[100px] flex items-center gap-2 border px-5 py-2 rounded-md bg-[#FF3D3D] text-white">
              <p>Find Out More</p> <FaArrowRightLong />
            </button>
          </div>
        </div>
      </div>

      {/* Srvice 5 */}
      <div className="mt-10 w-full flex flex-col justify-center items-center shadow-lg bg-[#F5F2F2] p-5">
        <h2 className="text-[22px] font-medium uppercase">
          Custom Web App Design and Development
        </h2>

        <div className="mt-4 w-full flex justify-between px-[40px]">
          <div className=" w-1/2 flex flex-col items-start">
            <p className="w-[60%] font-medium">
              Fast track your online casino’s launch with our complete iGaming
              White Label Package. Choose from the top iGaming products and
              payment gateways in Southeast Asia — all fully integrated into our
              advanced CRM platform and marketing toolkit.
            </p>

            <button className="mt-[100px] flex items-center gap-2 border px-5 py-2 rounded-md bg-[#FF3D3D] text-white">
              <p>Find Out More</p> <FaArrowRightLong />
            </button>
          </div>

          <div className="w-1/2">
            <img src={img5} alt="" className=" h-[350px]" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Services;
