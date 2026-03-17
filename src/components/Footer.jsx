//src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">
            Berozgar Rajasthan
          </h3>
          <p>
            Government portal providing employment information and resources.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Contact</h4>
          <p>Email: info@rajasthan.gov.in</p>
          <p>Phone: +91 12345 67890</p>
        </div>
      </div>

      <div className="text-center py-4 border-t border-gray-700">
        © {new Date().getFullYear()} Berozgar Rajasthan
      </div>
    </footer>
  );
};

export default Footer;