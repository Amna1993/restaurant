import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/reservation"); // Navigates to the /reservation route
  };

  return (
    <section className="relative h-screen bg-cover bg-center bg-hero-pattern text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4 animate-fade-in">
          Welcome to Our Restaurant
        </h1>
        <p className="text-lg mb-8">Experience the best dining in town.</p>
        <button
          onClick={handleNavigation}
          className="bg-primary px-6 py-3 rounded-full text-white font-bold hover:bg-secondary transition"
        >
          Reserve a Table
        </button>
      </div>
    </section>
  );
};

export default Hero;
