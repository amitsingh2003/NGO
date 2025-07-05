// Footer Component
import React from "react";
import {
  Facebook,
  Instagram,
  Youtube,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const menuItems = [
    { label: "HOME", path: "/" },
    { label: "WHO WE ARE", path: "/about" },
    { label: "JOIN US", path: "/joinus" },
    { label: "DONATE", path: "/donate" },
    { label: "CONTACT", path: "/contact" },
    { label: "BLOGS", path: "/blogs" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 border-t border-emerald-500/20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Logo & About */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-xl transform hover:scale-110 transition-all duration-300">
                <img
                  src="/logo.png"
                  alt="SCS Globals Logo"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  SCS Globals
                </h3>
                <p className="text-emerald-400 font-medium tracking-wider text-sm">
                  TRANSFORMING LIVES
                </p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed max-w-lg">
              Dedicated to empowering communities through education, healthcare,
              and women empowerment programs. Creating sustainable change that
              lasts for generations.
            </p>

            <div className="flex gap-4">
              {[
                { icon: Facebook, color: "hover:text-blue-400" },
                { icon: Instagram, color: "hover:text-pink-400" },
                { icon: Youtube, color: "hover:text-red-400" },
                { icon: Mail, color: "hover:text-emerald-400" },
              ].map((social, index) => (
                <button
                  key={index}
                  className={`w-12 h-12 bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/10 hover:border-emerald-500/30 text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                >
                  <social.icon size={20} />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white">Quick Links</h4>
            <div className="space-y-3">
              {menuItems.map(({ label, path }) => (
                <Link
                  key={label}
                  to={path}
                  className="block text-gray-400 hover:text-emerald-400 transition-all duration-300 hover:translate-x-2 relative group"
                >
                  {label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-emerald-400 mt-1" size={20} />
                <div>
                  <p className="text-white font-medium">Address</p>
                  <p className="text-gray-400">New Delhi, India</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="text-emerald-400 mt-1" size={20} />
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <p className="text-gray-400">913-457-3859</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="text-emerald-400 mt-1" size={20} />
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-gray-400">info@scsglobals.org</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-center md:text-left">
            © 2024 SCS Globals - TRANSFORMING LIVES. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="/privacy"
              className="text-gray-400 hover:text-emerald-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-gray-400 hover:text-emerald-400 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;