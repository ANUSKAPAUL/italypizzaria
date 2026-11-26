import React, { useState } from 'react';
import { X, Calendar, Clock, Users, CheckCircle2, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function ReservationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '2 Guests',
    date: '2026-11-12',
    time: '19:30',
    area: 'Wood-Fire Counter',
    notes: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const code = 'ITLY-' + Math.floor(100000 + Math.random() * 900000);
    setConfirmationCode(code);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-6 sm:p-8 overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-italian-black-muted hover:text-italian-black rounded-full hover:bg-black/5 transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8 space-y-4 animate-in fade-in">
            <div className="w-16 h-16 bg-italian-green/10 text-italian-green rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 size={36} />
            </div>
            <span className="text-[10px] tracking-super-wide uppercase text-italian-green font-semibold">
              Reservation Confirmed
            </span>
            <h3 className="font-serif text-3xl font-semibold text-italian-black">
              Ci Vediamo Presto!
            </h3>
            <p className="text-xs text-italian-black-muted max-w-sm mx-auto">
              We have reserved your table at <strong>{formData.area}</strong> for{' '}
              <strong>{formData.guests}</strong> on{' '}
              <strong>{formData.date}</strong> at <strong>{formData.time}</strong>.
            </p>
            <div className="p-4 bg-italian-cream rounded-2xl border border-black/5 inline-block">
              <span className="text-[10px] text-italian-black-muted uppercase tracking-wider block">
                Booking Reference
              </span>
              <span className="font-mono text-lg font-bold tracking-widest text-italian-black">
                {confirmationCode}
              </span>
            </div>
            <p className="text-[11px] text-italian-black-muted">
              A confirmation email has been dispatched to {formData.email || 'your email'}.
            </p>
            <button
              onClick={handleReset}
              className="mt-4 px-6 py-2.5 bg-italian-black hover:bg-italian-red text-white text-xs font-semibold tracking-wider uppercase rounded-full transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-[10px] tracking-super-wide uppercase text-italian-red font-semibold">
                Table Reservations
              </span>
              <h3 className="font-serif text-3xl font-semibold text-italian-black mt-1">
                Experience ITLY Live
              </h3>
              <p className="text-xs text-italian-black-muted mt-1">
                Reserve your front-row seat to our 450°C beechwood fire oven.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] tracking-wider uppercase font-semibold text-italian-black block mb-1">
                    Full Name
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Giuseppe Rossi"
                    className="w-full px-3.5 py-2 text-xs bg-italian-cream/50 border border-black/10 rounded-xl focus:outline-none focus:border-italian-red"
                  />
                </div>
                <div>
                  <label className="text-[10px] tracking-wider uppercase font-semibold text-italian-black block mb-1">
                    Contact Phone
                  </label>
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+39 02 8945..."
                    className="w-full px-3.5 py-2 text-xs bg-italian-cream/50 border border-black/10 rounded-xl focus:outline-none focus:border-italian-red"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] tracking-wider uppercase font-semibold text-italian-black block mb-1">
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="giuseppe@example.com"
                  className="w-full px-3.5 py-2 text-xs bg-italian-cream/50 border border-black/10 rounded-xl focus:outline-none focus:border-italian-red"
                />
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="text-[10px] tracking-wider uppercase font-semibold text-italian-black block mb-1">
                    Party Size
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-2.5 py-2 text-xs bg-italian-cream/50 border border-black/10 rounded-xl focus:outline-none focus:border-italian-red"
                  >
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>3 Guests</option>
                    <option>4 Guests</option>
                    <option>5+ Guests</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] tracking-wider uppercase font-semibold text-italian-black block mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-2 py-2 text-xs bg-italian-cream/50 border border-black/10 rounded-xl focus:outline-none focus:border-italian-red"
                  />
                </div>
                <div>
                  <label className="text-[10px] tracking-wider uppercase font-semibold text-italian-black block mb-1">
                    Time
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-2 py-2 text-xs bg-italian-cream/50 border border-black/10 rounded-xl focus:outline-none focus:border-italian-red"
                  >
                    <option>12:30 PM</option>
                    <option>13:30 PM</option>
                    <option>18:30 PM</option>
                    <option>19:30 PM</option>
                    <option>20:30 PM</option>
                    <option>21:30 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[10px] tracking-wider uppercase font-semibold text-italian-black block mb-1">
                  Seating Ambiance
                </label>
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  {['Wood-Fire Counter', 'Main Dining', 'Terrace'].map((area) => (
                    <button
                      key={area}
                      type="button"
                      onClick={() => setFormData({ ...formData, area })}
                      className={`py-2 px-2 rounded-xl border text-[11px] font-medium transition-all ${
                        formData.area === area
                          ? 'border-italian-red bg-italian-red/5 text-italian-red font-semibold'
                          : 'border-black/10 hover:border-black/20 text-italian-black'
                      }`}
                    >
                      {area}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-[10px] tracking-wider uppercase font-semibold text-italian-black block mb-1">
                  Dietary / Special Occasion Notes
                </label>
                <input
                  type="text"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Anniversary, vegetarian, seating preferences..."
                  className="w-full px-3.5 py-2 text-xs bg-italian-cream/50 border border-black/10 rounded-xl focus:outline-none focus:border-italian-red"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-italian-black hover:bg-italian-red text-white text-xs font-semibold tracking-wider uppercase rounded-full transition-all duration-300 shadow-md mt-2"
              >
                Confirm Table Reservation
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

