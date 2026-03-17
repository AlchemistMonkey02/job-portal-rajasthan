import React from "react";

const Hero = () => {
  return (
    <section
      className="h-[85vh] bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1581090700227-1e8e6c04c2c3')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="text-white max-w-xl">
          
          <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Berozgar Rajasthan
          </h2>

          <p className="text-lg md:text-xl mb-6 text-gray-200">
            Empowering citizens with employment opportunities, government
            schemes, and career resources across Rajasthan.
          </p>

          <button className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-md font-medium transition duration-300 shadow-lg">
            Explore Opportunities
          </button>

        </div>
      </div>
    </section>
  );
};

export default Hero;