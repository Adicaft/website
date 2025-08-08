import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Heart, Share2, MoreHorizontal, Volume2, VolumeX } from 'lucide-react';

interface VideoReelProps {
  index: number;
  enableSound?: boolean;
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

const VideoReel: React.FC<VideoReelProps> = ({ index, enableSound = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [likes, setLikes] = useState(Math.floor(Math.random() * 1000) + 100);
  const [shares, setShares] = useState(Math.floor(Math.random() * 50) + 10);
  const [isLoading, setIsLoading] = useState(true);
  const [canPlay, setCanPlay] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const videoUrl = videoUrls[index % videoUrls.length];

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
      console.log('Video error for:', videoUrl);
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
  }, [videoUrl]);

  const playVideo = async () => {
    const video = videoRef.current;
    if (!video || !canPlay) return;

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

  // Handle hover/touch for desktop and mobile
  useEffect(() => {
    if (isHovered && canPlay && !isLoading) {
      playVideo();
    } else {
      pauseVideo();
    }
  }, [isHovered, canPlay, isLoading]);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleVideoClick = async () => {
    const video = videoRef.current;
    if (!video || !canPlay) return;

    if (video.paused) {
      await playVideo();
    } else {
      pauseVideo();
    }
  };

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLikes(prev => prev + 1);
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShares(prev => prev + 1);
  };

  // Mobile touch handlers
  const handleTouchStart = () => {
    setIsHovered(true);
  };

  const handleTouchEnd = () => {
    setTimeout(() => setIsHovered(false), 3000); // Keep playing for 3 seconds on mobile
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative group cursor-pointer"
    >
      {/* Ambient Glow */}
      <div className={`absolute -inset-1 lg:-inset-2 bg-gradient-to-r from-lime-400/5 via-purple-500/5 to-pink-500/5 rounded-2xl lg:rounded-3xl transition-opacity duration-200 ${isHovered ? 'opacity-40' : 'opacity-20'}`} />
      
      {/* Main Container */}
      <div className="relative bg-slate-900 rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl border border-slate-700/30">
        {/* Header */}
        <div className="absolute top-3 lg:top-4 left-3 lg:left-4 right-3 lg:right-4 z-20 flex items-center justify-between">
          <div className="flex items-center space-x-2 lg:space-x-3">
            <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-gradient-to-br from-lime-400 to-purple-500 flex items-center justify-center">
              <span className="text-xs lg:text-sm font-bold text-white">A</span>
            </div>
            <span className="text-white font-semibold text-xs lg:text-sm">adityakeyedits</span>
          </div>
          <MoreHorizontal className="text-white" size={16} />
        </div>

        {/* Video Container */}
        <div className="relative aspect-[9/16] bg-slate-800" onClick={handleVideoClick}>
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-slate-800 z-30">
              <div className="w-8 h-8 border-2 border-lime-400 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          
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
          
          {/* Play Overlay */}
          {!isPlaying && !isLoading && canPlay && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 z-10">
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Play className="text-white ml-1" size={20} />
              </div>
            </div>
          )}

          {/* Sound Toggle */}
          <button
            onClick={toggleMute}
            className="absolute top-3 right-3 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center z-20"
          >
            {isMuted ? (
              <VolumeX className="text-white" size={14} />
            ) : (
              <Volume2 className="text-white" size={14} />
            )}
          </button>
        </div>

        {/* Right Side Actions */}
        <div className="absolute right-2 sm:right-3 lg:right-4 bottom-12 sm:bottom-16 lg:bottom-20 z-20 flex flex-col space-y-2 sm:space-y-3 lg:space-y-4">
          <button
            onClick={handleLike}
            className="flex flex-col items-center space-y-1"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/10 rounded-full flex items-center justify-center">
              <Heart className="text-white" size={14} />
            </div>
            <span className="text-white text-xs font-semibold">{likes.toLocaleString()}</span>
          </button>

          <button
            onClick={handleShare}
            className="flex flex-col items-center space-y-1"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/10 rounded-full flex items-center justify-center">
              <Share2 className="text-white" size={14} />
            </div>
            <span className="text-white text-xs font-semibold">{shares}</span>
          </button>
        </div>

        {/* Bottom Caption */}
        <div className="absolute bottom-3 lg:bottom-4 left-3 lg:left-4 right-12 sm:right-16 lg:right-20 z-20">
          <p className="text-white text-xs lg:text-sm leading-relaxed">
            🎬 VFX Magic in Action ✨
            <br />
            <span className="text-lime-400">#VFX #VideoEditing #AfterEffects #Adityakeyedits</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoReel;