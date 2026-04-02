import { useState } from "react";
import { motion } from "framer-motion";
import TopBar from "./components/TopBar";
import NavBar from "./components/Header";
import Footer from "./components/Footer";
import orgData from "./data/orgStructure.json";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const sections = [
  { id: "roles", title: "Roles" },
  { id: "structure", title: "Organizational Structure" },
  { id: "operations", title: "Operational Structure" },
  { id: "governance", title: "Governance" },
  { id: "reports", title: "Reports" },
  { id: "team", title: "Our Team" },
];

const About = () => {
  const [activeNode, setActiveNode] = useState(null);

  return (
    <>
      <TopBar />
      <NavBar />

      <section className="bg-gray-50 py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[250px_1fr] gap-10">

          {/* ================= LEFT SIDEBAR ================= */}
          <div className="hidden md:block sticky top-24 h-fit">
            <div className="bg-white shadow rounded-xl p-4 space-y-3">
              <h3 className="font-semibold text-gray-700 mb-2">
                About Sections
              </h3>

              {sections.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  className="block px-3 py-2 rounded hover:bg-green-100 hover:text-green-700 text-sm transition"
                >
                  {sec.title}
                </a>
              ))}
            </div>
          </div>

          {/* ================= CONTENT ================= */}
          <div className="space-y-16">

            {/* TITLE */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              className="text-center"
            >
              <h1 className="text-4xl font-bold text-gray-800">
                About <span className="text-green-700">Rozgar Rajasthan</span>
              </h1>
              <p className="text-gray-600 mt-2">
                Empowering employment across Rajasthan through innovation and collaboration.
              </p>
            </motion.div>

            {/* ================= ROLES ================= */}
            <motion.div id="roles" variants={fadeUp} initial="hidden" whileInView="visible">
              <h2 className="text-2xl font-bold text-green-700 mb-4">
                Roles Rozgar Rajasthan Performs
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {["Collaboration Platform", "Partnership Facilitation", "Skill Development", "Innovation Promotion"]
                  .map((item, i) => (
                    <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                      <h3 className="font-semibold text-lg mb-2">{item}</h3>
                      <p className="text-gray-600 text-sm">
                        Strengthening employment ecosystem through structured initiatives.
                      </p>
                    </div>
                  ))}
              </div>
            </motion.div>

            {/* ================= ORGANIZATIONAL STRUCTURE ================= */}
            <motion.div
  id="structure"
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  className="text-center"
>
  <h2 className="text-3xl font-bold text-green-700 mb-4">
    Organizational Structure
  </h2>

  <p className="text-gray-600 max-w-2xl mx-auto mb-12">
    A structured hierarchy ensuring efficient governance and implementation.
  </p>

  {/* ================= HIERARCHY ================= */}
  <div className="flex flex-col items-center">

    {orgData.hierarchy.map((item, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.1 }}
        className="flex flex-col items-center"
      >

        {/* NODE */}
        <div
          onClick={() => setActiveNode(item)}
          className={`relative cursor-pointer px-10 py-3 rounded-xl text-white font-semibold transition-all duration-300
          ${
            activeNode?.title === item.title
              ? "bg-green-700 scale-110 shadow-[0_0_25px_rgba(34,197,94,0.8)]"
              : "bg-gradient-to-r from-green-600 to-green-400 hover:scale-105"
          }`}
        >
          {item.title}

          {/* Hover Tooltip */}
          <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 
            opacity-0 group-hover:opacity-100 transition text-xs bg-black text-white px-3 py-1 rounded shadow">
            Click for details
          </div>
        </div>

        {/* CONNECTOR */}
        {i !== orgData.hierarchy.length - 1 && (
          <div className="w-[2px] h-8 bg-gradient-to-b from-green-400 to-gray-300"></div>
        )}
      </motion.div>
    ))}

    {/* ================= DETAILS PANEL ================= */}
    {activeNode && (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mt-10 bg-white/70 backdrop-blur-lg border border-green-100 p-6 rounded-2xl shadow-xl max-w-xl"
      >
        <h3 className="text-xl font-bold text-green-700">
          {activeNode.title}
        </h3>
        <p className="text-gray-600 mt-2 leading-relaxed">
          {activeNode.desc}
        </p>
      </motion.div>
    )}

    {/* ================= BRANCH LINE ================= */}
    <div className="w-full max-w-4xl h-[2px] bg-gradient-to-r from-transparent via-green-400 to-transparent mt-12"></div>

    {/* ================= REGIONS ================= */}
    <div className="flex justify-center gap-6 mt-8 flex-wrap">

      {orgData.regions.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="relative group"
        >
          {/* Glow */}
          <div className="absolute inset-0 bg-green-400/20 blur-xl rounded-xl"></div>

          {/* Card */}
          <div className="relative bg-white/80 backdrop-blur-lg px-6 py-5 rounded-xl shadow-lg w-[230px] hover:scale-105 transition">
            <h3 className="font-semibold text-green-700">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              {item.sub}
            </p>
          </div>
        </motion.div>
      ))}

    </div>

  </div>
</motion.div>

            {/* ================= OPERATIONS ================= */}
            <motion.div id="operations" variants={fadeUp} initial="hidden" whileInView="visible">
              <h2 className="text-2xl font-bold text-green-700 mb-4">
                Operational Structure
              </h2>

              <div className="bg-white p-6 rounded-xl shadow">
                <p className="text-gray-700">
                  Rozgar Rajasthan operates from Jaipur with regional centers across the state.
                </p>
              </div>
            </motion.div>

            {/* ================= GOVERNANCE ================= */}
            <motion.div id="governance" variants={fadeUp} initial="hidden" whileInView="visible">
              <h2 className="text-2xl font-bold text-green-700 mb-4">
                Governance
              </h2>

              <div className="bg-white p-6 rounded-xl shadow">
                <p className="text-gray-700">
                  Governance ensures transparency and accountability.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;