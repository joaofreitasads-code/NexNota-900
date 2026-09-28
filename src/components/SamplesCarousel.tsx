import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import { SAMPLE_PAGES, SamplePage } from '../data/courseData';
import { ImageWithFallback } from './ImageWithFallback';

export const SamplesCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedImage, setSelectedImage] = useState<SamplePage | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const totalPages = SAMPLE_PAGES.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  useEffect(() => {
    if (isPaused || selectedImage !== null) return;
    const interval = setInterval(nextSlide, 3500);
    return () => clearInterval(interval);
  }, [isPaused, selectedImage]);

  // Center active item in mobile scroll
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const child = container.children[currentIndex] as HTMLElement;
      if (child) {
        container.scrollTo({
          left: child.offsetLeft - container.offsetWidth / 2 + child.offsetWidth / 2,
          behavior: 'smooth',
        });
      }
    }
  }, [currentIndex]);

  return (
    <section className="py-14 px-4 bg-neutral-50 border-y border-neutral-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 text-center sm:text-left">
          <div>
            <span className="text-xs uppercase tracking-widest font-semibold text-emerald-700 block mb-1">
              Material 100% Visual
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900">
              Veja algumas amostras:
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              aria-label="Amostra anterior"
              className="p-2.5 rounded-full bg-white border border-neutral-200 hover:border-emerald-500/50 text-neutral-700 hover:text-neutral-900 shadow-sm transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Próxima amostra"
              className="p-2.5 rounded-full bg-white border border-neutral-200 hover:border-emerald-500/50 text-neutral-700 hover:text-neutral-900 shadow-sm transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={scrollContainerRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 pt-2 snap-x snap-mandatory no-scrollbar cursor-grab"
            style={{ scrollbarWidth: 'none' }}
          >
            {SAMPLE_PAGES.map((page, idx) => {
              const isActive = idx === currentIndex;
              return (
                <div
                  key={idx}
                  onClick={() => setSelectedImage(page)}
                  className={`shrink-0 w-[220px] sm:w-[260px] md:w-[280px] snap-center rounded-2xl overflow-hidden bg-white border transition-all duration-300 cursor-pointer group shadow-sm hover:shadow-lg ${
                    isActive
                      ? 'border-emerald-500 ring-2 ring-emerald-500/30 scale-[1.02]'
                      : 'border-neutral-200 hover:border-neutral-300 opacity-95 hover:opacity-100'
                  }`}
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100 flex items-center justify-center p-2">
                    <ImageWithFallback
                      src={page.image}
                      alt={page.alt}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-md"
                      fallbackText={page.title}
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white">
                      <span className="p-2 rounded-full bg-emerald-600 text-white shadow-lg">
                        <Maximize2 className="w-5 h-5" />
                      </span>
                    </div>
                  </div>
                  <div className="p-3 bg-white border-t border-neutral-100 text-center">
                    <p className="text-xs font-semibold text-neutral-800 truncate">{page.title}</p>
                    <span className="text-[11px] text-emerald-700 font-medium">Clique para ampliar</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-1.5 mt-4">
          {SAMPLE_PAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Ir para amostra ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'w-6 bg-emerald-600' : 'w-2 bg-neutral-300 hover:bg-neutral-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-2xl w-full max-h-[90vh] bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-neutral-800 bg-neutral-950">
              <span className="font-semibold text-white text-sm sm:text-base">{selectedImage.title}</span>
              <button
                onClick={() => setSelectedImage(null)}
                className="p-1.5 rounded-lg bg-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-700 transition-colors"
                aria-label="Fechar prévia"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 overflow-auto flex items-center justify-center bg-black/60 max-h-[75vh]">
              <ImageWithFallback
                src={selectedImage.image}
                alt={selectedImage.alt}
                className="max-h-[70vh] w-auto object-contain rounded-lg"
                fallbackText={selectedImage.title}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
