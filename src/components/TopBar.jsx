import { useState, useEffect } from "react";

const TopBar = () => {
  const [fontSize, setFontSize] = useState(16);
  const [lang, setLang] = useState("en");
  const MIN_FONT = 12;
  const MAX_FONT = 22;

  const clampFont = (n) => Math.max(MIN_FONT, Math.min(MAX_FONT, n));

  useEffect(() => {
    document.body.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  // Font controls
  const increaseFont = () => setFontSize((prev) => clampFont(prev + 2));
  const decreaseFont = () => setFontSize((prev) => clampFont(prev - 2));
  const resetFont = () => setFontSize(clampFont(16));

  // Language toggle
  const toggleLanguage = () => {
    setLang((prev) => (prev === "en" ? "hi" : "en"));
  };

  return (
    <div className="w-full bg-gray-100 border-b text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto flex flex-wrap sm:flex-nowrap items-center justify-between gap-3 px-4 sm:px-6 py-2">

        {/* LEFT */}
        <span className="font-medium">
          Government of Rajasthan
        </span>

        {/* RIGHT */}
        <div className="flex items-center gap-3 flex-wrap justify-end">

          {/* Font Controls */}
          <div className="flex border rounded overflow-hidden">
            <button onClick={increaseFont} className="px-2 sm:px-3 py-1 hover:bg-gray-200">
              A+
            </button>
            <button onClick={decreaseFont} className="px-2 sm:px-3 py-1 border-l hover:bg-gray-200">
              A-
            </button>
            <button onClick={resetFont} className="px-2 sm:px-3 py-1 border-l hover:bg-gray-200">
              A
            </button>
          </div>

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="border px-2 sm:px-3 py-1 rounded hover:bg-gray-200 transition"
          >
            {lang === "en" ? "🇮🇳 हिंदी" : "🇬🇧 English"}
          </button>

        </div>
      </div>
    </div>
  );
};

export default TopBar;