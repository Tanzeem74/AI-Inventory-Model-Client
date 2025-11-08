import React from 'react';

const Banner = () => {
  return (
    <section className="relative bg-linear-to-r from-blue-500 to-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
          Explore AI Models Easily
        </h1>
        <h3 className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-200">
          Manage your AI assets effortlessly
        </h3>
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Banner;
