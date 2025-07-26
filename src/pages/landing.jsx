import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaLeaf, FaSun, FaCloudRain, FaBolt } from 'react-icons/fa';
import heroImage from '../assets/logo.png'; // Replace with your image
import { Link } from 'react-router-dom';


const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e0f7e9] to-[#f2f2f2] text-gray-800 scroll-smooth">

      {/* Hero Section */}
      <section className="relative flex flex-col-reverse md:flex-row items-center justify-between px-6 sm:px-10 py-20 max-w-7xl mx-auto overflow-hidden">

        {/* Decorative animated green blob */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-green-300 opacity-30 rounded-full mix-blend-multiply blur-3xl animate-pulse z-0"></div>

        <div className="md:w-1/2 text-center md:text-left z-10" data-aos="fade-right">
          <h1 className="text-4xl md:text-6xl font-extrabold text-green-700 leading-tight drop-shadow-md">
            Smart Agro-Solar System
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-700 font-medium">
            IoT & AI-enabled cloud platform for crop health and energy optimization in farming.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/Signup"
              className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg transition duration-300 font-semibold text-center"
            >
              Get Started
            </Link>
            <a href="#features" className="px-6 py-3 border border-green-600 text-green-700 hover:bg-green-50 rounded-full transition font-medium">
              Learn More
            </a>
          </div>
        </div>

        <div className="md:w-1/2 mb-10 md:mb-0 z-10" data-aos="fade-left">
          <img
            src={heroImage}
            alt="Agro System"
            className="rounded-3xl shadow-xl w-full max-w-md mx-auto md:mx-0"
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-green-700" data-aos="zoom-in">
            Powerful Features
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4" data-aos="fade-up">
            <FeatureCard icon={<FaLeaf />} title="Crop Monitoring" desc="Real-time AI crop health insights to ensure maximum yield." />
            <FeatureCard icon={<FaSun />} title="Solar Optimization" desc="Track solar usage and efficiency for better power savings." />
            <FeatureCard icon={<FaCloudRain />} title="Weather Alerts" desc="Automated alerts for irrigation and climate responses." />
            <FeatureCard icon={<FaBolt />} title="Smart Dashboard" desc="Unified control panel for all your farm insights." />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-green-600 text-white text-center" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">Ready to revolutionize your farm?</h2>
        <p className="text-lg md:text-xl mb-6">Join us in transforming agriculture with AI and solar power.</p>

        
        <Link
        to="/Contact"
         className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 transition">
          Contact Us
        </Link>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500 bg-gray-100">
        © 2025 Smart Agro. All rights reserved.
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, desc }) => (
  <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition duration-300 text-center">
    <div className="text-green-600 text-5xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-gray-800">{title}</h3>
    <p className="text-gray-600 mt-2 text-sm">{desc}</p>
  </div>
);

export default Home;
