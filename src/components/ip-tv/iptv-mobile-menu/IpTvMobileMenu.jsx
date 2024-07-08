/* eslint-disable react/prop-types */
import "react-modern-drawer/dist/index.css";
import React, { useEffect } from "react";
import Drawer from "react-modern-drawer";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../../assets/logoip.webp";
import { Link, useLocation } from "react-router-dom";

const IpTvMobileMenu = () => {
  const location = useLocation();
  const route = location?.pathname;

  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const navigation = [
    {
      href: "/ip-tv",
      name: "Home",
    },
    {
      href: "/ip-tv/ip-subscription",
      name: "Subscription",
    },
    {
      href: "/ip-tv/ip-channel-list",
      name: "Channel List",
    },
    {
      href: "/ip-tv/ip-contact",
      name: "Contact Us",
    },
    {
      href: "/ip-tv/ip-faq",
      name: "Faq",
    },
  ];

  useEffect(() => {
    setIsOpen(false);
  }, [route]);

  return (
    <div className="lg:hidden">
      <button
        onClick={toggleDrawer}
        className="bg-red-600 px-3 py-2 rounded-md"
      >
        <GiHamburgerMenu className="text-xl text-white" />
      </button>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className="h-screen"
        size={250}
        lockBackgroundScroll={true}
        overlayOpacity={0.7}
      >
        <nav className="fixed top-0 left-0 w-full h-full border-r bg-white space-y-8 sm:w-80">
          <div className="flex flex-col h-full px-4">
            <div className="h-20 flex items-center pl-2">
              <div className="w-full flex items-center gap-x-4">
                <img src={logo} alt="" />
              </div>
            </div>

            <div className="overflow-auto">
              <ul className="text-lg font-medium flex flex-col gap-y-2.5">
                {navigation.map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.href}
                    className={`
                      flex items-center gap-x-2 text-gray-600 p-2 rounded-lg   ${
                        route === item.href ? "text-red-600" : ""
                      } duration-150
                      `}
                  >
                    {item.name}
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </Drawer>
    </div>
  );
};

export default IpTvMobileMenu;
