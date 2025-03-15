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
          <div className="col-span-1">
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
                  <span className="mr-2">›</span> Fine Chemicals
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
              <li>
                <Link
                  to="/products/intermediates"
                  className="text-blue-100 hover:text-green-400 transition-colors duration-300 flex items-center"
                >
                  <span className="mr-2">›</span> Intermediates
                </Link>
              </li>
              <li>
                <Link
                  to="/products/pesticides"
                  className="text-blue-100 hover:text-green-400 transition-colors duration-300 flex items-center"
                >
                  <span className="mr-2">›</span> Pesticides
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
            <address className="not-italic text-blue-100 text-sm space-y-4">
              <div>
                <p className="font-bold">Office Address:</p>
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-green-400 mt-1 mr-2" />
                  <span>
                    B-102, Rajmoti-1, Chharwada Road, Vapi, Dist- Valsad,
                    Gujarat - 396191
                  </span>
                </div>
              </div>
              <div>
                <p className="font-bold">Unit Address:</p>
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-green-400 mt-1 mr-2" />
                  <span>
                    F-332, Road No. 2, Gate No.1, Hoziwala Industrial Estate,
                    Sachin, Surat, Gujarat - 394230
                  </span>
                </div>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-green-400 mr-2" />
                <a
                  href="tel:+919974285868"
                  className="hover:text-green-400 transition-colors duration-300"
                >
                  +91-9974285868
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
