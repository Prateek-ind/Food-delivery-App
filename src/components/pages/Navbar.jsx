import { assets } from "../../../assets/frontend_assets/assets";
import Button from "../Button";
import { Link } from "react-scroll";
import burger_icon from "../../../public/burger_icon.png";
import { useState } from "react";

const Navbar = () => {
  const [openHamMenu, setOpenHamMenu] = useState(false);

  const links = [
    { id: "home", label: "home" },
    { id: "menu", label: "menu" },
    { id: "mobile-app", label: "mobile-app" },
    { id: "contact-us", label: "contact-us" },
  ];

  return (
    <div className="h-[80px] fixed top-0 left-0 w-full shadow-md z-30 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between ">
        <img src={assets.logo} className="w-28" alt="app-logo" />
        <div className=" gap-4 hidden md:flex text-gray-500">
          {links.map((link) => (
            <Link
              key={link.id}
              to={link.id}
              smooth={true}
              spy={true}
              offset={-80}
              duration={500}
              className="cursor-pointer pb-1 hover:text-gray-700 hover:border-b hover:border-b-gray-400"
              activeClass="border-b-2 text-orange-500 border-b-orange-400"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="md:flex items-center gap-4 hidden">
          <img src={assets.search_icon} alt="" />
          <img src={assets.basket_icon} alt="" />
          <Button
            name="Sign in"
            className="px-6 py-2 rounded-full border border-gray-500 text-gray-500
            hover:border-orange-400 hover:bg-orange-300 hover:text-white cursor-pointer
            "
          />
        </div>
        {!openHamMenu && (
          <button onClick={() => setOpenHamMenu(true)}>
            <img
              src={burger_icon}
              className="w-12 block md:hidden cursor-pointer hover:scale-105"
              alt=""
            />
          </button>
        )}
        {openHamMenu && (
          <div className="fixed top-0 right-0 w-64 px-8 py-4 gap-4 flex flex-col md:hidden z-20 text-gray-500 bg-gray-100 shadow-lg">
            <button
              onClick={() => setOpenHamMenu(false)}
              className="absolute right-8 top-0 cursor-pointer hover:scale-110 hover:text-gray-900"
            >
              x
            </button>
            {links.map((link) => (
              <Link
                key={link.id}
                to={link.id}
                smooth={true}
                spy={true}
                offset={-80}
                duration={500}
                className="cursor-pointer pb-1 hover:text-gray-700 hover:border-b hover:border-b-gray-400"
                activeClass="border-b-2 text-orange-500 border-b-orange-400"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
