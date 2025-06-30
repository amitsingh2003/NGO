import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NGODonationSection from "./pages/Donate";
import NGOWebsite from "./pages/Home";
import Header from "./components/Header"; // Assuming you have Header here
import Footer from "./components/Footer";
import ContactSection from "./pages/Contact";
import BlogSection from "./pages/BlogSection ";
import JoinUsPage from "./pages/JoinUsPage ";
import AboutSection from "./pages/AboutSection ";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<NGOWebsite />} />
        <Route path="/donate" element={<NGODonationSection />} />
        <Route path="/contact" element={<ContactSection />} />
        <Route path="/blogs" element={<BlogSection />} />
        <Route path="/joinus" element={<JoinUsPage />} />
        <Route path="/about" element={<AboutSection />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
