import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

interface VideoCardProps {
  name: string;
  title: string;
  company: string;
  isActive: boolean;
}

const VideoCard: React.FC<VideoCardProps> = ({ name, title, company, isActive }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative flex-shrink-0 w-64 h-80 rounded-2xl overflow-hidden bg-slate-800 cursor-pointer"
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Video Background */}
      <video
        className="w-full h-full object-cover"
        src="https://res.cloudinary.com/dkzn3purp/video/upload/v1752169895/Toddler_Affirmation_Story_zxhpfs.mp4"
        autoPlay={isHovered}
        muted
        loop
        playsInline
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      
      {/* Play Button */}
      {!isHovered && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <Play className="text-white ml-1" size={24} />
          </div>
        </div>
      )}
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-white font-bold text-lg mb-1">{name}</h3>
        <p className="text-slate-300 text-sm mb-1">{title}</p>
        <p className="text-slate-400 text-xs">{company}</p>
      </div>
      
      {/* Active Indicator */}
      {isActive && (
        <div className="absolute top-4 right-4 w-3 h-3 bg-lime-400 rounded-full" />
      )}
    </motion.div>
  );
};

const VideoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const videos = [
    { name: "Aditya Soni", title: "VFX Artist", company: "Adityakeyedits" },
    { name: "Cinematic Edit", title: "Video Editor", company: "Commercial Project" },
    { name: "Motion Graphics", title: "Animator", company: "Brand Campaign" },
    { name: "Color Grading", title: "Colorist", company: "Music Video" },
    { name: "VFX Composition", title: "Compositor", company: "Short Film" },
    { name: "3D Animation", title: "3D Artist", company: "Product Demo" },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, videos.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(1, videos.length - 2)) % Math.max(1, videos.length - 2));
  };

  return (
    <div className="relative w-full">
      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
      >
        <ChevronLeft size={20} />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
      >
        <ChevronRight size={20} />
      </button>

      {/* Video Cards Container */}
      <div className="overflow-hidden px-16">
        <motion.div
          className="flex gap-6"
          animate={{ x: -currentIndex * 280 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {videos.map((video, index) => (
            <VideoCard
              key={index}
              name={video.name}
              title={video.title}
              company={video.company}
              isActive={index === currentIndex + 1}
            />
          ))}
        </motion.div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 gap-2">
        {Array.from({ length: Math.max(1, videos.length - 2) }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-lime-400' : 'bg-slate-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoCarousel;