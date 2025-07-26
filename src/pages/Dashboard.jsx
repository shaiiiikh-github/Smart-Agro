import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FiSun, FiDroplet, FiThermometer, 
  FiAlertCircle, FiImage, FiBarChart2,
  FiSettings, FiCalendar, FiLoader
} from 'react-icons/fi';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize animation library
    AOS.init({
      duration: 800,
      once: true
    });

    // Simulate data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Sample data
  const soilData = {
    moisture: 65,
    temperature: 28,
    humidity: 72,
    pH: 6.8
  };
  
  const solarData = {
    currentOutput: 450,
    dailyProduction: 3.2,
    efficiency: 82,
    batteryLevel: 75
  };
  
  const alerts = [
    { id: 1, type: 'irrigation', message: 'Low soil moisture detected in field A', time: '2 hours ago', critical: true },
    { id: 2, type: 'weather', message: 'Rain expected in 6 hours', time: '4 hours ago', critical: false }
  ];
  
  const cropHealth = {
    diseaseRisk: 35,
    growthStage: 'Vegetative',
    lastScan: '3 hours ago',
    healthScore: 78
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center">
        <div className="text-center" data-aos="fade-in">
          <FiLoader className="animate-spin text-5xl text-green-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-green-700">Loading Smart Agro Dashboard</h2>
          <p className="text-green-500 mt-2">Optimizing your farming data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with green accent */}
        <div className="mb-8 border-b border-green-200 pb-6" data-aos="fade-up">
          <h1 className="text-3xl font-bold text-green-800 mb-2">Smart Agro-Solar Dashboard</h1>
          <p className="text-green-600">Monitoring 3.4M data points for recyclable energy optimization</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Soil Moisture Card */}
          <Link 
            to="/insights/soil" 
            className="bg-white p-6 rounded-xl shadow-sm border border-green-100 hover:shadow-md transition-all hover:border-green-300"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="flex items-center">
              <div className="p-3 bg-green-100 rounded-full mr-4">
                <FiDroplet className="text-green-600 text-xl" />
              </div>
              <div>
                <p className="text-green-500">Soil Moisture</p>
                <p className="text-2xl font-bold text-green-700">{soilData.moisture}%</p>
              </div>
            </div>
          </Link>

          {/* Solar Output Card */}
          <Link 
            to="/insights/solar" 
            className="bg-white p-6 rounded-xl shadow-sm border border-green-100 hover:shadow-md transition-all hover:border-green-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="flex items-center">
              <div className="p-3 bg-yellow-100 rounded-full mr-4">
                <FiSun className="text-yellow-600 text-xl" />
              </div>
              <div>
                <p className="text-green-500">Solar Output</p>
                <p className="text-2xl font-bold text-green-700">{solarData.currentOutput}W</p>
              </div>
            </div>
          </Link>

          {/* Crop Health Card */}
          <Link 
            to="/insights/crop" 
            className="bg-white p-6 rounded-xl shadow-sm border border-green-100 hover:shadow-md transition-all hover:border-green-300"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="flex items-center">
              <div className="p-3 bg-teal-100 rounded-full mr-4">
                <FiImage className="text-teal-600 text-xl" />
              </div>
              <div>
                <p className="text-green-500">Crop Health</p>
                <p className="text-2xl font-bold text-green-700">{cropHealth.healthScore}/100</p>
              </div>
            </div>
          </Link>

          {/* System Alerts Card */}
          <Link 
            to="/insights/system" 
            className="bg-white p-6 rounded-xl shadow-sm border border-green-100 hover:shadow-md transition-all hover:border-green-300"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="flex items-center">
              <div className="p-3 bg-red-100 rounded-full mr-4">
                <FiAlertCircle className="text-red-600 text-xl" />
              </div>
              <div>
                <p className="text-green-500">Active Alerts</p>
                <p className="text-2xl font-bold text-green-700">{alerts.length}</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Monitoring Systems Card */}
          <div 
            className="bg-white rounded-xl shadow-sm border border-green-100 p-6 lg:col-span-2 hover:shadow-md transition-all"
            data-aos="fade-up"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold flex items-center text-green-700">
                <FiBarChart2 className="text-green-600 mr-2" />
                Our Monitoring Systems
              </h2>
              <Link to="/insights/soil" className="text-sm text-green-600 hover:underline">View Details</Link>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                <p className="text-green-600 mb-1">Temperature</p>
                <p className="text-2xl font-bold text-green-700">{soilData.temperature}°C</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                <p className="text-green-600 mb-1">Humidity</p>
                <p className="text-2xl font-bold text-green-700">{soilData.humidity}%</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                <p className="text-green-600 mb-1">pH Level</p>
                <p className="text-2xl font-bold text-green-700">{soilData.pH}</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                <p className="text-green-600 mb-1">Moisture</p>
                <p className="text-2xl font-bold text-green-700">{soilData.moisture}%</p>
              </div>
            </div>
            
            <p className="mt-6 text-green-600 italic">
              "Our monitoring systems are the main key components of our systems."
            </p>
          </div>

          {/* Alerts Card */}
          <div 
            className="bg-white rounded-xl shadow-sm border border-green-100 p-6 hover:shadow-md transition-all"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 className="text-xl font-semibold flex items-center mb-6 text-green-700">
              <FiAlertCircle className="text-red-600 mr-2" />
              System Alerts
            </h2>
            
            <div className="space-y-4">
              {alerts.map(alert => (
                <div 
                  key={alert.id}
                  className={`p-4 rounded-lg border-l-4 ${alert.critical ? 'border-red-500 bg-red-50' : 'border-green-500 bg-green-50'}`}
                >
                  <p className="font-medium text-green-800">{alert.message}</p>
                  <p className="text-sm text-green-600 mt-1">{alert.time}</p>
                  {alert.critical && (
                    <span className="inline-block mt-2 px-2 py-1 text-xs font-semibold bg-red-100 text-red-800 rounded">
                      Critical
                    </span>
                  )}
                </div>
              ))}
            </div>
            
            <Link 
              to="/insights/system" 
              className="mt-6 w-full py-2 border border-green-200 rounded-lg text-green-600 hover:bg-green-50 transition-colors flex justify-center"
            >
              View All Alerts
            </Link>
          </div>

          {/* Main Optimizers Card */}
          <div 
            className="bg-white rounded-xl shadow-sm border border-green-100 p-6 hover:shadow-md transition-all"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold flex items-center text-green-700">
                <FiSettings className="text-yellow-600 mr-2" />
                Main Optimizers
              </h2>
              <Link to="/insights/solar" className="text-sm text-green-600 hover:underline">View Details</Link>
            </div>
            
            <div className="space-y-4">
              <div>
                <p className="text-green-600">Daily Production</p>
                <p className="text-2xl font-bold text-green-700">{solarData.dailyProduction}kWh</p>
              </div>
              <div>
                <p className="text-green-600">Efficiency</p>
                <p className="text-2xl font-bold text-green-700">{solarData.efficiency}%</p>
              </div>
              <div>
                <p className="text-green-600">Battery Level</p>
                <div className="w-full bg-green-100 rounded-full h-2.5 mt-2">
                  <div 
                    className="bg-green-600 h-2.5 rounded-full" 
                    style={{ width: `${solarData.batteryLevel}%` }}
                  ></div>
                </div>
                <p className="text-sm text-green-600 mt-1">{solarData.batteryLevel}% charged</p>
              </div>
            </div>
            
            <p className="mt-6 text-green-600 italic">
              "We've used our main system to create new and more efficient products."
            </p>
          </div>

          {/* Smart Disclosure Card */}
          <div 
            className="bg-white rounded-xl shadow-sm border border-green-100 p-6 hover:shadow-md transition-all"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold flex items-center text-green-700">
                <FiCalendar className="text-teal-600 mr-2" />
                Smart Disclosure
              </h2>
              <Link to="/insights/crop" className="text-sm text-green-600 hover:underline">View Details</Link>
            </div>
            
            <div className="space-y-4">
              <div>
                <p className="text-green-600">Disease Risk</p>
                <div className="w-full bg-green-100 rounded-full h-2.5 mt-2">
                  <div 
                    className="bg-red-500 h-2.5 rounded-full" 
                    style={{ width: `${cropHealth.diseaseRisk}%` }}
                  ></div>
                </div>
                <p className="text-sm text-green-600 mt-1">{cropHealth.diseaseRisk}% risk detected</p>
              </div>
              <div>
                <p className="text-green-600">Growth Stage</p>
                <p className="text-lg font-medium text-green-700">{cropHealth.growthStage}</p>
              </div>
              <div>
                <p className="text-green-600">Last Scan</p>
                <p className="text-lg font-medium text-green-700">{cropHealth.lastScan}</p>
              </div>
            </div>
            
            <p className="mt-6 text-green-600 italic">
              "We can use our main system to create new and more efficient products."
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div 
          className="mt-12 bg-green-600 rounded-xl p-8 text-center"
          data-aos="fade-up"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Ready to revolutionize your farm?</h2>
          <p className="text-green-100 mb-6">Join our transformed approach with full and evergreen customers</p>
          <Link 
            to="/contact" 
            className="inline-block bg-white text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-green-50 transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </div>

     
    </div>
  );
};

export default Dashboard;