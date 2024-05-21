import { Link } from "react-router-dom";

const NavOptions = () => {
  return (
    <>
      <li className="cursor-pointer hover:text-yellow-500">
        <Link to="/">Home</Link>
      </li>
      <li className="cursor-pointer hover:text-yellow-500">CONTACT us</li>
      <li className="cursor-pointer hover:text-yellow-500">DASHBOARD</li>
      <li className="cursor-pointer hover:text-yellow-500">
        <Link to="/menu">Our Menu</Link>
      </li>
      <li className="cursor-pointer hover:text-yellow-500">
        <Link to="/order/salad">Order Food</Link>
      </li>
      <li className="cursor-pointer hover:text-yellow-500">SIGN OUT</li>
    </>
  );
};

export default NavOptions;
