import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Play, Award, Zap } from "lucide-react";
import { SparklesCore } from "@/components/ui/sparkles";
import TypewriterEffect from "./TypewriterEffect";

const SparklesHero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Subtle Sparkles Background */}
      <div className="absolute inset-0">
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={0.8}
          particleDensity={400}
          className="w-full h-full"
          particleColor="#e4ff00"
        />
      </div>

      {/* Simple Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-slate-900/30 to-slate-900/70"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8 lg:mb-12"
        >
          <div className="w-24 h-24 lg:w-32 lg:h-32 mx-auto mb-6 lg:mb-8 rounded-full bg-gradient-to-br from-lime-400 to-purple-500 p-1 shadow-2xl">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
              <span className="text-3xl lg:text-5xl">🎬</span>
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8 lg:mb-12 leading-tight"
        >
          I Am{' '}
          <TypewriterEffect
            words={['VFX Artist', 'Video Editor', 'Director', 'Creator']}
            className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-purple-400 font-medium"
            typeSpeed={120}
            deleteSpeed={80}
            delayBetweenWords={2500}
          />
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="mb-12 lg:mb-16"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-slate-300 mb-4 lg:mb-6">
            Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-400 font-semibold">Aditya Soni</span>
          </h2>
          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-medium">
            Video Editor • VFX Artist • Director
          </div>
        </motion.div>

        {/* Clean Button Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 lg:mb-20"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/portfolio"
              className="bg-gradient-to-r from-lime-400 to-emerald-400 text-slate-900 px-10 py-4 rounded-full text-lg font-semibold hover:from-lime-300 hover:to-emerald-300 transition-all duration-300 flex items-center space-x-3 shadow-xl"
            >
              <Play size={20} />
              <span>View My Work</span>
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contact"
              className="border-2 border-slate-600 bg-slate-800/50 backdrop-blur-xl text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-slate-700/50 hover:border-lime-400 transition-all duration-300 shadow-xl"
            >
              Hire Me
            </Link>
          </motion.div>
        </motion.div>

        {/* Simple Status */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col items-center justify-center space-y-4 text-slate-400 text-sm lg:text-base"
        >
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span>Available for Projects</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="text-lime-400" size={16} />
              <span>Professional VFX Artist</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Zap className="text-purple-400" size={16} />
            <span>Based in Uttar Pradesh, India</span>
          </div>
        </motion.div>
      </div>

      {/* Simple Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-lime-400 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default SparklesHero;