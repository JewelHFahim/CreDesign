import { FaRegCircleDot } from "react-icons/fa6";
import img1 from "../../assets/Sketch.png";
import { useState } from "react";
import { SlSocialDribbble } from "react-icons/sl";


const Experties = () => {

const [state, setState] = useState(1)
  const handleActive = (index) =>{
    setState(index)
  }
console.log(state)

  return (
    <div className="bg-[#fff3ea] p-[120px]">

      <div className="flex">

        <div className="w-[45%]">
          <div className="flex flex-col">
            <p className="flex items-center gap-2">
              <FaRegCircleDot className="bg-orange-600 rounded-full" /> Services
            </p>
            <h2 className="text-[44px] text-black font-semibold">
              OUR SERVICES
            </h2>
          </div>

          <div className="mt-20 grid grid-cols-2 gap-y-12">
            {[1,2,3,4,5,6].map((item,i)=>(
              <div key={i} className="flex flex-col justify-center items-center">
              <img src={img1} alt="" className="w-[100px] rounded-full bg-white p-4"/>
              <div className="w-[200px] shadow-md shadow-orange-200 text-center py-[6px] bg-white text-[18px] font-medium mt-[-8px]">Sketch <span className="text-orange-500 font-semibold">85%</span></div>
            </div>
            ))}
          </div>
        </div>

        <div className="w-[55%]">

          <div className="border border-orange-500 rounded-md flex items-center gap-5 p-2">
            <button onClick={()=>handleActive(1)} className={`border w-full py-2 text-lg text-center rounded-md font-medium  
            ${state === 1 ? "bg-orange-500  text-white" : "bg-white text-black"}`}>Professional</button>

            <button onClick={()=>handleActive(2)} className={`border w-full py-2 text-lg text-center bg-orange-500 rounded-md font-medium ${state === 2 ? "bg-orange-500  text-white" : "bg-white text-black"}`}>Professional</button>
          </div>

          <div className="mt-[110px] flex flex-col gap-10">

            {
              [1,2,3].map((item, i)=>(
              <div key={i} className="w-full bg-white rounded-md py-7 px-6 flex items-center gap-4">
              <div className="border border-orange-500 w-[80px] h-[80px] rounded-full flex justify-center items-center text-slate-500"> <SlSocialDribbble className="text-[35px]"/></div>
              <div className="flex flex-col gap-y-2 w-[85%]">
              <div className="flex justify-between w-full">
              <h2 className="font-medium text-[32px]">Okuneva Ltd.</h2>
              <p className="font-medium text-orange-500 text-[25px]">2 Years</p>
              </div>
              <div className="flex justify-between w-full">
              <h2 className="text-lg text-slate-500">Senior Product Designer</h2>
              <p className="">Jan 2021 - Running</p>
              </div>
              </div>
              </div>
              ))
              
            }


          </div>
        </div>
      </div>
    </div>
  );
};

export default Experties;
