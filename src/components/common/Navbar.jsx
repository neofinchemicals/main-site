import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [productsDropdown, setProductsDropdown] = useState(false);

  // Change navbar background on scroll with smooth transition
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerHeight = 50;

      // Calculate scroll progress for smooth transition (0 to 1)
      if (scrollY <= triggerHeight) {
        setScrollProgress(scrollY / triggerHeight);
        setScrolled(false);
      } else {
        setScrollProgress(1);
        setScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    {
      path: "/products",
      label: "Products",
      dropdown: true,
      subItems: [
        { path: "/products", label: "Industrial Chemicals" },
        { path: "/products", label: "Pharmaceutical" },
        { path: "/products", label: "Agricultural" },
      ],
    },
    { path: "/inquiry", label: "Inquiry" },
    { path: "/contact", label: "Contact" },
  ];

  // Dynamic styles based on scroll position
  const navbarStyle = {
    backgroundColor: scrolled
      ? "rgba(255, 255, 255, 1)"
      : `rgba(23, 37, 84, ${0.9 - scrollProgress * 0.2})`,
    backdropFilter: `blur(${4 + scrollProgress * 4}px)`,
    boxShadow: scrolled
      ? "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
      : `0 0px ${scrollProgress * 6}px rgba(0, 0, 0, ${scrollProgress * 0.1})`,
    padding: `${scrolled ? "0.5rem" : "1rem"} 0`,
    transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
  };

  const textColor = {
    primary: scrolled ? "text-blue-900" : "text-white",
    hover: scrolled ? "hover:bg-blue-50" : "hover:bg-white/10",
    active: scrolled ? "bg-blue-100 text-blue-900" : "bg-white/20 text-white",
  };

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 hidden md:block"
        style={navbarStyle}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto flex items-center justify-between px-6">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Neofin Chemicals Logo" className="h-12" />
            <span
              className={`ml-2 mt-1 text-2xl transition-colors duration-300 font-knockout ${textColor.primary}`}
            >
              Neofin chemicals
            </span>
          </Link>

          <div className="flex items-center space-x-1">
            {navLinks.map((link, idx) => (
              <div key={idx} className="relative group">
                {link.dropdown ? (
                  <div className="relative">
                    <button
                      onMouseEnter={() => setProductsDropdown(true)}
                      className={`px-4 py-2 rounded-md flex items-center ${textColor.primary} ${textColor.hover} font-medium transition duration-300`}
                    >
                      {link.label}
                      <FaChevronDown className="ml-1 text-xs" />
                    </button>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {productsDropdown && (
                        <motion.div
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.2 }}
                          onMouseLeave={() => setProductsDropdown(false)}
                          className={`absolute top-full left-0 w-60 ${
                            scrolled ? "bg-white" : "bg-blue-900"
                          } shadow-lg rounded-md overflow-hidden z-50 mt-1`}
                        >
                          {link.subItems.map((subItem, subIdx) => (
                            <NavLink
                              key={subIdx}
                              to={subItem.path}
                              className={({ isActive }) => `
                                block px-4 py-3 transition-colors duration-200
                                ${
                                  isActive
                                    ? scrolled
                                      ? "bg-blue-100 text-blue-900"
                                      : "bg-blue-800 text-white"
                                    : scrolled
                                    ? "text-blue-900 hover:bg-blue-50"
                                    : "text-white hover:bg-blue-800"
                                }
                              `}
                            >
                              {subItem.label}
                            </NavLink>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <NavLink
                    to={link.path}
                    className={({ isActive }) => `
                      px-4 py-2 rounded-md block font-medium transition duration-300
                      ${
                        isActive
                          ? textColor.active
                          : `${textColor.primary} ${textColor.hover}`
                      }
                    `}
                  >
                    {link.label}
                  </NavLink>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navbar */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 md:hidden flex items-center justify-between px-6 py-3"
        style={navbarStyle}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Neofin Chemicals Logo" className="h-10" />
          {/* Remove text on mobile */}
        </Link>
        <button
          onClick={() => setIsOpen(true)}
          className={`p-2 rounded-md transition-colors duration-300 ${textColor.primary} ${textColor.hover}`}
        >
          <FaBars className="text-xl" />
        </button>
      </motion.nav>

      {/* Mobile Side Navigation Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            className="fixed inset-0 bg-gradient-to-b from-blue-900 to-blue-800 z-50 md:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-6 border-b border-blue-800/50">
                <Link
                  to="/"
                  className="flex items-center"
                  onClick={() => setIsOpen(false)}
                >
                  <img
                    src={logo}
                    alt="Neofin Chemicals Logo"
                    className="h-10"
                  />
                  {/* Here too, we remove text */}
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-white hover:bg-white/10 rounded-md transition-colors duration-300"
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>

              <nav className="flex flex-col p-6 space-y-1 overflow-y-auto">
                {navLinks.map((link, idx) => (
                  <div key={idx}>
                    {link.dropdown ? (
                      <>
                        <button
                          onClick={() => setProductsDropdown(!productsDropdown)}
                          className="w-full flex items-center justify-between py-3 px-4 text-white hover:bg-blue-800 rounded-md transition duration-200"
                        >
                          <span className="text-lg">{link.label}</span>
                          <FaChevronDown
                            className={`transition-transform duration-300 ${
                              productsDropdown ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        <AnimatePresence>
                          {productsDropdown && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="pl-4 overflow-hidden"
                            >
                              {link.subItems.map((subItem, subIdx) => (
                                <NavLink
                                  key={subIdx}
                                  to={subItem.path}
                                  onClick={() => setIsOpen(false)}
                                  className={({ isActive }) => `
                                    block py-3 px-4 text-lg transition-colors duration-200 rounded-md
                                    ${
                                      isActive
                                        ? "bg-blue-800 text-white"
                                        : "text-blue-100 hover:bg-blue-800"
                                    }
                                  `}
                                >
                                  {subItem.label}
                                </NavLink>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <NavLink
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) => `
                          block py-3 px-4 text-lg transition-colors duration-200 rounded-md
                          ${
                            isActive
                              ? "bg-blue-800 text-white"
                              : "text-white hover:bg-blue-800"
                          }
                        `}
                      >
                        {link.label}
                      </NavLink>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
