import { NavLink, Outlet } from "react-router-dom";
import { GoCodeReview } from "react-icons/go";
import {
  FaBars,
  FaCalendarDay,
  FaCartShopping,
  FaList,
  FaUtensils,
} from "react-icons/fa6";
import { FaEnvelope, FaHome, FaUsers } from "react-icons/fa";
import useAdmin from "../hooks/useAdmin";

const DashboardLayout = () => {
  // TODO: get is admin form database
  const [isAdmin] = useAdmin();

  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-[#D1A054]">
        <h2 className="my-5 font-mono text-3xl font-semibold text-center">
          DINE EASE
        </h2>
        <ul className="p-4 space-y-3 menu">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/admin-home">
                  <FaHome /> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/add-items">
                  <FaUtensils /> Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manage-items">
                  <FaList /> Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manage-bookings">
                  <GoCodeReview /> Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/all-users">
                  <FaUsers /> All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
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
                <NavLink to="/dashboard/payment-history">
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
            </>
          )}

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
          <li>
            <NavLink to="/">
              <FaEnvelope /> Contact
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
