import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <nav className="bg-[#00000080] absolute z-50 w-full">
      <div className="container flex items-center justify-center px-2 py-3 mx-auto sm:py-5">
        <div className="flex items-center justify-start ">
          <img src={logo} alt="logo" className="w-12" />
          <h2 className="mx-4 mt-3 font-serif text-sm font-bold text-white uppercase md:text-lg lg:text-2xl">
            Dine Ease
          </h2>
        </div>
        <div className="items-center justify-end flex-1 hidden lg:flex">
          <ul className="flex text-sm font-semibold text-white uppercase md:gap-6 lg:text-md font-inter">
            <li className="cursor-pointer hover:text-yellow-500">Home</li>
            <li className="cursor-pointer hover:text-yellow-500">CONTACT us</li>
            <li className="cursor-pointer hover:text-yellow-500">DASHBOARD</li>
            <li className="cursor-pointer hover:text-yellow-500">
              <Link to="/menu">Our Menu</Link>
            </li>
            <li className="cursor-pointer hover:text-yellow-500">Our Shop</li>
            <li className="cursor-pointer hover:text-yellow-500">SIGN OUT</li>
          </ul>
        </div>

        {/* Mobile Menu Icon */}
        <div className="relative flex items-center justify-end w-1/2 lg:hidden">
          <div
            className="relative cursor-pointer right-3"
            onClick={handleToggleMenu}
          >
            {toggleMenu ? (
              <>
                <div className="w-[24px] h-[2px] my-2 mt-2 bg-white  absolute rotate-45 duration-300"></div>
                <div className="w-[24px] h-[2px] my-2 bg-white -rotate-45 duration-300"></div>
              </>
            ) : (
              <>
                <div className="w-[24px] h-[2px] my-2 bg-white duration-300"></div>
                <div className="w-[24px] h-[2px] my-2 bg-white duration-300"></div>
                <div className="w-[24px] h-[2px] my-2 bg-white duration-300"></div>
              </>
            )}
          </div>

          {/* Mobile Menu */}
          {toggleMenu && (
            <div className="absolute p-5 bg-white top-12">
              <ul className="flex flex-col gap-2 text-sm font-semibold text-black uppercase md:gap-6 lg:text-md font-inter">
                <li className="cursor-pointer hover:text-yellow-500">Home</li>
                <li className="cursor-pointer hover:text-yellow-500">
                  CONTACT us
                </li>
                <li className="cursor-pointer hover:text-yellow-500">
                  DASHBOARD
                </li>
                <li className="cursor-pointer hover:text-yellow-500">
                  <Link to="/menu">Our Menu</Link>
                </li>
                <li className="cursor-pointer hover:text-yellow-500">
                  Our Shop
                </li>
                <li className="cursor-pointer hover:text-yellow-500">
                  SIGN OUT
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
