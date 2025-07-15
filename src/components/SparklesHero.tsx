import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Play, Star, Award, Users, Zap } from "lucide-react";
import { SparklesCore } from "@/components/ui/sparkles";
import TypewriterEffect from "./TypewriterEffect";

const SparklesHero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Enhanced Sparkles Background */}
      <div className="absolute inset-0">
        <SparklesCore
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#e4ff00"
        />
      </div>

      {/* Luxury Gradient Overlays */}
      <div className="absolute inset-0">
        {/* Top gradient lines */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-lime-400/30 to-transparent h-[3px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-lime-400/60 to-transparent h-[1px] w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-purple-500/40 to-transparent h-[6px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-purple-500/70 to-transparent h-[1px] w-1/4" />
        
        {/* Side accent lines */}
        <div className="absolute left-0 top-1/4 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent w-[2px] h-1/2 blur-sm" />
        <div className="absolute right-0 top-1/3 bg-gradient-to-b from-transparent via-pink-400/20 to-transparent w-[2px] h-1/3 blur-sm" />
      </div>

      {/* Luxury Radial Gradient */}
      <div className="absolute inset-0 w-full h-full bg-gradient-radial from-transparent via-slate-900/50 to-slate-900 [mask-image:radial-gradient(400px_300px_at_center,transparent_20%,white)]"></div>

      {/* Professional Floating Stats - Better Aligned */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
        className="absolute top-20 sm:top-24 lg:top-32 right-4 sm:right-8 lg:right-16 z-10"
      >
        <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-2xl border border-lime-400/20 rounded-3xl p-4 lg:p-6 text-center min-w-[140px] lg:min-w-[160px] shadow-2xl">
          <div className="flex items-center justify-center mb-3 lg:mb-4">
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-lime-400 to-emerald-500 rounded-full flex items-center justify-center mr-2 lg:mr-3">
              <Star className="text-slate-900" size={16} />
            </div>
            <span className="text-lime-400 font-bold text-sm lg:text-base">VFX</span>
          </div>
          <div className="text-white font-semibold text-base lg:text-lg mb-1">Expert</div>
          <div className="text-slate-400 text-sm lg:text-base">Since 2024</div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-lime-400 rounded-full animate-pulse"></div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1.3, duration: 0.6, ease: "easeOut" }}
        className="absolute top-44 sm:top-48 lg:top-56 left-4 sm:left-8 lg:left-16 z-10"
      >
        <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-2xl border border-purple-400/20 rounded-3xl p-4 lg:p-6 text-center min-w-[140px] lg:min-w-[160px] shadow-2xl">
          <div className="flex items-center justify-center mb-3 lg:mb-4">
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mr-2 lg:mr-3">
              <Play className="text-white ml-0.5" size={16} />
            </div>
            <span className="text-purple-400 font-bold text-sm lg:text-base">50+</span>
          </div>
          <div className="text-white font-semibold text-base lg:text-lg mb-1">Projects</div>
          <div className="text-slate-400 text-sm lg:text-base">Completed</div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
        </div>
      </motion.div>

      {/* Additional Luxury Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1.6, duration: 0.6, ease: "easeOut" }}
        className="absolute bottom-32 sm:bottom-36 lg:bottom-40 right-8 sm:right-12 lg:right-20 z-10"
      >
        <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-2xl border border-cyan-400/20 rounded-3xl p-4 lg:p-6 text-center min-w-[120px] lg:min-w-[140px] shadow-2xl">
          <div className="flex items-center justify-center mb-3 lg:mb-4">
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mr-2 lg:mr-3">
              <Users className="text-white" size={16} />
            </div>
            <span className="text-cyan-400 font-bold text-sm lg:text-base">25+</span>
          </div>
          <div className="text-white font-semibold text-base lg:text-lg mb-1">Clients</div>
          <div className="text-slate-400 text-sm lg:text-base">Happy</div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
        </div>
      </motion.div>

      {/* Main Content with Luxury Styling */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-6 lg:mb-12"
        >
          <div className="relative inline-block">
            <div className="w-20 h-20 lg:w-40 lg:h-40 mx-auto mb-4 lg:mb-8 rounded-full bg-gradient-to-br from-lime-400 via-purple-500 to-pink-500 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center relative overflow-hidden">
                <span className="text-2xl lg:text-6xl relative z-10">🎬</span>
                <div className="absolute inset-0 bg-gradient-to-br from-lime-400/10 to-purple-500/10 animate-pulse"></div>
              </div>
            </div>
            {/* Floating particles around avatar */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-lime-400 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-1/2 -left-4 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-light text-white mb-6 lg:mb-12 leading-tight px-2"
        >
          I Am{' '}
          <TypewriterEffect
            words={['VFX Artist', 'Video Editor', 'Director', 'Creator', 'Motion Designer', 'Compositor', 'Storyteller']}
            className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-purple-400 to-pink-400 font-medium"
            typeSpeed={120}
            deleteSpeed={80}
            delayBetweenWords={2500}
          />
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="mb-6 lg:mb-12 px-2"
        >
          <h2 className="text-lg sm:text-xl md:text-3xl lg:text-5xl text-slate-300 mb-3 lg:mb-6">
            Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-400 font-semibold">Aditya Soni</span>
          </h2>
          <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-medium">
            Video Editor • VFX Artist • Director
          </div>
        </motion.div>

        {/* Luxury Button Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center justify-center gap-6 mb-12 lg:mb-20 px-4"
        >
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(228, 255, 0, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto"
          >
            <Link
              to="/portfolio"
              className="bg-gradient-to-r from-lime-400 to-emerald-400 text-slate-900 px-10 py-5 rounded-full text-lg font-semibold hover:from-lime-300 hover:to-emerald-300 transition-all duration-300 flex items-center space-x-3 w-full justify-center min-w-[220px] max-w-[300px] mx-auto shadow-2xl"
            >
              <Play size={20} />
              <span>View My Work</span>
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(148, 163, 184, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto"
          >
            <Link
              to="/contact"
              className="border-2 border-slate-600 bg-slate-800/50 backdrop-blur-xl text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-slate-700/50 hover:border-lime-400 transition-all duration-300 w-full text-center min-w-[220px] max-w-[300px] mx-auto shadow-xl"
            >
              Hire Me
            </Link>
          </motion.div>
        </motion.div>

        {/* Luxury Status Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col items-center justify-center space-y-4 text-slate-400 text-sm lg:text-base"
        >
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span>Available for Projects</span>
            </div>
            <div className="w-px h-4 bg-slate-600"></div>
            <div className="flex items-center space-x-2">
              <Award className="text-lime-400" size={16} />
              <span>Professional VFX Artist</span>
            </div>
          </div>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
          <div className="flex items-center space-x-2">
            <Zap className="text-purple-400" size={16} />
            <span>Based in Uttar Pradesh, India</span>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 lg:bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 lg:w-8 lg:h-12 border-2 border-slate-600 rounded-full flex justify-center relative overflow-hidden">
          <div className="w-1.5 h-3 lg:w-2 lg:h-4 bg-gradient-to-b from-lime-400 to-purple-400 rounded-full mt-2 animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-lime-400/10 to-transparent animate-pulse"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default SparklesHero;