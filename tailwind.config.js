module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure Tailwind scans your files for classes
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/Hero.webp')",
      },
      colors: {
        primary: "#FF6363", // Custom color for buttons and highlights
        secondary: "#3A86FF",
      },
      fontFamily: {
        body: ["Inter", "sans-serif"],
      },
      animation: {
        fadeIn: "fadeIn 1.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
