//src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-green-700 border-t mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h3 className="font-semibold text-white mb-3">Rozgar Rajasthan</h3>
          <p className="text-sm text-white">
            Dedicated to providing employment information, schemes and resources
            for the people of Rajasthan.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white">
            <li>
              <Link to="/" className="hover:underline hover:text-green-400">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:underline hover:text-green-400"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:underline hover:text-green-400"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-white mb-3">Contact Us</h4>
          <p className="text-sm text-white">
            Jaipur, Rajasthan
            <br />
            info@rajasthan.gov.in
            <br />
            +91-141-2700000
          </p>
        </div>

        {/* Stats */}
        <div>
          <h4 className="font-semibold text-white mb-3">Visitor Stats</h4>
          <div className="bg-white shadow rounded p-4">
            <p className="text-sm text-gray-500">Total Visitors</p>
            <h2 className="text-2xl font-bold text-gray-800">12,45,890</h2>
            <div className="h-2 bg-blue-200 mt-3 rounded">
              <div className="h-2 bg-blue-600 w-3/4 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-800 py-4 border-t">
        © {new Date().getFullYear()} Government of Rajasthan. All Rights
        Reserved.
      </div>
    </footer>
  );
};

export default Footer;
