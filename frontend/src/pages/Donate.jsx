import React, { useState, useEffect } from "react";
import {
  Heart,
  Users,
  BookOpen,
  Home,
  QrCode,
  CreditCard,
  Smartphone,
  Shield,
  ChevronLeft,
  ChevronRight,
  Star,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const DonationSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const impactStories = [
    {
      image:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      title: "Life-saving medical care",
      description: "Providing critical healthcare to underserved communities",
      icon: Heart,
      stat: "12,000+ Lives Saved",
    },
    {
      image:
        "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      title: "Education for all children",
      description: "Building schools and providing quality education",
      icon: BookOpen,
      stat: "25,000+ Students Educated",
    },
    {
      image:
        "https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      title: "Clean water access",
      description: "Installing water systems in remote villages",
      icon: Users,
      stat: "500+ Wells Built",
    },
    {
      image:
        "https://images.unsplash.com/photo-1667328914935-3e6dcc8c31cf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Housing rehabilitation",
      description: "Rebuilding homes for families in need",
      icon: Home,
      stat: "3,000+ Homes Rebuilt",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      image:
        "https://images.unsplash.com/photo-1601412436009-d964bd02edbc?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      review:
        "Supporting SCS Globals has been incredibly fulfilling. Knowing that my contributions directly impact children's education gives me immense joy. The transparency and regular updates make me confident in my donations.",
      location: "Teacher, New York",
      rating: 5,
    },
    {
      name: "Michael Chen",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      review:
        "I've been donating for three years now, and I'm amazed by the transformation I've witnessed. The healthcare programs have saved countless lives. This organization truly lives up to its mission of transforming lives.",
      location: "Engineer, California",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80",
      review:
        "As someone who grew up in a similar environment, I understand the importance of education and healthcare. SCS Globals' work in rural communities is exceptional. Every rupee donated makes a real difference.",
      location: "Doctor, Mumbai",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-900 min-h-screen relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            <Sparkles
              className="text-emerald-400/20"
              size={12 + Math.random() * 8}
            />
          </div>
        ))}
      </div>

      {/* Hero Donation Section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1594708767771-a7502209ff51?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-emerald-900/50">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 pt-40">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex justify-center mb-6">
              <div className="bg-emerald-500/20 p-4 rounded-full backdrop-blur-xl border border-emerald-500/30">
                <Heart className="text-emerald-400 animate-pulse" size={32} />
              </div>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Donate To
              <span className="block bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                Transform Lives
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              Your generosity creates{" "}
              <span className="text-emerald-400 font-medium">
                ripples of change
              </span>{" "}
              that transform entire communities. Every contribution, no matter
              the size, builds hope and creates lasting impact.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Enhanced Donation Methods */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="bg-black/50 backdrop-blur-2xl rounded-3xl p-10 border border-emerald-500/30 shadow-2xl relative overflow-hidden group hover:border-emerald-400/50 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-8">
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-4 rounded-2xl shadow-xl">
                      <QrCode className="text-white" size={32} />
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-4 text-center">
                    Scan to Donate
                  </h3>
                  <p className="text-emerald-400 text-center mb-8 font-medium text-lg">
                    Easy • Secure • Instant
                  </p>

                  <div className="flex justify-center mb-8">
                    <div className="bg-white p-8 rounded-3xl shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
                      <div className="w-52 h-52 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20"></div>
                        <QrCode
                          size={140}
                          className="text-emerald-500 relative z-10"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center space-x-4 mb-8">
                    {[
                      {
                        name: "Paytm",
                        color: "bg-blue-600",
                        textColor: "text-white",
                      },
                      {
                        name: "GPay",
                        color: "bg-white",
                        textColor: "text-blue-600",
                      },
                      {
                        name: "PhonePe",
                        color: "bg-purple-600",
                        textColor: "text-white",
                      },
                      {
                        name: "Amazon Pay",
                        color: "bg-orange-500",
                        textColor: "text-white",
                      },
                    ].map((app, index) => (
                      <div
                        key={index}
                        className={`${app.color} px-4 py-2 rounded-xl shadow-lg transform hover:scale-110 transition-all duration-300 cursor-pointer`}
                      >
                        <span className={`${app.textColor} text-xs font-bold`}>
                          {app.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-2xl hover:from-emerald-600 hover:to-teal-600 transition-all transform hover:scale-105 shadow-xl font-medium flex items-center justify-center group">
                      <CreditCard
                        className="mr-2 group-hover:rotate-12 transition-transform"
                        size={20}
                      />
                      Card Payment
                    </button>
                    <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-2xl hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-105 shadow-xl font-medium flex items-center justify-center group">
                      <Smartphone
                        className="mr-2 group-hover:rotate-12 transition-transform"
                        size={20}
                      />
                      UPI Payment
                    </button>
                  </div>

                  <div className="mt-8 text-center">
                    <div className="flex items-center justify-center text-emerald-400 mb-2">
                      <Shield size={18} className="mr-2" />
                      <span className="text-sm font-medium">
                        256-bit SSL Encrypted
                      </span>
                    </div>
                    <p className="text-xs text-gray-400">
                      Trusted by 50,000+ donors worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Quick Donation Amounts */}
            <div
              className={`space-y-6 transition-all duration-1000 delay-500 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="text-center mb-8">
                <h3 className="text-4xl font-bold text-white mb-4">
                  Choose Your Impact
                </h3>
                <p className="text-gray-300 text-lg">
                  Every amount creates meaningful change
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    amount: "₹500",
                    impact: "Feeds 10 children for a day",
                    color: "from-red-500/20 to-pink-500/20",
                    borderColor: "border-red-500/30",
                  },
                  {
                    amount: "₹1,500",
                    impact: "Provides medical care for 1 family",
                    color: "from-blue-500/20 to-indigo-500/20",
                    borderColor: "border-blue-500/30",
                  },
                  {
                    amount: "₹3,000",
                    impact: "Funds 1 month of education",
                    color: "from-emerald-500/20 to-teal-500/20",
                    borderColor: "border-emerald-500/30",
                  },
                  {
                    amount: "₹5,000",
                    impact: "Builds 1 water filtration system",
                    color: "from-cyan-500/20 to-blue-500/20",
                    borderColor: "border-cyan-500/30",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`bg-gradient-to-br ${item.color} backdrop-blur-xl rounded-2xl p-6 border ${item.borderColor} hover:scale-105 transition-all duration-300 cursor-pointer group relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-3xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                          {item.amount}
                        </div>
                        <ArrowRight
                          className="text-emerald-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1"
                          size={20}
                        />
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {item.impact}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-xl rounded-2xl p-8 border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300">
                <h4 className="text-2xl font-semibold text-white mb-6 text-center">
                  Custom Amount
                </h4>
                <div className="flex">
                  <div className="relative flex-1">
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-emerald-400 font-bold text-xl">
                      ₹
                    </span>
                    <input
                      type="number"
                      placeholder="Enter amount"
                      className="w-full bg-black/50 text-white pl-10 pr-4 py-4 rounded-l-2xl border border-emerald-500/30 focus:border-emerald-400 outline-none text-lg backdrop-blur-xl"
                    />
                  </div>
                  <button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-10 py-4 rounded-r-2xl hover:from-emerald-600 hover:to-teal-600 transition-all font-medium text-lg transform hover:scale-105 shadow-xl">
                    Donate Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Impact Stories Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <div className="flex justify-center mb-6">
              <div className="bg-emerald-500/20 p-4 rounded-full backdrop-blur-xl border border-emerald-500/30">
                <Sparkles className="text-emerald-400" size={32} />
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              How Your Support
              <span className="block bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Changes Lives
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-light">
              Every donation creates a{" "}
              <span className="text-emerald-400 font-medium">
                ripple effect
              </span>{" "}
              of positive change in communities worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStories.map((story, index) => {
              const IconComponent = story.icon;
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500"
                >
                  <div className="aspect-[4/5] relative">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent group-hover:from-emerald-900/95 transition-all duration-500"></div>

                    {/* Floating Icon */}
                    <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-xl p-3 rounded-full border border-white/30 group-hover:bg-emerald-500/30 transition-all duration-300">
                      <IconComponent size={24} className="text-white" />
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="bg-emerald-500/90 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 inline-block">
                        {story.stat}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                        {story.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {story.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Donor Testimonials Section */}
      <section className="py-24 relative">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://media.istockphoto.com/id/537311780/photo/unity-of-indian-children-asia.webp?a=1&b=1&s=612x612&w=0&k=20&c=Z3vpXyVtDv0xzqOX2FDbdxn4kyIbwpO3xrGakyYPN1k=')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-emerald-900/70">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <div className="flex justify-center mb-6">
              <div className="bg-emerald-500/20 p-4 rounded-full backdrop-blur-xl border border-emerald-500/30">
                <Heart className="text-emerald-400" size={32} />
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              What Our
              <span className="block bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Donors Say
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-light">
              Stories from the{" "}
              <span className="text-emerald-400 font-medium">hearts</span> of
              those who believe in our mission
            </p>
          </div>

          <div className="relative">
            <div className="bg-black/60 backdrop-blur-2xl rounded-3xl p-12 border border-emerald-500/30 shadow-2xl max-w-5xl mx-auto">
              <div className="flex items-center justify-between mb-12">
                <button
                  onClick={prevTestimonial}
                  className="bg-emerald-500/20 p-4 rounded-full hover:bg-emerald-500/30 transition-all transform hover:scale-110 backdrop-blur-xl border border-emerald-500/30"
                >
                  <ChevronLeft className="text-emerald-400" size={28} />
                </button>

                <div className="flex-1 mx-12">
                  <div className="flex items-center justify-center mb-8">
                    <div className="relative">
                      <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-emerald-500 shadow-2xl">
                        <img
                          src={testimonials[currentTestimonial].image}
                          alt={testimonials[currentTestimonial].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -top-2 -right-2 bg-emerald-500 p-2 rounded-full">
                        <Star className="text-white" size={16} />
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonials[currentTestimonial].rating)].map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="text-yellow-400 fill-current"
                            size={24}
                          />
                        )
                      )}
                    </div>

                    <h3 className="text-3xl font-bold text-white mb-2">
                      {testimonials[currentTestimonial].name}
                    </h3>
                    <p className="text-emerald-400 mb-8 font-medium text-lg">
                      {testimonials[currentTestimonial].location}
                    </p>
                    <blockquote className="text-gray-300 text-xl leading-relaxed italic font-light">
                      "{testimonials[currentTestimonial].review}"
                    </blockquote>
                  </div>
                </div>

                <button
                  onClick={nextTestimonial}
                  className="bg-emerald-500/20 p-4 rounded-full hover:bg-emerald-500/30 transition-all transform hover:scale-110 backdrop-blur-xl border border-emerald-500/30"
                >
                  <ChevronRight className="text-emerald-400" size={28} />
                </button>
              </div>

              <div className="flex justify-center space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? "bg-emerald-400 scale-125"
                        : "bg-gray-600 hover:bg-gray-500"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(180deg);
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 300% 300%;
          animation: gradient 4s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default DonationSection;
