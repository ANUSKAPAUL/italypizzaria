import React, { useRef, useEffect } from 'react';
import { Flame, Clock, Award, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ASSETS } from '../data/assets';
import { RESTAURANT_INFO } from '../data/restaurantData';

gsap.registerPlugin(ScrollTrigger);

export default function OurStory() {
  const sectionRef = useRef(null);
  const storyTextRef = useRef(null);
  const imageSpreadRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        storyTextRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );

      gsap.fromTo(
        imageSpreadRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="story"
      ref={sectionRef}
      className="relative py-28 px-6 sm:px-8 bg-white overflow-hidden border-t border-black/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authentic Brand Spread */}
          <div ref={imageSpreadRef} className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-black/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.1)] bg-white group">
              <img
                src={ASSETS.images.foodSpread.src}
                alt={ASSETS.images.foodSpread.alt}
                loading="lazy"
                className="w-full h-auto object-cover max-h-[620px] transition-transform duration-1000 group-hover:scale-105"
              />

              {/* Artisanal Heritage Stamp */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl border border-black/10 shadow-lg flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-black/10 shrink-0">
                  <img
                    src={ASSETS.logo.src}
                    alt="ITLY logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="text-[10px] tracking-wider uppercase font-bold text-italian-black block">
                    ITLY Pizzeria &amp; Bakehouse
                  </span>
                  <span className="text-[9px] text-italian-red tracking-wider uppercase font-semibold block">
                    House of Artisan Wood Fire Pizzas
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Storytelling */}
          <div ref={storyTextRef} className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-italian-cream text-italian-black border border-black/5">
              <Sparkles size={12} className="text-italian-red" />
              <span className="text-[10px] tracking-super-wide uppercase font-semibold">
                Our Story &amp; Heritage
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-italian-black font-normal leading-[1.05] tracking-tight">
              MADE FOR THE <br />
              <span className="italic font-light text-italian-red">LOVE OF ITALIAN FOOD.</span>
            </h2>

            <p className="text-base sm:text-lg text-italian-black font-serif italic text-italian-red leading-relaxed">
              "{RESTAURANT_INFO.brand.taglines.craft}"
            </p>

            <p className="text-xs sm:text-sm text-italian-black-muted leading-relaxed">
              {RESTAURANT_INFO.brand.story.lead}
            </p>

            {RESTAURANT_INFO.brand.story.paragraphs.map((p, idx) => (
              <p key={idx} className="text-xs sm:text-sm text-italian-black-muted leading-relaxed">
                {p}
              </p>
            ))}

            <div className="pt-4 border-t border-black/10">
              <blockquote className="font-serif text-lg italic text-italian-black">
                "{RESTAURANT_INFO.brand.story.quote}"
              </blockquote>
              <span className="text-[10px] tracking-wider uppercase text-italian-black-muted mt-1 block">
                — {RESTAURANT_INFO.brand.story.author}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

