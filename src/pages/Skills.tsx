import React from 'react';
import { motion } from 'framer-motion';
import { Video, Image, Palette, Volume2, Layers, Box } from 'lucide-react';

const skillCategories = [
  {
    title: 'Video Editing',
    icon: Video,
    skills: ['Premiere Pro', 'DaVinci Resolve', 'Fairlight'],
    color: 'from-blue-400 to-blue-600'
  },
  {
    title: 'Graphics Design',
    icon: Image,
    skills: ['Photoshop', 'Illustrator'],
    color: 'from-purple-400 to-purple-600'
  },
  {
    title: 'Motion Graphics',
    icon: Palette,
    skills: ['After Effects', 'Animation'],
    color: 'from-pink-400 to-pink-600'
  },
  {
    title: 'Audio Production',
    icon: Volume2,
    skills: ['Sound Design', 'Audio Mixing'],
    color: 'from-green-400 to-green-600'
  },
  {
    title: 'VFX Composition',
    icon: Layers,
    skills: ['Nuke', 'Compositing'],
    color: 'from-orange-400 to-orange-600'
  },
  {
    title: '3D Modeling',
    icon: Box,
    skills: ['Maya', '3D Animation'],
    color: 'from-cyan-400 to-cyan-600'
  }
];

const softwareLogos = [
  { name: 'Premiere Pro', logo: '/adobe-premiere-logo-png_seeklogo-380789.png', proficiency: 95 },
  { name: 'After Effects', logo: '/skills/after-effects.png', proficiency: 90 },
  { name: 'DaVinci Resolve', logo: '/skills/photoshop.png', proficiency: 85 },
  { name: 'Photoshop', logo: '/skills/davinci-resolve.png', proficiency: 88 },
  { name: 'Illustrator', logo: '/Illustrator-Logo-768x480.png', proficiency: 80 },
  { name: 'Nuke', logo: '/nuke.webp', proficiency: 75 },
  { name: 'Maya', logo: '/skills/maya.png', proficiency: 70 },
  { name: 'Audition', logo: '/skills/audition.png', proficiency: 82 },
  { name: 'Blender', logo: '/skills/blender.png', proficiency: 75 }
];

const Skills = () => {
  return (
    <div className="pt-24 min-h-screen">
      <section className="py-16 lg:py-32 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">
              Skills &{' '}
              <span className="text-lime-400 font-medium">Software</span>
            </h1>
            <p className="text-lg lg:text-xl text-slate-400 max-w-3xl mx-auto">
              Mastering industry-standard tools to create exceptional visual experiences
            </p>
          </motion.div>

          {/* Skill Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 hover:bg-slate-800/70 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl mb-4`}
                >
                  <category.icon className="text-white" size={28} />
                </motion.div>

                <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4">
                  {category.title}
                </h3>

                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-lime-400 rounded-full" />
                      <span className="text-slate-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Software Proficiency */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 lg:p-8"
          >
            {/* Industry Insight Box */}
            <div className="bg-gradient-to-r from-blue-400/10 to-cyan-400/10 border border-blue-400/30 rounded-2xl p-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">🎯</span>
                </div>
                <div>
                  <h4 className="text-blue-400 font-semibold mb-2">Industry Insight</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    "Mastering these tools is just the beginning. The real skill lies in knowing which tool
                    to use for each creative challenge. I've spent countless hours perfecting workflows
                    that deliver professional results efficiently."
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-8 text-center">
              Software Proficiency
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {softwareLogos.map((software, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center">
                    {software.logo.startsWith('/') || software.logo.startsWith('http') ? (
                      <img
                        src={software.logo}
                        alt={software.name}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <span className="text-2xl lg:text-3xl">{software.logo}</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{software.name}</span>
                      <span className="text-lime-400 text-sm font-semibold">
                        {software.proficiency}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${software.proficiency}%` }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                        className="bg-gradient-to-r from-lime-400 to-emerald-400 h-2 rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Learning Tip Box */}
            <div className="bg-gradient-to-r from-orange-400/10 to-red-400/10 border border-orange-400/30 rounded-2xl p-4 mt-8">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">📚</span>
                </div>
                <div>
                  <h4 className="text-orange-400 font-semibold mb-2">Continuous Learning</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    "The VFX industry evolves rapidly. I dedicate time weekly to learning new techniques,
                    exploring emerging tools, and staying updated with industry trends. This ensures
                    your projects always feature cutting-edge techniques."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Skills;