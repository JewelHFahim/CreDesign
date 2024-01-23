import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "./Footer";
import MobileMenuBar from "../components/mobile-menu/MobileMenuBar";

const UserLayout = () => {
  return (
    <div className="font-jost">

      <div className="hidden lg:block">
        <Navbar />
      </div>

      <div className="block lg:hidden">
        <MobileMenuBar />
      </div>

      <Outlet />

      <Footer /> 
    </div>
  );
};

export default UserLayout;
