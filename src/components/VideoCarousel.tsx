import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Heart, Share2, MessageCircle } from 'lucide-react';
import YouTubeEmbed from './YouTubeEmbed';
import { getYouTubeVideoId } from '../config/videoIds';

interface VideoCardProps {
  name: string;
  title: string;
  company: string;
  index: number;
  videoId: string;
  isPlaying: boolean;
  onHover: (index: number | null) => void;
  style: React.CSSProperties;
}

const VideoCard: React.FC<VideoCardProps> = ({
  name,
  title,
  company,
  index,
  videoId,
  isPlaying,
  onHover,
  style
}) => {
  const [likes, setLikes] = useState(Math.floor(Math.random() * 1000) + 100);
  const [shares, setShares] = useState(Math.floor(Math.random() * 50) + 10);
  const [comments, setComments] = useState(Math.floor(Math.random() * 100) + 20);

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

  return (
    <div
      className={`absolute top-0 left-0 w-[280px] sm:w-[320px] aspect-[9/16] rounded-3xl overflow-hidden bg-slate-800 cursor-pointer transition-all duration-500 ease-out shadow-2xl`}
      style={style}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
    >
      <YouTubeEmbed
        videoId={videoId}
        index={index}
        containerClassName="w-full h-full"
        isPlaying={isPlaying}
      />

      {/* Right Side Actions */}
      <div className="absolute right-3 bottom-32 z-20 flex flex-col space-y-4">
        <button
          onClick={handleLike}
          className="flex flex-col items-center space-y-1 group"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors backdrop-blur-sm">
            <Heart className="text-red-500 fill-red-500" size={18} />
          </div>
          <span className="text-white text-xs font-semibold drop-shadow-md">{likes.toLocaleString()}</span>
        </button>

        <button
          onClick={handleComment}
          className="flex flex-col items-center space-y-1 group"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors backdrop-blur-sm">
            <MessageCircle className="text-white" size={18} />
          </div>
          <span className="text-white text-xs font-semibold drop-shadow-md">{comments}</span>
        </button>

        <button
          onClick={handleShare}
          className="flex flex-col items-center space-y-1 group"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors backdrop-blur-sm">
            <Share2 className="text-white" size={18} />
          </div>
          <span className="text-white text-xs font-semibold drop-shadow-md">{shares}</span>
        </button>
      </div>

      {/* Bottom Content */}
      <div className="absolute bottom-4 left-4 right-16 z-20 pointer-events-none">
        <h3 className="text-white font-bold text-lg mb-1 drop-shadow-md">{name}</h3>
        <p className="text-slate-200 text-sm mb-1 drop-shadow-md">{title}</p>
        <p className="text-slate-300 text-xs mb-2 drop-shadow-md">{company}</p>
        <p className="text-white text-xs drop-shadow-md line-clamp-2">
          🎬 Amazing VFX work! ✨
          <br />
          <span className="text-lime-400 font-semibold">#Adityakeyedits</span>
        </p>
      </div>

      {/* Gradient Overlay for better text visibility */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none z-10" />
    </div>
  );
};

const VideoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const videos = [
    { name: "Aditya Soni", title: "VFX Artist", company: "Adityakeyedits" },
    { name: "Cinematic Edit", title: "Video Editor", company: "Commercial Project" },
    { name: "Motion Graphics", title: "Motion Designer", company: "Brand Campaign" },
    { name: "Color Grading", title: "Colorist", company: "Music Video" },
    { name: "VFX Composition", title: "Compositor", company: "Short Film" },
  ];

  const totalVideos = videos.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalVideos);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalVideos) % totalVideos);
  };

  // Auto-rotation
  useEffect(() => {
    if (hoveredIndex !== null || !isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, hoveredIndex, isAutoPlaying]);

  const getCardStyle = (index: number) => {
    // Calculate relative position handling wrapping
    let offset = (index - currentIndex);
    if (offset > totalVideos / 2) offset -= totalVideos;
    if (offset < -totalVideos / 2) offset += totalVideos;

    const isActive = offset === 0;
    const isPrev = offset === -1;
    const isNext = offset === 1;
    const isPrevPrev = offset === -2;
    const isNextNext = offset === 2;

    // Base styles
    let style: React.CSSProperties = {
      transform: 'translateX(-50%) scale(0.6)',
      left: '50%',
      zIndex: 5,
      opacity: 0,
      pointerEvents: 'none',
    };

    if (isActive) {
      style = {
        transform: 'translateX(-50%) scale(1)',
        left: '50%',
        zIndex: 30,
        opacity: 1,
        pointerEvents: 'auto',
      };
    } else if (isPrev) {
      style = {
        transform: 'translateX(-125%) scale(0.85)',
        left: '50%',
        zIndex: 20,
        opacity: 0.8, // Reduced transparency
        pointerEvents: 'auto',
        filter: 'brightness(0.5)',
      };
    } else if (isNext) {
      style = {
        transform: 'translateX(25%) scale(0.85)',
        left: '50%',
        zIndex: 20,
        opacity: 0.8, // Reduced transparency
        pointerEvents: 'auto',
        filter: 'brightness(0.5)',
      };
    } else if (isPrevPrev) {
      style = {
        transform: 'translateX(-180%) scale(0.7)',
        left: '50%',
        zIndex: 10,
        opacity: 0.6, // Reduced transparency
        pointerEvents: 'auto',
        filter: 'brightness(0.3)',
      };
    } else if (isNextNext) {
      style = {
        transform: 'translateX(80%) scale(0.7)',
        left: '50%',
        zIndex: 10,
        opacity: 0.6, // Reduced transparency
        pointerEvents: 'auto',
        filter: 'brightness(0.3)',
      };
    }

    // Mobile adjustments could be handled via media queries in CSS classes or here
    // For simplicity, we rely on the CSS classes for width/aspect-ratio and these transforms for positioning.

    return style;
  };

  return (
    <div
      className="relative w-full max-w-6xl mx-auto h-[600px] flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 z-40 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-white/20 hover:scale-110 transition-all"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 z-40 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-white/20 hover:scale-110 transition-all"
      >
        <ChevronRight size={24} />
      </button>

      {/* Video Cards Container */}
      <div className="relative w-full h-full flex items-center justify-center perspective-1000">
        {videos.map((video, index) => (
          <VideoCard
            key={index}
            name={video.name}
            title={video.title}
            company={video.company}
            index={index}
            videoId={getYouTubeVideoId(index)}
            isPlaying={index === hoveredIndex}
            onHover={setHoveredIndex}
            style={getCardStyle(index)}
          />
        ))}
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-40">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-lime-400 w-8' : 'bg-slate-600 w-2 hover:bg-slate-500'
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoCarousel;
