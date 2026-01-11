import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface LandscapeVideoProps {
    videoId: string;
}

const LandscapeVideo: React.FC<LandscapeVideoProps> = ({ videoId }) => {
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    // Construct embed URL with necessary parameters
    // enablejsapi=1: Enables controlling the player via postMessage
    // autoplay=0: We control playback manually
    // controls=0: Hide player controls for cinematic feel
    // rel=0: Show related videos from the same channel (or none if possible)
    // loop=1: Loop the video
    // playlist={videoId}: Required for loop to work
    // mute=0: Unmute by default (user request)
    // modestbranding=1: Minimal YouTube branding
    const embedUrl = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&autoplay=0&controls=0&rel=0&showinfo=0&loop=1&playlist=${videoId}&mute=0&modestbranding=1`;

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
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-6xl mx-auto my-20 px-4 lg:px-6 z-10 relative"
        >
            {/* Cinematic Glow Effect */}
            <div className={`absolute -inset-4 bg-lime-400/20 blur-3xl rounded-[3rem] transition-opacity duration-700 ${isPlaying ? 'opacity-100' : 'opacity-0'}`} />

            <div
                className="relative w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-700/50 bg-slate-900 group"
                style={{ paddingBottom: '56.25%' }} // 16:9 Aspect Ratio
                onMouseEnter={() => setIsPlaying(true)}
                onMouseLeave={() => setIsPlaying(false)}
            >
                <div className={`absolute inset-0 bg-black/40 z-10 transition-opacity duration-500 pointer-events-none ${isPlaying ? 'opacity-0' : 'opacity-100'}`} />

                <iframe
                    ref={iframeRef}
                    src={embedUrl}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full pointer-events-none"
                />
            </div>
        </motion.div>
    );
};

export default LandscapeVideo;
