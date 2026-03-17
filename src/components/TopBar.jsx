import { useState } from "react";

const TopBar = () => {
  const [fontSize, setFontSize] = useState(16);
  const [lang, setLang] = useState("en");

  // Font controls
  const increaseFont = () => setFontSize((prev) => prev + 2);
  const decreaseFont = () => setFontSize((prev) => prev - 2);
  const resetFont = () => setFontSize(16);

  // Language toggle
  const toggleLanguage = () => {
    setLang((prev) => (prev === "en" ? "hi" : "en"));
  };

  return (
    <div
      className="w-full bg-gray-100 border-b text-sm"
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
            <button onClick={increaseFont} className="px-3 py-1 hover:bg-gray-200">
              A+
            </button>
            <button onClick={decreaseFont} className="px-3 py-1 border-l hover:bg-gray-200">
              A-
            </button>
            <button onClick={resetFont} className="px-3 py-1 border-l hover:bg-gray-200">
              A
            </button>
          </div>

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="border px-3 py-1 rounded hover:bg-gray-200 transition"
          >
            {lang === "en" ? "🇮🇳 हिंदी" : "🇬🇧 English"}
          </button>

        </div>
      </div>
    </div>
  );
};

export default TopBar;