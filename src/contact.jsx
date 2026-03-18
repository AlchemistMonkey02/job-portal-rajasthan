import { motion } from "framer-motion";
import { FiMail, FiInfo, FiMapPin, FiTrash2 } from "react-icons/fi";
import contactImg from "./assets/contact.jpg";
import TopBar from "./components/TopBar";
import NavBar from "./components/Header";
import Footer from "./components/Footer";

const fadeDown = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Contact = () => {
  return (
    <>
      {/* HEADER */}
      <TopBar />
      <NavBar />

      <section className="min-h-screen bg-gray-100 py-12 px-4 md:px-6 flex items-center">
        <div className="w-full max-w-6xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
          <motion.div
            variants={fadeDown}
            initial="hidden"
            whileInView="visible"
            className="text-center py-10"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              Get in{" "}
              <span className="underline decoration-yellow-400">touch</span>
            </h1>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 px-6 md:px-10 pb-10 items-center">
            {/* LEFT */}
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
                Contact details
              </h2>

              <div className="space-y-6 text-gray-700">
                {/* EMAIL */}
                <div className="flex items-start gap-4">
                  <FiMail className="text-xl text-gray-600 mt-1" />
                  <p className="text-sm md:text-base">support@rozgar.gov.in</p>
                </div>

                {/* INFO */}
                <div className="flex items-start gap-4">
                  <FiInfo className="text-xl text-gray-600 mt-1" />
                  <p className="text-sm leading-relaxed">
                    For unresolved queries or complaints from first-level
                    support, email{" "}
                    <span className="font-medium">
                      rozgar_escalations@rozgar.gov.in
                    </span>{" "}
                    with your registered phone number, Job ID, and previous
                    interaction details.
                  </p>
                </div>

                {/* ADDRESS */}
                <div className="flex items-start gap-4">
                  <FiMapPin className="text-xl text-gray-600 mt-1" />
                  <p className="text-sm leading-relaxed">
                    408-410, 4th Floor, JTM Mall, Jagatpura, Opp. Railway
                    Station, Jaipur, Rajasthan - 302017 India
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center md:justify-end">
              <img
                src={contactImg}
                alt="contact"
                className="w-56 md:w-72 object-contain"
              />
            </div>
          </div>

          {/* FOOTER INFO */}
          <div className="bg-gray-50 px-6 md:px-10 py-6 border-t">
            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex items-center gap-3">
                <FiTrash2 />
                <p>
                  How to delete your Rozgar account.{" "}
                  <span className="text-blue-600 cursor-pointer">
                    Know more
                  </span>
                </p>
              </div>

              <p>
                If you don't have Rozgar Id in your phone please{" "}
                <span className="text-blue-600 cursor-pointer">
                  Fill this form
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default Contact;
