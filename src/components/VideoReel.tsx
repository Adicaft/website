import React, { useState } from 'react';
import { Heart, Share2 } from 'lucide-react';
import YouTubeEmbed from './YouTubeEmbed';
import { getYouTubeVideoId } from '../config/videoIds';

interface VideoReelProps {
  index: number;
  enableSound?: boolean;
}

const VideoReel: React.FC<VideoReelProps> = ({ index }) => {
  const [likes, setLikes] = useState(Math.floor(Math.random() * 1000) + 100);
  const [shares, setShares] = useState(Math.floor(Math.random() * 50) + 10);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = getYouTubeVideoId(index);

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLikes(prev => prev + 1);
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShares(prev => prev + 1);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsPlaying(true)}
      onMouseLeave={() => setIsPlaying(false)}
      onClick={togglePlay}
    >
      <YouTubeEmbed videoId={videoId} index={index} isPlaying={isPlaying} />

      <div className={`absolute right-2 sm:right-3 lg:right-4 bottom-12 sm:bottom-16 lg:bottom-20 z-20 flex flex-col space-y-2 sm:space-y-3 lg:space-y-4 transition-opacity duration-300 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
        <button
          onClick={handleLike}
          className="flex flex-col items-center space-y-1"
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
            <Heart className="text-white" size={14} />
          </div>
          <span className="text-white text-xs font-semibold">{likes.toLocaleString()}</span>
        </button>

        <button
          onClick={handleShare}
          className="flex flex-col items-center space-y-1"
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
            <Share2 className="text-white" size={14} />
          </div>
          <span className="text-white text-xs font-semibold">{shares}</span>
        </button>
      </div>
    </div>
  );
};

export default VideoReel;