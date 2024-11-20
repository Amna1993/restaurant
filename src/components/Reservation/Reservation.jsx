import React, { useState } from "react";
import { motion } from "framer-motion";

const Reservation = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        guests: 1,
        date: "",
        time: "",
        requests: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleNext = () => {
        if (step < 3) setStep((prev) => prev + 1);
    };

    const handlePrevious = () => {
        if (step > 1) setStep((prev) => prev - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Reservation submitted successfully!");
    };

    return (
        <section className="py-16 bg-gradient-to-r from-red-500 to-black-500 text-white m-40 rounded">
            <div className="max-w-4xl mx-auto p-8 bg-white rounded-xl shadow-2xl text-gray-900">
                <h1 className="text-4xl font-bold text-center text-gray-900 bg-gradient-to-r from-red-500 via-black-500 to-black-500 text-transparent bg-clip-text mt-8 mb-4">
                    Make Reservation
                </h1>

                <div className="relative w-full mb-8">
                    <div className="absolute top-0 left-0 h-1 bg-gray-300 w-full"></div>
                    <motion.div
                        className="absolute top-0 left-0 h-1 bg-gradient-to-r from-red-600 to-black-600"
                        initial={{ width: "0%" }}
                        animate={{ width: `${(step / 3) * 100}%` }}
                        transition={{ duration: 0.5 }}
                    ></motion.div>
                </div>

                {/* Form Steps */}
                <form onSubmit={handleSubmit}>
                    {step === 1 && (
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 50 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-2xl font-bold mb-6">Step 1: Personal Information</h2>
                            <div className="space-y-4">
                                {/* Name */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
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
                                <div className="relative">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
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

                                {/* Phone */}
                                <div className="relative">
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="peer w-full border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        placeholder=" "
                                    />
                                    <label
                                        htmlFor="phone"
                                        className="absolute left-4 top-2 text-gray-500 text-sm transform scale-100 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-purple-500"
                                    >
                                        Phone
                                    </label>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 50 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-2xl font-bold mb-6">Step 2: Reservation Details</h2>
                            <div className="space-y-4">
                                {/* Number of Guests */}
                                <div>
                                    <label htmlFor="guests" className="block mb-2 font-medium text-gray-700">
                                        Number of Guests
                                    </label>
                                    <input
                                        type="number"
                                        id="guests"
                                        name="guests"
                                        value={formData.guests}
                                        onChange={handleChange}
                                        min="1"
                                        max="20"
                                        className="w-full border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    />
                                </div>

                                {/* Date */}
                                <div>
                                    <label htmlFor="date" className="block mb-2 font-medium text-gray-700">
                                        Date
                                    </label>
                                    <input
                                        type="date"
                                        id="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        className="w-full border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    />
                                </div>

                                {/* Time */}
                                <div>
                                    <label htmlFor="time" className="block mb-2 font-medium text-gray-700">
                                        Time
                                    </label>
                                    <input
                                        type="time"
                                        id="time"
                                        name="time"
                                        value={formData.time}
                                        onChange={handleChange}
                                        className="w-full border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {step === 3 && (
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 50 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-2xl font-bold mb-6">Step 3: Confirmation</h2>
                            <p className="mb-4">Please review your reservation details:</p>
                            <ul className="space-y-2">
                                <li>Name: {formData.name}</li>
                                <li>Email: {formData.email}</li>
                                <li>Phone: {formData.phone}</li>
                                <li>Guests: {formData.guests}</li>
                                <li>Date: {formData.date}</li>
                                <li>Time: {formData.time}</li>
                                <li>Requests: {formData.requests || "None"}</li>
                            </ul>
                            <button
                                type="submit"
                                className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
                            >
                                Confirm Reservation
                            </button>
                        </motion.div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex justify-between mt-8">
                        {step > 1 && (
                            <button
                                type="button"
                                onClick={handlePrevious}
                                className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 transition duration-300"
                            >
                                Previous
                            </button>
                        )}
                        {step < 3 && (
                            <button
                                type="button"
                                onClick={handleNext}
                                className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
                            >
                                Next
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Reservation;
