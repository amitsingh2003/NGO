import React, { useState } from 'react';
import { Heart, Users, BookOpen, Home, QrCode, CreditCard, Smartphone, Shield, ChevronLeft, ChevronRight } from 'lucide-react';

const DonationSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const impactStories = [
    {
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      title: "Life-saving medical care",
      description: "Providing critical healthcare to underserved communities",
      icon: Heart
    },
    {
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      title: "Education for all children",
      description: "Building schools and providing quality education",
      icon: BookOpen
    },
    {
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      title: "Clean water access",
      description: "Installing water systems in remote villages",
      icon: Users
    },
    {
      image: "https://images.unsplash.com/photo-1594736797933-d0d7dc8c90d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      title: "Housing rehabilitation",
      description: "Rebuilding homes for families in need",
      icon: Home
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      review: "Supporting SCS Globals has been incredibly fulfilling. Knowing that my contributions directly impact children's education gives me immense joy. The transparency and regular updates make me confident in my donations.",
      location: "Teacher, New York"
    },
    {
      name: "Michael Chen",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      review: "I've been donating for three years now, and I'm amazed by the transformation I've witnessed. The healthcare programs have saved countless lives. This organization truly lives up to its mission of transforming lives.",
      location: "Engineer, California"
    },
    {
      name: "Priya Sharma",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80",
      review: "As someone who grew up in a similar environment, I understand the importance of education and healthcare. SCS Globals' work in rural communities is exceptional. Every rupee donated makes a real difference.",
      location: "Doctor, Mumbai"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-900 min-h-screen ">
      {/* Hero Donation Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-emerald-900/40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Donate To
              <span className="block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Transform Lives
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Your generosity creates ripples of change that transform entire communities. 
              Every contribution, no matter the size, builds hope and creates lasting impact.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Donation Methods */}
            <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-8 border border-emerald-500/20 shadow-2xl">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">
                <QrCode className="inline-block mr-3 text-emerald-400" size={32} />
                Scan to Donate
              </h3>
              <p className="text-emerald-400 text-center mb-8 font-medium">Easy and Secure</p>
              
              <div className="flex justify-center mb-8">
                <div className="bg-white p-6 rounded-2xl shadow-xl">
                  <div className="w-48 h-48 bg-gray-900 rounded-xl flex items-center justify-center">
                    <QrCode size={120} className="text-emerald-500" />
                  </div>
                </div>
              </div>

              <div className="flex justify-center space-x-6 mb-8">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <span className="text-white text-xs font-bold">Paytm</span>
                </div>
                <div className="bg-white p-2 rounded-lg">
                  <span className="text-blue-600 text-xs font-bold">GPay</span>
                </div>
                <div className="bg-purple-600 p-2 rounded-lg">
                  <span className="text-white text-xs font-bold">PhonePe</span>
                </div>
                <div className="bg-orange-500 p-2 rounded-lg">
                  <span className="text-white text-xs font-bold">Amazon Pay</span>
                </div>
              </div>

              <div className="flex justify-center space-x-4">
                <button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-3 rounded-full hover:from-emerald-600 hover:to-teal-600 transition-all transform hover:scale-105 shadow-xl font-medium flex items-center">
                  <CreditCard className="mr-2" size={20} />
                  Card Payment
                </button>
                <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-105 shadow-xl font-medium flex items-center">
                  <Smartphone className="mr-2" size={20} />
                  UPI
                </button>
              </div>

              <div className="mt-6 text-center">
                <div className="flex items-center justify-center text-emerald-400 mb-2">
                  <Shield size={16} className="mr-2" />
                  <span className="text-sm">Secure & Trusted</span>
                </div>
                <p className="text-xs text-gray-400">All transactions are encrypted and secure</p>
              </div>
            </div>

            {/* Quick Donation Amounts */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white mb-8">Choose Your Impact</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { amount: "₹500", impact: "Feeds 10 children for a day" },
                  { amount: "₹1,500", impact: "Provides medical care for 1 family" },
                  { amount: "₹3,000", impact: "Funds 1 month of education" },
                  { amount: "₹5,000", impact: "Builds 1 water filtration system" }
                ].map((item, index) => (
                  <div key={index} className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-lg rounded-2xl p-6 border border-emerald-500/30 hover:border-emerald-400/50 transition-all transform hover:scale-105 cursor-pointer group">
                    <div className="text-3xl font-bold text-emerald-400 mb-2 group-hover:text-emerald-300 transition-colors">
                      {item.amount}
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">{item.impact}</p>
                  </div>
                ))}
              </div>
              
              <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-2xl p-6 border border-emerald-500/20">
                <h4 className="text-xl font-semibold text-white mb-4">Custom Amount</h4>
                <div className="flex">
                  <input 
                    type="number" 
                    placeholder="Enter amount"
                    className="flex-1 bg-black/50 text-white px-4 py-3 rounded-l-full border border-emerald-500/30 focus:border-emerald-400 outline-none"
                  />
                  <button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-3 rounded-r-full hover:from-emerald-600 hover:to-teal-600 transition-all font-medium">
                    Donate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stories Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How Your Support
              <span className="block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Changes Lives
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every donation creates a ripple effect of positive change in communities worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStories.map((story, index) => {
              const IconComponent = story.icon;
              return (
                <div key={index} className="group relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <div className="aspect-[4/5] relative">
                    <img 
                      src={story.image} 
                      alt={story.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-emerald-900/90 transition-all duration-300"></div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center mb-3">
                        <div className="bg-emerald-500 p-3 rounded-full mr-4 group-hover:bg-emerald-400 transition-colors">
                          <IconComponent size={24} className="text-white" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
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

      {/* Donor Testimonials Section */}
      <section className="py-20 relative">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-emerald-900/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our
              <span className="block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Donors Say
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stories from the hearts of those who believe in our mission
            </p>
          </div>

          <div className="relative">
            <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-8 border border-emerald-500/20 shadow-2xl max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <button 
                  onClick={prevTestimonial}
                  className="bg-emerald-500/20 p-3 rounded-full hover:bg-emerald-500/30 transition-all transform hover:scale-110"
                >
                  <ChevronLeft className="text-emerald-400" size={24} />
                </button>
                
                <div className="flex-1 mx-8">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-emerald-500 shadow-xl">
                      <img 
                        src={testimonials[currentTestimonial].image} 
                        alt={testimonials[currentTestimonial].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {testimonials[currentTestimonial].name}
                    </h3>
                    <p className="text-emerald-400 mb-6 font-medium">
                      {testimonials[currentTestimonial].location}
                    </p>
                    <blockquote className="text-gray-300 text-lg leading-relaxed italic">
                      "{testimonials[currentTestimonial].review}"
                    </blockquote>
                  </div>
                </div>
                
                <button 
                  onClick={nextTestimonial}
                  className="bg-emerald-500/20 p-3 rounded-full hover:bg-emerald-500/30 transition-all transform hover:scale-110"
                >
                  <ChevronRight className="text-emerald-400" size={24} />
                </button>
              </div>
              
              <div className="flex justify-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentTestimonial ? 'bg-emerald-400' : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-xl rounded-3xl p-12 border border-emerald-500/20">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of compassionate individuals who are transforming lives every day
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-12 py-4 rounded-full hover:from-emerald-600 hover:to-teal-600 transition-all transform hover:scale-105 shadow-xl font-medium text-lg">
                Donate Now
              </button>
              <button className="border-2 border-emerald-500 text-emerald-400 px-12 py-4 rounded-full hover:bg-emerald-500/10 transition-all font-medium text-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DonationSection;