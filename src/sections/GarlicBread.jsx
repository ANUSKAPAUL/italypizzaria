import React, { useRef, useEffect } from 'react';
import { Sparkles, Heart, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ASSETS } from '../data/assets';
import FoodVideo from '../components/FoodVideo';

gsap.registerPlugin(ScrollTrigger);

export default function GarlicBread({ onOpenMenu }) {
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);
  const visualRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headlineRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );

      gsap.fromTo(
        visualRef.current,
        { scale: 0.92, opacity: 0.8 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            end: 'bottom 40%',
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="sides"
      ref={sectionRef}
      className="relative py-28 px-6 sm:px-8 bg-white overflow-hidden border-t border-black/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3" ref={headlineRef}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-italian-cream text-italian-black border border-black/5">
            <Heart size={12} className="text-italian-red fill-italian-red" />
            <span className="text-[10px] tracking-super-wide uppercase font-semibold">
              Cheesy Sides &amp; Starters
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-italian-black font-normal leading-[1.05] tracking-tight">
            THE PERFECT <br className="sm:hidden" />
            <span className="italic font-light text-italian-red">SIDE STORY.</span>
          </h2>

          <p className="text-base sm:text-lg text-italian-black-muted font-light max-w-xl mx-auto">
            "Golden, cheesy, irresistible. Some things are simply meant to be shared."
          </p>
        </div>

        {/* Large Visually Satisfying Video Showcase */}
        <div ref={visualRef} className="max-w-4xl mx-auto">
          <div className="rounded-3xl overflow-hidden border border-black/10 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.1)] bg-white">
            <FoodVideo
              src={ASSETS.videos.garlicBread.src}
              poster={ASSETS.videos.garlicBread.poster}
              title="Pane all’Aglio &amp; Mozzarella Pull"
              caption="Slow-roasted garlic confit butter, Italian parsley, and bubbling mozzarella on rustic sourdough baguette"
              aspectRatio="aspect-[4/3] sm:aspect-video"
              objectFit="cover"
            />
          </div>

          {/* Three Satisfying Flavor Notes */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
            <div className="p-5 rounded-2xl bg-italian-cream/30 border border-black/5 text-center">
              <span className="font-serif text-lg font-semibold text-italian-black block">
                Roasted Garlic Confit
              </span>
              <p className="text-xs text-italian-black-muted mt-1">
                Whole sweet garlic cloves slow-poached with butter and sea salt until meltingly tender.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-italian-cream/30 border border-black/5 text-center">
              <span className="font-serif text-lg font-semibold text-italian-black block">
                Triple-Cheese Pull
              </span>
              <p className="text-xs text-italian-black-muted mt-1">
                Fior di Latte, provolone piccante, and 24-month Parmigiano Reggiano melted under wood fire.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-italian-cream/30 border border-black/5 text-center">
              <span className="font-serif text-lg font-semibold text-italian-black block">
                Sourdough Crunch
              </span>
              <p className="text-xs text-italian-black-muted mt-1">
                Naturally leavened baguette baked until deep amber crust and airy, pillowy interior.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
