import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Volume2, VolumeX } from 'lucide-react';

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
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('error', handleError);

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
      video.muted = true;
      
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
    if (isHovered && canPlay && !isLoading) {
      playVideo();
    } else {
      pauseVideo();
    }
  }, [isHovered, canPlay, isLoading]);

  const handleVideoClick = async () => {
    const video = videoRef.current;
    if (!video || !canPlay) return;

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

  const handleTouchStart = () => {
    setIsHovered(true);
  };

  const handleTouchEnd = () => {
    setTimeout(() => setIsHovered(false), 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative group cursor-pointer bg-black overflow-hidden"
    >
      {/* Video Container */}
      <div className="relative aspect-[9/16] bg-black" onClick={handleVideoClick}>
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black z-30">
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
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 z-10">
            <div className="w-16 h-16 bg-white/20 flex items-center justify-center">
              <Play className="text-white ml-1" size={24} />
            </div>
          </div>
        )}

        {/* Sound Toggle */}
        <button
          onClick={toggleMute}
          className="absolute top-4 right-4 w-10 h-10 bg-black/50 flex items-center justify-center z-20 hover:bg-black/70 transition-colors"
        >
          {isMuted ? (
            <VolumeX className="text-white" size={16} />
          ) : (
            <Volume2 className="text-white" size={16} />
          )}
        </button>

        {/* Project Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 z-20">
          <div className="text-white">
            <div className="text-sm font-medium mb-1">VFX Project {index + 1}</div>
            <div className="text-xs text-slate-300">Professional Video Editing</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoReel;