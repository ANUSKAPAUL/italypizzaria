import React, { useRef, useEffect } from 'react';
import { Flame, Sparkles, ArrowUpRight, Zap } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ASSETS } from '../data/assets';
import FoodVideo from '../components/FoodVideo';

gsap.registerPlugin(ScrollTrigger);

export default function FlavourExplosion({ onOpenMenu }) {
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);
  const videoWrapperRef = useRef(null);
  const spicyBadgesRef = useRef([]);

  const spicyElements = [
    { title: 'CALABRIAN CHILI', desc: 'Sun-drenched southern heat with sweet, smoky fruit notes', accent: 'text-italian-red' },
    { title: '’NDUJA DI SPILINGA', desc: 'Spreadable cured pork salame laced with roasted hot peppers', accent: 'text-amber-600' },
    { title: 'WILDFLOWER HOT HONEY', desc: 'Slow-infused habanero wildflower nectar for sweet heat balance', accent: 'text-yellow-600' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Dynamic headline reveal
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
          },
        }
      );

      // Smooth video scale with scroll progression
      gsap.fromTo(
        videoWrapperRef.current,
        { scale: 0.93 },
        {
          scale: 1,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            end: 'bottom 40%',
            scrub: 1.2,
          },
        }
      );

      // Stagger spicy elements
      gsap.fromTo(
        spicyBadgesRef.current,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.2,
          duration: 0.8,
          scrollTrigger: {
            trigger: videoWrapperRef.current,
            start: 'top 65%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="flavours"
      ref={sectionRef}
      className="relative py-28 px-6 sm:px-8 bg-white overflow-hidden border-t border-black/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Storytelling & Fiery Accents */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-italian-red/10 border border-italian-red/20 text-italian-red">
              <Flame size={14} className="animate-bounce" />
              <span className="text-[10px] tracking-super-wide uppercase font-bold">
                Calabrian Heat &amp; Honey
              </span>
            </div>

            <div ref={headlineRef}>
              <h2 className="font-serif text-5xl sm:text-6xl text-italian-black font-normal leading-[0.95] tracking-tight">
                TURN UP THE <br />
                <span className="text-italian-red italic font-light">FLAVOUR.</span>
              </h2>
            </div>

            <p className="text-base sm:text-lg text-italian-black-muted font-light leading-relaxed">
              "For those who believe great food should never be boring."
            </p>

            <p className="text-xs sm:text-sm text-italian-black-muted leading-relaxed">
              We balance fiery southern spice with cooling, velvet creaminess. Spicy Calabrian spianata, sweet honey drizzles, and torn fresh basil over bubbling mozzarella create an unforgettable explosion of authentic Italian taste.
            </p>

            {/* Flavour Cards */}
            <div className="space-y-3 pt-2">
              {spicyElements.map((el, i) => (
                <div
                  key={el.title}
                  ref={(elem) => (spicyBadgesRef.current[i] = elem)}
                  className="p-4 rounded-2xl bg-italian-cream/40 border border-black/5 flex items-start gap-4 hover:border-black/15 transition-all group"
                >
                  <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 mt-0.5">
                    <Zap size={14} className={el.accent} />
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-semibold text-italian-black tracking-wide">
                      {el.title}
                    </h4>
                    <p className="text-xs text-italian-black-muted mt-0.5">
                      {el.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenMenu}
                className="btn-luxury-primary w-full sm:w-auto"
              >
                <span>EXPLORE SPICY SPECIALS</span>
                <ArrowUpRight size={15} />
              </button>
            </div>
          </div>

          {/* Right Column: Wood-Fired Kitchen Film with Scale scrub */}
          <div className="lg:col-span-7">
            <div ref={videoWrapperRef} className="relative">
              <div className="rounded-3xl overflow-hidden border border-black/10 shadow-[0_30px_70px_-20px_rgba(217,52,43,0.15)] bg-white">
                <FoodVideo
                  src={ASSETS.videos.spicyPizza.src}
                  poster={ASSETS.videos.spicyPizza.poster}
                  title="The Fiery Neapolitan Crust"
                  caption="Spicy pizza assembling with hot Calabrian peppers &amp; melted Fior di Latte"
                  aspectRatio="aspect-[4/3] sm:aspect-video"
                  objectFit="cover"
                />
              </div>

              {/* Red & Green Accent Tags */}
              <div className="mt-4 flex items-center justify-between text-xs text-italian-black-muted px-2">
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="w-2 h-2 rounded-full bg-italian-red" />
                  Calabrian Hot Infusion
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="w-2 h-2 rounded-full bg-italian-green" />
                  Fresh Genovese Herb Crown
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
