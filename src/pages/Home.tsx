import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, Award, Users, Star, ArrowRight, Zap, Eye, Clock, CheckCircle } from 'lucide-react';
import VideoReel from '../components/VideoReel';
import VideoCarousel from '../components/VideoCarousel';
import TypewriterEffect from '../components/TypewriterEffect';

const Home = () => {
  const stats = [
    { icon: Users, label: 'Happy Clients', value: '25+', color: 'text-blue-400' },
    { icon: Play, label: 'Projects Completed', value: '50+', color: 'text-purple-400' },
    { icon: Clock, label: 'Hours of Content', value: '200+', color: 'text-green-400' },
    { icon: Award, label: 'Years Experience', value: '1+', color: 'text-orange-400' }
  ];

  const services = [
    {
      icon: Play,
      title: 'Video Editing',
      description: 'Professional cinematic editing with seamless transitions',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Zap,
      title: 'Visual Effects',
      description: 'Stunning VFX and compositing work',
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: Eye,
      title: 'Motion Graphics',
      description: 'Dynamic animations and title sequences',
      color: 'from-pink-400 to-pink-600'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Content Creator',
      text: 'Aditya transformed my raw footage into a cinematic masterpiece. His attention to detail is incredible!',
      avatar: '👩‍💼'
    },
    {
      name: 'Mike Chen',
      role: 'Brand Manager',
      text: 'The VFX work exceeded our expectations. Professional, creative, and delivered on time.',
      avatar: '👨‍💻'
    },
    {
      name: 'Lisa Rodriguez',
      role: 'YouTuber',
      text: 'Working with Aditya has elevated my content quality significantly. Highly recommended!',
      avatar: '👩‍🎨'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-purple-900">
          <motion.div
            animate={{
              background: [
                "radial-gradient(circle at 20% 50%, rgba(225, 252, 2, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 40% 80%, rgba(225, 252, 2, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 50%, rgba(225, 252, 2, 0.1) 0%, transparent 50%)"
              ]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          />
        </div>

        {/* Floating Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="absolute top-24 lg:top-32 right-4 lg:right-8 bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-3 lg:p-4 text-center"
        >
          <div className="flex items-center justify-center mb-2">
            <Award className="text-lime-400 mr-2" size={16} />
            <span className="text-lime-400 font-bold text-sm">VFX</span>
          </div>
          <div className="text-white font-semibold text-sm lg:text-lg">Expert</div>
          <div className="text-slate-400 text-xs lg:text-sm">Since 2024</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="absolute top-40 lg:top-48 left-4 lg:left-8 bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-3 lg:p-4 text-center"
        >
          <div className="flex items-center justify-center mb-2">
            <Users className="text-purple-400 mr-2" size={16} />
            <span className="text-purple-400 font-bold text-sm">50+</span>
          </div>
          <div className="text-white font-semibold text-sm lg:text-base">Projects</div>
          <div className="text-slate-400 text-xs lg:text-sm">Completed</div>
        </motion.div>

        {/* Main Content */}
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6 lg:mb-8"
          >
            <div className="w-20 h-20 lg:w-32 lg:h-32 mx-auto mb-4 lg:mb-6 rounded-full bg-gradient-to-br from-lime-400 to-purple-500 p-1">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <span className="text-xl lg:text-4xl">🎬</span>
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-light text-white mb-6 lg:mb-8 leading-tight"
          >
            I Am{' '}
            <TypewriterEffect
              words={['VFX Artist', 'Video Editor', 'Director', 'Creator', 'Motion Designer', 'Compositor', 'Storyteller']}
              className="text-lime-400 font-medium"
              typeSpeed={150}
              deleteSpeed={100}
              delayBetweenWords={2000}
            />
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-6 lg:mb-8"
          >
            <h2 className="text-lg sm:text-xl md:text-3xl lg:text-4xl text-slate-300 mb-3 lg:mb-4">
              Hello, I'm <span className="text-lime-400 font-semibold">Aditya Soni</span>
            </h2>
            <div className="text-base sm:text-lg md:text-xl text-purple-400 font-medium">
              Video Editor • VFX Artist • Director
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 mb-8 lg:mb-12 max-w-4xl mx-auto font-light leading-relaxed px-2"
          >
            Passionate Video Editor and VFX Artist crafting cinematic experiences. 
            Currently pursuing BSc in VFX and Animation from AAFT, bringing stories to life 
            through cutting-edge visual effects and post-production.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 lg:gap-4 mb-8 lg:mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/portfolio"
                className="bg-lime-400 text-slate-900 px-6 lg:px-8 py-3 lg:py-4 rounded-full text-base lg:text-lg font-medium hover:bg-lime-300 transition-colors flex items-center space-x-2 w-full sm:w-auto justify-center"
              >
                <Play size={18} />
                <span>View My Work</span>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="border border-slate-600 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full text-base lg:text-lg font-medium hover:bg-slate-800 transition-colors w-full sm:w-auto text-center"
              >
                Hire Me
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6 lg:space-x-8 text-slate-400 text-sm lg:text-base"
          >
            <div className="flex items-center space-x-2">
              <Star className="text-lime-400" size={18} />
              <span>Professional VFX Artist</span>
            </div>
            <div className="w-px h-4 bg-slate-600 hidden sm:block" />
            <div>Based in Uttar Pradesh, India</div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-5 h-8 lg:w-6 lg:h-10 border-2 border-slate-600 rounded-full flex justify-center">
            <div className="w-1 h-2 lg:h-3 bg-slate-400 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-12 lg:py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-4 lg:p-6"
              >
                <stat.icon className={`${stat.color} mx-auto mb-3`} size={32} />
                <div className="text-2xl lg:text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-sm lg:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Carousel Section */}
      <section className="py-12 lg:py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4 lg:mb-6">
              Featured{' '}
              <span className="text-lime-400 font-medium">Work</span>
            </h2>
            <p className="text-base lg:text-xl text-slate-400 max-w-3xl mx-auto">
              A showcase of my latest cinematic videos and visual effects projects
            </p>
          </motion.div>

          <VideoCarousel />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/portfolio"
                className="bg-lime-400 text-slate-900 px-6 lg:px-8 py-3 lg:py-4 rounded-full text-base lg:text-lg font-medium hover:bg-lime-300 transition-colors inline-flex items-center space-x-2"
              >
                <span>View All Projects</span>
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-12 lg:py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4 lg:mb-6">
              What I{' '}
              <span className="text-lime-400 font-medium">Offer</span>
            </h2>
            <p className="text-base lg:text-xl text-slate-400 max-w-3xl mx-auto">
              Professional post-production services to bring your vision to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 lg:p-8 text-center hover:bg-slate-800/70 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl mb-4 lg:mb-6`}
                >
                  <service.icon className="text-white" size={28} />
                </motion.div>
                <h3 className="text-xl lg:text-2xl font-semibold text-white mb-3 lg:mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/services"
                className="bg-slate-700/50 hover:bg-lime-400 hover:text-slate-900 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full text-base lg:text-lg font-medium transition-all duration-300 inline-flex items-center space-x-2"
              >
                <span>View All Services</span>
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 lg:py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4 lg:mb-6">
              Client{' '}
              <span className="text-lime-400 font-medium">Reviews</span>
            </h2>
            <p className="text-base lg:text-xl text-slate-400 max-w-3xl mx-auto">
              What my clients say about working with me
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 lg:p-8"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-lime-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">{testimonial.avatar}</div>
                  <div>
                    <div className="text-white font-semibold">
                      {testimonial.name}
                    </div>
                    <div className="text-slate-400 text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-20 bg-gradient-to-r from-lime-400/10 to-purple-500/10">
        <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-slate-800/50 backdrop-blur-xl border border-lime-400/30 rounded-3xl p-6 lg:p-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-4 lg:mb-6">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-base lg:text-xl text-slate-400 mb-6 lg:mb-8">
              Let's bring your vision to life with professional video editing and VFX. 
              Get in touch today to discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="bg-lime-400 text-slate-900 px-6 lg:px-8 py-3 lg:py-4 rounded-full text-base lg:text-lg font-medium hover:bg-lime-300 transition-colors w-full sm:w-auto text-center"
                >
                  Start Your Project
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/portfolio"
                  className="border border-slate-600 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full text-base lg:text-lg font-medium hover:bg-slate-800 transition-colors w-full sm:w-auto text-center"
                >
                  View Portfolio
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;