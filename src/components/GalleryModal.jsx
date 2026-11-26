import React from 'react';
import { X, ZoomIn, Sparkles } from 'lucide-react';

export default function GalleryModal({ item, onClose }) {
  if (!item) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-md animate-in fade-in duration-300"
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-3 text-white/70 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-all z-10"
        aria-label="Close Lightbox"
      >
        <X size={24} />
      </button>

      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col animate-in zoom-in-95 duration-300"
      >
        <div className="relative overflow-hidden bg-white max-h-[72vh] flex items-center justify-center">
          <img
            src={item.src}
            alt={item.alt}
            className="w-full h-full object-contain max-h-[72vh]"
          />
        </div>

        <div className="p-6 bg-white border-t border-black/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] tracking-super-wide uppercase text-italian-red font-semibold">
                {item.category}
              </span>
              <span className="text-black/30">•</span>
              <span className="text-[10px] text-italian-black-muted uppercase tracking-wider">
                Handcrafted at ITLY
              </span>
            </div>
            <h4 className="font-serif text-2xl text-italian-black font-semibold">
              {item.title}
            </h4>
            <p className="text-xs text-italian-black-muted mt-1 max-w-xl">
              {item.caption}
            </p>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {item.tags?.map((t) => (
              <span
                key={t}
                className="text-[10px] text-italian-black font-medium px-3 py-1 bg-italian-cream rounded-full border border-black/5"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

