import React, { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageCircle,
  Heart,
  Users,
  Globe
} from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    mobile: "",
    message: ""
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add form submission logic here
    alert("Thank you for contacting us! We'll get back to you soon.");
    setFormData({
      name: "",
      organization: "",
      email: "",
      mobile: "",
      message: ""
    });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Section Header */}
      <div className="relative z-10 pt-20 pb-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            Contact Us
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Together, we can create lasting change in communities around the world. 
            Reach out to learn how you can make a difference.
          </p>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Info Card */}
          <div className="relative">
            {/* Background Image with Overlay */}
            <div 
              className="absolute inset-0 rounded-3xl opacity-20"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            ></div>
            
            <div className="relative bg-gradient-to-br from-emerald-900/30 to-teal-900/30 backdrop-blur-xl border border-emerald-500/20 rounded-3xl p-8 shadow-2xl">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl mb-4 shadow-xl">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Helpdesk Centre</h3>
                <p className="text-emerald-300 text-sm">
                  We appreciate your feedback. For any queries or suggestions about our initiatives, 
                  please reach out to us at{" "}
                  <span className="text-teal-300 font-medium">support@scsglobals.org</span>
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-black/20 rounded-xl border border-emerald-500/10 hover:border-emerald-500/30 transition-all">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-lg">
                    <MapPin className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-emerald-400 font-semibold mb-1">Office Address</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      123 Hope Street, Connaught Place<br />
                      New Delhi, India - 110001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-black/20 rounded-xl border border-emerald-500/10 hover:border-emerald-500/30 transition-all">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-lg">
                    <Phone className="w-6 h-6 text-teal-400" />
                  </div>
                  <div>
                    <h4 className="text-teal-400 font-semibold mb-1">Contact Number</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      +91 913-457-3859<br />
                      Available 24/7 for emergency support
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-black/20 rounded-xl border border-emerald-500/10 hover:border-emerald-500/30 transition-all">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-lg">
                    <Mail className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-cyan-400 font-semibold mb-1">Email ID</h4>
                    <p className="text-gray-300 text-sm">
                      info@scsglobals.org
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-emerald-500/20">
                <div className="text-center">
                  <div className="flex items-center justify-center w-10 h-10 bg-emerald-500/20 rounded-lg mx-auto mb-2">
                    <Heart className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div className="text-2xl font-bold text-white">50K+</div>
                  <div className="text-xs text-gray-400">Lives Impacted</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-10 h-10 bg-teal-500/20 rounded-lg mx-auto mb-2">
                    <Users className="w-5 h-5 text-teal-400" />
                  </div>
                  <div className="text-2xl font-bold text-white">200+</div>
                  <div className="text-xs text-gray-400">Volunteers</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-10 h-10 bg-cyan-500/20 rounded-lg mx-auto mb-2">
                    <Globe className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div className="text-2xl font-bold text-white">15+</div>
                  <div className="text-xs text-gray-400">Countries</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            {/* Background Image with Overlay */}
            <div 
              className="absolute inset-0 rounded-3xl opacity-10"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            ></div>
            
            <div className="relative bg-gradient-to-br from-teal-900/30 to-emerald-900/30 backdrop-blur-xl border border-teal-500/20 rounded-3xl p-8 shadow-2xl">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-4">
                  GET IN TOUCH
                </h3>
                <p className="text-gray-300">
                  Ready to make a difference? Send us a message and let's start changing lives together.
                </p>
              </div>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-black/30 border border-emerald-500/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/20 transition-all backdrop-blur-sm"
                    />
                  </div>
                  
                  <div className="relative">
                    <input
                      type="text"
                      name="organization"
                      placeholder="Organization Name"
                      value={formData.organization}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-black/30 border border-emerald-500/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/20 transition-all backdrop-blur-sm"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-black/30 border border-emerald-500/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/20 transition-all backdrop-blur-sm"
                    />
                  </div>
                  
                  <div className="relative">
                    <input
                      type="tel"
                      name="mobile"
                      placeholder="Mobile Number"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-black/30 border border-emerald-500/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/20 transition-all backdrop-blur-sm"
                    />
                  </div>
                </div>

                <div className="relative">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-4 bg-black/30 border border-emerald-500/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/20 transition-all resize-none backdrop-blur-sm"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-xl hover:shadow-emerald-500/25 font-semibold flex items-center justify-center gap-3 group"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Submit Message
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="relative bg-gradient-to-br from-slate-900/50 to-gray-900/50 backdrop-blur-xl border border-emerald-500/20 rounded-3xl p-2 shadow-2xl overflow-hidden">
            <div 
              className="w-full h-96 rounded-2xl"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="w-full h-full bg-gradient-to-r from-emerald-900/60 to-teal-900/60 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <div className="text-center text-white">
                  <MapPin className="w-16 h-16 mx-auto mb-4 text-emerald-400" />
                  <h3 className="text-2xl font-bold mb-2">Visit Our Office</h3>
                  <p className="text-gray-300">123 Hope Street, Connaught Place, New Delhi</p>
                  <button className="mt-4 px-6 py-2 bg-emerald-500 hover:bg-emerald-600 rounded-lg transition-colors">
                    Get Directions
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;