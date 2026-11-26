import React, { useState } from 'react';
import { ArrowUp, Mail, MapPin, Phone, Send, Heart, Check } from 'lucide-react';
import { ASSETS } from '../data/assets';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function Footer({ onOpenMenu, onOpenReservation }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
        setSubscribed(false);
      }, 3500);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative bg-white pt-24 pb-12 px-6 sm:px-8 border-t border-black/10">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Top Grid: Brand & Direct Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-black/10 shadow-sm">
                <img
                  src={ASSETS.logo.src}
                  alt={ASSETS.logo.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-[0.15em] text-italian-black block uppercase">
                  {RESTAURANT_INFO.brand.name}
                </span>
                <span className="text-[10px] tracking-super-wide text-italian-red uppercase font-semibold block">
                  {RESTAURANT_INFO.brand.subtitle}
                </span>
              </div>
            </div>

            <p className="text-sm text-italian-black-muted font-light max-w-sm leading-relaxed">
              "{RESTAURANT_INFO.brand.taglines.primary}"
            </p>

            <div className="pt-2 space-y-2 text-xs text-italian-black-muted">
              <div className="flex items-start gap-3">
                <MapPin size={15} className="text-italian-red shrink-0 mt-0.5" />
                <span>
                  {RESTAURANT_INFO.contact.address.street}, {RESTAURANT_INFO.contact.address.city} ({RESTAURANT_INFO.contact.address.country})
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={15} className="text-italian-red shrink-0" />
                <span>{RESTAURANT_INFO.contact.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={15} className="text-italian-red shrink-0" />
                <span>{RESTAURANT_INFO.contact.email}</span>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-[10px] tracking-super-wide uppercase text-italian-red font-semibold block">
              Experience
            </span>
            <ul className="space-y-2.5 text-xs text-italian-black-muted">
              <li>
                <a href="#hero" className="hover:text-italian-red transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-italian-red transition-colors">
                  The Experience
                </a>
              </li>
              <li>
                <a href="#signature" className="hover:text-italian-red transition-colors">
                  Signature Slices
                </a>
              </li>
              <li>
                <a href="#flavours" className="hover:text-italian-red transition-colors">
                  The Flavour Explosion
                </a>
              </li>
              <li>
                <a href="#pasta" className="hover:text-italian-red transition-colors">
                  Pasta &amp; Sides
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-italian-red transition-colors">
                  Visual Gallery
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-italian-red transition-colors">
                  Our Story
                </a>
              </li>
            </ul>
          </div>

          {/* Hours Column */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-[10px] tracking-super-wide uppercase text-italian-red font-semibold block">
              Opening Hours
            </span>
            <ul className="space-y-3 text-xs text-italian-black-muted">
              {RESTAURANT_INFO.hours.map((h) => (
                <li key={h.days}>
                  <strong className="text-italian-black block font-medium">
                    {h.days}
                  </strong>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / Club Column */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-[10px] tracking-super-wide uppercase text-italian-red font-semibold block">
              The ITLY Family Table
            </span>
            <p className="text-xs text-italian-black-muted leading-relaxed">
              Join our mailing list for seasonal wood-fire tastings, secret family recipes, and monthly aperitivo nights.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Enter your email..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full pl-4 pr-10 py-2.5 text-xs bg-italian-cream border border-black/10 rounded-full focus:outline-none focus:border-italian-red transition-colors"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-italian-black text-white hover:bg-italian-red flex items-center justify-center transition-colors"
                >
                  <Send size={12} />
                </button>
              </div>

              {subscribed && (
                <p className="text-[11px] text-italian-green flex items-center gap-1.5 font-medium animate-in fade-in">
                  <Check size={13} />
                  <span>Grazie! Welcome to the family.</span>
                </p>
              )}
            </form>

            <div className="pt-2 flex items-center gap-3">
              {RESTAURANT_INFO.social.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-italian-cream hover:bg-italian-black hover:text-white rounded-full text-[10px] tracking-wider uppercase font-semibold text-italian-black transition-all"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-italian-black-muted">
          <p>© {new Date().getFullYear()} {RESTAURANT_INFO.brand.legalName}. All rights reserved.</p>

          <p className="text-[11px]">
            Crafted with passion for authentic Italian wood-fire gastronomy.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-italian-red transition-colors text-[11px] tracking-wider uppercase font-semibold"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
