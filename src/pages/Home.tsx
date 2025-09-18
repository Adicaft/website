import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, Award, Users, Star, ArrowRight, Zap, Eye, Clock } from 'lucide-react';
import VideoReel from '../components/VideoReel';
import VideoCarousel from '../components/VideoCarousel';
import SparklesHero from '../components/SparklesHero';
import { AnimatedTestimonials } from '../components/ui/animated-testimonials';

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
      quote: "We have been working with Aditya for the last 6 months and he is incredibly talented! They brought my vision to life with their expert editing skills. Their attention to detail, creativity, and professionalism made the entire process seamless. I'm beyond thrilled with the final result, it's truly stunning. I highly recommend Aditya to anyone looking for top-notch video editing services! Thank you",
      name: "Mr. Tushar", 
      designation: "Business Owner",
      src: "/Tushar.png",
    },
    {
      quote: "Aditya's creative vision and technical expertise transformed our brand videos completely. His understanding of our audience and ability to create engaging content has significantly boosted our social media presence. The quality of work and timely delivery exceeded our expectations!",
      name: "Blossom Coelho",
      designation: "Content Creator & Influencer", 
      src: "/priya-sharma.jpg",
    },
    {
      quote: "Working with Aditya has been a game-changer for our marketing campaigns. His innovative approach to video editing and VFX has helped us create content that truly stands out. Professional, reliable, and incredibly talented!",
      name: "360 Thinkers Team",
      designation: "Digital Marketing Agency",
      src: "/360-thinkers.jpg",
    },
    {
      quote: "Aditya brought our comedy content to life with his amazing editing skills! His understanding of timing, transitions, and visual effects made our videos go viral. Highly recommend for any creative project!",
      name: "Desi Joke Jar",
      designation: "Entertainment Channel",
      src: "/desi-joke-jar.jpg",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <SparklesHero />

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
                className="text-center bg-slate-800/50 border border-slate-700/50 rounded-2xl p-4 lg:p-6"
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
        <div className="w-full">
          {/* Client Communication Box */}
          <div className="bg-gradient-to-r from-lime-400/10 to-emerald-400/10 border border-lime-400/30 rounded-2xl p-4 mb-12 max-w-4xl mx-auto px-4 lg:px-6">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-lime-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-slate-900 font-bold text-sm">🎬</span>
              </div>
              <div>
                <h4 className="text-lime-400 font-semibold mb-2">Behind the Scenes</h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  "Each video you see here represents hours of meticulous work—from initial concept to final render. 
                  I believe in showing you the process, not just the result. Transparency builds trust, and trust 
                  creates lasting partnerships."
                </p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 lg:mb-16 px-4 lg:px-6"
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
            className="text-center mt-12 px-4 lg:px-6"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/portfolio"
                className="bg-lime-400 text-slate-900 px-8 lg:px-10 py-4 lg:py-5 rounded-full text-base lg:text-lg font-medium hover:bg-lime-300 transition-colors inline-flex items-center space-x-3"
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
          {/* Process Insight Box */}
          <div className="bg-gradient-to-r from-purple-400/10 to-pink-400/10 border border-purple-400/30 rounded-2xl p-4 mb-12 max-w-4xl mx-auto">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-purple-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold text-sm">⚡</span>
              </div>
              <div>
                <h4 className="text-purple-400 font-semibold mb-2">My Process</h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  "I start every project with a detailed consultation to understand your vision. Then I create 
                  a custom workflow that ensures quality, meets deadlines, and stays within budget. 
                  Regular updates keep you in the loop throughout the entire process."
                </p>
              </div>
            </div>
          </div>

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
                className="bg-slate-800/50 border border-slate-700/50 rounded-3xl p-6 lg:p-8 text-center hover:bg-slate-800/70 transition-colors duration-200"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl mb-4 lg:mb-6`}
                >
                  <service.icon className="text-white" size={28} />
                </div>
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
                className="bg-slate-700/50 hover:bg-lime-400 hover:text-slate-900 text-white px-8 lg:px-10 py-4 lg:py-5 rounded-full text-base lg:text-lg font-medium transition-all duration-300 inline-flex items-center space-x-3"
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

          <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-20 bg-gradient-to-r from-lime-400/10 to-purple-500/10">
        <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
          <div className="bg-slate-800/50 border border-lime-400/30 rounded-3xl p-6 lg:p-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-4 lg:mb-6">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-base lg:text-xl text-slate-400 mb-6 lg:mb-8">
              Let's bring your vision to life with professional video editing and VFX. 
              Get in touch today to discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="w-full sm:w-auto flex-shrink-0">
                <Link
                  to="/contact"
                  className="bg-lime-400 text-slate-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-lime-300 transition-colors block text-center min-w-[200px] max-w-[280px] mx-auto"
                >
                  Start Your Project
                </Link>
              </div>
              <div className="w-full sm:w-auto flex-shrink-0">
                <Link
                  to="/portfolio"
                  className="border border-slate-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-slate-800 transition-colors block text-center min-w-[200px] max-w-[280px] mx-auto"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;