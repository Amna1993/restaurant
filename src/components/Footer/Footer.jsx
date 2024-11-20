import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-red-900 to-black text-white py-4 mt-auto">
      <div className="max-w-7xl mx-auto text-center px-4">
        <p>&copy; {new Date().getFullYear()} Restaurant. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-2">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-red-500 transition duration-300"
          >
            <FaFacebookF className="text-xl" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-red-500 transition duration-300"
          >
            <FaInstagram className="text-xl" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-red-500 transition duration-300"
          >
            <FaTwitter className="text-xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
