import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "./Footer";

const UserLayout = () => {
  return (
    <div className="font-jost">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default UserLayout;
