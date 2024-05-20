import { useState } from "react";
import NavOptions from "./NavOptions";

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

      {toggleMenu && (
        <div className="absolute p-5 bg-white top-12">
          <ul className="flex flex-col gap-2 text-sm font-semibold text-black uppercase md:gap-6 lg:text-md font-inter">
            <NavOptions />
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
