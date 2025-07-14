import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NGODonationSection from "./pages/Donate";
import NGOWebsite from "./pages/Home";
import Header from "./components/Header"; // Assuming you have Header here
import Footer from "./components/Footer";
import ContactSection from "./pages/Contact";
import BlogSection from "./pages/BlogSection ";
import JoinUsPage from "./pages/JoinUsPage ";
import AboutSection from "./pages/AboutSection ";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Router>
       <Toaster
        position="top-center"
        toastOptions={{
          style: {
            borderRadius: '12px',
            background: '#333',
            color: '#fff',
            padding: '16px',
            fontSize: '16px',
            maxWidth: '90%',
            textAlign: 'center',
            boxShadow: '0 4px 14px rgba(0,0,0,0.3)',
          },
          success: {
            style: {
              background: '#22c55e',
              color: '#fff',
            },
          },
          error: {
            style: {
              background: '#ef4444',
              color: '#fff',
            },
          },
        }}
      />

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
