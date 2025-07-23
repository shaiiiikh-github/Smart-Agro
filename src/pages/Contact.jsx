import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#eafff4] via-[#f0fefc] to-[#ffffff] text-gray-800 px-4 md:px-10 py-24 relative overflow-hidden font-sans">
      
      {/* Floating Gradient Blobs */}
      <div className="absolute w-80 h-80 bg-gradient-to-r from-green-400 to-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse top-[-100px] left-[-100px]"></div>
      <div className="absolute w-96 h-96 bg-gradient-to-br from-yellow-300 to-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-ping bottom-[-150px] right-[-150px]"></div>

      {/* Heading Section */}
      <div className="text-center mb-20 relative z-10">
        <h1 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-teal-500 to-emerald-600 drop-shadow-sm">
          Get in Touch
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
          Whether you're curious about features, a demo, or even press—we’re ready to answer any and all questions.
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start relative z-10">
        
        {/* Left Panel - Contact Info */}
        <div className="space-y-8" data-aos="fade-right">
          <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-white/40 hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-green-600 text-xl mt-1" />
              <div>
                <h4 className="font-semibold text-lg">Our Office</h4>
                <p className="text-sm text-gray-600">Vallabh Vidyanagar, Gujarat</p>
              </div>
            </div>
          </div>
          <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-white/40 hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-green-600 text-xl mt-1" />
              <div>
                <h4 className="font-semibold text-lg">Email</h4>
                <p className="text-sm text-gray-600">support@smartagro.com</p>
              </div>
            </div>
          </div>
          <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-white/40 hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-start gap-4">
              <FaPhone className="text-green-600 text-xl mt-1" />
              <div>
                <h4 className="font-semibold text-lg">Phone</h4>
                <p className="text-sm text-gray-600">+91 98765 43210</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Form */}
        <div
          className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 border border-white/30 hover:shadow-3xl transition-all duration-300"
          data-aos="fade-left"
        >
          <form className="space-y-6">
            <div>
              <label className="block text-sm text-gray-700 mb-1 font-semibold">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1 font-semibold">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1 font-semibold">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white text-lg font-bold shadow-lg hover:from-green-600 hover:to-green-700 transition duration-300 hover:scale-[1.02]"
            >
              🚀 Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-24 text-center text-sm text-gray-400">
        © 2025 Smart Agro Platform — All rights reserved.
      </div>
    </div>
  );
};

export default Contact;
