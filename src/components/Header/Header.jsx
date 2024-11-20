import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-gradient-to-b from-red-900 to-black py-4 fixed w-full z-50 shadow-lg">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">Restaurant</h1>

        {/* Hamburger Icon for Mobile */}
        <button
          className="text-white text-2xl md:hidden"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <ul
          className={`flex flex-col md:flex-row md:space-x-6 absolute md:static bg-black md:bg-transparent top-16 md:top-0 left-0 w-full md:w-auto transition-all duration-300 ${
            menuOpen ? "block" : "hidden md:flex"
          }`}
        >
          <li className="text-center md:text-left">
            <Link
              to="/"
              className="block px-4 py-2 text-white hover:text-red-500 transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="text-center md:text-left">
            <Link
              to="/menu"
              className="block px-4 py-2 text-white hover:text-red-500 transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Menu
            </Link>
          </li>
          <li className="text-center md:text-left">
            <Link
              to="/reservation"
              className="block px-4 py-2 text-white hover:text-red-500 transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Reservation
            </Link>
          </li>
          <li className="text-center md:text-left">
            <Link
              to="/contact"
              className="block px-4 py-2 text-white hover:text-red-500 transition duration-300"
              onClick={() => setMenuOpen(false)}
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
