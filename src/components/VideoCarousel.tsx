import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Heart, Share2, Volume2, VolumeX, MessageCircle } from 'lucide-react';

interface VideoCardProps {
  name: string;
  title: string;
  company: string;
  isActive: boolean;
  index: number;
}

const VideoCard: React.FC<VideoCardProps> = ({ name, title, company, isActive, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [likes, setLikes] = useState(Math.floor(Math.random() * 1000) + 100);
  const [shares, setShares] = useState(Math.floor(Math.random() * 50) + 10);
  const [comments, setComments] = useState(Math.floor(Math.random() * 100) + 20);
  const [showHearts, setShowHearts] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Disabled auto-increment counters as requested
  // useEffect(() => {
  //   const likeInterval = setInterval(() => {
  //     setLikes(prev => prev + Math.floor(Math.random() * 3) + 1);
  //   }, 3000);

  //   const shareInterval = setInterval(() => {
  //     setShares(prev => prev + 1);
  //   }, 5000);

  //   const commentInterval = setInterval(() => {
  //     setComments(prev => prev + Math.floor(Math.random() * 2) + 1);
  //   }, 4000);

  //   return () => {
  //     clearInterval(likeInterval);
  //     clearInterval(shareInterval);
  //     clearInterval(commentInterval);
  //   };
  // }, []);

  // Auto-play when hovered
  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      video.playsInline = true;
      video.setAttribute('webkit-playsinline', 'true');
      video.setAttribute('playsinline', 'true');
      
      if (isHovered) {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
            })
            .catch((error) => {
              console.log("Auto-play was prevented:", error);
              setIsPlaying(false);
            });
        }
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  }, [isHovered]);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
            })
            .catch((error) => {
              console.log("Play was prevented:", error);
            });
        }
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };
  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLikes(prev => prev + 1);
    setShowHearts(true);
    setTimeout(() => setShowHearts(false), 1000);
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShares(prev => prev + 1);
  };

  const handleComment = (e: React.MouseEvent) => {
    e.stopPropagation();
    setComments(prev => prev + 1);
  };

  return (
    <motion.div
      className={`relative flex-shrink-0 w-64 h-[480px] lg:w-80 lg:h-[600px] rounded-3xl overflow-hidden bg-slate-800 cursor-pointer transition-all duration-300 ${
        isActive ? 'scale-105 shadow-2xl ring-2 ring-lime-400' : 'scale-95 opacity-70'
      }`}
      whileHover={{ scale: isActive ? 1.08 : 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={handleVideoClick}
    >
      {/* Video Background */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        src="https://res.cloudinary.com/dkzn3purp/video/upload/v1752169895/Toddler_Affirmation_Story_zxhpfs.mp4"
        muted={isMuted}
        loop
        playsInline
        webkit-playsinline="true"
        preload="metadata"
        controls={false}
      />
      
      {/* Fade overlays at top and bottom */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
      
      {/* Play Button Overlay */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
          >
            <Play className="text-white ml-1" size={32} />
          </motion.div>
        </div>
      )}

      {/* Top Header */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-lime-400 to-purple-500 flex items-center justify-center">
            <span className="text-sm font-bold text-white">A</span>
          </div>
          <span className="text-white font-semibold text-sm">adityakeyedits</span>
        </div>
        
        {/* Sound Toggle */}
        <button
          onClick={toggleMute}
          className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center"
        >
          {isMuted ? (
            <VolumeX className="text-white" size={16} />
          ) : (
            <Volume2 className="text-white" size={16} />
          )}
        </button>
      </div>

      {/* Right Side Actions */}
      <div className="absolute right-4 bottom-32 z-20 flex flex-col space-y-6">
        {/* Like Button with Hearts Animation */}
        <div className="relative">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleLike}
            className="flex flex-col items-center space-y-1"
          >
            <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Heart className="text-red-500 fill-red-500" size={24} />
            </div>
            <span className="text-white text-sm font-semibold">{likes.toLocaleString()}</span>
          </motion.button>
          
          {/* Flying Hearts Animation */}
          <AnimatePresence>
            {showHearts && (
              <>
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 1, y: 0, x: 0, scale: 0 }}
                    animate={{ 
                      opacity: 0, 
                      y: -100, 
                      x: Math.random() * 40 - 20,
                      scale: [0, 1, 0]
                    }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2, delay: i * 0.1 }}
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 pointer-events-none"
                  >
                    <Heart className="text-red-500 fill-red-500" size={20} />
                  </motion.div>
                ))}
              </>
            )}
          </AnimatePresence>
        </div>

        {/* Comment Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleComment}
          className="flex flex-col items-center space-y-1"
        >
          <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
            <MessageCircle className="text-white" size={24} />
          </div>
          <span className="text-white text-sm font-semibold">{comments}</span>
        </motion.button>

        {/* Share Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleShare}
          className="flex flex-col items-center space-y-1"
        >
          <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
            <Share2 className="text-white" size={24} />
          </div>
          <span className="text-white text-sm font-semibold">{shares}</span>
        </motion.button>
      </div>
      
      {/* Bottom Content */}
      <div className="absolute bottom-4 left-4 right-20 z-20">
        <h3 className="text-white font-bold text-xl mb-2">{name}</h3>
        <p className="text-slate-300 text-base mb-1">{title}</p>
        <p className="text-slate-400 text-sm mb-3">{company}</p>
        <p className="text-white text-sm">
          🎬 Amazing VFX work! ✨
          <br />
          <span className="text-lime-400">#Adityakeyedits</span>
        </p>
      </div>
    </motion.div>
  );
};

const VideoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(2);
  
  const videos = [
    { name: "Aditya Soni", title: "VFX Artist", company: "Adityakeyedits" },
    { name: "Cinematic Edit", title: "Video Editor", company: "Commercial Project" },
    { name: "Motion Graphics", title: "Motion Designer", company: "Brand Campaign" },
    { name: "Color Grading", title: "Colorist", company: "Music Video" },
    { name: "VFX Composition", title: "Compositor", company: "Short Film" },
    { name: "Sound Design", title: "Audio Engineer", company: "Documentary" },
    { name: "3D Animation", title: "3D Artist", company: "Corporate Video" },
  ];

  // Infinite loop logic
  const extendedVideos = [...videos, ...videos, ...videos]; // Triple the array for seamless loop
  const totalVideos = videos.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalVideos);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalVideos) % totalVideos);
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    // Disabled auto-scroll as requested
    // const interval = setInterval(nextSlide, 5000);
    // return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full">
      {/* Navigation Buttons */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={prevSlide}
        className="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 lg:w-14 lg:h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg"
      >
        <ChevronLeft size={16} className="lg:w-6 lg:h-6" />
      </motion.button>
      
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={nextSlide}
        className="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 lg:w-14 lg:h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg"
      >
        <ChevronRight size={16} className="lg:w-6 lg:h-6" />
      </motion.button>

      {/* Video Cards Container */}
      <div className="overflow-hidden px-12 lg:px-20">
        <motion.div
          className="flex gap-8 justify-center items-center"
          animate={{ x: -(currentIndex + totalVideos) * 288 }} // Fixed calculation for mobile
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          style={{ 
            transform: `translateX(-${(currentIndex + totalVideos) * (window.innerWidth < 1024 ? 288 : 352)}px)` 
          }}
        >
          {extendedVideos.map((video, index) => (
            <VideoCard
              key={`${video.name}-${index}`}
              name={video.name}
              title={video.title}
              company={video.company}
              isActive={index % totalVideos === currentIndex}
              index={index}
            />
          ))}
        </motion.div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 gap-2">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-lime-400 w-8' : 'bg-slate-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoCarousel;