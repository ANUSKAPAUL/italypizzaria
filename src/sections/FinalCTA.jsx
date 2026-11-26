import React from 'react';
import { ArrowUpRight, MapPin, UtensilsCrossed, Sparkles } from 'lucide-react';
import { ASSETS } from '../data/assets';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function FinalCTA({ onOpenMenu, onOpenReservation }) {
  const scrollToContact = (e) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-28 px-6 sm:px-8 bg-white overflow-hidden border-t border-black/5">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-italian-cream/40 border border-black/10 p-10 sm:p-16 lg:p-20 text-center space-y-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.06)]">
          {/* Subtle background food watermark */}
          <div className="absolute inset-0 opacity-[0.07] pointer-events-none overflow-hidden">
            <img
              src={ASSETS.images.pizzaExplosion.src}
              alt="Background texture"
              className="w-full h-full object-cover scale-125"
            />
          </div>

          <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/10 shadow-sm text-italian-black">
              <Sparkles size={13} className="text-italian-red" />
              <span className="text-[10px] tracking-super-wide uppercase font-semibold">
                A Seat at Our Table
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-italian-black font-normal leading-[1.05] tracking-tight">
              YOUR NEXT FAVOURITE <br />
              <span className="italic font-light text-italian-red">BITE IS WAITING.</span>
            </h2>

            <p className="text-base sm:text-xl text-italian-black-muted font-light leading-relaxed">
              "Good food. Great moments. Unforgettable flavours."
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={onOpenMenu}
                className="btn-luxury-primary w-full sm:w-auto"
              >
                <span>EXPLORE MENU</span>
                <ArrowUpRight size={15} />
              </button>

              <button
                onClick={onOpenReservation}
                className="btn-luxury-secondary w-full sm:w-auto"
              >
                <MapPin size={15} className="text-italian-red" />
                <span>VISIT US / BOOK</span>
              </button>
            </div>

            <p className="text-[11px] text-italian-black-muted tracking-wider uppercase pt-4">
              Open Daily from 12:00 PM • Wood-Fire Baking in 90 Seconds
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

