import { NavLink, Outlet } from "react-router-dom";
import { GoCodeReview } from "react-icons/go";
import { FaBars, FaCalendarDay, FaCartShopping, FaList } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-[#D1A054]">
        <h2 className="my-5 font-mono text-3xl font-semibold text-center">
          DINE EASE
        </h2>
        <ul className="p-4 space-y-3 menu">
          <li>
            <NavLink to="/dashboard/user-home">
              <FaHome /> User Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/cart">
              <FaCartShopping /> My Cart
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/reservation">
              <FaCalendarDay /> My Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
              <GoCodeReview /> Add A Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/booking">
              <FaList /> My Booking
            </NavLink>
          </li>

          <div className="divider"></div>

          <li>
            <NavLink to="/">
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <FaBars /> Menu
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-5">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
