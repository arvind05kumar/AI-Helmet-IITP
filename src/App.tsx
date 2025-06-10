import React, { useState, useEffect, useRef } from 'react';
import { 
  Shield, 
  Brain, 
  Cpu, 
  Eye, 
  Zap, 
  CheckCircle, 
  Star, 
  ArrowRight,
  Phone,
  Mail,
  Menu,
  X,
  Wifi,
  Battery,
  Signal,
  AlertTriangle,
  Users,
  TrendingUp,
  Award,
  Clock,
  Target
} from 'lucide-react';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simple scroll calculations
  const scrollProgress = Math.min(scrollY / (window.innerHeight * 0.8), 1);
  const helmetScale = 1 + scrollProgress * 2;
  const helmetOpacity = 1 - scrollProgress * 0.7;
  const contentOpacity = scrollProgress > 0.4 ? (scrollProgress - 0.4) / 0.6 : 0;

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <nav 
        className="fixed top-0 w-full z-50 transition-all duration-300"
        style={{
          backgroundColor: `rgba(15, 23, 42, ${Math.min(scrollY / 100, 0.9)})`,
          backdropFilter: `blur(${Math.min(scrollY / 10, 10)}px)`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold text-white">AI Helmet</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['Features', 'Safety', 'Reviews'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
              <button className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-6 py-2 rounded-full transition-all duration-200">
                Get Started
              </button>
            </div>

            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-64' : 'max-h-0'
        }`}>
          <div className="px-4 pt-2 pb-3 space-y-1 bg-slate-900/95">
            {['Features', 'Safety', 'Pricing', 'Reviews'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="block px-3 py-2 text-white/80 hover:text-white transition-colors duration-200"
              >
                {item}
              </a>
            ))}
            <button className="w-full mt-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-2 rounded-full">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Hero Content */}
        <div 
          className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
            opacity: 1 - scrollProgress * 0.3
          }}
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block">AI-Powered</span>
            <span className="block bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Smart Helmet
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Revolutionary safety technology that protects, monitors, and assists workers in real-time with advanced AI capabilities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2">
              Discover Innovation
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-white/10">
              Watch Demo
            </button>
          </div>
        </div>

        {/*  Helmet Visualization */}
         {/* 3D Helmet Visualization */}
        <div 
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{
            transform: `scale(${helmetScale})`,
            opacity: helmetOpacity,
          }}
        >
          <img
            src="src\assets\helmet3.png" // If in public folder. If in src/assets, use: {require('./assets/helmet.png')}
            alt="AI Helmet"
            className="w-70 h-70 sm:w-96 sm:h-96 object-contain drop-shadow-2xl"
            draggable={false}
          />
        </div>

        {/* Scroll Indicator */}
        {/* <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
          style={{ opacity: 1 - scrollProgress * 2 }}
        >
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
            </div>
          </div>
        </div> */}
      </section> 

      {/* Content inside helmet view */}
      <div 
        className="relative min-h-screen bg-white transition-opacity duration-1000"
        style={{ opacity: contentOpacity }}
      >
        {/* Features Section */}
        <section id="features" className="py-20 bg-gradient-to-b from-white to-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
                Revolutionary Features
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Our AI-powered smart helmet combines cutting-edge technology with industrial-grade safety to create the ultimate protection system.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="h-12 w-12 text-blue-600" />,
                  title: "AI-Powered Intelligence",
                  description: "Advanced machine learning algorithms analyze your environment in real-time, predicting and preventing potential hazards before they occur."
                },
                {
                  icon: <Eye className="h-12 w-12 text-teal-600" />,
                  title: "360° Vision System",
                  description: "Multiple cameras provide complete situational awareness, with augmented reality overlays showing critical information directly in your field of view."
                },
                {
                  icon: <Cpu className="h-12 w-12 text-blue-600" />,
                  title: "Edge Computing",
                  description: "On-device processing ensures instant response times and maintains privacy while delivering powerful AI capabilities without internet dependency."
                },
                {
                  icon: <Shield className="h-12 w-12 text-teal-600" />,
                  title: "Impact Protection",
                  description: "Advanced materials and smart sensors automatically adjust protection levels based on detected impact forces and environmental conditions."
                },
                {
                  icon: <Zap className="h-12 w-12 text-blue-600" />,
                  title: "Long-lasting Battery",
                  description: "Up to 12 hours of continuous operation with intelligent power management and wireless charging capabilities."
                },
                {
                  icon: <Phone className="h-12 w-12 text-teal-600" />,
                  title: "Emergency Communication",
                  description: "Automatic emergency detection and communication system that alerts supervisors and emergency services when incidents occur."
                }
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className="p-8 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-100"
                >
                  <div className="mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Safety Benefits Section */}
        <section id="safety" className="py-20 bg-gradient-to-br from-blue-900 to-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                  Why Choose Our Smart Helmet?
                </h2>
                <p className="text-xl text-white/80 mb-8 leading-relaxed">
                  Traditional safety equipment only provides passive protection. Our AI-powered smart helmet actively monitors, predicts, and prevents workplace accidents.
                </p>

                <div className="space-y-6">
                  {[
                    { text: "85% reduction in workplace accidents", icon: <TrendingUp className="h-6 w-6" /> },
                    { text: "Real-time hazard detection and alerts", icon: <AlertTriangle className="h-6 w-6" /> },
                    { text: "Comprehensive health monitoring", icon: <Target className="h-6 w-6" /> },
                    { text: "Seamless team communication", icon: <Users className="h-6 w-6" /> },
                    { text: "Compliance tracking and reporting", icon: <Award className="h-6 w-6" /> },
                    { text: "Emergency response automation", icon: <Clock className="h-6 w-6" /> }
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="text-teal-400">
                        {benefit.icon}
                      </div>
                      <span className="text-lg">{benefit.text}</span>
                    </div>
                  ))}
                </div>

                <button className="mt-8 bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
                  Learn More About Safety
                </button>
              </div>

              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-blue-800/50 to-teal-800/50 rounded-3xl p-8 backdrop-blur-sm border border-white/20">
                  <div className="h-full flex flex-col justify-center items-center text-center">
                    <Shield className="h-24 w-24 text-teal-400 mb-6" />
                    <h3 className="text-2xl font-bold mb-4">Industry Leading Safety</h3>
                    <p className="text-white/80 text-lg">
                      Certified by international safety standards and trusted by leading construction companies worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                See how our smart helmet technology is transforming workplace safety across industries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  role: "Safety Director",
                  company: "BuildTech Industries",
                  content: "The AI-powered hazard detection has prevented countless accidents on our construction sites. This technology is truly revolutionary.",
                  rating: 5,
                  avatar: "SJ"
                },
                {
                  name: "Michael Chen",
                  role: "Operations Manager", 
                  company: "Steel Works Corp",
                  content: "Real-time communication and monitoring capabilities have improved our team coordination by 300%. Outstanding product!",
                  rating: 5,
                  avatar: "MC"
                },
                {
                  name: "Emily Rodriguez",
                  role: "Site Supervisor",
                  company: "Metro Construction",
                  content: "The emergency response system saved one of our workers last month. The automatic alert and location tracking was incredible.",
                  rating: 5,
                  avatar: "ER"
                }
              ].map((testimonial, index) => (
                <div 
                  key={index} 
                  className="p-8 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="flex items-center mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-white/90 text-lg mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-white/70">{testimonial.role}</div>
                      <div className="text-teal-400 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready to Transform Your Workplace Safety?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join thousands of companies already using our AI-powered smart helmet to protect their workforce and prevent accidents.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
                Start Free Trial
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                  <Shield className="h-8 w-8 text-blue-400" />
                  <span className="text-2xl font-bold">SmartHelmet AI</span>
                </div>
                <p className="text-white/70 mb-6 max-w-md">
                  Revolutionizing workplace safety with AI-powered smart helmet technology. Protecting workers, preventing accidents, and building a safer future.
                </p>
                <div className="flex items-center space-x-2 text-white/70">
                  <Mail className="h-4 w-4" />
                  <span>contact@smarthelmet.ai</span>
                </div>
              </div>

              {[
                {
                  title: "Product",
                  links: ["Features", "Safety", "Pricing", "Enterprise"]
                },
                {
                  title: "Company", 
                  links: ["About", "Careers", "Press", "Contact"]
                }
              ].map((section) => (
                <div key={section.title}>
                  <h3 className="font-bold mb-4">{section.title}</h3>
                  <ul className="space-y-2 text-white/70">
                    {section.links.map((link) => (
                      <li key={link}>
                        <a href="#" className="hover:text-white transition-colors duration-200">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="border-t border-white/20 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
              <p className="text-white/60">© 2024 SmartHelmet AI. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 sm:mt-0">
                {["Privacy", "Terms", "Security"].map((link) => (
                  <a key={link} href="#" className="text-white/60 hover:text-white transition-colors duration-200">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;