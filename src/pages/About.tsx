import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, GraduationCap, Briefcase } from 'lucide-react';

const About = () => {
  const personalInfo = [
    { icon: Mail, label: 'E-mail', value: 'adityasoni4474@gmail.com', clickable: true, href: 'mailto:adityasoni4474@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 6388934474', clickable: true, href: 'tel:+916388934474' },
    { icon: GraduationCap, label: 'Education', value: 'BSc VFX & Animation - AAFT' },
    { icon: Briefcase, label: 'Experience', value: '2 Years' }
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">
              About{' '}
              <span className="text-lime-400 font-medium">Me</span>
            </h1>
            <p className="text-lg lg:text-xl text-slate-400 max-w-3xl mx-auto">
              Passionate creator bringing stories to life through visual effects and cinematic editing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Side - Image and Quote */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <div className="relative inline-block mb-8">
                <div className="w-64 h-64 lg:w-80 lg:h-80 mx-auto rounded-3xl bg-gradient-to-br from-lime-400/20 to-purple-500/20 p-1">
                  <div className="w-full h-full rounded-3xl bg-slate-800 flex items-center justify-center">
                    <span className="text-6xl lg:text-8xl">🎭</span>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-lime-400 text-slate-900 px-4 py-2 rounded-full font-semibold text-sm lg:text-base">
                  VFX Artist
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6"
              >
                <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4">
                  "Creating visually stunning content while helping others in the creative community grow and excel."
                </h3>
                <p className="text-slate-400">
                  This journey is fueled by a love for creativity and storytelling,
                  and I'm excited to share it with you all!
                </p>
              </motion.div>
            </motion.div>

            {/* Right Side - About Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 lg:p-8">
                {/* Pro Tip Box */}
                <div className="bg-gradient-to-r from-lime-400/10 to-emerald-400/10 border border-lime-400/30 rounded-2xl p-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-lime-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-slate-900 font-bold text-sm">💡</span>
                    </div>
                    <div>
                      <h4 className="text-lime-400 font-semibold mb-2">Pro Tip from Aditya</h4>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        "The secret to great VFX isn't just technical skill—it's understanding the story you're telling.
                        Every effect should serve the narrative and enhance the emotional impact of your content."
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-6">
                  My Story
                </h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  Hey! I'm a passionate Video Editor and VFX Artist based in India. I specialize in
                  crafting cinematic videos, visual effects, and post-production work that captivates
                  audiences across various platforms.
                </p>
                <p className="text-slate-300 leading-relaxed mb-6">
                  I primarily use industry-standard tools like Adobe Premiere Pro, After Effects,
                  and DaVinci Resolve to bring stories to life. Over the years, I've worked with
                  brands, creators, and agencies, delivering high-quality projects that meet their vision.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  Currently pursuing BSc in VFX and Animation from AAFT, I'm constantly learning
                  and evolving my craft to stay at the forefront of visual storytelling.
                </p>

                {/* Client Communication Box */}
                <div className="bg-gradient-to-r from-purple-400/10 to-pink-400/10 border border-purple-400/30 rounded-2xl p-4 mt-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-purple-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">🤝</span>
                    </div>
                    <div>
                      <h4 className="text-purple-400 font-semibold mb-2">Working Together</h4>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        "I believe in collaborative creativity. Your vision combined with my technical expertise
                        creates magic. I keep you involved throughout the process, ensuring the final result
                        exceeds your expectations."
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {personalInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/30 rounded-2xl p-4"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-lime-400/10 rounded-full flex items-center justify-center">
                        <info.icon className="text-lime-400" size={20} />
                      </div>
                      <div>
                        <div className="text-slate-400 text-sm">{info.label}</div>
                        {info.clickable ? (
                          <a
                            href={info.href}
                            className="text-white font-medium hover:text-lime-400 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-white font-medium">{info.value}</div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;