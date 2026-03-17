// src/components/Header.jsx
import React from "react";

const Header = () => {
  return (
    <header className="w-full">
      {/* Top Govt Strip */}
      <div className="bg-gray-100 border-b text-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">
          <div className="flex items-center gap-3">
            <span className="font-medium text-gray-700">Government of Rajasthan</span>
          </div>
          <div className="flex items-center gap-4 text-gray-600">
            <button className="px-2 py-1 border rounded">A+</button>
            <button className="px-2 py-1 border rounded">A-</button>
            <button className="px-2 py-1 border rounded">A</button>
            <button className="bg-black text-white px-2 py-1 rounded">Dark Mode</button>
            <span>हिंदी</span>
          </div>
        </div>
      </div>

      {/* Combined Header Row */}
<div className="w-full bg-green-700 text-white">
  <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

    {/* LEFT: Logo + Title */}
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-gray-300 rounded-full" />
      <div>
        <h1 className="text-lg md:text-xl font-semibold">
          Rozgar Rajasthan
        </h1>
        <p className="text-xs text-gray-200">
          Government of Rajasthan
        </p>
      </div>
    </div>

    {/* RIGHT: Navigation */}
    <nav className="flex items-center gap-6 font-medium">
      <a href="./home" className="bg-gray-500 px-4 py-2 rounded">
        Home
      </a>
      <a href="./about" className="hover:text-gray-200">
        About Us
      </a>
      <a href="./contact" className="hover:text-gray-200">
        Contact Us
      </a>
    </nav>

  </div>
</div>
    </header>
  );
};

export default Header;