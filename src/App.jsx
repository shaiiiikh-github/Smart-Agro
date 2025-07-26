import { Routes, Route } from 'react-router-dom';  // ❗ no BrowserRouter here
import Navbar from "./components/navbar";
import Login from './pages/auth/login';
import Signup from './pages/auth/Signup';
import Landing from './pages/landing';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import GitHubCallback from './pages/auth/GitHubCallBack';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/github/callback" element={<GitHubCallback />} />
      </Routes>
    </>
  );
}

export default App;
