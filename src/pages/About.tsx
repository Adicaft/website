import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, GraduationCap, Briefcase, Award, Users } from 'lucide-react';

const About = () => {
  const personalInfo = [
    { icon: Mail, label: 'E-mail', value: 'adityasoni4474@gmail.com', clickable: true, href: 'mailto:adityasoni4474@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 6388934474', clickable: true, href: 'tel:+916388934474' },
    { icon: GraduationCap, label: 'Education', value: 'BSc VFX & Animation - AAFT' },
    { icon: Briefcase, label: 'Experience', value: 'Freelance since April 2024' }
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
              About{' '}
              <span className="text-lime-400">Me</span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-400 max-w-3xl mx-auto font-light">
              Passionate creator bringing stories to life through visual effects and cinematic editing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Side - Professional Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <div className="relative inline-block mb-8 lg:mb-12">
                <div className="w-80 h-80 lg:w-96 lg:h-96 mx-auto bg-gradient-to-br from-lime-400/10 to-lime-400/5 border border-white/10">
                  <div className="w-full h-full bg-black flex items-center justify-center">
                    <span className="text-8xl lg:text-9xl">🎬</span>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-lime-400 text-black px-6 py-3 font-medium">
                  VFX Artist
                </div>
              </div>
            </motion.div>

            {/* Right Side - Professional Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-white/5 border border-white/10 p-8">
                <h3 className="text-3xl lg:text-4xl font-light text-white mb-6">
                  My Story
                </h3>
                <p className="text-slate-300 leading-relaxed mb-6 font-light text-lg">
                  I'm a passionate Video Editor and VFX Artist based in India. I specialize in 
                  crafting cinematic videos, visual effects, and post-production work that captivates 
                  audiences across various platforms.
                </p>
                <p className="text-slate-300 leading-relaxed mb-6 font-light text-lg">
                  I primarily use industry-standard tools like Adobe Premiere Pro, After Effects, 
                  and DaVinci Resolve to bring stories to life. Over the years, I've worked with 
                  brands, creators, and agencies, delivering high-quality projects that meet their vision.
                </p>
                <p className="text-slate-300 leading-relaxed font-light text-lg">
                  Currently pursuing BSc in VFX and Animation from AAFT, I'm constantly learning 
                  and evolving my craft to stay at the forefront of visual storytelling.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {personalInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/5 border border-white/10 p-6"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-lime-400/10 flex items-center justify-center">
                        <info.icon className="text-lime-400" size={20} />
                      </div>
                      <div>
                        <div className="text-slate-400 text-sm font-light">{info.label}</div>
                        {info.clickable ? (
                          <a 
                            href={info.href}
                            className="text-white hover:text-lime-400 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-white">{info.value}</div>
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