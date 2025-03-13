import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <motion.footer
      className="bg-blue-900 text-white pt-12 pb-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <img
                src={logo}
                alt="Neofin Chemicals Logo"
                className="h-10 mr-2"
              />
              <span className="text-xl mt-1 font-knockout">
                Neofin Chemicals
              </span>
            </div>
            <p className="text-blue-100 text-sm mb-4">
              Innovative chemical solutions for a sustainable future, delivering
              excellence since 1996.
            </p>
            <div className="flex space-x-4 mb-6">
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-800 hover:bg-green-500 p-2 rounded-full transition-colors duration-300"
                whileHover={{ y: -2 }}
              >
                <FaFacebookF size={18} />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-800 hover:bg-green-500 p-2 rounded-full transition-colors duration-300"
                whileHover={{ y: -2 }}
              >
                <FaTwitter size={18} />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-800 hover:bg-green-500 p-2 rounded-full transition-colors duration-300"
                whileHover={{ y: -2 }}
              >
                <FaLinkedinIn size={18} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 relative">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-green-500 mt-1"></span>
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-blue-100 hover:text-green-400 transition-colors duration-300 flex items-center"
                >
                  <span className="mr-2">›</span> Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-blue-100 hover:text-green-400 transition-colors duration-300 flex items-center"
                >
                  <span className="mr-2">›</span> About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-blue-100 hover:text-green-400 transition-colors duration-300 flex items-center"
                >
                  <span className="mr-2">›</span> Products
                </Link>
              </li>
              <li>
                <Link
                  to="/inquiry"
                  className="text-blue-100 hover:text-green-400 transition-colors duration-300 flex items-center"
                >
                  <span className="mr-2">›</span> Inquiry
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-blue-100 hover:text-green-400 transition-colors duration-300 flex items-center"
                >
                  <span className="mr-2">›</span> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-lg mb-4 relative">
              Products
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-green-500 mt-1"></span>
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/products/industrial"
                  className="text-blue-100 hover:text-green-400 transition-colors duration-300 flex items-center"
                >
                  <span className="mr-2">›</span> Industrial Chemicals
                </Link>
              </li>
              <li>
                <Link
                  to="/products/pharmaceutical"
                  className="text-blue-100 hover:text-green-400 transition-colors duration-300 flex items-center"
                >
                  <span className="mr-2">›</span> Pharmaceutical
                </Link>
              </li>
              <li>
                <Link
                  to="/products/agricultural"
                  className="text-blue-100 hover:text-green-400 transition-colors duration-300 flex items-center"
                >
                  <span className="mr-2">›</span> Agricultural
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4 relative">
              Contact Us
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-green-500 mt-1"></span>
            </h4>
            <address className="not-italic">
              <div className="flex items-start mb-3">
                <FaMapMarkerAlt className="text-green-400 mt-1 mr-3" />
                <span className="text-blue-100">
                  123 Chemical Street, Industrial Area
                  <br />
                  City, Country, 12345
                </span>
              </div>
              <div className="flex items-center mb-3">
                <FaPhone className="text-green-400 mr-3" />
                <a
                  href="tel:+1234567890"
                  className="text-blue-100 hover:text-green-400 transition-colors duration-300"
                >
                  +123 456 7890
                </a>
              </div>
              <div className="flex items-center mb-3">
                <FaEnvelope className="text-green-400 mr-3" />
                <a
                  href="mailto:info@neofinchemicals.com"
                  className="text-blue-100 hover:text-green-400 transition-colors duration-300"
                >
                  info@neofinchemicals.com
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Divider and Copyright */}
        <div className="mt-10 pt-6 border-t border-blue-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-blue-200 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Neofin Chemicals. All rights
              reserved.
            </p>
            <div className="text-sm text-blue-200">
              <Link
                to="/privacy-policy"
                className="hover:text-green-400 transition-colors duration-300 mr-4"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className="hover:text-green-400 transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
