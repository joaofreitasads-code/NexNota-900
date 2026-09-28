import React, { useState, useEffect } from 'react';
import { Zap, ArrowUpRight } from 'lucide-react';
import { PRICING } from '../data/courseData';

export const FloatingCta: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToOffer = () => {
    const el = document.getElementById('oferta');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 p-2.5 sm:p-3 bg-white/95 backdrop-blur-md border-t border-neutral-200 shadow-xl transition-all duration-300">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-3 px-2">
        <div className="hidden sm:flex flex-col text-left">
          <span className="text-xs uppercase tracking-wider text-emerald-700 font-bold flex items-center gap-1">
            <Zap className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" /> Oferta Especial ENEM 2026
          </span>
          <span className="text-sm font-extrabold text-neutral-900">
            Essencial por <span className="text-emerald-700">R$ 10,90</span> · Completo VIP por <span className="text-emerald-700">R$ 32,90</span>
          </span>
        </div>

        <div className="sm:hidden flex flex-col text-left">
          <span className="text-[11px] text-neutral-500 font-medium">A partir de</span>
          <span className="text-base font-black text-emerald-700 leading-none">R$ 10,90</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={scrollToOffer}
            className="py-2.5 sm:py-3 px-5 sm:px-7 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm tracking-wide uppercase transition-all shadow-md shadow-emerald-600/30 whitespace-nowrap cursor-pointer flex items-center gap-1.5"
          >
            <span>ESCOLHER PLANO</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

