import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-tr from-green-50 to-green-100 flex items-center justify-center px-6 overflow-hidden">
      {/* Animated Gradient Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob" />
      <div className="absolute top-20 right-0 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob animation-delay-2000" />
      <div className="absolute bottom-10 left-20 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob animation-delay-4000" />

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl bg-white/50 backdrop-blur-md border border-white/20 p-12 rounded-3xl shadow-xl">
        <h1 className="text-5xl font-extrabold text-green-900 leading-tight mb-6 drop-shadow-md">
          Smart Agro-Solar System
        </h1>
        <p className="text-xl text-gray-800 mb-8">
          An AI-powered IoT platform to monitor crop health and optimize energy usage using real-time data from solar and agro sensors.
        </p>
        <div className="flex gap-6 justify-center flex-wrap">
          <Link
            to="/login"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition"
          >
            🚀 Get Started
          </Link>
          <Link
            to="/signup"
            className="border border-green-600 hover:bg-green-600 hover:text-white text-green-700 font-semibold px-6 py-3 rounded-full transition shadow"
          >
            🌱 Sign Up Free
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Landing;
