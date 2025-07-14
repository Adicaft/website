import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Play, Star } from "lucide-react";
import { SparklesCore } from "@/components/ui/sparkles";
import TypewriterEffect from "./TypewriterEffect";

const SparklesHero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Sparkles Background */}
      <div className="absolute inset-0">
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={800}
          className="w-full h-full"
          particleColor="#e4ff00"
        />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0">
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-lime-400/20 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-lime-400/40 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent h-px w-1/4" />
      </div>

      {/* Radial Gradient to prevent sharp edges */}
      <div className="absolute inset-0 w-full h-full bg-slate-900 [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>

      {/* Floating Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="absolute top-24 sm:top-20 lg:top-32 right-4 sm:right-6 lg:right-12 bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-3 sm:p-4 lg:p-5 text-center min-w-[100px] sm:min-w-[120px] lg:min-w-[140px] z-10"
      >
        <div className="flex items-center justify-center mb-2 lg:mb-3">
          <Star className="text-lime-400 mr-1 lg:mr-2" size={12} />
          <span className="text-lime-400 font-bold text-xs lg:text-sm">VFX</span>
        </div>
        <div className="text-white font-semibold text-sm lg:text-base">Expert</div>
        <div className="text-slate-400 text-xs lg:text-sm">Since 2024</div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="absolute top-40 sm:top-36 lg:top-48 left-4 sm:left-6 lg:left-12 bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-3 sm:p-4 lg:p-5 text-center min-w-[100px] sm:min-w-[120px] lg:min-w-[140px] z-10"
      >
        <div className="flex items-center justify-center mb-2 lg:mb-3">
          <Play className="text-purple-400 mr-1 lg:mr-2" size={12} />
          <span className="text-purple-400 font-bold text-xs lg:text-sm">50+</span>
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
          className="mb-4 lg:mb-8"
        >
          <div className="w-16 h-16 lg:w-32 lg:h-32 mx-auto mb-3 lg:mb-6 rounded-full bg-gradient-to-br from-lime-400 to-purple-500 p-1">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
              <span className="text-lg lg:text-4xl">🎬</span>
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl sm:text-3xl md:text-5xl lg:text-8xl font-light text-white mb-4 lg:mb-8 leading-tight px-2"
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
          className="mb-4 lg:mb-8 px-2"
        >
          <h2 className="text-base sm:text-lg md:text-2xl lg:text-4xl text-slate-300 mb-2 lg:mb-4">
            Hello, I'm <span className="text-lime-400 font-semibold">Aditya Soni</span>
          </h2>
          <div className="text-sm sm:text-base md:text-lg lg:text-xl text-purple-400 font-medium">
            Video Editor • VFX Artist • Director
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center justify-center gap-6 mb-8 lg:mb-16 px-4"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto"
          >
            <Link
              to="/portfolio"
              className="bg-lime-400 text-slate-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-lime-300 transition-colors flex items-center space-x-2 w-full justify-center min-w-[200px]"
            >
              <Play size={18} />
              <span>View My Work</span>
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto"
          >
            <Link
              to="/contact"
              className="border border-slate-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-slate-800 transition-colors w-full text-center min-w-[200px]"
            >
              Hire Me
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col items-center justify-center space-y-3 text-slate-400 text-sm lg:text-base"
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
        className="absolute bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-5 h-8 lg:w-6 lg:h-10 border-2 border-slate-600 rounded-full flex justify-center">
          <div className="w-1 h-2 lg:h-3 bg-slate-400 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default SparklesHero;