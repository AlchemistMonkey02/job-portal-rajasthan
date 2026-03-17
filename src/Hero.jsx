import React from "react";
import { motion } from "framer-motion";
import heroImg from "./assets/hero.png";
import job from "./assets/job.png";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Home = () => {
  return (
    <>
      {/* ================= HERO ================= */}
      <section
        className="h-[90vh] bg-cover bg-center relative flex items-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-7xl mx-auto px-6 text-white"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Berozgar Rajasthan
          </h2>

          <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-xl">
            Empowering citizens with employment opportunities, government
            schemes, and career growth across Rajasthan.
          </p>

          <button className="bg-green-600 hover:bg-green-700 px-8 py-3 rounded-lg font-medium shadow-lg hover:scale-105 transition">
            Explore Opportunities →
          </button>
        </motion.div>
      </section>

      {/* ================= VISION & MISSION ================= */}
      <section className="py-20 relative bg-gradient-to-r from-green-100 to-white overflow-hidden">
        {/* Background Text */}
        <h1 className="absolute top-10 left-1/2 -translate-x-1/2 text-[80px] font-bold text-gray-300 opacity-20 whitespace-nowrap">
          OUR VISION MISSION
        </h1>

        <div className="relative z-10 text-center">
          <h2 className="text-4xl font-bold text-green-700 mb-12">
            Our Vision, Mission & Approach
          </h2>

          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 px-6">
            {["Vision", "Mission", "Approach"].map((item, i) => (
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition hover:-translate-y-2">
                <h3 className="text-xl font-semibold mb-3">Our {item}</h3>
                <p className="text-gray-600 text-sm">
                  Building strong employment ecosystems through innovation and
                  collaboration.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section
        className="py-20 text-center relative bg-cover bg-center"
        style={{ backgroundImage: `url(${job})` }}
      >
        {/* Overlay (controls opacity) */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-4xl font-bold text-white mb-12">
            Recruitment Services
          </h2>

          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-6">
            {["Government Jobs", "Skill Development", "Private Jobs"].map(
              (title, i) => (
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition border-t-4 border-green-600 hover:scale-105">
                  <h3 className="text-lg font-semibold mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm">
                    Explore opportunities and grow your career with Rajasthan.
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ================= NEWS ================= */}
      <section
        className="py-20 relative bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/news-bg.jpg')", // put image in public/assets
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/90"></div>

        {/* Background Text */}
        <h1 className="absolute top-10 left-1/2 -translate-x-1/2 text-[80px] font-bold text-gray-300 opacity-20">
          NEWS & EVENTS
        </h1>

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-green-700 mb-12">
            News & Events
          </h2>

          <div className="space-y-6">
            {[
              "New Job Portal Launched",
              "Mega Job Fair 2026",
              "Skill Training Program",
            ].map((news, i) => (
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition border-l-4 border-green-600">
                <h4 className="font-semibold text-lg">{news}</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Latest updates from Rajasthan government employment
                  initiatives.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
