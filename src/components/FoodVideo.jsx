import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2 } from 'lucide-react';

export default function FoodVideo({
  src,
  poster,
  title,
  caption,
  aspectRatio = 'aspect-video',
  objectFit = 'contain',
  autoPlay = true,
  loop = true,
  className = '',
  showControls = true,
}) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  // IntersectionObserver to only play when in viewport for top-tier performance
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (autoPlay) {
              video.play().catch(() => {
                // Autoplay policy fallback
                setIsPlaying(false);
              });
              setIsPlaying(true);
            }
          } else {
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [autoPlay]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const duration = videoRef.current.duration;
    if (duration > 0) {
      setProgress((current / duration) * 100);
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setShowOverlay(true)}
      onMouseLeave={() => setShowOverlay(false)}
      className={`relative group overflow-hidden bg-white rounded-2xl transition-all duration-500 ${className}`}
    >
      <div className={`relative w-full ${aspectRatio} flex items-center justify-center`}>
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          playsInline
          muted={isMuted}
          loop={loop}
          preload="metadata"
          onLoadedData={() => setIsLoaded(true)}
          onTimeUpdate={handleTimeUpdate}
          onClick={togglePlay}
          className={`w-full h-full cursor-pointer transition-opacity duration-700 ${
            objectFit === 'contain' ? 'object-contain' : 'object-cover'
          } ${isLoaded ? 'opacity-100' : 'opacity-90'}`}
          aria-label={title || 'ITLYPIZZERIA Wood-Fired Kitchen Craft Film'}
        />

        {/* Minimal luxury control pills on hover */}
        {showControls && (
          <div
            className={`absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none transition-opacity duration-300 ${
              showOverlay ? 'opacity-100' : 'opacity-0 md:opacity-0'
            }`}
          >
            {/* Play/Pause Button */}
            <button
              onClick={togglePlay}
              type="button"
              className="pointer-events-auto flex items-center gap-2 px-3 py-1.5 bg-black/80 hover:bg-black text-white text-xs tracking-wider uppercase rounded-full backdrop-blur-md transition-all shadow-md"
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
            >
              {isPlaying ? <Pause size={12} /> : <Play size={12} fill="currentColor" />}
              <span>{isPlaying ? 'PAUSE' : 'PLAY'}</span>
            </button>

            {/* Title chip */}
            {title && (
              <div className="hidden sm:block px-3 py-1.5 bg-white/90 text-italian-black text-[11px] font-medium tracking-wider uppercase rounded-full backdrop-blur-md shadow-sm border border-black/5">
                {title}
              </div>
            )}

            {/* Audio toggle button */}
            <button
              onClick={toggleMute}
              type="button"
              className="pointer-events-auto flex items-center justify-center w-8 h-8 bg-black/80 hover:bg-black text-white rounded-full backdrop-blur-md transition-all shadow-md"
              aria-label={isMuted ? 'Unmute video' : 'Mute video'}
            >
              {isMuted ? <VolumeX size={13} /> : <Volume2 size={13} />}
            </button>
          </div>
        )}

        {/* Delicate progress bar line */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-black/5">
          <div
            className="h-full bg-italian-red transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {caption && (
        <p className="mt-3 text-xs text-italian-black-muted tracking-wide text-center italic">
          {caption}
        </p>
      )}
    </div>
  );
}

