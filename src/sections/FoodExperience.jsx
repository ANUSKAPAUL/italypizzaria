import React, { useRef, useEffect } from 'react';
import { Sparkles, ArrowRight, Check, Heart } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ASSETS } from '../data/assets';
import { RESTAURANT_INFO } from '../data/restaurantData';

gsap.registerPlugin(ScrollTrigger);

export default function FoodExperience({ onOpenMenu }) {
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headlineRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        imageRef.current,
        { scale: 0.94, opacity: 0.8 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 65%',
            end: 'bottom 20%',
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-28 px-6 sm:px-8 bg-white overflow-hidden border-t border-black/5"
    >
      <div className="max-w-7xl mx-auto">
        {/* Craft storytelling paired with the pizza explosion visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-20">
          <div ref={headlineRef} className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] tracking-super-wide uppercase text-italian-red font-semibold block">
                Our Craft &amp; Heritage
              </span>
              <span className="text-[10px] tracking-wider uppercase text-italian-black-muted block">
                Dough, Wood &amp; Passion
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-italian-black font-normal leading-[1.05] tracking-tight">
              MORE THAN JUST <br />
              <span className="italic font-light text-italian-red">A PIZZA.</span>
            </h2>
            <p className="text-base sm:text-xl text-italian-black-muted font-light leading-relaxed">
              To us, pizza is Sunday lunch around long wooden tables. It is the fragrant roar of seasoned beechwood, the blistered cornicione, and the joy of breaking crust with friends.
            </p>
            <p className="pt-2 text-[10px] tracking-wider uppercase font-semibold text-italian-black">
              Hand-Stretched Daily <span aria-hidden="true">•</span> 48-Hour Cold Fermentation
            </p>
          </div>
          <div className="lg:col-span-7 min-w-0">
            <div ref={imageRef} className="relative w-full bg-white group">
              <img
                src={ASSETS.images.pizzaExplosion.src}
                alt={ASSETS.images.pizzaExplosion.alt}
                className="w-full h-auto object-contain max-h-[750px] transition-transform duration-1000 group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Editorial Four Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {RESTAURANT_INFO.craftBadges.map((badge, idx) => (
            <div
              key={badge.title}
              className="card-luxury p-7 rounded-2xl flex flex-col justify-between"
            >
              <div>
                <span className="text-[9px] tracking-super-wide uppercase text-italian-red font-bold block mb-2">
                  0{idx + 1} â€” {badge.tag}
                </span>
                <h3 className="font-serif text-xl font-semibold text-italian-black tracking-wide mb-2">
                  {badge.title}
                </h3>
                <p className="text-xs text-italian-black-muted leading-relaxed">
                  {badge.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-black/5 flex items-center justify-between text-italian-black">
                <span className="text-[10px] uppercase tracking-wider font-medium text-italian-black-muted">
                  Pure Italian Standard
                </span>
                <Check size={14} className="text-italian-green" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
