import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import TypewriterEffect from './TypewriterEffect';

const CinematicHero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <div ref={ref} className="relative h-screen w-full overflow-hidden bg-black">
            {/* Background Image with Parallax */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 w-full h-full"
            >
                <img
                    src="/cinematic-hero.png"
                    alt="Cinematic Workspace"
                    className="w-full h-full object-cover object-[center_15%]"
                />
            </motion.div>

            {/* Vignette Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_60%,rgba(0,0,0,0.9)_100%)] pointer-events-none" />

            {/* Top Blend */}
            <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black via-black/80 to-transparent z-10 pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 pb-40">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight uppercase"
                    style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}
                >
                    I Am<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                        <TypewriterEffect
                            words={['VFX Artist', 'Video Editor', 'Director', 'Creator']}
                            className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400"
                            typeSpeed={120}
                            deleteSpeed={80}
                            delayBetweenWords={2500}
                        />
                    </span>
                </motion.h1>
            </div>

            {/* Scroll Arrow */}
            <motion.div
                style={{ opacity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ArrowDown className="text-white w-10 h-10 opacity-80" />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default CinematicHero;
