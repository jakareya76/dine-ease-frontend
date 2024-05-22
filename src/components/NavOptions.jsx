import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const NavOptions = () => {
  const { user, loading, logout } = useContext(AuthContext);

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
      <>
        {loading ? (
          <span className="loading loading-spinner loading-lg"></span>
        ) : (
          <>
            {user ? (
              <li>
                <button
                  onClick={() => logout()}
                  className="px-5 py-3 text-white bg-blue-500 rounded"
                >
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li className="cursor-pointer hover:text-yellow-500">
                  <Link to="/login">LOGIN</Link>
                </li>
                <li className="cursor-pointer hover:text-yellow-500">
                  <Link to="/sign-up">SIGN UP</Link>
                </li>
              </>
            )}
          </>
        )}
      </>
    </>
  );
};

export default NavOptions;
