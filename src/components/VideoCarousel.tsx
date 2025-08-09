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
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      setIsLoading(false);
      setCanPlay(true);
      setHasError(false);
    };

    const handleCanPlay = () => {
      setCanPlay(true);
      setIsLoading(false);
    };

    const handleLoadStart = () => {
      setIsLoading(true);
      setCanPlay(false);
      setHasError(false);
    };

    const handleError = (e: any) => {
      console.log('Video error:', e);
      setIsLoading(false);
      setCanPlay(false);
      setHasError(true);
    };

    const handleLoadedMetadata = () => {
      setCanPlay(true);
      setIsLoading(false);
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('error', handleError);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);

    // Enhanced mobile setup
    video.muted = true;
    video.playsInline = true;
    video.setAttribute('webkit-playsinline', 'true');
    video.setAttribute('playsinline', 'true');
    video.setAttribute('x-webkit-airplay', 'allow');
    video.preload = 'metadata';
    video.controls = false;
    video.crossOrigin = 'anonymous';

    // Force load
    video.load();

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('error', handleError);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, [videoUrl]);

  const playVideo = async () => {
    const video = videoRef.current;
    if (!video || !isActive || !canPlay || hasError) return;

    try {
      // Ensure video is ready
      if (video.readyState < 2) {
        await new Promise((resolve) => {
          const onCanPlay = () => {
            video.removeEventListener('canplaythrough', onCanPlay);
            resolve(void 0);
          };
          video.addEventListener('canplaythrough', onCanPlay);
        });
      }

      // Force muted for mobile autoplay
      video.muted = true;
      
      const playPromise = video.play();
      if (playPromise !== undefined) {
        await playPromise;
        setIsPlaying(true);
      }
    } catch (error) {
      console.log("Video play failed:", error);
      setIsPlaying(false);
      
      // Retry with user interaction
      setTimeout(() => {
        if (video && !video.paused) {
          setIsPlaying(true);
        }
      }, 100);
    }
  };

  const pauseVideo = () => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();
    setIsPlaying(false);
  };

  useEffect(() => {
    if (isActive && (isHovered || window.innerWidth <= 768) && canPlay && !isLoading && !hasError) {
      playVideo();
    } else {
      pauseVideo();
    }
  }, [isActive, isHovered, canPlay, isLoading, hasError]);

  const handleVideoClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const video = videoRef.current;
    if (!video || !isActive || !canPlay || hasError) return;

    if (video.paused) {
      await playVideo();
    } else {
      pauseVideo();
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const video = videoRef.current;
    if (!video) return;
    
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLikes(prev => prev + 1);
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
  const handleTouchStart = (e: React.TouchEvent) => {
    if (isActive) {
      setIsHovered(true);
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (isActive) {
      // Keep playing for mobile
      setTimeout(() => {
        if (isActive) {
          setIsHovered(false);
        }
      }, 3000);
    }
  };

  return (
    <motion.div
      className={`relative flex-shrink-0 w-64 h-[480px] lg:w-80 lg:h-[600px] rounded-3xl overflow-hidden bg-slate-800 cursor-pointer transition-all duration-200 ${
        isActive ? 'scale-105 ring-2 ring-lime-400' : 'scale-95 opacity-70'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onClick={handleVideoClick}
    >
      {/* Loading Spinner */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-800 z-30">
          <div className="w-8 h-8 border-2 border-lime-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Error State */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-800 z-30">
          <div className="text-center text-white">
            <div className="text-4xl mb-2">⚠️</div>
            <div className="text-sm">Video unavailable</div>
          </div>
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
        x-webkit-airplay="allow"
        preload="metadata"
        controls={false}
        crossOrigin="anonymous"
        style={{ pointerEvents: 'none' }}
      />
      
      {/* Fade overlays */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
      
      {/* Play Button Overlay */}
      {!isPlaying && !isLoading && canPlay && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
            <Play className="text-white ml-1" size={32} />
          </div>
        </div>
      )}

      {/* Top Header */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-lime-400 to-purple-500 flex items-center justify-center">
            <span className="text-sm font-bold text-white">A</span>
          </div>
          <span className="text-white font-semibold text-sm">adityakeyedits</span>
        </div>
        
        {/* Sound Toggle */}
        <button
          onClick={toggleMute}
          className="w-10 h-10 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
        >
          {isMuted ? (
            <VolumeX className="text-white" size={16} />
          ) : (
            <Volume2 className="text-white" size={16} />
          )}
        </button>
      </div>

      {/* Right Side Actions */}
      <div className="absolute right-3 bottom-32 z-20 flex flex-col space-y-4">
        <button
          onClick={handleLike}
          className="flex flex-col items-center space-y-1"
        >
          <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
            <Heart className="text-red-500 fill-red-500" size={18} />
          </div>
          <span className="text-white text-xs font-semibold">{likes.toLocaleString()}</span>
        </button>

        <button
          onClick={handleComment}
          className="flex flex-col items-center space-y-1"
        >
          <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
            <MessageCircle className="text-white" size={18} />
          </div>
          <span className="text-white text-xs font-semibold">{comments}</span>
        </button>

        <button
          onClick={handleShare}
          className="flex flex-col items-center space-y-1"
        >
          <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
            <Share2 className="text-white" size={18} />
          </div>
          <span className="text-white text-xs font-semibold">{shares}</span>
        </button>
      </div>
      
      {/* Bottom Content */}
      <div className="absolute bottom-4 left-4 right-20 z-20">
        <h3 className="text-white font-bold text-lg mb-2">{name}</h3>
        <p className="text-slate-300 text-sm mb-1">{title}</p>
        <p className="text-slate-400 text-xs mb-3">{company}</p>
        <p className="text-white text-xs">
          🎬 Amazing VFX work! ✨
          <br />
          <span className="text-lime-400">#Adityakeyedits</span>
        </p>
      </div>
    </motion.div>
  );
};

const VideoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
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

  // Create infinite loop by duplicating videos
  const extendedVideos = [...videos, ...videos, ...videos];
  const startIndex = totalVideos; // Start from middle set

  const [displayIndex, setDisplayIndex] = useState(startIndex);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % totalVideos);
    setDisplayIndex((prev) => prev + 1);
    
    setTimeout(() => {
      setIsTransitioning(false);
      // Reset to middle when reaching end
      if (displayIndex >= totalVideos * 2 - 1) {
        setDisplayIndex(startIndex + currentIndex);
      }
    }, 300);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + totalVideos) % totalVideos);
    setDisplayIndex((prev) => prev - 1);
    
    setTimeout(() => {
      setIsTransitioning(false);
      // Reset to middle when reaching start
      if (displayIndex <= 0) {
        setDisplayIndex(startIndex + currentIndex);
      }
    }, 300);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [currentIndex, isTransitioning]);

  return (
    <div className="relative w-full">
      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        disabled={isTransitioning}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform disabled:opacity-50"
      >
        <ChevronLeft size={20} />
      </button>
      
      <button
        onClick={nextSlide}
        disabled={isTransitioning}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform disabled:opacity-50"
      >
        <ChevronRight size={20} />
      </button>

      {/* Video Cards Container - Fixed width to prevent empty space */}
      <div className="w-full overflow-hidden">
        <div
          className={`flex gap-8 justify-center items-center transition-transform duration-300 ease-out`}
          style={{ 
            transform: `translateX(${-displayIndex * (window.innerWidth < 1024 ? 288 : 352)}px)`,
          }}
        >
          {extendedVideos.map((video, index) => (
            <VideoCard
              key={`${video.name}-${index}`}
              name={video.name}
              title={video.title}
              company={video.company}
              isActive={Math.abs(index - displayIndex) <= 1} // Activate center and adjacent cards
              index={index}
              videoUrl={videoUrls[index % videoUrls.length]}
            />
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 gap-2">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isTransitioning) {
                setCurrentIndex(index);
                setDisplayIndex(startIndex + index);
              }
            }}
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