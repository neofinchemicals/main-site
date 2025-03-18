import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { sendInquiryEmail } from "../../services/emailService";
import productData from "../../data/productData";

const InquiryForm = () => {
  const location = useLocation();

  // Flatten all products from categories
  const allProducts = productData.reduce((acc, category) => {
    return acc.concat(category.products);
  }, []);

  const [formData, setFormData] = useState({
    from_name: "",
    company_name: "",
    designation: "",
    from_email: "",
    mobile_number: "",
    product: "",
    message: "",
  });

  // Animation variants
  const formVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    focus: { scale: 1.01, transition: { duration: 0.2 } },
  };

  // Auto-fill product field if passed via URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const productParam = params.get("product");
    if (productParam) {
      setFormData((prev) => ({ ...prev, product: productParam }));
    }
  }, [location.search]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleReset = () => {
    setFormData({
      from_name: "",
      company_name: "",
      designation: "",
      from_email: "",
      mobile_number: "",
      product: "",
      message: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendInquiryEmail(formData);
      toast.success("Inquiry sent successfully!", {
        position: "top-right",
        autoClose: 3000,
      });
      handleReset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to send inquiry. Please try again later.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <motion.form
      className="bg-white p-8 rounded-xl shadow-lg"
      variants={formVariants}
      initial="hidden"
      animate="visible"
      onSubmit={handleSubmit}
    >
      <h3 className="text-2xl font-bold text-blue-800 mb-6">Inquiry Form</h3>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div variants={inputVariants} whileFocus="focus">
          <label className="block text-gray-700 font-semibold mb-1 text-sm">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
          />
        </motion.div>

        <motion.div variants={inputVariants} whileFocus="focus">
          <label className="block text-gray-700 font-semibold mb-1 text-sm">
            Company
          </label>
          <input
            type="text"
            name="company_name"
            value={formData.company_name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
          />
        </motion.div>

        <motion.div variants={inputVariants} whileFocus="focus">
          <label className="block text-gray-700 font-semibold mb-1 text-sm">
            Designation
          </label>
          <input
            type="text"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
          />
        </motion.div>

        <motion.div variants={inputVariants} whileFocus="focus">
          <label className="block text-gray-700 font-semibold mb-1 text-sm">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="from_email"
            value={formData.from_email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
          />
        </motion.div>

        <motion.div variants={inputVariants} whileFocus="focus">
          <label className="block text-gray-700 font-semibold mb-1 text-sm">
            Mobile <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="mobile_number"
            value={formData.mobile_number}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
          />
        </motion.div>

        <motion.div variants={inputVariants} whileFocus="focus">
          <label className="block text-gray-700 font-semibold mb-1 text-sm">
            Product <span className="text-red-500">*</span>
          </label>
          <select
            name="product"
            value={formData.product}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
          >
            <option value="">Select Product</option>
            {allProducts.map((prod, index) => (
              <option key={index} value={prod.name}>
                {prod.name} (CAS: {prod.casNo})
              </option>
            ))}
            <option value="none">None</option>
          </select>
        </motion.div>
      </div>

      <motion.div className="mt-6" variants={inputVariants} whileFocus="focus">
        <label className="block text-gray-700 font-semibold mb-1 text-sm">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
        ></textarea>
      </motion.div>

      <motion.div className="flex space-x-4 mt-8" variants={inputVariants}>
        <motion.button
          type="submit"
          className="flex-1 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Submit
        </motion.button>
        <motion.button
          type="button"
          onClick={handleReset}
          className="flex-1 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition-colors duration-300 shadow-md"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Reset
        </motion.button>
      </motion.div>
    </motion.form>
  );
};

export default InquiryForm;
