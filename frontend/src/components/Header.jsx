import React, { useState, useEffect } from "react";
import {
  Phone,
  Menu,
  X,
  Facebook,
  Instagram,
  Youtube,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "HOME", path: "/" },
    { label: "WHO WE ARE", path: "/about" },
    { label: "JOIN US", path: "/joinus" },
    { label: "DONATE", path: "/donate" },
    { label: "CONTACT", path: "/contact" },
    { label: "BLOGS", path: "/blogs" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-700 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-xl shadow-2xl border-b border-emerald-500/20"
          : "bg-transparent"
      }`}
    >
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white py-3 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 hover:scale-105 transition-transform">
              <Phone size={16} className="animate-pulse" />
              <span className="font-medium">913-457-3859</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>New Delhi, India</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Facebook
              size={16}
              className="hover:text-blue-300 cursor-pointer transition-all hover:scale-125"
            />
            <Instagram
              size={16}
              className="hover:text-pink-300 cursor-pointer transition-all hover:scale-125"
            />
            <Youtube
              size={16}
              className="hover:text-red-300 cursor-pointer transition-all hover:scale-125"
            />
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="px-4 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-xl transform hover:scale-110 transition-all duration-300">
                <img
                  src="/logo.png"
                  alt="Hope Foundation Logo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                SCS Globals
              </h1>
              <p className="text-xs text-emerald-400 font-medium tracking-wider">
                TRANSFORMING LIVES
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map(({ label, path }) => (
              <Link
                key={label}
                to={path}
                className="text-white hover:text-emerald-400 font-medium transition-all duration-300 relative group"
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            <Link
              to="/donate"
              className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-3 rounded-full hover:from-emerald-600 hover:to-teal-600 transition-all transform hover:scale-105 shadow-xl hover:shadow-emerald-500/25 font-medium"
            >
              Donate Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white hover:text-emerald-400 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-t border-emerald-500/20">
            <div className="px-4 py-6 space-y-4">
              {menuItems.map(({ label, path }) => (
                <Link
                  key={label}
                  to={path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-white hover:text-emerald-400 font-medium py-2 transition-colors"
                >
                  {label}
                </Link>
              ))}
              <Link
                to="/donate"
                onClick={() => setIsMenuOpen(false)}
                className="w-full inline-block bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-full hover:from-emerald-600 hover:to-teal-600 transition-all font-medium text-center"
              >
                Donate Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
