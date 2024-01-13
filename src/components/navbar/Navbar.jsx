import "./Navbar.css";
import logo from "../../assets/Logo.png";

const Navbar = () => {

  return (
    <nav className="navbar lg:px-[120px] py-[20px]">

        <img src={logo} alt="" />

      <ul className="navbar-menu">
        <li> <a href="#!">Home</a> </li>
        <li> <a href="#!">About</a> </li>

        <li className="has-children"> 
        <a href="#!" aria-haspopup="true"> Services </a>
          <ul aria-label="submenu"> 
            <li> <a href="#!">Service item 1</a> </li>
            <li> <a href="#!">Service item 3</a> </li>
            <li> <a href="#!">Service item 4</a> </li>
          </ul>
        </li>

        <li> <a href="#!">Portfolio</a> </li>
        <li> <a href="#!">Blog</a> </li>
      </ul>

      <button className="border px-6 py-1 rounded-lg bg-orange-500 text-white text-lg font-medium"> Contact Us </button>

    </nav>
  );
};

export default Navbar;
