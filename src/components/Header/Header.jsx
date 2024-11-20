import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gradient-to-b from-red-900 to-black py-4 fixed w-full z-50 shadow-lg">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold text-white">Restaurant</h1>
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className="text-white hover:text-red-500 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/menu"
              className="text-white hover:text-red-500 transition duration-300"
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              to="/reservation"
              className="text-white hover:text-red-500 transition duration-300"
            >
              Reservation
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-white hover:text-red-500 transition duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
