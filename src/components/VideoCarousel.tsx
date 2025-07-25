import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Heart, Share2, Volume2, VolumeX, MessageCircle } from 'lucide-react';

interface VideoCardProps {
  name: string;
  title: string;
  company: string;
  isActive: boolean;
  index: number;
  videoUrl: string;
}

const videoUrls = [
  "https://res.cloudinary.com/dkzn3purp/video/upload/v1752169895/Toddler_Affirmation_Story_zxhpfs.mp4",
  "https://res.cloudinary.com/dkzn3purp/video/upload/v1752248716/STILL_STUCK_41_final_lujo7e.mp4",
  "https://res.cloudinary.com/dkzn3purp/video/upload/v1752248720/1st_ads_imxd1z.mp4",
  "https://res.cloudinary.com/dkzn3purp/video/upload/v1752472028/obesit_48_final_d3wdiw.mp4",
  "https://res.cloudinary.com/dkzn3purp/video/upload/v1752472029/5sign_for_thyroid_47_final_i0gkeu.mp4",
  "https://res.cloudinary.com/dkzn3purp/video/upload/v1752472029/STILL_STUCK_41_final_rsqwzx.mp4",
  "https://res.cloudinary.com/dkzn3purp/video/upload/v1752472103/trial_rqf1rb.mp4"
];

const VideoCard: React.FC<VideoCardProps> = ({ name, title, company, isActive, index, videoUrl }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [canPlay, setCanPlay] = useState(false);
  const [likes, setLikes] = useState(Math.floor(Math.random() * 1000) + 100);
  const [shares, setShares] = useState(Math.floor(Math.random() * 50) + 10);
  const [comments, setComments] = useState(Math.floor(Math.random() * 100) + 20);
  const [showHearts, setShowHearts] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      setIsLoading(false);
      setCanPlay(true);
    };

    const handleCanPlay = () => {
      setCanPlay(true);
    };

    const handleLoadStart = () => {
      setIsLoading(true);
      setCanPlay(false);
    };

    const handleError = () => {
      setIsLoading(false);
      setCanPlay(false);
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('error', handleError);

    // Mobile-specific setup
    video.muted = true;
    video.playsInline = true;
    video.setAttribute('webkit-playsinline', 'true');
    video.setAttribute('playsinline', 'true');
    video.preload = 'metadata';
    video.controls = false;

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('error', handleError);
    };
  }, []);

  const playVideo = async () => {
    const video = videoRef.current;
    if (!video || !isActive || !canPlay) return;

    try {
      // Ensure video is muted for mobile autoplay
      video.muted = true;
      
      // For mobile compatibility
      if (video.readyState < 3) {
        await new Promise((resolve) => {
          const onCanPlay = () => {
            video.removeEventListener('canplaythrough', onCanPlay);
            resolve(void 0);
          };
          video.addEventListener('canplaythrough', onCanPlay);
          video.load();
        });
      }

      const playPromise = video.play();
      if (playPromise !== undefined) {
        await playPromise;
        setIsPlaying(true);
      }
    } catch (error) {
      console.log("Video play failed:", error);
      setIsPlaying(false);
    }
  };

  const pauseVideo = () => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();
    setIsPlaying(false);
  };

  useEffect(() => {
    if (isActive && isHovered && canPlay && !isLoading) {
      playVideo();
    } else {
      pauseVideo();
    }
  }, [isActive, isHovered, canPlay, isLoading]);

  const handleVideoClick = async () => {
    const video = videoRef.current;
    if (!video || !isActive || !canPlay) return;

    if (video.paused) {
      await playVideo();
    } else {
      pauseVideo();
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

  // Mobile touch handlers
  const handleTouchStart = () => {
    if (isActive) {
      setIsHovered(true);
    }
  };

  const handleTouchEnd = () => {
    if (isActive) {
      setTimeout(() => setIsHovered(false), 3000); // Keep playing for 3 seconds on mobile
    }
  };

  return (
    <motion.div
      className={`relative flex-shrink-0 w-64 h-[480px] lg:w-80 lg:h-[600px] rounded-3xl overflow-hidden bg-slate-800 cursor-pointer transition-all duration-200 ${
        isActive ? 'scale-105 shadow-2xl ring-2 ring-lime-400' : 'scale-95 opacity-70'
      }`}
      whileHover={{ scale: isActive ? 1.08 : 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onClick={handleVideoClick}
    >
      {/* Loading Spinner */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-800 z-30">
          <div className="w-8 h-8 border-2 border-lime-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Video Background */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        src={videoUrl}
        muted={isMuted}
        loop
        playsInline
        webkit-playsinline="true"
        preload="metadata"
        controls={false}
        style={{ pointerEvents: 'none' }}
      />
      
      {/* Fade overlays at top and bottom */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
      
      {/* Play Button Overlay */}
      {!isPlaying && !isLoading && canPlay && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
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

      {/* Right Side Actions - Aligned to bottom right with responsive sizing */}
      <div className="absolute right-2 sm:right-3 lg:right-4 bottom-24 sm:bottom-28 lg:bottom-32 z-20 flex flex-col space-y-3 sm:space-y-4 lg:space-y-6">
        {/* Like Button with Hearts Animation */}
        <div className="relative">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLike}
            className="flex flex-col items-center space-y-1"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Heart className="text-red-500 fill-red-500" size={18} />
            </div>
            <span className="text-white text-xs sm:text-sm font-semibold">{likes.toLocaleString()}</span>
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
                    <Heart className="text-red-500 fill-red-500" size={16} />
                  </motion.div>
                ))}
              </>
            )}
          </AnimatePresence>
        </div>

        {/* Comment Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleComment}
          className="flex flex-col items-center space-y-1"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
            <MessageCircle className="text-white" size={18} />
          </div>
          <span className="text-white text-xs sm:text-sm font-semibold">{comments}</span>
        </motion.button>

        {/* Share Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleShare}
          className="flex flex-col items-center space-y-1"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
            <Share2 className="text-white" size={18} />
          </div>
          <span className="text-white text-xs sm:text-sm font-semibold">{shares}</span>
        </motion.button>
      </div>
      
      {/* Bottom Content */}
      <div className="absolute bottom-4 left-4 right-16 sm:right-20 lg:right-24 z-20">
        <h3 className="text-white font-bold text-lg lg:text-xl mb-2">{name}</h3>
        <p className="text-slate-300 text-sm lg:text-base mb-1">{title}</p>
        <p className="text-slate-400 text-xs lg:text-sm mb-3">{company}</p>
        <p className="text-white text-xs lg:text-sm">
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

  const totalVideos = videos.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalVideos);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalVideos) % totalVideos);
  };

  return (
    <div className="relative w-full">
      {/* Navigation Buttons */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={prevSlide}
        className="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg"
      >
        <ChevronLeft size={14} className="lg:w-5 lg:h-5" />
      </motion.button>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={nextSlide}
        className="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg"
      >
        <ChevronRight size={14} className="lg:w-5 lg:h-5" />
      </motion.button>

      {/* Video Cards Container */}
      <div className="overflow-hidden px-12 lg:px-20">
        <motion.div
          className="flex gap-8 justify-center items-center"
          animate={{ x: -currentIndex * (window.innerWidth < 1024 ? 288 : 352) }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {videos.map((video, index) => (
            <VideoCard
              key={`${video.name}-${index}`}
              name={video.name}
              title={video.title}
              company={video.company}
              isActive={index === currentIndex}
              index={index}
              videoUrl={videoUrls[index % videoUrls.length]}
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
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === currentIndex ? 'bg-lime-400 w-8' : 'bg-slate-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoCarousel;