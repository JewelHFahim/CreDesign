import MobileMenu from "./MobileMenu";
import logo from "../../assets/Logo.png";


const MobileMenuBar = () => {
    return (
        <div className="flex justify-between items-center border bg-slate-200 w-full h-[70px] px-10">

            <a href="/"><img src={logo} alt="" className="w-[100px]"/></a>
            
            <div><MobileMenu/></div>
            
        </div>
    );
};

export default MobileMenuBar;