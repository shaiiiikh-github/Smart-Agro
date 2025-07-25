import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // Simulate auth state (replace with actual context or auth logic later)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Simulated logout function
  const handleLogout = () => {
    setIsLoggedIn(false);
    // Optionally clear localStorage or call logout API here
  };

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl">
      <div className="backdrop-blur-md bg-white/70 dark:bg-black/30 border border-gray-200 dark:border-white/10 shadow-xl rounded-full px-6 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-green-700">
          SmartAgro
        </Link>

        <nav className="flex gap-6 font-medium items-center">
          <Link to="/">Home</Link>

          {isLoggedIn ? (
            <>
              <Link to="/dashboard" className="hover:text-green-700">Dashboard</Link>
              <Link to="/profile" className="hover:text-green-700">Profile</Link>
              <button
                onClick={handleLogout}
                className="text-red-600 hover:underline"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-green-700">Login</Link>
              <Link to="/signup" className="hover:text-green-700">Sign Up</Link>
            </>
          )}

          <Link to="/about" className="hover:text-green-700">About Us</Link>
          <Link to="/contact" className="hover:text-green-700">Contact Us</Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
