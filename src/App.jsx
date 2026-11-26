import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import MenuDrawer from './components/MenuDrawer';
import ReservationModal from './components/ReservationModal';
import AudioToggle from './components/AudioToggle';

import Hero from './sections/Hero';
import FoodExperience from './sections/FoodExperience';
import SignaturePizza from './sections/SignaturePizza';
import FlavourExplosion from './sections/FlavourExplosion';
import PastaExperience from './sections/PastaExperience';
import GarlicBread from './sections/GarlicBread';
import FoodGallery from './sections/FoodGallery';
import OurStory from './sections/OurStory';
import FinalCTA from './sections/FinalCTA';
import Footer from './sections/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) return;

    // Initialize smooth momentum scrolling with Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const updateTicker = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-italian-black selection:bg-italian-red selection:text-white">
      {/* Premium Minimal Navigation */}
      <Navbar
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenReservation={() => setIsReservationOpen(true)}
      />

      {/* 10 Continuous Cinematic Sections */}
      <main>
        <Hero onOpenMenu={() => setIsMenuOpen(true)} />
        <FoodExperience onOpenMenu={() => setIsMenuOpen(true)} />
        <SignaturePizza onOpenMenu={() => setIsMenuOpen(true)} />
        <FlavourExplosion onOpenMenu={() => setIsMenuOpen(true)} />
        <PastaExperience onOpenMenu={() => setIsMenuOpen(true)} />
        <GarlicBread onOpenMenu={() => setIsMenuOpen(true)} />
        <FoodGallery />
        <OurStory />
        <FinalCTA
          onOpenMenu={() => setIsMenuOpen(true)}
          onOpenReservation={() => setIsReservationOpen(true)}
        />
      </main>

      <Footer
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenReservation={() => setIsReservationOpen(true)}
      />

      {/* Interactive Global Drawers / Modals */}
      <MenuDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onOpenReservation={() => setIsReservationOpen(true)}
      />

      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />

      {/* Atmospheric Audio Soundscape Toggle */}
      <AudioToggle />
    </div>
  );
}

