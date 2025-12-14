import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail, Phone, MessageCircle, MapPin } from 'lucide-react';

const Logo = () => (
  <div className="flex items-center space-x-2">
    <img
      src="/aditya-logo.png"
      alt="Adityakeyedits"
      className="h-12 w-auto object-contain"
    />
  </div>
);

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/adityashroffvines/', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/aditya-soni-4474-', label: 'LinkedIn' },
    { icon: MessageCircle, href: 'https://wa.me/916388934474', label: 'WhatsApp' }
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
      value: 'Delhi, India',
      href: '#'
    }
  ];

  return (
    <footer className="bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-lime-400/20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 lg:px-6 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Brand */}
          <div>
            <Logo />
            <p className="text-slate-400 mb-6 mt-4 leading-relaxed">
              Passionate VFX Artist and Video Editor creating cinematic experiences
              that captivate audiences. Bringing stories to life through cutting-edge
              visual effects and post-production.
            </p>

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

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-xl">Get In Touch</h3>
            <div className="space-y-4">
              {contactDetails.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-3 p-3 bg-slate-800/50 rounded-xl hover:bg-slate-700/50 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 bg-lime-400/10 rounded-full flex items-center justify-center">
                    <contact.icon className="text-lime-400" size={18} />
                  </div>
                  <div>
                    <div className="text-slate-400 text-sm">{contact.name}</div>
                    <div className="text-white font-medium group-hover:text-lime-400 transition-colors">
                      {contact.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 pt-8">
          <div className="text-center">
            <div className="text-slate-400 text-sm mb-2">
              © COPYRIGHT 2024 ADITYAKEYEDITS.
            </div>
            <div className="text-slate-500 text-sm">
              Crafted with ❤️ by <a href="https://wa.me/918756365339" target="_blank" rel="noopener noreferrer" className="text-lime-400 hover:text-lime-300 transition-colors">Suditya Group</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;