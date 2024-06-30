import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/logoip.webp";

const MainMenu = () => {
  const location = useLocation();
  const route = location?.pathname;

  const menus = [
    { name: "Home", url: "/ip-tv" },
    { name: "Subscription", url: "/ip-tv/ip-subscription" },
    { name: "Channel List", url: "/ip-tv/ip-channel-list" },
    { name: "Contact Us", url: "/ip-tv/ip-contact" },
    { name: "FAQ", url: "/ip-tv/ip-faq" },
  ];

  return (
    <div className="px-[120px] flex justify-between items-center py-6">
      <div>
        <img src={logo} alt="" className="w-[200px] h-[40px]" />
      </div>

      <div>
        <ul>
          <li className="font-medium uppercase flex items-center gap-x-7 text-[17px]">
            {menus.map((menu, i) => (
              <Link
                to={menu.url}
                key={i}
                className={`${route === menu.url ? "text-red-600" : ""}`}
              >
                {menu.name}
              </Link>
            ))}
          </li>
        </ul>
      </div>

      <button className="bg-red-600 hover:bg-blue-800 transition-colors duration-300 ease-in-out uppercase text-white px-10 py-3 rounded-full">
        Free Trial
      </button>
    </div>
  );
};

export default MainMenu;
