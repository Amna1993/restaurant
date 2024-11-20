import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Restaurant Name. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:text-secondary">Facebook</a>
          <a href="#" className="hover:text-secondary">Instagram</a>
          <a href="#" className="hover:text-secondary">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
