import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle, Clock, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'adityasoni4474@gmail.com',
      href: 'mailto:adityasoni4474@gmail.com',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 6388934474',
      href: 'tel:+916388934474',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: 'Chat with me',
      href: 'https://wa.me/916388934474',
      color: 'from-emerald-400 to-emerald-600'
    }
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
              Get In{' '}
              <span className="text-lime-400 font-medium">Touch</span>
            </h1>
            <p className="text-lg lg:text-xl text-slate-400 max-w-3xl mx-auto">
              Ready to bring your creative vision to life? Let's discuss your project 
              and create something amazing together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Communication Style Box */}
              <div className="bg-gradient-to-r from-blue-400/10 to-cyan-400/10 border border-blue-400/30 rounded-2xl p-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">💬</span>
                  </div>
                  <div>
                    <h4 className="text-blue-400 font-semibold mb-2">Let's Talk!</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      "I love discussing creative ideas! Whether you have a clear vision or just a rough concept, 
                      I'm here to help shape it into something amazing. No project is too big or too small—
                      every story deserves to be told beautifully."
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 lg:p-8">
                <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-6">
                  Let's Connect
                </h3>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  I'm always excited to work on new projects and collaborate with 
                  creative minds. Whether you need video editing, VFX, or complete 
                  post-production services, I'm here to help.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.href}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center space-x-4 p-4 bg-slate-700/30 rounded-2xl hover:bg-slate-700/50 transition-all duration-300 group"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <info.icon className="text-white" size={20} />
                      </div>
                      <div>
                        <div className="text-slate-400 text-sm">{info.label}</div>
                        <div className="text-white font-medium group-hover:text-lime-400 transition-colors">
                          {info.value}
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-r from-lime-400/10 to-emerald-400/10 border border-lime-400/30 rounded-3xl p-6"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="text-lime-400" size={24} />
                  <h4 className="text-xl font-semibold text-white">Availability</h4>
                </div>
                <div className="space-y-2 text-slate-300">
                  <div className="flex justify-between">
                    <span>Response Time:</span>
                    <span className="text-lime-400 font-medium">Within 24 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Project Start:</span>
                    <span className="text-lime-400 font-medium">1-3 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Time Zone:</span>
                    <span className="text-lime-400 font-medium">IST (UTC+5:30)</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 lg:p-8"
            >
              <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-6">
                Send a Message
              </h3>

              <form 
                action="mailto:adityasoni4474@gmail.com"
                method="post"
                encType="text/plain"
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-400 text-sm mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full bg-slate-700/50 text-white p-4 rounded-xl border border-slate-600 focus:border-lime-400 focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-sm mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full bg-slate-700/50 text-white p-4 rounded-xl border border-slate-600 focus:border-lime-400 focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 text-sm mb-2">
                    Project Type
                  </label>
                  <select 
                    name="project_type"
                    className="w-full bg-slate-700/50 text-white p-4 rounded-xl border border-slate-600 focus:border-lime-400 focus:outline-none transition-colors"
                  >
                    <option>Video Editing</option>
                    <option>Visual Effects</option>
                    <option>Motion Graphics</option>
                    <option>Color Grading</option>
                    <option>Complete Post-Production</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-400 text-sm mb-2">
                    Project Budget
                  </label>
                  <select 
                    name="budget"
                    className="w-full bg-slate-700/50 text-white p-4 rounded-xl border border-slate-600 focus:border-lime-400 focus:outline-none transition-colors"
                  >
                    <option>$500 - $1,000</option>
                    <option>$1,000 - $2,500</option>
                    <option>$2,500 - $5,000</option>
                    <option>$5,000+</option>
                    <option>Let's discuss</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-400 text-sm mb-2">
                    Project Details
                  </label>
                  <textarea
                    rows={5}
                    name="message"
                    required
                    className="w-full bg-slate-700/50 text-white p-4 rounded-xl border border-slate-600 focus:border-lime-400 focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project, timeline, and any specific requirements..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-lime-400 text-slate-900 py-5 rounded-xl text-lg font-medium hover:bg-lime-300 transition-colors flex items-center justify-center space-x-3"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;