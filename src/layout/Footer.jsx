import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoBasketballOutline } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";



const Footer = () => {


    return (
        <div className="bg-black   ">

            <div className="px-[120px] py-[100px] flex justify-between">
            <div className="flex gap-x-[150px]">
            <ul className="text-white flex flex-col gap-y-3">
                <li className="text-xl font-medium">Quick Menu</li>
                <li><a href="">About</a></li>
                <li><a href="">Portfolio</a></li>
                <li><a href="">Resume</a></li>
                <li><a href="">Contact</a></li>
            </ul>

            <ul className="text-white flex flex-col gap-y-3">
                <li className="text-xl font-medium">Services</li>
                <li><a href="">Photography</a></li>
                <li><a href="">Videography</a></li>
                <li><a href="">Wedding</a></li>
            </ul>

            <ul className="text-white flex flex-col gap-y-3">
                <li className="text-xl font-medium">Contact</li>
                <li><a href="">202 Dog Hill Lane Beloit,KS 67420</a></li>
                <li><a href="" className="text-orange-500">+1416-8241228</a></li>
                <div className="flex items-center gap-4">
                <li className="w-[45px] h-[45px] rounded-md bg-slate-700 flex justify-center items-center hover:bg-orange-500">
                    <a href="" > <FaFacebookF className="text-[20px]" /> </a>
                </li>
                <li className="w-[45px] h-[45px] rounded-md bg-slate-700 flex justify-center items-center hover:bg-orange-500">
                    <a href="" > <FaLinkedinIn className="text-[20px]" /> </a>
                </li>
                <li className="w-[45px] h-[45px] rounded-md bg-slate-700 flex justify-center items-center hover:bg-orange-500">
                    <a href="" > <IoBasketballOutline className="text-[20px]" /> </a>
                </li>
                </div>
            </ul>
            </div>

            <div className="">
                <h1 className="text-[44px] text-white font-semibold w-[360px] leading-[60px]">Let's Make Consultation With Us!</h1>

                <div className="flex items-center justify-between mt-5">
                    <input placeholder="Enter your email" type="text" className="py-3 w-[300px]  rounded-md bg-transparent border border-slate-600 focus:outline-orange-500 focus:outline-none px-4" />
                    <div className="w-[45px] h-[48px] rounded-md bg-orange-500 text-white flex justify-center items-center"> <FaTelegramPlane /> </div>
                </div>

            </div>
            </div>

            <hr className="border border-slate-900" />

            <div className="px-[120px] py-[40px] text-white flex justify-between">
                <p>All rights reserved © 2023 Credesign</p>
                <p>Developed By <span className="text-orange-500">CloudySign</span>.</p>
            </div>

        </div>
    );
};

export default Footer;