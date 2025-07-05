import React, { useState, useEffect } from 'react';
import { Users, Heart, Briefcase, UserPlus, MapPin, Calendar, Clock, Globe, HandHeart, Smile, Target } from 'lucide-react';

const JoinUsPage = () => {
  const [selectedForm, setSelectedForm] = useState('volunteer');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    availability: '',
    skills: '',
    motivation: ''
  });
  const [currentImage, setCurrentImage] = useState(0);

  const heroImages = [
    'https://images.unsplash.com/photo-1650871424238-e2352dad1fff?q=80&w=1333&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1635929114944-8bab23b98e74?q=80&w=1234&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1603623992651-03e9de573dce?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    const requiredFields = ['name', 'email', 'phone', 'message'];
    const isValid = requiredFields.every(field => formData[field].trim() !== '');
    
    if (isValid) {
      console.log('Form submitted:', { type: selectedForm, data: formData });
      setFormData({ name: '', email: '', phone: '', message: '', availability: '', skills: '', motivation: '' });
      alert('Thank you for your heartfelt application! Our team will reach out to you within 48 hours. Together, we can make a difference! 💝');
    } else {
      alert('Please fill in all required fields to help us connect with you better.');
    }
  };

  const pathways = [
    {
      id: 'volunteer',
      title: 'Volunteer',
      subtitle: 'Be a Ray of Hope',
      icon: Heart,
      image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Join our compassionate volunteers who dedicate their time to bring smiles to those who need it most.',
      impact: 'Help feed 50+ families monthly',
      commitment: 'Flexible - 2-4 hours/week',
      benefits: ['Free training & support', 'Community recognition', 'Personal fulfillment', 'Network with like-minded people'],
      gradient: 'from-rose-400 to-pink-600',
      bgColor: 'bg-rose-50',
      textColor: 'text-rose-600'
    },
    {
      id: 'membership',
      title: 'Member',
      subtitle: 'Join Our Family',
      icon: Users,
      image: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Become part of our core family and help shape programs that transform entire communities.',
      impact: 'Influence programs affecting 1000+ lives',
      commitment: 'Regular - 5-8 hours/week',
      benefits: ['Leadership opportunities', 'Program planning input', 'Annual appreciation events', 'Direct impact visibility'],
      gradient: 'from-emerald-400 to-teal-600',
      bgColor: 'bg-emerald-50',
      textColor: 'text-emerald-600'
    },
    {
      id: 'internship',
      title: 'Intern',
      subtitle: 'Learn & Serve',
      icon: Briefcase,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Gain valuable experience while contributing to meaningful projects that create lasting social change.',
      impact: 'Lead projects impacting 200+ beneficiaries',
      commitment: 'Full-time - 3-6 months',
      benefits: ['Professional mentorship', 'Skill development', 'Certificate & references', 'Career networking'],
      gradient: 'from-violet-400 to-purple-600',
      bgColor: 'bg-violet-50',
      textColor: 'text-violet-600'
    }
  ];

  const impactStats = [
    { number: '12,500+', label: 'Lives Touched', icon: HandHeart, desc: 'Families supported with food, education & healthcare' },
    { number: '850+', label: 'Volunteers', icon: Users, desc: 'Dedicated changemakers from 15+ countries' },
    { number: '45+', label: 'Communities', icon: Globe, desc: 'Rural & urban areas where we make impact' },
    { number: '98%', label: 'Satisfaction', icon: Smile, desc: 'Of our volunteers say they found purpose here' }
  ];

  const selectedPathway = pathways.find(p => p.id === selectedForm);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      
      {/* Hero Section with Slideshow */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Image Slideshow */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-2000 ${
                index === currentImage ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img 
                src={image} 
                alt="Community impact" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
         
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
            Your Heart Can
            <span className="block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Change Everything
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
            Every act of kindness creates ripples of hope. Join thousands of compassionate hearts 
            working together to build a world where everyone has a chance to thrive.
          </p>

          {/* Impact Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {impactStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 mb-3 border border-white/30 group-hover:bg-white/30 transition-all duration-300">
                    <Icon className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">{stat.number}</div>
                    <div className="text-sm text-gray-200 font-medium">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Ways to Help Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              How Will You 
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"> Make Impact?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the path that matches your heart's calling and available time. Every contribution matters.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pathways.map((pathway) => {
              const Icon = pathway.icon;
              const isSelected = selectedForm === pathway.id;
              
              return (
                <div
                  key={pathway.id}
                  onClick={() => setSelectedForm(pathway.id)}
                  className={`group cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                    isSelected ? 'scale-105' : ''
                  }`}
                >
                  <div className={`relative bg-white rounded-3xl shadow-lg overflow-hidden border-2 transition-all duration-500 ${
                    isSelected 
                      ? `border-emerald-300 shadow-2xl shadow-emerald-500/20` 
                      : 'border-gray-100 hover:border-gray-200 hover:shadow-xl'
                  }`}>
                    
                    {/* Image Section */}
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={pathway.image} 
                        alt={pathway.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${pathway.gradient} opacity-80`}></div>
                      
                      {/* Icon & Title Overlay */}
                      <div className="absolute bottom-6 left-6 text-white">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                            <Icon size={24} className="text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold">{pathway.title}</h3>
                            <p className="text-white/90 text-sm font-medium">{pathway.subtitle}</p>
                          </div>
                        </div>
                      </div>

                      {/* Selection Badge */}
                      {isSelected && (
                        <div className="absolute top-4 right-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                          Selected
                        </div>
                      )}
                    </div>

                    {/* Content Section */}
                    <div className="p-8">
                      <p className="text-gray-600 mb-6 leading-relaxed">{pathway.description}</p>
                      
                      {/* Impact & Commitment */}
                      <div className="space-y-4 mb-6">
                        <div className="flex items-center gap-3">
                          <Target className="w-5 h-5 text-emerald-500" />
                          <span className="text-sm font-medium text-gray-700">Impact: {pathway.impact}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Clock className="w-5 h-5 text-emerald-500" />
                          <span className="text-sm font-medium text-gray-700">Time: {pathway.commitment}</span>
                        </div>
                      </div>

                      {/* Benefits */}
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-800 text-sm mb-3">What You'll Get:</h4>
                        {pathway.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                            <span className="text-sm text-gray-600">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Ready to Start Your 
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Journey of Impact?
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              Tell us about yourself so we can find the perfect way for you to make a difference
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            
            {/* Header with Selected Path */}
            <div className={`bg-gradient-to-r ${selectedPathway.gradient} p-8 text-white relative overflow-hidden`}>
              <div className="absolute inset-0 opacity-20">
                <img src={selectedPathway.image} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <selectedPathway.icon size={32} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-2">Join as a {selectedPathway.title}</h3>
                <p className="text-white/90 text-lg">{selectedPathway.subtitle}</p>
              </div>
            </div>

            {/* Form Fields */}
            <div className="p-8 space-y-6">
              
              {/* Personal Info Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-all duration-300 bg-gray-50 focus:bg-white"
                    placeholder="What should we call you?"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-all duration-300 bg-gray-50 focus:bg-white"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              {/* Contact & Availability */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-all duration-300 bg-gray-50 focus:bg-white"
                    placeholder="Your contact number"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Availability</label>
                  <select
                    name="availability"
                    value={formData.availability}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-all duration-300 bg-gray-50 focus:bg-white"
                  >
                    <option value="">Select your availability</option>
                    <option value="weekends">Weekends only</option>
                    <option value="evenings">Weekday evenings</option>
                    <option value="flexible">Flexible schedule</option>
                    <option value="fulltime">Full-time commitment</option>
                  </select>
                </div>
              </div>

              {/* Skills */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">Your Skills & Talents</label>
                <input
                  type="text"
                  name="skills"
                  value={formData.skills}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-all duration-300 bg-gray-50 focus:bg-white"
                  placeholder="e.g., Teaching, Photography, Event Planning, Social Media, Cooking..."
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">Why do you want to join our mission? *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-all duration-300 bg-gray-50 focus:bg-white resize-none"
                  placeholder="Share your story... What drives your passion to help others? How do you envision making an impact?"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  onClick={handleSubmit}
                  className={`w-full py-4 px-8 bg-gradient-to-r ${selectedPathway.gradient} text-white font-bold text-lg rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 group`}
                >
                  <Heart className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                  <span>Submit My Application</span>
                  <Heart className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                </button>
                <p className="text-center text-sm text-gray-500 mt-3">
                  We'll review your application with care and respond within 48 hours ❤️
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">
            The Impact We Create 
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Together</span>
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="group">
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-2">
                    <Icon className="w-12 h-12 text-emerald-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                    <div className="text-lg font-semibold text-gray-700 mb-2">{stat.label}</div>
                    <div className="text-sm text-gray-600">{stat.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinUsPage;