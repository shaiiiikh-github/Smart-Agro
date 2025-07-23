import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/navbar";
import Login from './pages/auth/login';
import Signup from './pages/auth/Signup';
import Landing from './pages/landing';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
         <Route path="/" element={<Landing />} />
        <Route path="/" element={<Login />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}
export default App;