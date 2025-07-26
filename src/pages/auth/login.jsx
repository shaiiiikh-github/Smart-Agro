import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

   const handleGoogleLogin = async (credentialResponse) => {
  const decoded = jwtDecode(credentialResponse.credential);
  const user = {
    name: decoded.name,
    email: decoded.email,
    username: decoded.email.split("@")[0],
    googleId: decoded.sub
  };

  try {
    const res = await axios.post("http://localhost:5000/oauth-login", user);
    alert(res.data.message);
  } catch (err) {
    console.error(err);
    alert("Google login failed");
  }
};

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/login", {
        username,
        password
      });
      alert(res.data.message); // Shows "Login successful" or error
    } catch (err) {
      alert("Invalid login credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-green-300 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-green-700">
          Smart Agro Login
        </h2>

        {/* Third-party login buttons */}
        <div className="flex flex-col gap-3 mb-6">
          <GoogleLogin
           onSuccess={handleGoogleLogin}
           onError={() => console.log('Google Login Failed')}
         />

      <button
           onClick={() => {
           window.location.href = `https://github.com/login/oauth/authorize?client_id=Ov23liJOOg3lFqAptvuT&redirect_uri=http://localhost:5173/github/callback&allow_signup=true&prompt=login`;
        }}
         className="flex items-center justify-center gap-3 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition text-gray-700"
      >
         <img src="https://www.svgrepo.com/show/452091/github.svg" alt="GitHub" className="w-5 h-5" />
             Continue with GitHub
      </button>


        </div>

        {/* Separator */}
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-3 text-gray-400 text-sm">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Username/password form */}
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label className="block mb-1 text-sm text-gray-600">Email</label>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm text-gray-600">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute top-2 right-3 text-sm text-gray-500 hover:text-green-700"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Don’t have an account?{' '}
          <Link to="/signup" className="text-green-700 font-semibold hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  ); 
   


};



export default Login;
