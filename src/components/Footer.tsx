import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Phone, MessageCircle, MapPin, Instagram, Youtube, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  const contactDetails = [
    { 
      icon: Mail, 
      name: 'Email', 
      value: 'adityasoni4474@gmail.com',
      href: 'mailto:adityasoni4474@gmail.com'
    },
    { 
      icon: Phone, 
      name: 'Phone', 
      value: '+91 6388934474',
      href: 'tel:+916388934474'
    },
    { 
      icon: MessageCircle, 
      name: 'WhatsApp', 
      value: 'Chat with me',
      href: 'https://wa.me/916388934474'
    },
    { 
      icon: MapPin, 
      name: 'Location', 
      value: 'Uttar Pradesh, India',
      href: '#'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-lime-400 flex items-center justify-center">
                <span className="text-black font-bold text-lg">A</span>
              </div>
              <span className="text-white font-light text-xl tracking-wide">
                Adityakeyedits
              </span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed font-light max-w-md">
              Professional VFX Artist and Video Editor creating cinematic experiences 
              that captivate audiences. Bringing stories to life through cutting-edge 
              visual effects and post-production.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-lime-400 hover:border-lime-400/50 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-medium mb-6 text-lg">Quick Links</h3>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="block text-slate-400 hover:text-lime-400 transition-colors font-light"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-medium mb-6 text-lg">Get In Touch</h3>
            <div className="space-y-4">
              {contactDetails.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-start space-x-3 text-slate-400 hover:text-lime-400 transition-colors group"
                >
                  <contact.icon className="mt-1 flex-shrink-0" size={16} />
                  <div>
                    <div className="text-sm font-light">{contact.name}</div>
                    <div className="text-sm">{contact.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-slate-400 text-sm font-light mb-4 md:mb-0">
              © 2024 Adityakeyedits. All rights reserved.
            </div>
            <div className="text-slate-500 text-sm font-light">
              Crafted with ❤️ by{' '}
              <a 
                href="https://wa.me/918756365339" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-lime-400 hover:text-lime-300 transition-colors"
              >
                Suditya Group
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;