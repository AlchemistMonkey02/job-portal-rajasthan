import { motion as Motion } from "framer-motion";
import { FiEye, FiTarget, FiSettings } from "react-icons/fi";

import TopBar from "./components/TopBar";
import NavBar from "./components/Header";
import Footer from "./components/Footer";

import heroImg from "./assets/hero.jpg";
import govt from "./assets/govt.webp";
import skill from "./assets/skill.webp";
import privateImg from "./assets/private.webp";

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
      <TopBar />
      <NavBar />
      {/* ================= HERO ================= */}
      <section
        className="min-h-[100svh] bg-cover bg-center relative flex items-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>

        <div className="relative z-10 w-full px-4 sm:px-6 md:px-16">
          <Motion.div
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
          </Motion.div>
        </div>
      </section>

      {/* ================= VISION & MISSION ================= */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* BACKGROUND TEXT */}
        <h1 className="absolute top-6 sm:top-8 md:top-10 left-1/2 -translate-x-1/2 text-[48px] sm:text-[56px] md:text-[80px] font-bold text-gray-300 opacity-20 whitespace-nowrap leading-none">
          VISION MISSION
        </h1>

        <Motion.div
          variants={fadeDown}
          initial="hidden"
          whileInView="visible"
          className="relative z-10 max-w-3xl mx-auto text-center mb-14"
        >
          <h2 className="text-4xl font-bold text-green-700">
            Our Vision, Mission & Approach
          </h2>
        </Motion.div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-4 sm:px-6">
          {[
            {
              title: "Our Vision",
              icon: <FiEye />,
              desc: `"All round and large scale development requires a combination of capacities and efforts which cannot be provided by any single agency or system. To ensure that the benefits of development reach the poor in particular and the people in general it is necessary the government and NGOs pool their strengths and become partners"`,
            },
            {
              title: "Our Mission",
              icon: <FiTarget />,
              desc: `ARAVALI intends to ensure that there are an increased number of effective voluntary organisations working closely with marginalized communities in every district of Rajasthan and that an enabling environment is developed within which the government and these organisations can form effective partnerships.`,
            },
            {
              title: "Approach",
              icon: <FiSettings />,
              desc: `ARAVALI's approach to its mission is two pronged – first, enhancing human and institutional capacities of voluntary organisations and second, by facilitating build conducive environment for collaboration.`,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="border border-gray-300 rounded-xl p-10 text-center bg-white hover:shadow-md transition duration-300"
            >
              {/* ICON */}
              <div className="text-green-600 text-5xl mb-6 flex justify-center">
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-600 text-sm leading-relaxed max-w-md mx-auto">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-24 relative bg-green-800 overflow-hidden rounded-t-[40px]">
        <h1 className="absolute top-6 sm:top-8 md:top-10 left-1/2 -translate-x-1/2 text-[48px] sm:text-[64px] md:text-[90px] font-bold text-white opacity-10 whitespace-nowrap tracking-widest leading-none">
          RECRUITEMENT SERVICES
        </h1>

        <div className="relative z-10 text-center px-4 sm:px-6">
          <Motion.div
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
          </Motion.div>

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
        <div className="absolute inset-0 bg-white/90"></div>

        <h1 className="absolute top-6 sm:top-8 md:top-10 left-1/2 -translate-x-1/2 text-[48px] sm:text-[64px] md:text-[90px] font-bold text-gray-300 opacity-20 whitespace-nowrap tracking-widest leading-none">
          NEWS & EVENTS
        </h1>

        <div className="relative z-10 text-center px-4 sm:px-6">
          <Motion.div
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
          </Motion.div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-3 gap-8">
            {[
              "New Job Portal Launched",
              "Mega Job Fair 2026",
              "Skill Training Program",
            ].map((news, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition duration-300"
              >
                <h4 className="font-semibold text-lg text-gray-900 mb-3">
                  {news}
                </h4>
                <p className="text-sm text-gray-600 mb-6">
                  Latest updates from Rajasthan government employment
                  initiatives.
                </p>

                <button className="flex items-center gap-2 text-green-700 font-medium">
                  View jobs →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS BAR SECTION ===== */}
      <section className="w-full bg-[#f5f1ec] py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 text-center md:divide-x divide-gray-300">
            <div className="px-2 sm:px-4 flex flex-col items-center justify-center">
              <div className="text-green-600 text-3xl mb-2 flex items-center justify-center h-12 w-12">⬛</div>
              <h2 className="text-2xl font-bold text-gray-900">5M+</h2>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">pages generated</p>
            </div>

            <div className="px-2 sm:px-4 flex flex-col items-center justify-center">
              <div className="text-green-600 text-3xl mb-2 flex items-center justify-center h-12 w-12">↻</div>
              <h2 className="text-2xl font-bold text-gray-900">3.1x</h2>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">higher reply rate</p>
            </div>

            <div className="px-2 sm:px-4 flex flex-col items-center justify-center">
              <div className="text-green-600 text-3xl mb-2 flex items-center justify-center h-12 w-12">⏱</div>
              <h2 className="text-2xl font-bold text-gray-900">2.5hrs</h2>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">saved per campaign</p>
            </div>

            <div className="px-2 sm:px-4 flex flex-col items-center justify-center">
              <div className="text-green-600 text-3xl mb-2 flex items-center justify-center h-12 w-12">📅</div>
              <h2 className="text-2xl font-bold text-gray-900">12k</h2>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">meetings booked</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Hero;
