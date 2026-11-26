import React, { useState } from 'react';
import { Eye, Sparkles, Filter } from 'lucide-react';
import { ASSETS } from '../data/assets';
import GalleryModal from '../components/GalleryModal';

export default function FoodGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const filterCategories = ['All', 'Wood-Fired Pizza', 'Signature Slices', 'Editorial Feast'];

  const filteredGallery = ASSETS.gallery.filter((item) => {
    if (activeFilter === 'All') return true;
    return item.category === activeFilter;
  });

  return (
    <section
      id="gallery"
      className="relative py-28 px-6 sm:px-8 bg-white overflow-hidden border-t border-black/5"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] tracking-super-wide uppercase text-italian-red font-semibold">
                Moments at ITLY
              </span>
              <span className="w-8 h-[1px] bg-black/10" />
              <span className="text-[10px] tracking-wider uppercase text-italian-black-muted">
                Fresh from Our Ovens
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-italian-black font-normal leading-[1.05] tracking-tight">
              OUR FOOD <span className="italic font-light text-italian-red">GALLERY.</span>
            </h2>
          </div>

          {/* Editorial Category Filters */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  activeFilter === cat
                    ? 'bg-italian-black text-white shadow-sm'
                    : 'bg-italian-cream text-italian-black hover:bg-black/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Masonry Grid */}
        <div className="grid grid-cols-12 gap-6 sm:gap-8">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className={`${item.span} group relative rounded-3xl overflow-hidden cursor-pointer bg-italian-cream/30 border border-black/5 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_60px_-10px_rgba(0,0,0,0.12)] transition-all duration-700`}
            >
              <div className={`relative w-full ${item.aspect} overflow-hidden bg-white`}>
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />

                {/* Subtle gradient vignette on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Click to expand badge */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md text-italian-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md">
                  <Eye size={15} />
                </div>

                {/* Bottom caption reveal */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 text-white">
                  <span className="text-[10px] tracking-super-wide uppercase text-white/80 block mb-1 font-semibold">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-2xl font-semibold leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/85 mt-1 line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <GalleryModal item={selectedPhoto} onClose={() => setSelectedPhoto(null)} />
    </section>
  );
}

