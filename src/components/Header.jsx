// src/components/Header.jsx
import React from "react";

const Header = () => {
  return (
    <header className="w-full">

      {/* Header Row */}
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
          <nav className="flex items-center gap-4">

            {/* HOME (Active Glow Button) */}
            <a
              href="./home"
              className="px-5 py-2 bg-white text-gray-900 text-xs font-bold uppercase tracking-widest rounded-full 
              shadow-[0_0_15px_rgba(255,255,255,0.4)] 
              hover:shadow-[0_0_25px_rgba(255,255,255,0.8)] 
              hover:scale-105 transition-all duration-300"
            >
              Home
            </a>

            {/* ABOUT */}
            <a
              href="./about"
              className="px-5 py-2 border border-white text-white text-xs font-bold uppercase tracking-widest rounded-full 
              hover:bg-white hover:text-gray-900 
              shadow-[0_0_10px_rgba(255,255,255,0.2)] 
              hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] 
              hover:scale-105 transition-all duration-300"
            >
              About
            </a>

            {/* CONTACT (Yellow Glow like reference) */}
            <a
              href="./contact"
              className="px-5 py-2 bg-yellow-400 text-black text-xs font-bold uppercase tracking-widest rounded-full 
              shadow-[0_0_15px_rgba(251,173,38,0.5)] 
              hover:shadow-[0_0_25px_rgba(251,173,38,0.9)] 
              hover:scale-105 transition-all duration-300"
            >
              Contact
            </a>

          </nav>

        </div>
      </div>
    </header>
  );
};

export default Header;