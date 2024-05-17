import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-[#00000080] absolute z-50 w-full">
      <div className="container flex items-center justify-center py-5 mx-auto">
        <div className="flex items-center justify-start w-1/2">
          <img src={logo} alt="logo" className="w-12" />
          <h2 className="mx-4 mt-4 font-serif text-2xl font-bold text-white uppercase">
            Dine Ease
          </h2>
        </div>
        <div className="flex items-center justify-end w-1/2">
          <ul className="flex gap-4 font-semibold text-white uppercase font-inter">
            <li>Home</li>
            <li>CONTACT us</li>
            <li>DASHBOARD</li>
            <li>Our Menu</li>
            <li>Our Shop</li>
            <li>SIGN OUT</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
