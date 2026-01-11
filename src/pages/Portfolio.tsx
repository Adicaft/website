import React, { useState } from 'react';
import { motion } from 'framer-motion';
import VideoReel from '../components/VideoReel';
import LandscapeVideo from '../components/LandscapeVideo';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const totalVideos = 8;

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'vfx', name: 'VFX' },
    { id: 'editing', name: 'Video Editing' },
    { id: 'motion', name: 'Motion Graphics' },
    { id: 'commercial', name: 'Commercial' }
  ];

  return (
    <div className="pt-24 min-h-screen">
      <section className="py-16 lg:py-32 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            {/* Portfolio Insight Box */}
            <div className="bg-gradient-to-r from-yellow-400/10 to-orange-400/10 border border-yellow-400/30 rounded-2xl p-4 mb-8 max-w-4xl mx-auto">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-slate-900 font-bold text-sm">🏆</span>
                </div>
                <div>
                  <h4 className="text-yellow-400 font-semibold mb-2">Portfolio Highlights</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    "Each project in my portfolio represents a unique challenge overcome and a client's vision
                    brought to life. From corporate presentations to creative campaigns, I adapt my style
                    to match your brand and audience perfectly."
                  </p>
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">
              My{' '}
              <span className="text-lime-400 font-medium">Portfolio</span>
            </h1>
            <p className="text-lg lg:text-xl text-slate-400 max-w-3xl mx-auto">
              A showcase of cinematic videos, visual effects, and creative projects
              that bring stories to life
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 lg:gap-4 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category.id)}
                className={`px-4 lg:px-6 py-2 lg:py-3 rounded-full text-sm lg:text-base font-medium transition-all duration-300 ${filter === category.id
                  ? 'bg-lime-400 text-slate-900'
                  : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:text-white'
                  }`}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mb-12">
            {Array.from({ length: totalVideos }, (_, index) => (
              <VideoReel key={index} index={index} enableSound={true} />
            ))}
          </div>

          <LandscapeVideo videoId="6EIrcySbSKA" />

          {/* Portfolio Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 lg:p-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { label: 'Projects Completed', value: '50+' },
                { label: 'Happy Clients', value: '25+' },
                { label: 'Hours of Content', value: '200+' },
                { label: 'Awards Won', value: '5+' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="text-2xl lg:text-3xl font-bold text-lime-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-slate-400 text-sm lg:text-base">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;