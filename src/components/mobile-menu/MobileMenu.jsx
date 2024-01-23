import "react-modern-drawer/dist/index.css";
import React from "react";
import Drawer from "react-modern-drawer";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsArrowLeft } from "react-icons/bs";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const menus = [
    { title: "Home", path: "/" },

    { title: "Home 2", path: "/home-2" },

    {
      title: "Service",
      path: "/",
      submenu: [{ stitle: "UI/UX DESIGN" }, { stitle: "WEB DEVELOPMENT" }],
    },

    { title: "Home 3", path: "/home-3" },

    { title: "Home", path: "/home-4" },
  ];

  return (
    <>
      <button onClick={toggleDrawer}>
        <GiHamburgerMenu />
      </button>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className="h-screen"
        size={300}
        lockBackgroundScroll={true}
        overlayOpacity={0.7}
      >
        <section className="p-8 text-primary">
          <div className="flex justify-end text-[25px]">
            <button onClick={toggleDrawer}>
              <BsArrowLeft />
            </button>
          </div>

          <div className="">
            <ul className="menu font-semibold w-full">
              {menus.map((menu, index) => (
                <li key={index} className="border-b my-6">
                  {menu.submenu ? (
                    <details
                      open={isOpen[menu.title]}
                      onClick={() => toggleDrawer(menu.title)}
                      className="border-b"
                    >
                      <summary className="my-2 rounded-none hover:text-secondary">
                        {menu.title}
                      </summary>
                      <ul>
                        {menu.submenu.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <a href="">{subItem.stitle}</a>
                          </li>
                        ))}
                      </ul>
                    </details>
                  ) : (
                    <a
                      href={menu.path}
                      className="rounded-none my-2 hover:text-secondary w-full"
                    >
                      {menu.title}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </Drawer>
    </>
  );
};

export default MobileMenu;
