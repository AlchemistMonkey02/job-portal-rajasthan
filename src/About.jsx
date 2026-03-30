import { motion as Motion } from "framer-motion";
import TopBar from "./components/TopBar";
import NavBar from "./components/Header";
import Footer from "./components/Footer";
import orgImg from "./assets/organizationalstructure.png";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About = () => {
  return (
    <>
      <TopBar />
      <NavBar />

      <section className="bg-gray-100 py-12 px-4 md:px-6">
        <div className="max-w-6xl mx-auto space-y-12">

          {/* ===== TITLE ===== */}
          <Motion.div variants={fadeUp} initial="hidden" whileInView="visible" className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              About <span className="text-green-700">Rozgar Rajasthan</span>
            </h1>
            <p className="mt-3 text-gray-600">
              A government initiative to empower citizens with employment, skills, and opportunities across Rajasthan.
            </p>
          </Motion.div>

          {/* ===== 1. ROLES ===== */}
          <Motion.div variants={fadeUp} initial="hidden" whileInView="visible" className="bg-white p-6 md:p-8 rounded-xl shadow">
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              Roles Rozgar Rajasthan Performs
            </h2>

            <p className="text-gray-600 mb-4">
              Rozgar Rajasthan acts as a central platform to connect job seekers, employers, and government initiatives, enabling transparent and efficient employment services.
            </p>

            <ul className="space-y-3 text-gray-600 text-sm">
              <li>• Building a unified platform for employment opportunities across Rajasthan</li>
              <li>• Facilitating collaboration between government, private sector, and training institutions</li>
              <li>• Supporting skill development and career guidance programs</li>
              <li>• Promoting innovation in employment services and digital job access</li>
              <li>• Ensuring transparency, accountability, and accessibility in job-related services</li>
              <li>• Providing research and data insights for policy and employment planning</li>
            </ul>
          </Motion.div>

          {/* ===== 2. ORGANIZATIONAL STRUCTURE ===== */}
          <Motion.div variants={fadeUp} initial="hidden" whileInView="visible" className="bg-white p-6 md:p-8 rounded-xl shadow text-center">
            <h2 className="text-2xl font-bold text-green-700 mb-6">
              Organizational Structure
            </h2>

            <img
              src={orgImg}
              alt="Organizational Structure"
              className="mx-auto rounded-lg shadow-md"
            />
          </Motion.div>

          {/* ===== 3. OPERATIONAL STRUCTURE ===== */}
          <Motion.div variants={fadeUp} initial="hidden" whileInView="visible" className="bg-white p-6 md:p-8 rounded-xl shadow">
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              Operational Structure
            </h2>

            <p className="text-gray-600 text-sm leading-relaxed">
              Rozgar Rajasthan operates from its headquarters in Jaipur and extends its services across the state through digital platforms and regional coordination centers. The system focuses on:
            </p>

            <ul className="mt-4 space-y-2 text-gray-600 text-sm">
              <li>• Delivering employment services and job listings across sectors</li>
              <li>• Enhancing skill development and training accessibility</li>
              <li>• Building partnerships with employers and institutions</li>
              <li>• Supporting youth and marginalized communities with career opportunities</li>
            </ul>
          </Motion.div>

          {/* ===== 4. GOVERNANCE ===== */}
          <Motion.div variants={fadeUp} initial="hidden" whileInView="visible" className="bg-white p-6 md:p-8 rounded-xl shadow">
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              Governance
            </h2>

            <p className="text-gray-600 text-sm leading-relaxed">
              Rozgar Rajasthan operates under the guidance of the Government of Rajasthan. The platform ensures effective governance through collaboration between government departments, employment agencies, and stakeholders.
              Strategic decisions are made to ensure transparency, efficiency, and inclusive development. The system is designed to maintain accountability while delivering services to citizens.
            </p>
          </Motion.div>

          {/* ===== 5. REPORTS ===== */}
          <Motion.div variants={fadeUp} initial="hidden" whileInView="visible" className="bg-white p-6 md:p-8 rounded-xl shadow">
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              Reports
            </h2>

            <p className="text-gray-600 text-sm">
              Regular reports and analytics are generated to monitor employment trends, job placements, and program effectiveness. These reports help in policy making and improving employment services across the state.
            </p>
          </Motion.div>

          {/* ===== 6. OUR TEAM ===== */}
          <Motion.div variants={fadeUp} initial="hidden" whileInView="visible" className="bg-white p-6 md:p-8 rounded-xl shadow">
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              Our Team
            </h2>

            <p className="text-gray-600 text-sm leading-relaxed">
              The Rozgar Rajasthan team consists of skilled professionals, policymakers, and technical experts dedicated to improving employment opportunities. The team works on skill development, job matching, and digital solutions to empower citizens and promote economic growth.
            </p>
          </Motion.div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;