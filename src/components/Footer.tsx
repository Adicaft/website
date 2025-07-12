import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Video, Zap, Instagram, Youtube, Twitter, Linkedin, Mail, Phone, Shield, FileText, RefreshCw, HelpCircle } from 'lucide-react';

const Logo = () => (
  <div className="flex items-center space-x-2">
    <div className="relative">
      <Video className="w-8 h-8 text-lime-400" />
      <Zap className="w-4 h-4 text-yellow-400 absolute -top-1 -right-1" />
    </div>
    <span className="text-white font-bold text-xl">Adityakeyedits</span>
  </div>
);

const Footer = () => {
  const footerLinks = {
    'Services': [
      { name: 'Video Editing', path: '/services' },
      { name: 'Visual Effects', path: '/services' },
      { name: 'Motion Graphics', path: '/services' },
      { name: 'Color Grading', path: '/services' },
      { name: 'Sound Design', path: '/services' }
    ],
    'Portfolio': [
      { name: 'Commercial Videos', path: '/portfolio' },
      { name: 'Music Videos', path: '/portfolio' },
      { name: 'Short Films', path: '/portfolio' },
      { name: 'Social Media Content', path: '/portfolio' },
      { name: 'Corporate Videos', path: '/portfolio' }
    ],
    'About': [
      { name: 'My Story', path: '/about' },
      { name: 'Skills & Software', path: '/skills' },
      { name: 'Education', path: '/about' },
      { name: 'Experience', path: '/about' },
      { name: 'Career', path: '/about' }
    ],
    'Contact': [
      { name: 'Get Quote', path: '/contact' },
      { name: 'Project Inquiry', path: '/contact' },
      { name: 'Collaboration', path: '/contact' },
      { name: 'Support', path: '/contact' },
      { name: 'Feedback', path: '/contact' }
    ]
  };

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  const legalLinks = [
    { icon: Shield, name: 'Privacy Policy', path: '/privacy' },
    { icon: HelpCircle, name: 'Customer Support', path: '/support' },
    { icon: FileText, name: 'Terms OS', path: '/terms' },
    { icon: RefreshCw, name: 'Refund Policy', path: '/refund' }
  ];

  return (
    <footer className="bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-lime-400/20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 lg:px-6 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Logo />
            <p className="text-slate-400 mb-6 mt-4 leading-relaxed">
              Passionate VFX Artist and Video Editor creating cinematic experiences 
              that captivate audiences. Bringing stories to life through cutting-edge 
              visual effects and post-production.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-slate-400" />
                <a 
                  href="tel:+916388934473"
                  className="text-slate-400 hover:text-lime-400 transition-colors text-sm"
                >
                  +91 6388934473
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-slate-400" />
                <a 
                  href="mailto:adityasoni4474@gmail.com"
                  className="text-slate-400 hover:text-lime-400 transition-colors text-sm"
                >
                  adityasoni4474@gmail.com
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-lime-400 hover:bg-slate-700 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-slate-400 hover:text-lime-400 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Legal Links Section */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          <div className="flex flex-wrap justify-center gap-6">
            {legalLinks.map((link, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 bg-slate-800/50 hover:bg-slate-700/50 px-4 py-2 rounded-full transition-colors"
              >
                <link.icon size={16} className="text-slate-400" />
                <Link
                  to={link.path}
                  className="text-slate-400 hover:text-lime-400 transition-colors text-sm"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 pt-8">
          <div className="text-center">
            <div className="text-slate-400 text-sm mb-2">
              © COPYRIGHT 2024 ADITYAKEYEDITS.
            </div>
            <div className="text-slate-500 text-sm">
              Crafted with ❤️ by Aditya Soni
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;