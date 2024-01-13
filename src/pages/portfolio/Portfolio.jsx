import { useState } from "react";
import { FaRegCircleDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import img1 from "../../assets/recentEight.png";

const Portfolio = () => {

    const [active, setActive] = useState(1);
    const handleActive = (index) => {
        setActive(index);
        console.log(index)
    }

  return (
    <div className="p-[120px] bg-white">
      <div>

        <div className="flex flex-col justify-center items-center">
          <p className="flex items-center gap-2">
            <FaRegCircleDot className="bg-orange-600 rounded-full" /> Portfolio
          </p>
          <h2 className="text-[44px] text-black font-semibold">
            SOME RECENT WORK
          </h2>
        </div>

        <div className="flex justify-center mt-12 ">
            <ul className="flex text-lg text-slate-500 gap-x-5">
                <li onClick={()=>handleActive(1)} className={`${active === 1 ? "font-medium text-orange-500" : "" }`}><Link to="">All</Link></li>
                <li onClick={()=>handleActive(2)} className={`${active === 2 ? "font-medium text-orange-500" : "" }`}><Link to="">Ui/Ux Design</Link></li>
                <li onClick={()=>handleActive(3)} className={`${active === 3 ? "font-medium text-orange-500" : "" }`}><Link to="">Graphic Design</Link></li>
                <li onClick={()=>handleActive(4)} className={`${active === 4 ? "font-medium text-orange-500" : "" }`}><Link to="">App Development</Link></li>
                <li onClick={()=>handleActive(5)} className={`${active === 5 ? "font-medium text-orange-500" : "" }`}><Link to="">Web Design</Link></li>
            </ul>
        </div>

        <div className="mt-14 grid grid-cols-3">

            <div className="border rounded-md p-4 flex flex-col w-[400px] h-full">
                <img src={img1} alt="" />
                <p className="mt-2 text-slate-600">GRAPHIC DESIGN</p>
                <h2 className="text-[24px] font-medium text-black hover:text-orange-500 leading-[30px]">The best way to impress your web</h2>
            </div>

            <div className="border rounded-md p-4 flex flex-col w-[400px] h-full">
                <img src={img1} alt="" />
                <p className="mt-2 text-slate-600">GRAPHIC DESIGN</p>
                <h2 className="text-[24px] font-medium text-black hover:text-orange-500 leading-[30px]">The best way to impress your web</h2>
            </div>

            <div className="border rounded-md p-4 flex flex-col w-[400px] h-full">
                <img src={img1} alt="" />
                <p className="mt-2 text-slate-600">GRAPHIC DESIGN</p>
                <h2 className="text-[24px] font-medium text-black hover:text-orange-500 leading-[30px]">The best way to impress your web</h2>
            </div>


        </div>


      </div>
    </div>
  );
};

export default Portfolio;
