import React, { useState, useEffect } from "react";
import {
  Phone,
  Menu,
  X,
  Heart,
  Users,
  GraduationCap,
  Stethoscope,
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Globe,
  ChevronRight,
  Star,
  Award,
  Target,
  Eye,
  ArrowRight,
  Play,
  CheckCircle,
  MapPin,
  Calendar,
} from "lucide-react";
import { Link } from 'react-router-dom';



const NGOWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-slide for hero section
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const heroSlides = [
    {
      image:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      title: "Empowering Dreams",
      subtitle: "Through Education & Care",
    },
    {
      image:
        "https://images.unsplash.com/photo-1750747543764-546ceace9872?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Women Empowerment",
      subtitle: "Building Stronger Communities",
    },
    {
      image:
        "https://images.unsplash.com/photo-1680778469400-db969eee2653?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Healthcare for All",
      subtitle: "Ensuring Better Tomorrow",
    },
  ];

  return (
    <div className="min-h-screen bg-black overflow-x-hidden pt-12">
      {/* Hero Section with Slider */}
      <section className="relative h-screen overflow-hidden ">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent z-10"></div>
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover scale-110 animate-pulse"
            />
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="max-w-7xl mx-auto px-4 w-full">
                <div className="max-w-3xl space-y-8">
                  <div className="space-y-4">
                    <h1 className="text-6xl lg:text-8xl font-bold text-white leading-tight">
                      <span className="bg-gradient-to-r from-white via-emerald-200 to-cyan-200 bg-clip-text text-transparent">
                        {slide.title}
                      </span>
                    </h1>
                    <p className="text-2xl text-gray-300 font-light leading-relaxed">
                      {slide.subtitle}
                    </p>
                  </div>

                  <div className="space-y-6">
                    <p className="text-gray-200 text-lg leading-relaxed max-w-2xl">
                      Lorem ipsum dolor sit amet consectetur. Convallis integer
                      magnis amet mattis nisl aliquam. Ut lectus integer a
                      commodo venenatis nam nibh habitant dui fringilla. Aliquam
                      tempus nisl tellus senean lacus lectus quam sapien.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className="group bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-full hover:from-emerald-600 hover:to-teal-600 transition-all transform hover:scale-105 shadow-xl hover:shadow-emerald-500/25 font-medium flex items-center gap-3">
                        Become One Of Us
                        <ArrowRight
                          size={20}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </button>

                      <button className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full hover:bg-white/20 transition-all border border-white/20 hover:border-white/40 font-medium flex items-center gap-3">
                        <Play
                          size={20}
                          className="group-hover:scale-110 transition-transform"
                        />
                        Watch Story
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Services Section with Enhanced Cards */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-cyan-500/5"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              For Every Child, Women,
              <br />
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                and Community
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: GraduationCap,
                title: "Child Education",
                description:
                  "Empowering young minds through quality education and skill development programs that create lasting impact.",
                image:
                  "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                gradient: "from-blue-500 to-purple-600",
                stats: "5K+ Children",
              },
              {
                icon: Users,
                title: "Women Empowerment",
                description:
                  "Supporting women through skill training, entrepreneurship programs, and leadership development initiatives.",
                image:
                  "https://images.unsplash.com/photo-1494832944834-a08818c634b0?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                gradient: "from-pink-500 to-rose-600",
                stats: "3K+ Women",
              },
              {
                icon: Stethoscope,
                title: "Health Care",
                description:
                  "Providing accessible healthcare services and medical support to underserved communities across regions.",
                image:
                  "https://images.unsplash.com/photo-1592290897024-e3772c2b5cae?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                gradient: "from-emerald-500 to-teal-600",
                stats: "15K+ Treated",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-emerald-500/30 transition-all duration-700 transform hover:-translate-y-4 hover:shadow-2xl hover:shadow-emerald-500/10"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-700`}
                  ></div>

                  {/* Floating Icon */}
                  <div className="absolute top-6 right-6">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}
                    >
                      <service.icon className="text-white" size={24} />
                    </div>
                  </div>

                  {/* Stats Badge */}
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                      <span className="text-white text-sm font-medium">
                        {service.stats}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <button className="group/btn flex items-center gap-2 text-emerald-400 hover:text-white font-medium transition-colors">
                    Learn More
                    <ArrowRight
                      size={16}
                      className="group-hover/btn:translate-x-1 transition-transform"
                    />
                  </button>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-cyan-500/0 group-hover:from-emerald-500/5 group-hover:to-cyan-500/5 transition-all duration-700 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Story Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Impact Story"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-3 bg-emerald-500/10 px-6 py-3 rounded-full border border-emerald-500/20 mb-6">
                  <CheckCircle className="text-emerald-400" size={20} />
                  <span className="text-emerald-400 font-medium">
                    Success Story
                  </span>
                </div>
                <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Transforming Lives Through
                  <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent block">
                    Education & Care
                  </span>
                </h2>
              </div>

              <p className="text-xl text-gray-300 leading-relaxed">
                Through our comprehensive programs, we've witnessed incredible
                transformations. Children who couldn't read are now top
                performers, women who had no voice are now leading their
                communities, and families struggling with healthcare now have
                access to quality medical support.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "50K+", label: "Lives Impacted" },
                  { number: "200+", label: "Communities" },
                  { number: "95%", label: "Success Rate" },
                  { number: "15", label: "Years of Service" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
                  >
                    <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 text-sm mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <button className="group bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-full hover:from-emerald-600 hover:to-teal-600 transition-all transform hover:scale-105 shadow-xl hover:shadow-emerald-500/25 font-medium flex items-center gap-3">
                Read Success Stories
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-700">
                <img
                  src="https://images.unsplash.com/photo-1711628372284-f565cdb56cee?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Success Story"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 to-transparent"></div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all transform hover:scale-110 group">
                    <Play
                      className="text-white ml-1 group-hover:scale-110 transition-transform"
                      size={32}
                    />
                  </button>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Impact Cards Enhanced */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Empowered India
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                platform: "Facebook",
                icon: Facebook,
                hashtag: "#EmpowerWomen #StrongLady",
                image:
                  "https://images.unsplash.com/photo-1592910971422-fd1517e191f1?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                color: "from-blue-500 to-blue-600",
                engagement: "15K Likes",
              },
              {
                platform: "Instagram",
                icon: Instagram,
                hashtag: "#ChildEducation #LearnWithFun",
                image:
                  "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                color: "from-pink-500 to-purple-600",
                engagement: "25K Views",
              },
              {
                platform: "YouTube",
                icon: Youtube,
                hashtag: "#HealthCare #Wellness",
                image:
                  "https://images.unsplash.com/photo-1709802247879-3d4241a05dc4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                color: "from-red-500 to-red-600",
                engagement: "50K Subscribers",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-emerald-500/30 transition-all duration-700 transform hover:-translate-y-4 hover:shadow-2xl hover:shadow-emerald-500/10"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${card.color} rounded-2xl flex items-center justify-center shadow-xl`}
                      >
                        <card.icon className="text-white" size={20} />
                      </div>
                      <div>
                        <span className="font-bold text-white">
                          Hope Foundation
                        </span>
                        <div className="text-emerald-400 text-sm">
                          {card.engagement}
                        </div>
                      </div>
                    </div>
                    <div
                      className={`w-8 h-8 bg-gradient-to-r ${card.color} rounded-xl flex items-center justify-center opacity-60`}
                    >
                      <card.icon className="text-white" size={16} />
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed">
                    Transforming communities through dedicated service and
                    sustainable programs that create lasting positive impact.
                  </p>

                  <div className="relative rounded-2xl overflow-hidden mb-6 group-hover:scale-105 transition-transform duration-500">
                    <img
                      src={card.image}
                      alt={card.hashtag}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                    ></div>
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-emerald-400 font-medium">
                      {card.hashtag}
                    </p>
                    <button className="text-white hover:text-emerald-400 transition-colors">
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Enhanced */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Mission Vision"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/90"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              <div className="group bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 backdrop-blur-xl border border-emerald-500/20 rounded-3xl p-8 hover:border-emerald-400/40 transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-xl">
                    <Target className="text-white" size={32} />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Our Mission</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  To empower communities through sustainable programs in
                  education, healthcare, and women empowerment, creating lasting
                  positive change for future generations.
                </p>
              </div>

              <div className="group bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8 hover:border-cyan-400/40 transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl">
                    <Eye className="text-white" size={32} />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Our Vision</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  A world where every individual has access to quality
                  education, healthcare, and opportunities for growth,
                  regardless of their background or circumstances.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="text-center">
                <div className="inline-flex items-center gap-3 bg-emerald-500/10 px-6 py-3 rounded-full border border-emerald-500/20 mb-6">
                  <Award className="text-emerald-400" size={20} />
                  <span className="text-emerald-400 font-medium">
                    Our Values
                  </span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
                  Core
                  <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    {" "}
                    Values
                  </span>
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    icon: Heart,
                    title: "Compassion",
                    desc: "Every action driven by empathy",
                  },
                  {
                    icon: CheckCircle,
                    title: "Integrity",
                    desc: "Transparent and ethical practices",
                  },
                  {
                    icon: Users,
                    title: "Community",
                    desc: "Building stronger together",
                  },
                  {
                    icon: Star,
                    title: "Excellence",
                    desc: "Quality in every initiative",
                  },
                ].map((value, index) => (
                  <div
                    key={index}
                    className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-emerald-500/30 transition-all duration-500 text-center hover:scale-105"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-emerald-500/25 transition-all">
                      <value.icon className="text-white" size={20} />
                    </div>
                    <h4 className="font-bold text-white mb-2">{value.title}</h4>
                    <p className="text-gray-400 text-sm">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Enhanced */}
      <section className="py-24 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0iIzEwZGM2MCIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KPC9zdmc+')] opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center space-y-12">
            <div>
              <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full border border-white/20 mb-8">
                <Heart className="text-emerald-400" size={20} />
                <span className="text-emerald-400 font-medium">
                  Join Our Mission
                </span>
              </div>

              <h2 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                Be The Change You
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent block">
                  Want To See
                </span>
              </h2>

              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
                Your support can transform lives, communities, and create a
                ripple effect of positive change that lasts for generations.
                Join thousands of changemakers who are making a difference
                today.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/donate"
                className="group bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-12 py-5 rounded-full hover:from-emerald-600 hover:to-teal-600 transition-all transform hover:scale-105 shadow-2xl hover:shadow-emerald-500/25 font-bold text-lg flex items-center gap-4"
              >
                <Heart
                  size={24}
                  className="group-hover:scale-110 transition-transform"
                />
                Donate Now
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>

              <Link
                to="/joinus"
                className="group bg-white/10 backdrop-blur-sm text-white px-12 py-5 rounded-full hover:bg-white/20 transition-all border border-white/20 hover:border-white/40 font-bold text-lg flex items-center gap-4"
              >
                <Users
                  size={24}
                  className="group-hover:scale-110 transition-transform"
                />
                Become Volunteer
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>

            {/* Impact Numbers */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {[
                { number: "50K+", label: "Lives Impacted", icon: Users },
                { number: "200+", label: "Communities", icon: Globe },
                { number: "95%", label: "Success Rate", icon: CheckCircle },
                { number: "15", label: "Years Experience", icon: Award },
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/10 group-hover:border-emerald-500/30 transition-all duration-500">
                    <stat.icon
                      className="text-emerald-400 group-hover:scale-110 transition-transform"
                      size={32}
                    />
                  </div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NGOWebsite;
