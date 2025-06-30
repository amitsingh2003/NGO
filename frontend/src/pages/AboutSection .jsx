import React, { useState, useEffect } from 'react';
import { 
  Heart, Users, Award, Globe, ArrowRight, CheckCircle, Star,
  Eye, Target, HandHeart, BookOpen, Stethoscope, Shield,
  Home, Calendar, Phone, Mail, MapPin
} from 'lucide-react';

const AboutSection = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [counter, setCounter] = useState({
    lives: 0,
    communities: 0,
    years: 0,
    volunteers: 0
  });

  // Animated counters
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prev => ({
        lives: prev.lives < 75000 ? prev.lives + 1500 : 75000,
        communities: prev.communities < 350 ? prev.communities + 7 : 350,
        years: prev.years < 18 ? prev.years + 1 : 18,
        volunteers: prev.volunteers < 1200 ? prev.volunteers + 24 : 1200
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const impactStats = [
    { number: counter.lives, label: "Lives Transformed", icon: Heart },
    { number: counter.communities, label: "Communities Served", icon: Globe },
    { number: counter.years, label: "Years of Impact", icon: Award },
    { number: counter.volunteers, label: "Active Volunteers", icon: Users }
  ];

  const workAreas = [
    {
      title: "Education & Literacy",
      description: "Empowering communities through quality education and skill development programs.",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: BookOpen,
      impact: "45,000+ Students Educated"
    },
    {
      title: "Healthcare & Wellness",
      description: "Providing accessible healthcare services to underserved communities across India.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: Stethoscope,
      impact: "25,000+ Patients Treated"
    },
    {
      title: "Women Empowerment",
      description: "Breaking barriers and creating opportunities for women's economic independence.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: Users,
      impact: "12,000+ Women Empowered"
    },
    {
      title: "Child Protection",
      description: "Safeguarding children's rights and creating safe environments for their growth.",
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: Shield,
      impact: "8,000+ Children Protected"
    },
    {
      title: "Rural Development",
      description: "Transforming rural communities through infrastructure and sustainable development.",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: Home,
      impact: "180+ Villages Developed"
    },
    {
      title: "Disaster Relief",
      description: "Rapid emergency response and rehabilitation support during crises.",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: HandHeart,
      impact: "35,000+ People Assisted"
    }
  ];

  const teamMembers = [
    {
      name: "Dr. Rajesh Kumar",
      position: "Founder & President",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "20+ years in social work and community development"
    },
    {
      name: "Dr. Priya Sharma",
      position: "Director of Programs",
      image: "https://images.unsplash.com/photo-1494790108755-2616c6d26e6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "15+ years in healthcare and women empowerment"
    },
    {
      name: "Amit Patel",
      position: "Field Operations Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "12+ years in grassroots community work"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white">
      
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-emerald-900/40"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
            About JANSEWA
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-12">
            Transforming lives and building communities across India for over 18 years. 
            We believe every person deserves dignity, opportunity, and hope.
          </p>
          
          {/* Impact Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {impactStats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-emerald-500/30 hover:scale-105 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.number.toLocaleString()}+
                </div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          <button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-10 py-4 rounded-full hover:from-emerald-600 hover:to-teal-600 transition-all transform hover:scale-105 shadow-2xl font-semibold text-lg flex items-center gap-3 mx-auto">
            <Heart className="w-5 h-5" />
            Learn Our Story
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Our Purpose
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Mission */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-3xl mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Our Mission"
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/90 flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">Our Mission</h3>
                  </div>
                </div>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                To empower marginalized communities through comprehensive development programs that create 
                lasting positive change in education, healthcare, women's empowerment, and sustainable livelihoods.
              </p>
            </div>

            {/* Vision */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-3xl mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Our Vision"
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/90 flex items-center justify-center">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">Our Vision</h3>
                  </div>
                </div>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                A just and equitable society where every individual has equal access to opportunities, 
                resources, and the chance to live with dignity and reach their full potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Areas */}
      <section className="py-20 px-6 bg-gradient-to-r from-emerald-900/10 to-cyan-900/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Our Impact Areas
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive programs addressing the root causes of inequality across multiple sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workAreas.map((area, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-3xl mb-6">
                  <img 
                    src={area.image}
                    alt={area.title}
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                  <div className="absolute top-6 left-6">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/90 flex items-center justify-center">
                      <area.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{area.title}</h3>
                    <p className="text-emerald-400 font-semibold text-lg">{area.impact}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Our Leadership
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Passionate leaders with decades of experience driving positive social change.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative overflow-hidden rounded-3xl mb-6">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-emerald-400 font-semibold">{member.position}</p>
                  </div>
                </div>
                <p className="text-gray-300">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 px-6 bg-gradient-to-r from-emerald-900/10 to-cyan-900/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Our Journey
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From humble beginnings to nationwide impact - milestones that shaped our organization.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Image Background */}
            <div className="relative overflow-hidden rounded-3xl mb-12">
              <img 
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Our Journey"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90 flex items-center justify-center">
                <div className="text-center max-w-4xl px-8">
                  <h3 className="text-5xl font-bold text-white mb-6">18 Years of Impact</h3>
                  <p className="text-2xl text-gray-200">Building bridges between hope and reality since 2006</p>
                </div>
              </div>
            </div>

            {/* Key Milestones */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { year: "2006", title: "Foundation", desc: "Started with 5 volunteers" },
                { year: "2012", title: "Healthcare", desc: "Mobile clinics launched" },
                { year: "2018", title: "Digital Era", desc: "Online learning platform" },
                { year: "2024", title: "Innovation", desc: "AI-powered monitoring" }
              ].map((milestone, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-emerald-400 mb-2">{milestone.year}</div>
                  <h4 className="text-xl font-bold text-white mb-2">{milestone.title}</h4>
                  <p className="text-gray-300">{milestone.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-br from-emerald-900/20 to-cyan-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Join Our Mission
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Together, we can create a world where every person has the opportunity to thrive.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-10 py-4 rounded-full hover:from-emerald-600 hover:to-teal-600 transition-all transform hover:scale-105 shadow-2xl font-semibold text-lg flex items-center gap-3">
              <Heart className="w-5 h-5" />
              Get Involved
            </button>
            <button className="bg-white/10 backdrop-blur-xl border border-emerald-500/30 text-white px-10 py-4 rounded-full hover:bg-white/20 transition-all transform hover:scale-105 font-semibold text-lg">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-xl border-t border-emerald-500/20 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">JANSEWA</h3>
              <p className="text-gray-300 mb-6">Transforming lives across India through sustainable development.</p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-white mb-4">Quick Links</h4>
              <div className="space-y-2">
                {['About Us', 'Programs', 'Get Involved', 'Contact'].map((link, index) => (
                  <a key={index} href="#" className="block text-gray-300 hover:text-emerald-400 transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-white mb-4">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-emerald-400" />
                  <p className="text-gray-300">New Delhi, India</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-emerald-400" />
                  <p className="text-gray-300">+91 11 2345 6789</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-emerald-400" />
                  <p className="text-gray-300">info@jansewa.org</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-emerald-500/20 pt-8 text-center">
            <p className="text-gray-400">© 2024 JANSEWA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutSection;