import React, { useState, useEffect } from "react";
import {
  Calendar,
  User,
  ArrowRight,
  Clock,
  Eye,
  Share2,
  Bookmark,
} from "lucide-react";

const BlogSection = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("blog-section");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const featuredPost = {
    id: "featured",
    title:
      "Transforming Lives Through Technology: Our Digital Education Revolution",
    subtitle: "How we're bridging the digital divide in rural India",
    excerpt:
      "In the heart of rural Maharashtra, where electricity was once a luxury, children now access world-class education through our innovative digital learning centers. This is the story of how technology is rewriting the future for thousands of young minds.",
    author: "Dr. Priya Mehta",
    authorRole: "Director of Education",
    date: "June 28, 2025",
    readTime: "12 min read",
    category: "Innovation",
    views: "15.2K",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    tags: ["Education", "Technology", "Rural Development"],
  };

  const blogPosts = [
    {
      id: 1,
      title: "Sustainable Healthcare: Mobile Clinics Reach the Unreachable",
      excerpt:
        "Our fleet of state-of-the-art mobile clinics brings world-class healthcare to India's most remote communities.",
      author: "Dr. Rajesh Kumar",
      authorRole: "Chief Medical Officer",
      date: "June 25, 2025",
      readTime: "8 min",
      category: "Healthcare",
      views: "8.7K",
      image:
        "https://images.unsplash.com/photo-1600959907703-125ba1374a12?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      gradient: "from-cyan-500/20 to-blue-600/20",
    },
    {
      id: 2,
      title: "Women's Empowerment: From Survivors to Entrepreneurs",
      excerpt:
        "Meet the incredible women who transformed their lives through our comprehensive skill development and microfinance programs.",
      author: "Kavita Sharma",
      authorRole: "Women's Program Lead",
      date: "June 22, 2025",
      readTime: "10 min",
      category: "Empowerment",
      views: "12.1K",
      image:
        "https://images.unsplash.com/photo-1522199899308-2eef382e2158?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      gradient: "from-purple-500/20 to-pink-600/20",
    },
    {
      id: 3,
      title: "Clean Water Revolution: Engineering Hope",
      excerpt:
        "How our innovative water purification systems are providing safe drinking water to over 100,000 people.",
      author: "Amit Patel",
      authorRole: "Water Systems Engineer",
      date: "June 20, 2025",
      readTime: "6 min",
      category: "Environment",
      views: "9.3K",
      image:
        "https://images.unsplash.com/photo-1559079236-2e64f89c7764?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      gradient: "from-teal-500/20 to-emerald-600/20",
    },
    {
      id: 4,
      title: "Youth Leadership: Shaping Tomorrow's Change-Makers",
      excerpt:
        "Our youth development programs are creating the next generation of social entrepreneurs and community leaders.",
      author: "Sanjay Gupta",
      authorRole: "Youth Development Head",
      date: "June 18, 2025",
      readTime: "7 min",
      category: "Youth",
      views: "11.8K",
      image:
        "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      gradient: "from-orange-500/20 to-yellow-600/20",
    },
  ];

  const categoryStyles = {
    Innovation: "bg-gradient-to-r from-purple-500 to-indigo-600",
    Healthcare: "bg-gradient-to-r from-cyan-500 to-blue-600",
    Empowerment: "bg-gradient-to-r from-purple-500 to-pink-600",
    Environment: "bg-gradient-to-r from-teal-500 to-emerald-600",
    Youth: "bg-gradient-to-r from-orange-500 to-yellow-600",
  };

  return (
    <section
      id="blog-section"
      className="relative min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-black overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-24">
        {/* Premium Header */}
        <div
          className={`text-center pt-20 mb-20 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Latest
            </span>
            <br />
            <span className="text-white">Insights</span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Discover the stories behind our impact. From breakthrough
            innovations to heartwarming success stories, explore how we're
            transforming communities across India.
          </p>
        </div>

        {/* Featured Article */}
        <div
          className={`mb-20 transform transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <article className="relative group">
            <div className="relative h-[70vh] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 to-black shadow-2xl">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Premium Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <div className="max-w-4xl">
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <span
                      className={`px-4 py-2 rounded-full text-sm font-bold text-white ${
                        categoryStyles[featuredPost.category]
                      } shadow-lg`}
                    >
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center gap-6 text-gray-300">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span className="text-sm">{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} />
                        <span className="text-sm">{featuredPost.readTime}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Eye size={16} />
                        <span className="text-sm">{featuredPost.views}</span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                    {featuredPost.title}
                  </h3>

                  <p className="text-xl text-gray-200 mb-8 leading-relaxed font-light">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                        <User size={20} className="text-white" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">
                          {featuredPost.author}
                        </p>
                        <p className="text-gray-300 text-sm">
                          {featuredPost.authorRole}
                        </p>
                      </div>
                    </div>

                    <button className="flex items-center gap-3 bg-white/10 backdrop-blur-xl px-8 py-4 rounded-full text-white hover:bg-white/20 transition-all duration-300 group-hover:scale-105 shadow-xl">
                      <span className="font-semibold">Read Full Story</span>
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className={`group relative transform transition-all duration-700 hover:scale-105 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
              onMouseEnter={() => setActiveCard(post.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="relative h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-black shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Premium Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent"></div>
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${post.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                {/* Floating Elements */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                  <span
                    className={`px-3 py-1 text-xs font-bold text-white ${
                      categoryStyles[post.category]
                    } rounded-full shadow-lg`}
                  >
                    {post.category}
                  </span>
                  <div className="flex gap-2">
                    <button className="w-8 h-8 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all">
                      <Bookmark size={14} />
                    </button>
                    <button className="w-8 h-8 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all">
                      <Share2 size={14} />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-4 text-gray-300 text-sm mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye size={14} />
                      <span>{post.views}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-emerald-400 transition-colors duration-300">
                    {post.title}
                  </h3>

                  <p className="text-gray-300 mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                        <User size={14} className="text-white" />
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm">
                          {post.author}
                        </p>
                        <p className="text-gray-400 text-xs">
                          {post.authorRole}
                        </p>
                      </div>
                    </div>

                    <button className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors">
                      <span className="text-sm font-medium">Read</span>
                      <ArrowRight
                        size={16}
                        className={`transition-transform duration-300 ${
                          activeCard === post.id ? "translate-x-1" : ""
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Premium CTA */}
        <div
          className={`text-center mt-20 transform transition-all duration-1000 delay-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <button className="relative group bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white px-12 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 overflow-hidden">
            <span className="relative z-10">Explore All Stories</span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
