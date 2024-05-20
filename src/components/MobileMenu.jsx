import { useState } from "react";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
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
            <li className="cursor-pointer hover:text-yellow-500">
              <Link to="/">Home</Link>
            </li>
            <li className="cursor-pointer hover:text-yellow-500">CONTACT us</li>
            <li className="cursor-pointer hover:text-yellow-500">DASHBOARD</li>
            <li className="cursor-pointer hover:text-yellow-500">
              <Link to="/menu">Our Menu</Link>
            </li>
            <li className="cursor-pointer hover:text-yellow-500">Our Shop</li>
            <li className="cursor-pointer hover:text-yellow-500">SIGN OUT</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
