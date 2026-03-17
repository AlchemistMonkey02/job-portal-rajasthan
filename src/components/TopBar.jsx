import { useState } from "react";

const TopBar = () => {
  const [dark, setDark] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  // Font controls
  const increaseFont = () => setFontSize((prev) => prev + 2);
  const decreaseFont = () => setFontSize((prev) => prev - 2);
  const resetFont = () => setFontSize(16);

  // Dark mode toggle
  const toggleDark = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div
      className="w-full bg-gray-100 border-b text-sm dark:bg-gray-900 dark:text-white"
      style={{ fontSize: `${fontSize}px` }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">

        {/* LEFT */}
        <span className="font-medium">
          Government of Rajasthan
        </span>

        {/* RIGHT */}
        <div className="flex items-center gap-3">

          {/* Font Controls */}
          <div className="flex border rounded overflow-hidden">
            <button onClick={increaseFont} className="px-3 py-1 hover:bg-gray-200 dark:hover:bg-gray-700">
              A+
            </button>
            <button onClick={decreaseFont} className="px-3 py-1 border-l hover:bg-gray-200 dark:hover:bg-gray-700">
              A-
            </button>
            <button onClick={resetFont} className="px-3 py-1 border-l hover:bg-gray-200 dark:hover:bg-gray-700">
              A
            </button>
          </div>

          {/* Dark Mode */}
          <button
            onClick={toggleDark}
            className="bg-black text-white px-3 py-1 rounded hover:bg-gray-800 transition"
          >
            Dark Mode
          </button>

          {/* Language */}
          <button className="border px-3 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            🇮🇳 हिंदी
          </button>

        </div>
      </div>
    </div>
  );
};

export default TopBar;