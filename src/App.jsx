import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from "./components/navbar";
import Login from './pages/auth/login';
import Signup from './pages/auth/Signup';
import Landing from './pages/landing';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import SoilInsights from './pages/insights/SoilInsights';
import SolarInsights from './pages/insights/SolarInsights';
import CropInsights from './pages/insights/CropInsights';
import SystemInsights from './pages/insights/SystemInsights';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "./components/footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/insights/soil" element={<SoilInsights />} />
            <Route path="/insights/solar" element={<SolarInsights />} />
            <Route path="/insights/crop" element={<CropInsights />} />
            <Route path="/insights/system" element={<SystemInsights />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
