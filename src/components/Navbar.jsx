import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, UtensilsCrossed, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { ASSETS } from '../data/assets';

export default function Navbar({ onOpenMenu, onOpenReservation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md py-3.5 border-b border-black/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.03)]'
            : 'bg-white/80 backdrop-blur-sm py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden border border-black/10 transition-transform duration-500 group-hover:scale-105 shadow-sm">
              <img
                src={ASSETS.logo.src}
                alt={ASSETS.logo.alt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-[0.15em] text-italian-black leading-none uppercase">
                {RESTAURANT_INFO.brand.name}
              </span>
              <span className="text-[9px] tracking-super-wide text-italian-red uppercase font-semibold mt-0.5">
                Pizzeria & Bakehouse
              </span>
            </div>
          </a>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7">
            {RESTAURANT_INFO.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative text-xs tracking-ultra-wide font-medium text-italian-black-soft hover:text-italian-red uppercase transition-colors duration-300 py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-italian-red transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenMenu}
              type="button"
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wider uppercase text-italian-black hover:text-italian-red border border-black/15 hover:border-italian-red rounded-full transition-all duration-300"
            >
              <UtensilsCrossed size={13} className="text-italian-red" />
              <span>Menu</span>
            </button>

            <button
              onClick={onOpenReservation}
              type="button"
              className="flex items-center gap-1.5 px-4 py-2 bg-italian-black hover:bg-italian-red text-white text-xs font-semibold tracking-wider uppercase rounded-full transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <span>Book Table</span>
              <ArrowUpRight size={13} />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            type="button"
            className="lg:hidden p-2 text-italian-black hover:text-italian-red rounded-lg transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/98 backdrop-blur-xl pt-24 px-8 pb-12 flex flex-col justify-between lg:hidden animate-in fade-in duration-300">
          <div className="flex flex-col gap-5">
            <span className="text-[10px] tracking-super-wide uppercase text-italian-red font-semibold">
              Navigation
            </span>
            {RESTAURANT_INFO.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-serif text-3xl font-medium tracking-wide text-italian-black hover:text-italian-red transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-black/10">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenMenu();
              }}
              className="w-full py-3.5 bg-italian-cream text-italian-black border border-black/10 rounded-full text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2"
            >
              <UtensilsCrossed size={14} className="text-italian-red" />
              <span>Explore Complete Menu</span>
            </button>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full py-3.5 bg-italian-black text-white rounded-full text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2"
            >
              <span>Reserve a Table</span>
              <ArrowUpRight size={14} />
            </button>

            <p className="text-center text-[11px] text-italian-black-muted tracking-wide mt-2">
              {RESTAURANT_INFO.brand.taglines.primary}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

