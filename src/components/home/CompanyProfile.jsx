import React from "react";
import { motion } from "framer-motion";
import { FaFlask, FaLeaf, FaCubes, FaLink } from "react-icons/fa";
import profileImg from "../../assets/images/company-profile.jpg";
import { useNavigate } from "react-router-dom";

const CompanyProfile = () => {
  const navigate = useNavigate();

  const handleProductsClick = () => {
    navigate("/products");
  };

  const handleContactClick = () => {
    navigate("/contact");
  };

  const features = [
    {
      icon: <FaFlask />,
      title: "Quality Products",
      description:
        "Products Meeting the highest quality standards of the Industry",
    },
    {
      icon: <FaLink />,
      title: "Supply chain",
      description:
        "Offering Solutions to reduce the need of high inventory there by optimizing Cost efficiency",
    },
    {
      icon: <FaCubes />,
      title: "Vast Product Offerings",
      description: "Your One Stop Shop for all your chemical needs.",
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <motion.section
        className="max-w-6xl mx-auto px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-2">
              Our Company
            </span>
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-blue-900 mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            About Neofin Chemicals
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-green-500 mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          />
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            {/* Image Side */}
            <motion.div
              className="md:w-1/2 relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="h-full min-h-[320px]">
                <img
                  src={profileImg}
                  alt="Neofin Chemicals Facility"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-transparent" />
            </motion.div>

            {/* Text Side */}
            <motion.div
              className="md:w-1/2 p-8 md:p-10 space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-blue-900">
                Pioneering Chemical Excellence
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Neofin Chemicals , specializes in Chemicals, Fine chemicals,
                Active Pharmaceuticals ingredients (API) , Drug intermediates,
                Pharmaceuticals, Bulk Drug Formulations, Petro chemicals,
                Solvents, and any other chemicals & Products from India & Other
                countries to full fill the requirement of the customers.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Neofin chemicals manufactures products using the facilities of
                our exclusive manufacturer partner having high end capabilities
                & capacities in Across india and Global
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Using Our extensive network of manufacturers of chemicals, Fine
                chemicals , Active Pharmaceuticals ingredients (API) , in India
                and Abroad, We help to bridge the gap between the supplier &
                user thereby optimizing the supply chain and manufacturing
                capability of The Supplier & The User.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                We also provide services to Represent The buyer & The Seller to
                verify the genuineness by visiting their plants & factories ,
                business places and thereby increasing the mutual trust of both
                the parties to grow their Business.
              </p>

              <div className="flex space-x-6 pt-4 border-t border-gray-200">
                <motion.button
                  className="px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white rounded-lg shadow transition duration-300"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  onClick={handleProductsClick}
                >
                  Our Products
                </motion.button>
                <motion.button
                  className="px-6 py-3 border-2 border-blue-900 text-blue-900 hover:bg-blue-50 rounded-lg shadow transition duration-300"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  onClick={handleContactClick}
                >
                  Contact Us
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Feature Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-gray-100">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                className="p-8 flex flex-col items-center text-center border-r border-gray-100 last:border-r-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * idx, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl text-green-500 mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-bold text-blue-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default CompanyProfile;
