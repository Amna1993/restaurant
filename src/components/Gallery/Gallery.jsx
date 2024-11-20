import React, { useState } from "react";
import { motion } from "framer-motion";
import image1 from "../../assets/gallery/image1.jpg";
import image2 from "../../assets/gallery/image2.jpeg";
import image3 from "../../assets/gallery/image3.jpg";
import image4 from "../../assets/gallery/image4.jpg";
import image5 from "../../assets/gallery/image5.jpg";
import image6 from "../../assets/gallery/image6.jpg";
const galleryItems = [
  { id: 1, name: "Grilled Chicken", price: "$32.99", image: image1 },
  { id: 2, name: "Pasta Primavera", price: "$10.99", image: image2 },
  { id: 3, name: "Caesar Salad", price: "$8.99", image: image3 },
  { id: 4, name: "Margherita Pizza", price: "$14.99", image: image4 },
  { id: 5, name: "Chocolate Cake", price: "$6.99", image: image5 },
  { id: 6, name: "Tiramisu", price: "$7.99", image: image6 },
  // Add more items if needed
];

const Gallery = () => {
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(galleryItems.length / itemsPerPage);

  const currentItems = galleryItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentItems.map((item) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold">{item.name}</h3>
                <p className="text-gray-500 mt-1">{item.price}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center mt-8">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-l bg-primary text-white ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Back
          </button>
          <span className="px-4 py-2 bg-gray-200 text-gray-700">
             {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-r bg-primary text-white ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
