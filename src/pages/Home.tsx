import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, Star } from 'lucide-react';
import TypewriterEffect from '../components/TypewriterEffect';
import SparklesDemo from '../components/SparklesDemo';
import AnimatedTestimonialsDemo from '../components/AnimatedTestimonialsDemo';

const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-slate-900" />

        {/* Main Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-lime-400 to-purple-500 p-1">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <span className="text-2xl">🎬</span>
              </div>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-6xl font-light text-white mb-6 leading-tight"
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

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-6"
          >
            <h2 className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-3">
              Hello, I'm <span className="text-lime-400 font-semibold">Aditya Soni</span>
            </h2>
            <div className="text-base sm:text-lg text-purple-400 font-medium">
              Video Editor • VFX Artist • Director
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base sm:text-lg text-slate-300 mb-8 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Passionate Video Editor and VFX Artist crafting cinematic experiences. 
            Currently pursuing BSc in VFX and Animation from AAFT, bringing stories to life 
            through cutting-edge visual effects and post-production.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/portfolio"
                className="bg-lime-400 text-slate-900 px-8 py-3 rounded-full text-lg font-medium hover:bg-lime-300 transition-colors flex items-center space-x-2 min-w-[180px] justify-center"
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
                className="border border-slate-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-slate-800 transition-colors min-w-[180px] text-center block"
              >
                Hire Me
              </Link>
            </motion.div>
          </motion.div>

          {/* Footer Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-col items-center justify-center space-y-3 text-slate-400 text-sm"
          >
            <div className="flex items-center space-x-2">
              <Star className="text-lime-400" size={18} />
              <span>Professional VFX Artist</span>
            </div>
            <div className="w-16 h-px bg-slate-600" />
            <div>Based in Uttar Pradesh, India</div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-5 h-8 border-2 border-slate-600 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-slate-400 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Sparkles Section */}
      <section className="py-0 bg-slate-900">
        <SparklesDemo />
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-800">
        <AnimatedTestimonialsDemo />
      </section>

    </div>
  );
};

export default Home;