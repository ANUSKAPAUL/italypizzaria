import React, { useRef, useEffect, useState } from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ASSETS } from '../data/assets';

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ onOpenMenu }) {
  const containerRef = useRef(null);
  const stickyRef = useRef(null);
  const videoRef = useRef(null);
  const videoWrapRef = useRef(null);

  // Typography & content element refs
  const eyebrowRef = useRef(null);
  const line1WrapperRef = useRef(null);
  const line1TextRef = useRef(null);
  const line2WrapperRef = useRef(null);
  const line2TextRef = useRef(null);
  const supportingTextRef = useRef(null);
  const ctaButtonsRef = useRef(null);
  const proofChipsRef = useRef(null);
  const scrollPromptRef = useRef(null);

  // Scrub tracking refs
  const targetTimeRef = useRef(0);
  const rafIdRef = useRef(null);
  const isVideoReadyRef = useRef(false);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mobileDevice = window.matchMedia('(max-width: 768px)').matches;

    const video = videoRef.current;

    // Handle video metadata
    const handleLoadedMetadata = () => {
      isVideoReadyRef.current = true;
      if (video) {
        video.currentTime = 0;
      }
    };

    if (video) {
      if (video.readyState >= 1) {
        isVideoReadyRef.current = true;
      } else {
        video.addEventListener('loadedmetadata', handleLoadedMetadata);
      }
    }

    // -------------------------------------------------------------
    // ACCESSIBILITY: REDUCED MOTION FALLBACK
    // -------------------------------------------------------------
    if (prefersReducedMotion) {
      if (videoWrapRef.current) gsap.set(videoWrapRef.current, { opacity: 0 });
      gsap.set(
        [
          eyebrowRef.current,
          line1TextRef.current,
          line2TextRef.current,
          supportingTextRef.current,
          ctaButtonsRef.current,
          proofChipsRef.current,
        ],
        { opacity: 1, yPercent: 0, y: 0 }
      );
      if (scrollPromptRef.current) gsap.set(scrollPromptRef.current, { opacity: 0 });
      return;
    }

    // -------------------------------------------------------------
    // MOBILE BEHAVIOR: Autoplay muted video instead of frame scrubbing
    // -------------------------------------------------------------
    if (mobileDevice && video) {
      video.play().catch(() => {});
    }

    // -------------------------------------------------------------
    // SMOOTH rAF VIDEO SCRUBBING LOOP (Desktop / Tablet)
    // -------------------------------------------------------------
    const updateVideoProgress = () => {
      if (!mobileDevice && video && isVideoReadyRef.current && video.duration > 0) {
        if (!video.seeking) {
          const delta = Math.abs(video.currentTime - targetTimeRef.current);
          // Only seek if difference exceeds ~1 frame (30ms) to ensure smooth playback
          if (delta > 0.03) {
            video.currentTime = targetTimeRef.current;
          }
        }
      }
      rafIdRef.current = requestAnimationFrame(updateVideoProgress);
    };
    rafIdRef.current = requestAnimationFrame(updateVideoProgress);

    // -------------------------------------------------------------
    // INITIAL ELEMENT STATES
    // -------------------------------------------------------------
    // Video starts completely clean (opacity 0) for Phase 1 intro
    gsap.set(videoWrapRef.current, { opacity: 0, scale: 1.05 });

    // Eyebrow badge
    gsap.set(eyebrowRef.current, { opacity: 0, y: 15 });

    // Headline lines hidden below mask with ample headroom
    gsap.set(line1TextRef.current, { yPercent: 115, opacity: 0 });
    gsap.set(line2TextRef.current, { yPercent: 115, opacity: 0 });

    // Supporting copy and buttons
    gsap.set(supportingTextRef.current, { opacity: 0, y: 24 });
    gsap.set(ctaButtonsRef.current, { opacity: 0, y: 24 });
    gsap.set(proofChipsRef.current, { opacity: 0, y: 20 });
    gsap.set(scrollPromptRef.current, { opacity: 1, y: 0 });

    // -------------------------------------------------------------
    // MASTER CINEMATIC SCROLL TIMELINE
    // -------------------------------------------------------------
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.2,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            // Map scroll progress to video duration during 0% -> 65% of hero scroll
            if (!mobileDevice && video && video.duration > 0) {
              const videoProgress = Math.min(Math.max(self.progress / 0.65, 0), 1);
              targetTimeRef.current = videoProgress * video.duration;
            }
          },
        },
      });

      // ===========================================================
      // PHASE 1 — VIDEO INTRODUCTION (0–20% scroll progress)
      // ===========================================================
      // Prompt fades out immediately upon scrolling
      tl.to(
        scrollPromptRef.current,
        { opacity: 0, y: -18, duration: 0.1, ease: 'power2.in' },
        0
      );

      // Pizza video smoothly fades in full-screen and settles to natural scale
      tl.to(
        videoWrapRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 0.2,
          ease: 'power2.out',
        },
        0
      );

      // ===========================================================
      // PHASE 2 — FOOD EXPLOSION (20–50% scroll progress)
      // ===========================================================
      // Video is playing at 100% visual intensity via onUpdate scrubber.
      // Hold clean visual prominence without typography intrusion.
      tl.to({}, { duration: 0.3 }, 0.2);

      // ===========================================================
      // PHASE 3 — HEADLINE REVEAL (50–70% scroll progress)
      // ===========================================================
      // Eyebrow badge introduces the brand
      tl.to(
        eyebrowRef.current,
        { opacity: 1, y: 0, duration: 0.1, ease: 'power2.out' },
        0.5
      );

      // Line 1: ITALIAN SOUL. (Dark charcoal)
      tl.to(
        line1TextRef.current,
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.15,
          ease: 'power3.out',
        },
        0.52
      );

      // Line 2: UNFORGETTABLE TASTE. (Italian tomato red, staggered)
      tl.to(
        line2TextRef.current,
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.15,
          ease: 'power3.out',
        },
        0.57
      );

      // At the same time, gradually reduce video opacity (smooth transition)
      tl.to(
        videoWrapRef.current,
        {
          opacity: 0.35,
          duration: 0.2,
          ease: 'power2.inOut',
        },
        0.52
      );

      // ===========================================================
      // PHASE 4 — BACKGROUND FADE (70–90% scroll progress)
      // ===========================================================
      // Smoothly fade video from 0.35 down to 0, leaving pure white background
      tl.to(
        videoWrapRef.current,
        {
          opacity: 0,
          duration: 0.18,
          ease: 'power2.in',
        },
        0.7
      );

      // Supporting description fades in with elegant upward movement
      tl.to(
        supportingTextRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.14,
          ease: 'power2.out',
        },
        0.72
      );

      // ===========================================================
      // PHASE 5 — FINAL HERO STATE (90–100% scroll progress)
      // ===========================================================
      // CTA buttons reveal smoothly
      tl.to(
        ctaButtonsRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.12,
          ease: 'power2.out',
        },
        0.86
      );

      // Proof chips reveal
      tl.to(
        proofChipsRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.1,
          ease: 'power2.out',
        },
        0.91
      );

      // Final rest period so user can absorb and click CTAs before next section
      tl.to({}, { duration: 0.08 });
    }, containerRef);

    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      if (video) video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      ctx.revert();
    };
  }, []);

  const scrollToStory = (e) => {
    e.preventDefault();
    document.querySelector('#story')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToExperience = (e) => {
    e.preventDefault();
    document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    // Outer scroll track: 320vh provides ample scrub distance
    <div
      id="hero"
      ref={containerRef}
      className="relative h-[320vh] bg-white"
    >
      {/* Pinned Sticky Viewport */}
      <div
        ref={stickyRef}
        className="sticky top-0 h-screen w-full overflow-hidden bg-white flex flex-col justify-between items-center"
      >
        {/* ========================================================= */}
        {/* LAYER 0: FULLSCREEN PIZZA EXPLOSION VIDEO                 */}
        {/* ========================================================= */}
        <div
          ref={videoWrapRef}
          className="absolute inset-0 z-0 w-full h-full pointer-events-none overflow-hidden"
          style={{ willChange: 'opacity, transform' }}
        >
          <video
            ref={videoRef}
            src={ASSETS.videos.hero.src}
            poster={ASSETS.videos.hero.poster}
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover select-none"
            aria-hidden="true"
          />

          {/* Gentle cinematic contrast overlay for optimal text legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/40 pointer-events-none" />
        </div>

        {/* ========================================================= */}
        {/* LAYER 1: TYPOGRAPHY, SUPPORTING COPY & CTAS              */}
        {/* ========================================================= */}
        <div className="relative z-20 flex-1 flex flex-col items-center justify-center w-full max-w-6xl mx-auto px-6 sm:px-8 text-center pt-24 pb-16">
          <div className="w-full flex flex-col items-center">
            
            {/* Eyebrow Label */}
            <div
              ref={eyebrowRef}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/10 bg-white/90 backdrop-blur-md shadow-xs mb-4 sm:mb-6 pointer-events-auto"
            >
              <span className="w-2 h-2 rounded-full bg-[#C83A32] animate-pulse" />
              <span className="text-[10px] sm:text-xs tracking-super-wide uppercase font-semibold text-[#171717]">
                A Little Italy • A Lot of Flavour
              </span>
            </div>

            {/* 
              Headline:
              Fixed clipping issue by using dedicated overflow wrappers with ample padding
              and balanced line-height (1.12), ensuring tall capital serifs, accents, and
              italic descenders/swashes remain 100% visible throughout the animation.
            */}
            <h1 className="font-serif tracking-tight select-none text-center w-full my-1 sm:my-2">
              {/* Line 1: ITALIAN SOUL. (Dark charcoal #171717) */}
              <span
                ref={line1WrapperRef}
                className="block overflow-hidden py-1 sm:py-2.5 px-2"
              >
                <span
                  ref={line1TextRef}
                  className="block font-medium text-[#171717]"
                  style={{
                    fontSize: 'clamp(2.75rem, 6.8vw, 7.25rem)',
                    lineHeight: 1.1,
                    willChange: 'transform, opacity',
                  }}
                >
                  ITALIAN SOUL.
                </span>
              </span>

              {/* Line 2: UNFORGETTABLE TASTE. (Italian tomato red #C83A32, italic) */}
              <span
                ref={line2WrapperRef}
                className="block overflow-hidden py-1 sm:py-2.5 px-2"
              >
                <span
                  ref={line2TextRef}
                  className="block font-light italic text-[#C83A32]"
                  style={{
                    fontSize: 'clamp(2.75rem, 6.8vw, 7.25rem)',
                    lineHeight: 1.1,
                    willChange: 'transform, opacity',
                  }}
                >
                  UNFORGETTABLE TASTE.
                </span>
              </span>
            </h1>

            {/* Supporting Copy */}
            <div
              ref={supportingTextRef}
              className="mt-4 sm:mt-6 max-w-xl mx-auto space-y-1"
            >
              <p className="text-base sm:text-lg md:text-xl text-[#252525] font-light leading-relaxed">
                Freshly baked happiness, inspired by the heart of Italy.
              </p>
              <p className="text-sm sm:text-base text-[#555555] font-normal tracking-wide">
                Crafted with passion. Baked to perfection.
              </p>
            </div>

            {/* Call To Action Buttons */}
            <div
              ref={ctaButtonsRef}
              className="flex flex-wrap items-center justify-center gap-4 mt-7 sm:mt-9 pointer-events-auto"
            >
              <button
                type="button"
                onClick={onOpenMenu}
                className="btn-luxury-primary shadow-xl"
              >
                <span>EXPLORE OUR MENU</span>
                <ArrowUpRight size={15} />
              </button>

              <a
                href="#story"
                onClick={scrollToStory}
                className="btn-luxury-secondary bg-white/95 backdrop-blur-sm shadow-md"
              >
                <span>OUR STORY</span>
              </a>
            </div>

            {/* Proof Metric Chips */}
            <div
              ref={proofChipsRef}
              className="hidden sm:flex items-center justify-center gap-8 mt-10 pt-6 border-t border-black/10 max-w-md mx-auto pointer-events-auto"
            >
              <div className="text-center">
                <span className="font-serif text-2xl font-bold text-[#171717] block leading-none">
                  48h
                </span>
                <span className="text-[9px] tracking-wider uppercase text-[#555555] mt-1.5 block">
                  Slow Ferment
                </span>
              </div>
              <div className="w-[1px] h-8 bg-black/10" />
              <div className="text-center">
                <span className="font-serif text-2xl font-bold text-[#171717] block leading-none">
                  450°C
                </span>
                <span className="text-[9px] tracking-wider uppercase text-[#555555] mt-1.5 block">
                  Beechwood Oven
                </span>
              </div>
              <div className="w-[1px] h-8 bg-black/10" />
              <div className="text-center">
                <span className="font-serif text-2xl font-bold text-[#171717] block leading-none">
                  100%
                </span>
                <span className="text-[9px] tracking-wider uppercase text-[#555555] mt-1.5 block">
                  San Marzano D.O.P.
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================= */}
        {/* LAYER 2: BOTTOM SCROLL INDICATOR PROMPT                   */}
        {/* ========================================================= */}
        <div
          ref={scrollPromptRef}
          className="relative z-30 w-full max-w-7xl mx-auto px-6 sm:px-8 pb-7 flex items-center justify-between text-[#555555] pointer-events-none"
        >
          <span className="text-[10px] tracking-super-wide uppercase font-semibold text-[#171717] hidden sm:inline">
            ITLY Pizzeria &amp; Bakehouse
          </span>

          <a
            href="#experience"
            onClick={scrollToExperience}
            className="flex items-center gap-2 text-[10px] sm:text-xs tracking-ultra-wide uppercase hover:text-[#C83A32] transition-colors group cursor-pointer pointer-events-auto mx-auto sm:mx-0"
          >
            <span className="font-semibold text-[#171717] group-hover:text-[#C83A32]">
              SCROLL TO IGNITE THE FLAVOUR
            </span>
            <ArrowDown size={14} className="animate-bounce text-[#C83A32]" />
          </a>

          <span className="text-[10px] tracking-super-wide uppercase font-medium hidden sm:inline">
            Milano • Napoli Hearth
          </span>
        </div>

      </div>
    </div>
  );
}
