import { useState } from 'react';
import { Link } from 'react-router-dom';

const locationData = {
  Gujarat: {
    Ahmedabad: ['Village A', 'Village B'],
    Surat: ['Village C', 'Village D'],
  },
  Maharashtra: {
    Pune: ['Village E', 'Village F'],
    Mumbai: ['Village G', 'Village H'],
  },
  Punjab: {
    Amritsar: ['Village I', 'Village J'],
    Ludhiana: ['Village K', 'Village L'],
  },
};

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  // Location State
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedVillage, setSelectedVillage] = useState('');

  const states = Object.keys(locationData);
  const districts = selectedState ? Object.keys(locationData[selectedState]) : [];
  const villages = selectedDistrict
    ? locationData[selectedState][selectedDistrict]
    : [];

  return (
    <div className="bg-gradient-to-br from-green-100 to-green-300 min-h-screen pt-28 pb-10 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6 text-green-700">
          Create Your Account
        </h2>
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          {/* Full Name */}
          <div className="sm:col-span-2">
            <label className="block mb-1 text-sm text-gray-600">Full Name</label>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Username */}
          <div>
            <label className="block mb-1 text-sm text-gray-600">Username</label>
            <input
              type="text"
              placeholder="Unique username"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-1 text-sm text-gray-600">Phone Number</label>
            <input
              type="tel"
              placeholder="+91 9876543210"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Email */}
          <div className="sm:col-span-2">
            <label className="block mb-1 text-sm text-gray-600">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 text-sm text-gray-600">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Create password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-2 right-3 text-sm text-gray-500 hover:text-green-700"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block mb-1 text-sm text-gray-600">Confirm Password</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Re-enter password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute top-2 right-3 text-sm text-gray-500 hover:text-green-700"
              >
                {showConfirmPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
          {/* State Dropdown */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">State</label>
            <div className="relative">
              <select
                value={selectedState}
                onChange={(e) => {
                  setSelectedState(e.target.value);
                  setSelectedDistrict('');
                  setSelectedVillage('');
                }}
                className="w-full appearance-none px-4 py-2 pr-10 border border-gray-300 rounded-lg shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                required
              >
                <option value="" disabled hidden>Choose State</option>
                {states.map((state) => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
              <span className="absolute inset-y-0 right-3 flex items-center text-gray-500 pointer-events-none">
                ▼
              </span>
            </div>
          </div>

          {/* District Dropdown */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">District</label>
            <div className="relative">
              <select
                value={selectedDistrict}
                onChange={(e) => {
                  setSelectedDistrict(e.target.value);
                  setSelectedVillage('');
                }}
                disabled={!selectedState}
                className={`w-full appearance-none px-4 py-2 pr-10 border ${!selectedState ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'
                  } border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition`}
                required
              >
                <option value="" disabled hidden>Choose District</option>
                {districts.map((district) => (
                  <option key={district} value={district}>{district}</option>
                ))}
              </select>
              <span className="absolute inset-y-0 right-3 flex items-center text-gray-500 pointer-events-none">
                ▼
              </span>
            </div>
          </div>

          {/* Village Dropdown */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Village</label>
            <div className="relative">
              <select
                value={selectedVillage}
                onChange={(e) => setSelectedVillage(e.target.value)}
                disabled={!selectedDistrict}
                className={`w-full appearance-none px-4 py-2 pr-10 border ${!selectedDistrict ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'
                  } border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition`}
                required
              >
                <option value="" disabled hidden>Choose Village</option>
                {villages.map((village) => (
                  <option key={village} value={village}>{village}</option>
                ))}
              </select>
              <span className="absolute inset-y-0 right-3 flex items-center text-gray-500 pointer-events-none">
                ▼
              </span>
            </div>
          </div>


          {/* Terms & Conditions */}
          <div className="sm:col-span-2 flex items-start mt-2">
            <input
              type="checkbox"
              className="mt-1 mr-2"
              checked={agreeTerms}
              onChange={() => setAgreeTerms(!agreeTerms)}
              required
            />
            <p className="text-sm text-gray-600">
              I agree to the{' '}
              <span className="text-green-700 font-medium underline cursor-pointer">
                Terms & Conditions
              </span>
            </p>
          </div>

          {/* Submit */}
          <div className="sm:col-span-2 mt-2">
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition font-semibold"
            >
              Sign Up
            </button>
          </div>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-green-700 font-semibold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
