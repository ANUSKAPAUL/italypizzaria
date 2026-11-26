import React, { useState } from 'react';
import { X, Search, Sparkles, Flame, Check, ArrowRight } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menuData';

export default function MenuDrawer({ isOpen, onClose, onOpenReservation }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [orderedItem, setOrderedItem] = useState(null);

  if (!isOpen) return null;

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory =
      activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleQuickOrder = (item) => {
    setOrderedItem(item.name);
    setTimeout(() => {
      setOrderedItem(null);
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      {/* Click outside to close */}
      <div className="flex-1" onClick={onClose} />

      {/* Drawer content */}
      <div className="relative w-full max-w-2xl bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-500 overflow-hidden">
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-black/10 flex items-start justify-between bg-italian-cream/30">
          <div>
            <span className="text-[10px] tracking-super-wide uppercase text-italian-red font-semibold">
              Authentic Italian Menu
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-italian-black font-semibold mt-1">
              Culinary Selections
            </h2>
            <p className="text-xs text-italian-black-muted mt-1">
              Double-fermented doughs, hand-extruded pastas, and wood-fired delicacies.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-italian-black hover:text-italian-red rounded-full hover:bg-black/5 transition-colors"
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        {/* Search & Filter Bar */}
        <div className="p-6 border-b border-black/5 space-y-4 bg-white">
          <div className="relative">
            <Search
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-italian-black-muted"
            />
            <input
              type="text"
              placeholder="Search dishes, ingredients (e.g. burrata, truffle, garlic)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 text-xs bg-italian-cream/60 border border-black/10 rounded-full focus:outline-none focus:border-italian-red transition-colors"
            />
          </div>

          {/* Category Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-1.5 rounded-full text-xs whitespace-nowrap font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-italian-black text-white shadow-sm'
                    : 'bg-italian-cream text-italian-black hover:bg-black/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items List */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          {orderedItem && (
            <div className="p-3 bg-italian-green/10 border border-italian-green/30 text-italian-green rounded-xl flex items-center justify-between text-xs animate-in fade-in">
              <span className="flex items-center gap-2">
                <Check size={16} />
                <span>Added <strong>{orderedItem}</strong> to order selection</span>
              </span>
              <button
                onClick={() => {
                  onClose();
                  onOpenReservation();
                }}
                className="underline font-semibold"
              >
                Reserve Table Now
              </button>
            </div>
          )}

          {filteredItems.length === 0 ? (
            <div className="text-center py-16">
              <p className="font-serif text-2xl text-italian-black">No dishes found</p>
              <p className="text-xs text-italian-black-muted mt-2">
                Try searching for another ingredient or view all categories.
              </p>
            </div>
          ) : (
            filteredItems.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl border border-black/5 hover:border-black/15 hover:bg-italian-cream/20 transition-all"
              >
                <div className="flex-1 pr-4">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="font-serif text-xl font-semibold text-italian-black">
                      {item.name}
                    </span>
                    {item.highlight && (
                      <span className="text-[10px] tracking-wider uppercase px-2 py-0.5 bg-italian-red/10 text-italian-red rounded-full font-medium">
                        {item.highlight}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-italian-black-muted leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] text-italian-black/60 bg-black/5 px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-black/5">
                  <span className="font-serif text-lg font-bold text-italian-black">
                    {item.price}
                  </span>
                  <button
                    onClick={() => handleQuickOrder(item)}
                    className="px-3.5 py-1.5 text-[11px] font-semibold tracking-wider uppercase bg-italian-black hover:bg-italian-red text-white rounded-full transition-colors"
                  >
                    Select
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-black/10 bg-italian-cream/30 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[11px] text-italian-black-muted">Dine-in & Private Table</span>
            <span className="text-xs font-semibold text-italian-black">
              Freshly baked in 90 seconds
            </span>
          </div>
          <button
            onClick={() => {
              onClose();
              onOpenReservation();
            }}
            className="flex items-center gap-2 px-5 py-2.5 bg-italian-red hover:bg-italian-red-dark text-white rounded-full text-xs font-semibold tracking-wider uppercase transition-colors shadow-md"
          >
            <span>Book Table for Dining</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}

