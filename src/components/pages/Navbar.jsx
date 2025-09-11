import { assets } from "../../../assets/frontend_assets/assets";
import Button from "../Button";
import { Link } from "react-scroll";
import burger_icon from "../../../public/burger_icon.png";
import { useState } from "react";

const Navbar = ({ onOpenModal }) => {
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
        <Link to="home" smooth={true} spy={true} offset={-80} duration={500}>
          <img src={assets.logo} className="w-28 cursor-pointer" alt="app-logo" />
        </Link>
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
        <div className="flex items-center gap-4">
          <img src={assets.search_icon} alt="" />
          <img src={assets.basket_icon} alt="" />
          <Button
            onClick={onOpenModal}
            name="Sign in"
            className="hidden md:flex px-6 py-2 rounded-full border border-gray-500 text-gray-500
            hover:border-orange-400 hover:bg-orange-300 hover:text-white cursor-pointer
            "
          />

          {
            <button
              onClick={() => setOpenHamMenu(true)}
              className={`md:hidden cursor-pointer hover:scale-105 ${
                openHamMenu ? "hidden" : "block"
              }`}
            >
              <img src={burger_icon} className="w-12" alt="" />
            </button>
          }
        </div>

        {openHamMenu && (
          <div className="fixed top-0 right-0 w-64 px-8 py-6 gap-4 flex flex-col md:hidden z-20 text-gray-500 bg-gray-100 shadow-lg">
            <button
              onClick={() => setOpenHamMenu(false)}
              className="absolute right-8 top-2 cursor-pointer hover:scale-110 hover:text-gray-900"
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
            <Link
              onClick={() => onOpenModal(setOpenHamMenu(false))}
              className="cursor-pointer pb-1 hover:text-gray-700 hover:border-b hover:border-b-gray-400"
              activeClass="border-b-2 text-orange-500 border-b-orange-400"
            >
              Sign-In
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
