import { motion } from "framer-motion";
import { FiSearch, FiBriefcase, FiMapPin } from "react-icons/fi";
import heroImg from "./assets/hero.jpg";
import job from "./assets/job.png";

// Animation
const fadeDown = {
  hidden: { opacity: 0, y: -80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Hero = () => {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="h-[100vh] bg-white flex items-center">
        <div className="w-full px-6 md:px-16 grid md:grid-cols-2 gap-10 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            variants={fadeDown}
            initial="hidden"
            whileInView="visible"
            className="max-w-xl"
          >
            <p className="text-green-700 font-semibold uppercase mb-4 tracking-wide">
              India’s #1 Job Platform
            </p>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Your job search ends here
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Discover 50 lakh+ career opportunities
            </p>

            {/* SEARCH BAR */}
            <div className="bg-gray-100 rounded-2xl shadow-sm flex flex-col md:flex-row items-stretch md:items-center overflow-hidden max-w-3xl">
              
              <div className="flex items-center px-5 flex-1">
                <FiSearch className="text-gray-400 mr-3 text-lg" />
                <input
                  type="text"
                  placeholder="Search jobs by 'skill'"
                  className="w-full py-4 bg-transparent outline-none text-gray-700"
                />
              </div>

              <div className="hidden md:block h-8 w-px bg-gray-300"></div>

              <div className="flex items-center px-5 flex-1">
                <FiBriefcase className="text-gray-400 mr-3 text-lg" />
                <input
                  type="text"
                  placeholder="Your Experience"
                  className="w-full py-4 bg-transparent outline-none text-gray-700"
                />
              </div>

              <div className="hidden md:block h-8 w-px bg-gray-300"></div>

              <div className="flex items-center px-5 flex-1">
                <FiMapPin className="text-gray-400 mr-3 text-lg" />
                <input
                  type="text"
                  placeholder="Search for an area or city"
                  className="w-full py-4 bg-transparent outline-none text-gray-700"
                />
              </div>

              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 font-medium whitespace-nowrap rounded-r-2xl">
                Search jobs
              </button>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end">
            <img
              src={heroImg}
              alt="Hero"
              className="w-full max-h-[100vh] object-contain"
            />
          </div>
        </div>
      </section>

      {/* ================= VISION & MISSION ================= */}
      <section className="py-20 relative bg-gradient-to-r from-green-100 to-white overflow-hidden">
        <h1 className="absolute top-10 left-1/2 -translate-x-1/2 text-[80px] font-bold text-gray-300 opacity-20 whitespace-nowrap">
          OUR VISION MISSION
        </h1>

        <div className="relative z-10 text-center">
          <h2 className="text-4xl font-bold text-green-700 mb-12">
            Our Vision, Mission & Approach
          </h2>

          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 px-6">
            {["Vision", "Mission", "Approach"].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition hover:-translate-y-2"
              >
                <h3 className="text-xl font-semibold mb-3">
                  Our {item}
                </h3>
                <p className="text-gray-600 text-sm">
                  Building strong employment ecosystems through innovation and collaboration.
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
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>

        <div className="relative z-10">
          <h2 className="text-4xl font-bold text-white mb-12">
            Recruitment Services
          </h2>

          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-6">
            {["Government Jobs", "Skill Development", "Private Jobs"].map(
              (title, i) => (
                <div
                  key={i}
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition border-t-4 border-green-600 hover:scale-105"
                >
                  <h3 className="text-lg font-semibold mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Explore opportunities and grow your career with Rajasthan.
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ================= NEWS ================= */}
      <section
        className="py-20 relative bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/news-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-white/90"></div>

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
              <div
                key={i}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition border-l-4 border-green-600"
              >
                <h4 className="font-semibold text-lg">{news}</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Latest updates from Rajasthan government employment initiatives.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;