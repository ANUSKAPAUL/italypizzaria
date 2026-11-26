import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function AudioToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const gainNodeRef = useRef(null);
  const noiseSourceRef = useRef(null);

  const startSoundscape = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;

      const ctx = new AudioContext();
      audioCtxRef.current = ctx;

      // Create pink noise buffer for warm wood-fire hearth crackle simulation
      const bufferSize = ctx.sampleRate * 2;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        output[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
        output[i] *= 0.04; // Gentle warm hearth level
        b6 = white * 0.115926;
      }

      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      // Lowpass filter to emulate warm crackling hearth warmth
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(600, ctx.currentTime);

      const gainNode = ctx.createGain();
      gainNode.gain.setValueAtTime(0.01, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.35, ctx.currentTime + 1.5);

      whiteNoise.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(ctx.destination);

      whiteNoise.start(0);

      noiseSourceRef.current = whiteNoise;
      gainNodeRef.current = gainNode;
      setIsPlaying(true);
    } catch (e) {
      console.warn('AudioContext not allowed without gesture', e);
    }
  };

  const stopSoundscape = () => {
    if (gainNodeRef.current && audioCtxRef.current) {
      gainNodeRef.current.gain.linearRampToValueAtTime(0.01, audioCtxRef.current.currentTime + 0.5);
      setTimeout(() => {
        try {
          if (noiseSourceRef.current) noiseSourceRef.current.stop();
          if (audioCtxRef.current) audioCtxRef.current.close();
        } catch (e) {}
        setIsPlaying(false);
      }, 500);
    } else {
      setIsPlaying(false);
    }
  };

  const toggleSound = () => {
    if (isPlaying) {
      stopSoundscape();
    } else {
      startSoundscape();
    }
  };

  useEffect(() => {
    return () => {
      try {
        if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
          audioCtxRef.current.close();
        }
      } catch (e) {}
    };
  }, []);

  return (
    <button
      onClick={toggleSound}
      type="button"
      className="fixed bottom-6 left-6 z-40 flex items-center gap-2.5 px-3.5 py-2 bg-white/90 hover:bg-white text-italian-black rounded-full border border-black/10 shadow-[0_4px_20px_rgba(0,0,0,0.08)] backdrop-blur-md transition-all hover:scale-105 group"
      aria-label={isPlaying ? 'Mute wood-fire soundscape' : 'Play wood-fire ambiance soundscape'}
      title="Wood-fire oven hearth ambiance"
    >
      <div className="relative flex items-center justify-center">
        {isPlaying ? (
          <Volume2 size={14} className="text-italian-red animate-pulse" />
        ) : (
          <VolumeX size={14} className="text-italian-black-muted group-hover:text-italian-black" />
        )}
      </div>

      <span className="text-[10px] tracking-wider uppercase font-semibold text-italian-black hidden sm:inline">
        {isPlaying ? 'Hearth Audio ON' : 'Ambiance Audio'}
      </span>

      {isPlaying && (
        <span className="flex items-center gap-0.5 ml-0.5">
          <span className="w-0.5 h-2 bg-italian-red animate-pulse" />
          <span className="w-0.5 h-3 bg-italian-red animate-pulse delay-75" />
          <span className="w-0.5 h-1.5 bg-italian-red animate-pulse delay-150" />
        </span>
      )}
    </button>
  );
}

