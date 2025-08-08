import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Play, ArrowRight, Award } from "lucide-react";

const SparklesHero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900/50 to-black"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 lg:px-6">
        {/* Professional Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8"
        >
          <Award className="text-lime-400" size={16} />
          <span className="text-white text-sm font-medium">Professional VFX Artist</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white mb-6 leading-tight tracking-tight"
        >
          Visual
          <br />
          <span className="text-lime-400 font-normal">Storytelling</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <p className="text-xl md:text-2xl text-slate-300 mb-4 font-light">
            Aditya Soni
          </p>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Crafting cinematic experiences through cutting-edge visual effects, 
            professional video editing, and innovative post-production solutions.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Link
            to="/portfolio"
            className="group bg-lime-400 text-black px-8 py-4 rounded-none text-lg font-medium hover:bg-lime-300 transition-colors flex items-center space-x-3 min-w-[200px] justify-center"
          >
            <Play size={20} />
            <span>View Work</span>
          </Link>
          <Link
            to="/contact"
            className="group border border-white/20 bg-transparent text-white px-8 py-4 rounded-none text-lg font-medium hover:bg-white/5 transition-colors flex items-center space-x-3 min-w-[200px] justify-center"
          >
            <span>Get In Touch</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Status */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex items-center justify-center space-x-8 text-slate-400 text-sm"
        >
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>Available for Projects</span>
          </div>
          <div>Based in Uttar Pradesh, India</div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
      </motion.div>
    </div>
  );
};

export default SparklesHero;