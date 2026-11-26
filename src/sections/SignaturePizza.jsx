import React, { useRef, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ASSETS } from '../data/assets';

gsap.registerPlugin(ScrollTrigger);

export default function SignaturePizza({ onOpenMenu }) {
  const pinSectionRef = useRef(null);
  const triggerRef = useRef(null);
  const headlineRef = useRef(null);
  const compositionRef = useRef(null);
  const quoteRef = useRef(null);

  const label1Ref = useRef(null);
  const label2Ref = useRef(null);
  const label3Ref = useRef(null);
  const label4Ref = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 1024;
    const ctx = gsap.context(() => {
      if (!isMobile) {
        // Desktop Pinned Cinematic Scroll Sequence
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: triggerRef.current,
            pin: true,
            start: 'top top',
            end: '+=160%',
            scrub: 1,
            anticipatePin: 1,
          },
        });

        // Initial setup
        gsap.set([label1Ref.current, label2Ref.current, label3Ref.current, label4Ref.current], {
          opacity: 0,
          scale: 0.85,
        });
        gsap.set(quoteRef.current, { opacity: 0, y: 30 });

        // Step 1: Scale composition into focus
        tl.fromTo(
          compositionRef.current,
          { scale: 0.92, y: 40 },
          { scale: 1, y: 0, duration: 1, ease: 'none' }
        )
          // Step 2: Fresh Basil reveal
          .to(label1Ref.current, { opacity: 1, scale: 1, duration: 0.7 }, '+=0.2')
          // Step 3: Melted Mozzarella reveal
          .to(label2Ref.current, { opacity: 1, scale: 1, duration: 0.7 }, '+=0.2')
          // Step 4: Rich Tomato Sauce reveal
          .to(label3Ref.current, { opacity: 1, scale: 1, duration: 0.7 }, '+=0.2')
          // Step 5: Golden Crust reveal
          .to(label4Ref.current, { opacity: 1, scale: 1, duration: 0.7 }, '+=0.2')
          // Step 6: Closing Leonardo Da Vinci Quote
          .to(quoteRef.current, { opacity: 1, y: 0, duration: 0.8 }, '+=0.3');
      } else {
        // Tablet & Mobile Scroll Reveal without harsh pinning
        gsap.fromTo(
          [label1Ref.current, label2Ref.current, label3Ref.current, label4Ref.current],
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.2,
            duration: 0.8,
            scrollTrigger: {
              trigger: compositionRef.current,
              start: 'top 75%',
            },
          }
        );

        gsap.fromTo(
          quoteRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: quoteRef.current,
              start: 'top 85%',
            },
          }
        );
      }
    }, pinSectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pinSectionRef} className="relative bg-white border-t border-black/5">
      <section
        id="signature"
        ref={triggerRef}
        className="relative min-h-screen flex flex-col justify-between py-20 px-6 sm:px-8 max-w-7xl mx-auto overflow-hidden"
      >
        {/* Top Header */}
        <div ref={headlineRef} className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-italian-cream text-italian-black border border-black/5">
            <span className="w-1.5 h-1.5 rounded-full bg-italian-red animate-pulse" />
            <span className="text-[10px] tracking-super-wide uppercase font-semibold">
              Our Signature Slice
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-italian-black font-normal leading-tight tracking-tight">
            THE ART OF A <span className="italic font-light text-italian-red">PERFECT SLICE.</span>
          </h2>
          <p className="text-xs sm:text-sm text-italian-black-muted font-light max-w-lg mx-auto">
            Scroll to explore the handcrafted ingredients behind our 450°C wood-fired crust.
          </p>
        </div>

        {/* Center Food Composition with Floating Ingredient Callouts & Connector Lines */}
        <div
          ref={compositionRef}
          className="relative max-w-4xl mx-auto my-6 w-full rounded-3xl overflow-hidden bg-white border border-black/10 shadow-[0_30px_90px_-25px_rgba(0,0,0,0.12)] group"
        >
          <img
            src={ASSETS.images.cheesePull.src}
            alt={ASSETS.images.cheesePull.alt}
            className="w-full h-auto object-cover max-h-[640px] transition-transform duration-1000 group-hover:scale-[1.02]"
            loading="lazy"
          />

          {/* LABEL 1: FRESH BASIL */}
          <div
            ref={label1Ref}
            className="absolute top-[8%] left-[6%] sm:left-[10%] z-20"
          >
            <div className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl border border-black/10 shadow-lg flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-italian-green shadow-[0_0_8px_rgba(39,131,74,0.6)]" />
              <div>
                <span className="text-[11px] font-bold tracking-wider text-italian-black uppercase block">
                  FRESH BASIL
                </span>
                <span className="text-[9px] text-italian-black-muted block">
                  Sweet Genovese aroma
                </span>
              </div>
            </div>
            {/* Delicate visual pointer line */}
            <div className="hidden sm:block w-12 h-[1px] bg-italian-green/40 mt-1 ml-4" />
          </div>

          {/* LABEL 2: MELTED MOZZARELLA */}
          <div
            ref={label2Ref}
            className="absolute top-[32%] right-[5%] sm:right-[10%] z-20"
          >
            <div className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl border border-black/10 shadow-lg flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
              <div>
                <span className="text-[11px] font-bold tracking-wider text-italian-black uppercase block">
                  MELTED MOZZARELLA
                </span>
                <span className="text-[9px] text-italian-black-muted block">
                  100% Fior di Latte stretch
                </span>
              </div>
            </div>
            <div className="hidden sm:block w-12 h-[1px] bg-amber-400/40 mt-1 mr-4 ml-auto" />
          </div>

          {/* LABEL 3: RICH TOMATO SAUCE */}
          <div
            ref={label3Ref}
            className="absolute bottom-[30%] left-[5%] sm:left-[8%] z-20"
          >
            <div className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl border border-black/10 shadow-lg flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-italian-red shadow-[0_0_8px_rgba(217,52,43,0.6)]" />
              <div>
                <span className="text-[11px] font-bold tracking-wider text-italian-black uppercase block">
                  RICH TOMATO SAUCE
                </span>
                <span className="text-[9px] text-italian-black-muted block">
                  Crushed San Marzano D.O.P.
                </span>
              </div>
            </div>
            <div className="hidden sm:block w-12 h-[1px] bg-italian-red/40 mt-1 ml-4" />
          </div>

          {/* LABEL 4: GOLDEN CRUST */}
          <div
            ref={label4Ref}
            className="absolute bottom-[8%] right-[6%] sm:right-[12%] z-20"
          >
            <div className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl border border-black/10 shadow-lg flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-stone-700 shadow-[0_0_8px_rgba(68,64,60,0.6)]" />
              <div>
                <span className="text-[11px] font-bold tracking-wider text-italian-black uppercase block">
                  GOLDEN CRUST
                </span>
                <span className="text-[9px] text-italian-black-muted block">
                  Leopard charred cornicione
                </span>
              </div>
            </div>
            <div className="hidden sm:block w-12 h-[1px] bg-stone-700/40 mt-1 mr-4 ml-auto" />
          </div>
        </div>

        {/* Bottom Closing Statement */}
        <div ref={quoteRef} className="text-center pt-2 max-w-xl mx-auto">
          <p className="font-serif text-xl sm:text-2xl italic text-italian-black font-light tracking-wide">
            "SIMPLICITY IS THE ULTIMATE SOPHISTICATION."
          </p>
          <div className="flex items-center justify-center gap-4 mt-3">
            <button
              onClick={onOpenMenu}
              className="text-[11px] font-semibold uppercase tracking-wider text-italian-red hover:underline"
            >
              Order Signature Margherita — €16.50
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
