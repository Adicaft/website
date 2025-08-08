import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, Award, Users, Clock, ArrowRight, Zap, Eye, Video } from 'lucide-react';
import VideoReel from '../components/VideoReel';
import SparklesHero from '../components/SparklesHero';
import { AnimatedTestimonials } from '../components/ui/animated-testimonials';

const Home = () => {
  const stats = [
    { icon: Users, label: 'Happy Clients', value: '25+', color: 'text-lime-400' },
    { icon: Play, label: 'Projects Completed', value: '50+', color: 'text-lime-400' },
    { icon: Clock, label: 'Hours of Content', value: '200+', color: 'text-lime-400' },
    { icon: Award, label: 'Years Experience', value: '1+', color: 'text-lime-400' }
  ];

  const services = [
    {
      icon: Video,
      title: 'Video Editing',
      description: 'Professional cinematic editing with seamless transitions and color grading',
      color: 'from-lime-400 to-lime-600'
    },
    {
      icon: Zap,
      title: 'Visual Effects',
      description: 'Cutting-edge VFX compositing and digital effects for any project',
      color: 'from-lime-400 to-lime-600'
    },
    {
      icon: Eye,
      title: 'Motion Graphics',
      description: 'Dynamic animations, title sequences, and branded content',
      color: 'from-lime-400 to-lime-600'
    }
  ];

  const testimonials = [
    {
      quote: "Aditya transformed my raw footage into a cinematic masterpiece. His attention to detail and creative vision exceeded all my expectations. The final result was absolutely stunning!",
      name: "Sarah Johnson",
      designation: "Content Creator & YouTuber",
      src: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote: "The VFX work exceeded our expectations. Professional, creative, and delivered on time. Aditya's technical skills combined with artistic vision make him a standout in the industry.",
      name: "Mike Chen",
      designation: "Brand Manager at TechFlow",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote: "Working with Aditya has elevated my content quality significantly. His understanding of storytelling through visual effects is remarkable. Highly recommended for any creative project!",
      name: "Lisa Rodriguez",
      designation: "Digital Marketing Director",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote: "Outstanding support and robust creative solutions. It's rare to find an artist who delivers on all promises while maintaining such high quality standards throughout the project.",
      name: "James Kim",
      designation: "Creative Director at InnovateSphere",
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote: "The scalability and performance of Aditya's work have been game-changing for our organization. His ability to handle complex projects while maintaining creativity is impressive.",
      name: "Emily Watson",
      designation: "VP of Creative at FutureNet",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <SparklesHero />

      {/* Stats Section */}
      <section className="py-20 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-light text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-sm lg:text-base font-light">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">
              Featured{' '}
              <span className="text-lime-400">Work</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto font-light">
              A showcase of professional video editing and visual effects projects
            </p>
          </motion.div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {Array.from({ length: 8 }, (_, index) => (
              <VideoReel key={index} index={index} enableSound={true} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Link
              to="/portfolio"
              className="inline-flex items-center space-x-3 bg-lime-400 text-black px-8 py-4 text-lg font-medium hover:bg-lime-300 transition-colors"
            >
              <span>View All Projects</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">
              What I{' '}
              <span className="text-lime-400">Offer</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto font-light">
              Professional post-production services for film, television, and digital content
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors"
              >
                <service.icon className="text-lime-400 mb-6" size={32} />
                <h3 className="text-2xl font-light text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-400 leading-relaxed font-light">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Link
              to="/services"
              className="inline-flex items-center space-x-3 border border-white/20 bg-transparent text-white px-8 py-4 text-lg font-medium hover:bg-white/5 transition-colors"
            >
              <span>View All Services</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">
              Client{' '}
              <span className="text-lime-400">Reviews</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto font-light">
              What industry professionals say about working with me
            </p>
          </motion.div>

          <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900/50 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6">
              Ready to Create Something{' '}
              <span className="text-lime-400">Extraordinary?</span>
            </h2>
            <p className="text-xl text-slate-400 mb-8 font-light">
              Let's collaborate to bring your vision to life with professional 
              video editing and cutting-edge visual effects.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="bg-lime-400 text-black px-8 py-4 text-lg font-medium hover:bg-lime-300 transition-colors min-w-[200px]"
              >
                Start Your Project
              </Link>
              <Link
                to="/portfolio"
                className="border border-white/20 text-white px-8 py-4 text-lg font-medium hover:bg-white/5 transition-colors min-w-[200px]"
              >
                View Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;