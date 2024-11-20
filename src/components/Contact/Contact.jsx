import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent successfully!");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="bg-gradient-to-r from-red-500 to-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12">
          Get in <span className="text-yellow-300">Touch</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-3xl text-yellow-300" />
              <div>
                <h4 className="text-xl font-semibold">Address</h4>
                <p>123 Main Street, City, Country</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-3xl text-yellow-300" />
              <div>
                <h4 className="text-xl font-semibold">Phone</h4>
                <p>+1 234 567 890</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-3xl text-yellow-300" />
              <div>
                <h4 className="text-xl font-semibold">Email</h4>
                <p>info@restaurant.com</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white rounded-lg shadow-lg p-8 text-gray-900"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
              Send us a Message
            </h3>

            {/* Name */}
            <div className="relative mb-6">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="peer w-full border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder=" "
              />
              <label
                htmlFor="name"
                className="absolute left-4 top-2 text-gray-500 text-sm transform scale-100 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-purple-500"
              >
                Name
              </label>
            </div>

            {/* Email */}
            <div className="relative mb-6">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="peer w-full border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="absolute left-4 top-2 text-gray-500 text-sm transform scale-100 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-purple-500"
              >
                Email
              </label>
            </div>

            {/* Message */}
            <div className="relative mb-6">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
                className="peer w-full border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder=" "
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-4 top-2 text-gray-500 text-sm transform scale-100 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-purple-500"
              >
                Message
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-purple-600 transition duration-300"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
