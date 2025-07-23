import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="font-sans text-[#111] bg-[#ecfdf5]">

      {/* Hero Section */}
      <section className="relative bg-[#d1fae5] text-center py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#bbf7d0] to-[#ecfdf5] z-0" />
        <div className="relative z-10 max-w-5xl mx-auto">
          <h1 className="text-5xl font-extrabold text-[#16a34a] mb-4">About Smart Agro-Solar</h1>
          <p className="text-lg text-[#444] max-w-2xl mx-auto">
            Harnessing the power of AI and IoT to revolutionize farming efficiency and sustainability.
          </p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-20 px-6 bg-[#ecfdf5]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          {[
            {
              title: "Our Mission",
              desc: "To empower farmers with intelligent crop monitoring and solar energy optimization tools for a greener future.",
            },
            {
              title: "Our Vision",
              desc: "A future where technology and agriculture work together to solve climate and food challenges.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white bg-opacity-60 backdrop-blur-xl border border-white/40 rounded-2xl p-8 shadow-xl"
              data-aos="fade-up"
            >
              <h3 className="text-2xl font-bold text-[#16a34a] mb-2">{item.title}</h3>
              <p className="text-[#333]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-10 text-center">
          {[
            { label: "Farmers Helped", value: 1200 },
            { label: "Crops Monitored", value: 4300 },
            { label: "Energy Saved (kWh)", value: 8600 },
          ].map((stat, idx) => (
            <div key={idx} className="p-6 bg-[#d1fae5] rounded-xl shadow-md" data-aos="zoom-in">
              <h2 className="text-4xl font-bold text-[#16a34a]">{stat.value}+</h2>
              <p className="text-[#444] mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-[#ecfdf5]">
        <h2 className="text-3xl font-bold text-center text-[#16a34a] mb-12">Our Journey</h2>
        <div className="relative max-w-4xl mx-auto">
          {[
            { year: "2023", event: "Started the idea of Smart Agro-Solar" },
            { year: "2024", event: "Built MVP and tested with local farms" },
            { year: "2025", event: "Launched full platform with AI dashboard" },
          ].map((item, idx) => (
            <div key={idx} className={`mb-10 flex ${idx % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
              <div
                className="bg-white bg-opacity-60 backdrop-blur-lg border border-white/40 px-6 py-4 rounded-xl w-80 shadow-lg"
                data-aos="fade-up"
              >
                <h3 className="text-xl font-semibold text-[#16a34a]">{item.year}</h3>
                <p className="text-[#444]">{item.event}</p>
              </div>
            </div>
          ))}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#16a34a]/30 rounded-full"></div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <h2 className="text-3xl font-bold text-center text-[#16a34a] mb-12">Meet the Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
          {[
            { name: "Shabbir Shaikh", role: "Frontend Developer" },
            { name: "Teammate 2", role: "Backend Developer" },
            { name: "Teammate 3", role: "IoT Specialist" },
          ].map((person, i) => (
            <div
              key={i}
              className="bg-[#d1fae5] rounded-xl p-6 shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1"
              data-aos="fade-up"
            >
              <div className="h-24 w-24 bg-[#bbf7d0] rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold text-center text-[#16a34a]">{person.name}</h3>
              <p className="text-sm text-gray-600 text-center">{person.role}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default AboutUs;
