import logo from "../assets/logo.png";
import MobileMenu from "./MobileMenu";
import NavOptions from "./NavOptions";

const Navbar = () => {
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
            <NavOptions />
          </ul>
        </div>

        {/* Mobile Menu  */}
        <MobileMenu />
      </div>
    </nav>
  );
};

export default Navbar;
