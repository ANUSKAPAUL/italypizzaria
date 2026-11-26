import React, { useRef, useEffect } from 'react';
import { Utensils, Sparkles, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ASSETS } from '../data/assets';
import FoodVideo from '../components/FoodVideo';

gsap.registerPlugin(ScrollTrigger);

export default function PastaExperience({ onOpenMenu }) {
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);
  const compositionRef = useRef(null);

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
        compositionRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 65%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="pasta"
      ref={sectionRef}
      className="relative py-28 px-6 sm:px-8 bg-white overflow-hidden border-t border-black/5"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div ref={headlineRef} className="max-w-3xl mb-16 space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-[10px] tracking-super-wide uppercase text-italian-red font-semibold">
              Handcrafted Pastas
            </span>
            <span className="w-8 h-[1px] bg-black/10" />
            <span className="text-[10px] tracking-wider uppercase text-italian-black-muted">
              Trafilata al Bronzo
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-italian-black font-normal leading-[1.05] tracking-tight">
            TWIRL INTO <br />
            <span className="italic font-light text-italian-red">ITALIAN GOODNESS.</span>
          </h2>

          <p className="text-base sm:text-xl text-italian-black-muted font-light leading-relaxed max-w-2xl">
            "Rich sauces, beautiful ingredients and flavours worth slowing down for."
          </p>
        </div>

        {/* Asymmetrical Editorial Composition */}
        <div ref={compositionRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Video Box */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl overflow-hidden border border-black/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.1)] bg-white group">
              <FoodVideo
                src={ASSETS.videos.pasta.src}
                poster={ASSETS.videos.pasta.poster}
                title="Hand-Extruded Penne in Sugo"
                caption="Textured pasta tossed with hand-crushed San Marzano sauce, torn sweet basil, and extra virgin olive oil"
                aspectRatio="aspect-video"
                objectFit="cover"
              />
            </div>
          </div>

          {/* Supporting Editorial Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-italian-cream/30 border border-black/5 space-y-6">
              <span className="text-[10px] tracking-super-wide uppercase text-italian-red font-semibold block">
                The Secret of Texture
              </span>

              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-italian-black leading-snug">
                Bronze-Die Extrusion &amp; 100% Pugliese Wheat
              </h3>

              <p className="text-xs sm:text-sm text-italian-black-muted leading-relaxed">
                By pushing our dough through vintage coarse bronze dies, each strand of pasta retains a microscopically porous, textured surface. Sauces do not merely slide off—they marry with every single ridge.
              </p>

              <div className="space-y-3 pt-2 border-t border-black/10">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-italian-black">Penne al Pomodoro e Basilico</span>
                  <span className="font-serif font-bold text-italian-red">€17.00</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-italian-black">Tonnarelli Cacio e Pepe D.O.P.</span>
                  <span className="font-serif font-bold text-italian-red">€18.50</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-italian-black">Tagliatelle al Ragù 8-Ore</span>
                  <span className="font-serif font-bold text-italian-red">€21.00</span>
                </div>
              </div>

              <button
                onClick={onOpenMenu}
                className="btn-luxury-secondary w-full text-center"
              >
                <span>VIEW PASTA SELECTIONS</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
