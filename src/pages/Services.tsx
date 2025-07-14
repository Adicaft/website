import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Video, Zap, Palette, Volume2, Eye, Camera } from 'lucide-react';

const services = [
  {
    icon: Video,
    title: 'Video Editing',
    description: 'Professional video editing with cinematic storytelling, color grading, and seamless transitions.',
    features: ['Cinematic Editing', 'Color Grading', 'Audio Sync', 'Transitions'],
    color: 'from-blue-400 to-blue-600',
    price: 'Starting at $50'
  },
  {
    icon: Zap,
    title: 'Visual Effects',
    description: 'Stunning VFX compositions, green screen work, and digital effects that captivate audiences.',
    features: ['Compositing', 'Green Screen', 'Digital Effects', 'Motion Tracking'],
    color: 'from-purple-400 to-purple-600',
    price: 'Starting at $100'
  },
  {
    icon: Palette,
    title: 'Motion Graphics',
    description: 'Eye-catching motion graphics, animated logos, and dynamic visual elements for your content.',
    features: ['Logo Animation', 'Title Sequences', 'Infographics', '2D Animation'],
    color: 'from-pink-400 to-pink-600',
    price: 'Starting at $75'
  },
  {
    icon: Volume2,
    title: 'Sound Design',
    description: 'Professional audio editing, sound effects, and music synchronization for immersive experiences.',
    features: ['Audio Mixing', 'Sound Effects', 'Music Sync', 'Voice Enhancement'],
    color: 'from-green-400 to-green-600',
    price: 'Starting at $40'
  },
  {
    icon: Eye,
    title: 'Color Grading',
    description: 'Professional color correction and grading to enhance the mood and visual appeal of your videos.',
    features: ['Color Correction', 'Mood Enhancement', 'Cinematic Look', 'Style Matching'],
    color: 'from-orange-400 to-orange-600',
    price: 'Starting at $60'
  },
  {
    icon: Camera,
    title: 'Post-Production',
    description: 'Complete post-production services from raw footage to final delivery with professional quality.',
    features: ['Full Workflow', 'Quality Control', 'Format Delivery', 'Revisions'],
    color: 'from-cyan-400 to-cyan-600',
    price: 'Custom Quote'
  }
];

const Services = () => {
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
              My{' '}
              <span className="text-lime-400 font-medium">Services</span>
            </h1>
            <p className="text-lg lg:text-xl text-slate-400 max-w-3xl mx-auto">
              Comprehensive post-production services to bring your creative vision to life 
              with professional quality and cinematic excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 lg:p-8 hover:bg-slate-800/70 transition-all duration-300 group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl mb-6 group-hover:shadow-lg transition-all duration-300`}
                >
                  <service.icon className="text-white" size={28} />
                </motion.div>

                <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4">
                  {service.title}
                </h3>

                <p className="text-slate-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + featureIndex * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-lime-400 rounded-full" />
                      <span className="text-slate-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="text-lime-400 font-semibold text-lg mb-6">
                  {service.price}
                </div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/contact"
                    className="w-full bg-slate-700/50 hover:bg-lime-400 hover:text-slate-900 text-white py-4 rounded-xl transition-all duration-300 font-medium text-center block"
                  >
                    Get Quote
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-20"
          >
            {/* Value Proposition Box */}
            <div className="bg-gradient-to-r from-emerald-400/10 to-teal-400/10 border border-emerald-400/30 rounded-2xl p-6 mb-8 max-w-4xl mx-auto">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-emerald-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">💎</span>
                </div>
                <div className="text-left">
                  <h4 className="text-emerald-400 font-semibold mb-2">Why Choose Adityakeyedits?</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    "Every project gets my personal attention. I don't just deliver what you ask for—I deliver 
                    what your audience needs to see. Fast turnaround, unlimited revisions until you're 100% 
                    satisfied, and always within budget. Your success is my success."
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-lime-400/10 to-purple-500/10 border border-lime-400/30 rounded-3xl p-6 lg:p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-4">
                Ready to bring your vision to life?
              </h3>
              <p className="text-slate-400 mb-8 text-lg">
                Let's collaborate and create something amazing together. 
                From concept to final delivery, I'll ensure your project exceeds expectations.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="bg-lime-400 text-slate-900 px-10 lg:px-12 py-4 lg:py-5 rounded-full text-lg font-medium hover:bg-lime-300 transition-colors inline-block"
                >
                  Start Your Project
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;