import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface YouTubeEmbedProps {
  videoId: string;
  index: number;
  containerClassName?: string;
  isPlaying?: boolean;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({
  videoId,
  index,
  containerClassName = '',
  isPlaying = false,
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Construct embed URL with necessary parameters
  // enablejsapi=1: Enables controlling the player via postMessage
  // autoplay=0: We control playback manually
  // controls=0: Hide player controls
  // rel=0: Show related videos from the same channel (or none if possible)
  // loop=1: Loop the video
  // playlist={videoId}: Required for loop to work
  // mute=0: Unmute by default (user request)
  const embedUrl = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&autoplay=0&controls=0&rel=0&showinfo=0&loop=1&playlist=${videoId}&mute=0`;

  useEffect(() => {
    if (!iframeRef.current?.contentWindow) return;

    const action = isPlaying ? 'playVideo' : 'pauseVideo';
    iframeRef.current.contentWindow.postMessage(
      JSON.stringify({
        event: 'command',
        func: action,
        args: []
      }),
      '*'
    );
  }, [isPlaying]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.02 }}
      className={`relative group cursor-pointer ${containerClassName}`}
    >
      <div
        style={{
          paddingBottom: '177.78%', // 9:16 Aspect Ratio
          position: 'relative',
          backgroundColor: '#0f172a',
          borderRadius: '1.5rem',
          overflow: 'hidden',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
        }}
      >
        <iframe
          ref={iframeRef}
          width="100%"
          height="100%"
          src={embedUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="pointer-events-none" // Disable all interactions with the iframe
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        />
      </div>
    </motion.div>
  );
};

export default YouTubeEmbed;
