// src/components/Header.jsx
import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close menus when resizing to desktop.
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
        setAboutOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const onNavigate = () => {
    setMobileOpen(false);
    setAboutOpen(false);
  };

  return (
    <header className="w-full">
      <div className="w-full text-white" style={{ backgroundColor: "var(--theme-color)" }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-300 rounded-full" />
            <div>
              <h1 className="text-lg md:text-xl font-semibold">
                Rozgar Rajasthan
              </h1>
              <p className="text-xs text-gray-200">Government of Rajasthan</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4">
            {/* HOME */}
            <Link
              to="/"
              onClick={onNavigate}
              className="px-5 py-2 bg-yellow-400 text-black text-xs font-bold uppercase tracking-widest rounded-full shadow-[0_0_15px_rgba(251,173,38,0.5)] hover:shadow-[0_0_25px_rgba(251,173,38,0.9)] hover:scale-105 transition-all duration-300"
            >
              Home
            </Link>

            {/* ABOUT (Simple Button) */}
            <Link
              to="/about"
              onClick={onNavigate}
              className="px-5 py-2 border border-white text-white text-xs font-bold uppercase tracking-widest rounded-full 
              hover:bg-white hover:text-gray-900 
              shadow-[0_0_10px_rgba(255,255,255,0.2)] 
              hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] 
              hover:scale-105 transition-all duration-300"
            >
              About
            </Link>

            {/* CONTACT */}
            <Link
              to="/contact"
              onClick={onNavigate}
              className="px-5 py-2 bg-yellow-400 text-black text-xs font-bold uppercase tracking-widest rounded-full shadow-[0_0_15px_rgba(251,173,38,0.5)] hover:shadow-[0_0_25px_rgba(251,173,38,0.9)] hover:scale-105 transition-all duration-300"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => {
                setMobileOpen((v) => !v);
                setAboutOpen(false);
              }}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-green-800 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-300"
            >
              <div className="w-6">
                <div className="h-0.5 bg-white w-full mb-1" />
                <div className="h-0.5 bg-white w-full mb-1 last:mb-0" />
                <div className="h-0.5 bg-white w-full" />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-green-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 space-y-2">
              <Link
                to="/"
                onClick={onNavigate}
                className="block w-full text-center px-5 py-2 bg-yellow-400 text-black text-xs font-bold uppercase tracking-widest rounded-full shadow-[0_0_15px_rgba(251,173,38,0.5)] hover:shadow-[0_0_25px_rgba(251,173,38,0.9)] transition-all duration-300"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="px-5 py-2 border border-white text-white text-xs font-bold uppercase tracking-widest rounded-full 
                hover:bg-white hover:text-gray-900 
                shadow-[0_0_10px_rgba(255,255,255,0.2)] 
                hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] 
                hover:scale-105 transition-all duration-300"
              >
                About
              </Link>

              <Link
                to="/contact"
                onClick={onNavigate}
                className="block w-full text-center px-5 py-2 bg-yellow-400 text-black text-xs font-bold uppercase tracking-widest rounded-full shadow-[0_0_15px_rgba(251,173,38,0.5)] hover:shadow-[0_0_25px_rgba(251,173,38,0.9)] transition-all duration-300"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
