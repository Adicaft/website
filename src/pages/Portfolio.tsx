import React, { useState } from 'react';
import { motion } from 'framer-motion';
import VideoReel from '../components/VideoReel';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const totalVideos = 7;

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'vfx', name: 'VFX' },
    { id: 'editing', name: 'Video Editing' },
    { id: 'motion', name: 'Motion Graphics' },
    { id: 'commercial', name: 'Commercial' }
  ];

  return (
    <div className="pt-20 min-h-screen bg-black">
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6">
              My{' '}
              <span className="text-lime-400">Portfolio</span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-400 max-w-3xl mx-auto font-light">
              Professional video editing and visual effects projects across various industries
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 text-sm font-medium transition-colors ${
                  filter === category.id
                    ? 'bg-lime-400 text-black'
                    : 'bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-white/20'
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {Array.from({ length: totalVideos }, (_, index) => (
              <VideoReel key={index} index={index} enableSound={true} />
            ))}
          </div>

          {/* Portfolio Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/5 border border-white/10 p-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
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
                  <div className="text-3xl lg:text-4xl font-light text-lime-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-slate-400 text-sm lg:text-base font-light">
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