import { FaRegCircleDot } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";

const PriceList = () => {
  return (
    <div className="px-[120px] py-[50px] bg-orange-100">

      <div>
        <div className="flex flex-col justify-center items-center">
          <p className="flex items-center gap-2">
            <FaRegCircleDot className="bg-orange-600 rounded-full" /> Price
          </p>
          <h2 className="text-[44px] text-black font-semibold uppercase">
            Our Price List
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-4 gap-5">
          {[1, 2, 3, 4].map((item, i) => (
            <div
              key={i}
              className=" rounded-[20px] bg-white px-5 pt-[60px] pb-[40px] border"
            >
              <div>
                <h1 className="text-[23px] font-bold text-blue-600">
                  UAE 30 Days Visit Visa
                </h1>
                <p className="mt-4 text-slate-600">
                  Cozmo Travel takes away the hassle of tedious visa application
                  procedures for those who wish to visit the U.A.E . If you have
                  family or a friend who is a UAE resident, they can apply for a
                  visa on your behalf. Please note that this service is only
                  available to residents of the UAE
                </p>
              </div>

              <hr className="my-8" />

              <div>
                <h1 className="text-[23px] font-bold text-red-500">
                  Required Documents *
                </h1>
                <div className="mt-5 flex flex-col gap-y-2">
                  {[1, 2, 3, 4, 5].map((item, i) => (
                    <div key={i} className="flex items-center gap-1">
                      <FaCheckCircle className="text-lg text-orange-500" />
                      <p>Clear copy of passport of Applicant</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default PriceList;
