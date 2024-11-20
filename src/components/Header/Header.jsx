import React from 'react';

const Header = () => {
  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold text-primary">Restaurant</h1>
        <nav>
          <ul className="flex space-x-6">
            <li className="hover:text-secondary cursor-pointer">Home</li>
            <li className="hover:text-secondary cursor-pointer">Menu</li>
            <li className="hover:text-secondary cursor-pointer">Our Story</li>
            <li className="hover:text-secondary cursor-pointer">Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
