import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Skills', link: '/skills' },
    { name: 'Portfolio', link: '/portfolio' },
    { name: 'Services', link: '/services' },
    { name: 'Contact', link: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-md border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-lime-400 flex items-center justify-center">
              <span className="text-black font-bold text-lg">A</span>
            </div>
            <span className="text-white font-light text-xl tracking-wide">
              Adityakeyedits
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className={`text-sm font-medium tracking-wide transition-colors relative ${
                  location.pathname === item.link
                    ? 'text-lime-400'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {item.name}
                {location.pathname === item.link && (
                  <div className="absolute -bottom-1 left-0 right-0 h-px bg-lime-400"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="bg-lime-400 text-black px-6 py-2 text-sm font-medium hover:bg-lime-300 transition-colors"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 border-t border-white/10"
          >
            <div className="py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-2 text-base transition-colors ${
                    location.pathname === item.link
                      ? 'text-lime-400'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pt-4">
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block bg-lime-400 text-black px-6 py-3 text-center font-medium hover:bg-lime-300 transition-colors"
                >
                  Hire Me
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;