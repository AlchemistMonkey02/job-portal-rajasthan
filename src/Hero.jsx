import { useState } from "react";
import { motion } from "framer-motion";
import { FiEye, FiTarget, FiSettings } from "react-icons/fi";
import heroImg from "./assets/hero.jpg";
import govt from "./assets/govt.webp";
import skill from "./assets/skill.webp";
import privateImg from "./assets/private.webp";
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
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      {/* ================= HERO ================= */}
      <section
        className="h-[100vh] bg-cover bg-center relative flex items-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        {/* LEFT GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>

        {/* CONTENT */}
        <div className="relative z-10 w-full px-6 md:px-16">
          <motion.div
            variants={fadeDown}
            initial="hidden"
            whileInView="visible"
            className="max-w-2xl text-white"
          >
            <p className="text-green-400 font-semibold uppercase mb-4 tracking-wide">
              Government of Rajasthan Initiative
            </p>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Rozgar Rajasthan
            </h1>

            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Empowering citizens with employment opportunities, skill
              development, and government schemes for sustainable growth across
              Rajasthan.
            </p>

            <button className="bg-green-600 hover:bg-green-700 px-8 py-3 rounded-md font-medium shadow-md transition">
              Explore More →
            </button>
          </motion.div>
        </div>
      </section>

      {/* ================= VISION & MISSION ================= */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* BACKGROUND TEXT */}
        <h1 className="absolute top-10 left-1/2 -translate-x-1/2 text-[80px] font-bold text-gray-300 opacity-20 whitespace-nowrap">
          VISION MISSION
        </h1>

        {/* HEADING */}
        <motion.div
          variants={fadeDown}
          initial="hidden"
          whileInView="visible"
          className="relative z-10 max-w-3xl mx-auto text-center mb-14"
        >
          <h2 className="text-4xl font-bold text-green-700">
            Our Vision, Mission & Approach
          </h2>
        </motion.div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-6">
          {[
            {
              title: "Vision",
              icon: <FiEye />,
              desc: "To create a strong employment ecosystem empowering every citizen of Rajasthan.",
            },
            {
              title: "Mission",
              icon: <FiTarget />,
              desc: "Provide accessible job opportunities, skill development, and career growth support.",
            },
            {
              title: "Approach",
              icon: <FiSettings />,
              desc: "Leveraging technology and partnerships to deliver transparent and efficient services.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition group"
            >
              {/* TOP GRADIENT */}
              <div className="bg-gradient-to-br from-green-600 via-green-500 to-green-600 p-6 h-40 flex flex-col justify-between">
                {/* ICON */}
                <div className="text-white text-3xl opacity-90">
                  {item.icon}
                </div>

                {/* TITLE */}
                <h3 className="text-white text-lg font-semibold">
                  {item.title}
                </h3>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h4 className="text-lg font-semibold mb-2 text-gray-800">
                  {item.title}
                </h4>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-24 relative bg-green-800 overflow-hidden rounded-t-[40px]">
        <h1 className="absolute top-10 left-1/2 -translate-x-1/2 text-[90px] font-bold text-white opacity-10 whitespace-nowrap tracking-widest">
          RECRUITEMENT SERVICES
        </h1>

        <div className="relative z-10 text-center px-6">
          <motion.div
            variants={fadeDown}
            initial="hidden"
            whileInView="visible"
            className="max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
              Recruitment Services
            </h2>

            <p className="text-gray-400 mt-4 text-sm">
              Connecting talent with the right opportunities across Rajasthan
            </p>
          </motion.div>

          {/* CARDS */}
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Government Jobs",
                //tag: "TRENDING AT #1",
                img: govt,
              },
              {
                title: "Skill Based Jobs",
                //tag: "TRENDING AT #2",
                img: skill,
              },
              {
                title: "Private Jobs",
                //tag: "TRENDING AT #3",
                img: privateImg,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative cursor-pointer rounded-3xl p-6 overflow-hidden transition duration-300 flex items-center justify-between gap-6 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-green-100 hover:border-green-600 hover:shadow-xl"
              >
                {/* LEFT CONTENT */}
                <div className="z-10 flex flex-col items-start text-left">
                  <p className="text-sm text-gray-300 mb-3 group-hover:text-gray-500">
                    {item.tag}
                  </p>

                  <h3 className="text-xl font-bold mb-5 text-white group-hover:text-green-700">
                    {item.title}
                  </h3>

                  {/* BUTTON */}
                  <button className="px-5 py-2 rounded-lg text-sm transition flex items-center gap-2 text-white border border-white/40 group-hover:bg-green-600 group-hover:text-white group-hover:border-green-600">
                    View all →
                  </button>
                </div>

                {/* RIGHT IMAGE */}
                <div className="relative z-10 flex-shrink-0">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-32 md:w-36 object-contain transition group-hover:scale-105"
                  />
                </div>

                {/* BACKGROUND FADED TEXT */}
                <h1 className="absolute bottom-2 left-4 text-[50px] font-bold text-white opacity-10 whitespace-nowrap pointer-events-none group-hover:text-green-300">
                  {item.title}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= NEWS ================= */}
      <section
        className="py-24 relative bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('/assets/news-bg.jpg')" }}
      >
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-white/90"></div>

        {/* BACKGROUND TEXT */}
        <h1 className="absolute top-10 left-1/2 -translate-x-1/2 text-[90px] font-bold text-gray-300 opacity-20 whitespace-nowrap tracking-widest">
          NEWS & EVENTS
        </h1>

        {/* CONTENT */}
        <div className="relative z-10 text-center px-6">
          {/* HEADING WITH ANIMATION */}
          <motion.div
            variants={fadeDown}
            initial="hidden"
            whileInView="visible"
            className="max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-green-700 leading-tight">
              News & Events
            </h2>

            <p className="text-gray-600 mt-4 text-sm">
              Stay updated with the latest announcements, programs, and
              initiatives
            </p>
          </motion.div>

          <div className="space-y-6 relative z-10 max-w-5xl mx-auto px-6">
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

export default Hero;
