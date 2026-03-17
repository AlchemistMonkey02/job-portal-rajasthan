// src/components/Header.jsx
import React from "react";

const Header = () => {
  return (
    <header className="w-full bg-white shadow">
      {/* Top Bar */}
      <div className="bg-gray-100 text-sm px-6 py-2 flex justify-between">
        <div>Government of Rajasthan Portal</div>
        <div className="space-x-3">
          <span>हिंदी</span>
          <span>|</span>
          <span>English</span>
        </div>
      </div>

      {/* Navbar */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-green-600 text-white px-3 py-1 rounded font-bold">
            BR
          </div>
          <h1 className="text-xl font-bold text-gray-800">
            Berozgar Rajasthan
          </h1>
        </div>

        {/* Menu */}
        <nav className="flex gap-8 text-gray-700 font-medium">
          <a href="#" className="hover:text-green-600">Home</a>
          <a href="#" className="hover:text-green-600">About Us</a>
          <a href="#" className="hover:text-green-600">Contact Us</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;