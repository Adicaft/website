import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Heart, Share2, MoreHorizontal, Volume2, VolumeX } from 'lucide-react';

interface VideoReelProps {
  index: number;
}

const VideoReel: React.FC<VideoReelProps> = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [likes, setLikes] = useState(Math.floor(Math.random() * 1000) + 100);
  const [shares, setShares] = useState(Math.floor(Math.random() * 50) + 10);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const likeInterval = setInterval(() => {
      setLikes(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 5000);

    const shareInterval = setInterval(() => {
      setShares(prev => prev + 1);
    }, 8000);

    return () => {
      clearInterval(likeInterval);
      clearInterval(shareInterval);
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (isHovered) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  }, [isHovered]);

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
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShares(prev => prev + 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group cursor-pointer"
    >
      {/* Ambient Glow */}
      <div className={`absolute -inset-2 lg:-inset-4 bg-gradient-to-r from-lime-400/20 via-purple-500/20 to-pink-500/20 rounded-2xl lg:rounded-3xl blur-xl transition-all duration-500 ${isHovered ? 'opacity-100 scale-110' : 'opacity-50 scale-100'}`} />
      
      {/* Main Container */}
      <div className="relative bg-slate-900 rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl border border-slate-700/50">
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
        <div className="relative aspect-[9/16] bg-slate-800">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            src="https://res.cloudinary.com/dkzn3purp/video/upload/v1752169895/Toddler_Affirmation_Story_zxhpfs.mp4"
            muted={isMuted}
            loop
            playsInline
            preload="metadata"
          />
          
          {/* Play Overlay */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Play className="text-white ml-1" size={20} />
              </div>
            </div>
          )}

          {/* Sound Toggle */}
          <button
            onClick={toggleMute}
            className="absolute top-3 right-3 w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center z-10"
          >
            {isMuted ? (
              <VolumeX className="text-white" size={14} />
            ) : (
              <Volume2 className="text-white" size={14} />
            )}
          </button>
        </div>

        {/* Right Side Actions */}
        <div className="absolute right-2 lg:right-4 bottom-16 lg:bottom-20 z-20 flex flex-col space-y-3 lg:space-y-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleLike}
            className="flex flex-col items-center space-y-1"
          >
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Heart className="text-white" size={16} />
            </div>
            <span className="text-white text-xs font-semibold">{likes.toLocaleString()}</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleShare}
            className="flex flex-col items-center space-y-1"
          >
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Share2 className="text-white" size={16} />
            </div>
            <span className="text-white text-xs font-semibold">{shares}</span>
          </motion.button>
        </div>

        {/* Bottom Caption */}
        <div className="absolute bottom-3 lg:bottom-4 left-3 lg:left-4 right-12 lg:right-16 z-20">
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