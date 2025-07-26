import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const ContactUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send message');
      }
    } catch (error) {
      console.error(error);
      alert('Something went wrong');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e0f7e9] to-[#f2f2f2] text-gray-800 pt-[120px] pb-16 px-4 flex items-start justify-center">
      <div className="w-full max-w-5xl bg-white shadow-2xl rounded-3xl p-6 md:p-10" data-aos="zoom-in">

        <h1 className="text-4xl font-bold text-green-700 mb-6 text-center">Contact Us</h1>  
        <p className="text-center text-gray-600 mb-10 text-lg">
          We’d love to hear from you. Reach out with questions, feedback, or collaborations!
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-green-600 mb-2">Our Address</h2>
              <p>📍 GreenTech Valley, Gujarat, India</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-green-600 mb-2">Phone</h2>
              <p>📞 +91 98248 16113</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-green-600 mb-2">Email</h2>
              <p>📧 sahil06052005@gmail.com</p>
            </div>

            {/* Social Icons */}
            <div>
              <h2 className="text-xl font-semibold text-green-600 mb-4">Follow Us</h2>
              <div className="flex gap-4 text-green-600 text-2xl">
                <a href="#" className="hover:text-green-800 transition"><FaFacebookF /></a>
                <a href="#" className="hover:text-green-800 transition"><FaTwitter /></a>
                <a href="#" className="hover:text-green-800 transition"><FaInstagram /></a>
                <a href="#" className="hover:text-green-800 transition"><FaLinkedin /></a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-2 font-medium">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="How can we help you?"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
