import React, { useState } from 'react';
import { Sparkles, Maximize2, X } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

const SHOWCASE_IMAGES = [
  {
    url: 'https://i.imgur.com/vlJfDbW.png',
    alt: 'Depoimento de estudante NexNota +900',
  },
  {
    url: 'https://i.imgur.com/u7yGg7h.png',
    alt: 'Depoimento de estudante NexNota +900',
  },
  {
    url: 'https://i.imgur.com/JCjAEsD.png',
    alt: 'Depoimento de estudante NexNota +900',
  },
  {
    url: 'https://i.imgur.com/f4vJXmg.png',
    alt: 'Depoimento de estudante NexNota +900',
  },
  {
    url: 'https://i.imgur.com/USVxm7C.png',
    alt: 'Depoimento de estudante NexNota +900',
  },
];

// Duplicating array twice is optimal for seamless infinite loop while saving mobile memory
const INFINITE_SHOWCASE = [...SHOWCASE_IMAGES, ...SHOWCASE_IMAGES];

export const StorySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{ url: string; alt: string } | null>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(true);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin: '100px 0px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} className="py-14 sm:py-20 px-4 bg-neutral-50 relative overflow-hidden border-t border-neutral-200">
      {/* Background glow effects (lightweight radial, no heavy blurs) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 bg-radial from-emerald-500/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
            <Sparkles className="w-4 h-4" />
            <span>Resultados Comprovados</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 leading-tight">
            Estudantes Que Transformaram a Rotina de Estudos
          </h2>

          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
            Estudar para o ENEM fica mais simples quando você tem direção. Veja relatos de alunos que começaram a usar o método NexNota +900 para organizar os estudos, revisar melhor e ganhar mais confiança na preparação.
          </p>
        </div>

        {/* Testimonials Visual Infinite Carousel - Continuous non-stopping motion */}
        <div className="mb-10 sm:mb-14 relative w-full overflow-hidden no-pause-marquee">
          {/* Left and Right fade overlay masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-28 bg-gradient-to-r from-neutral-50 via-neutral-50/80 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-28 bg-gradient-to-l from-neutral-50 via-neutral-50/80 to-transparent z-10" />

          {/* Marquee Row */}
          <div className="overflow-hidden w-full flex">
            <div
              className="animate-marquee-medium flex py-3 items-center no-pause-marquee"
              style={{ animationPlayState: isVisible ? 'running' : 'paused' }}
            >
              {INFINITE_SHOWCASE.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className="shrink-0 w-60 sm:w-68 md:w-76 mx-2.5 sm:mx-3 relative rounded-3xl overflow-hidden border border-emerald-500/30 bg-white p-2.5 sm:p-3 shadow-md hover:border-emerald-500/70 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center group cursor-pointer"
                >
                  <div className="relative w-full rounded-2xl overflow-hidden bg-neutral-100 flex items-center justify-center">
                    <ImageWithFallback
                      src={img.url}
                      alt={img.alt}
                      className="w-full h-auto object-contain max-h-[480px] rounded-xl group-hover:scale-[1.02] transition-transform duration-300"
                      fallbackText="Depoimento de Estudante NexNota +900"
                    />
                    {/* Hover hint */}
                    <div className="absolute inset-0 bg-neutral-950/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                      <span className="p-2.5 rounded-full bg-white/95 text-neutral-900 shadow-lg flex items-center gap-1.5 text-xs font-semibold">
                        <Maximize2 className="w-4 h-4 text-emerald-600" />
                        Ampliar
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-xs text-neutral-500 mt-2 font-medium">
            ✨ Carrossel contínuo automático • Clique na imagem para ampliar
          </p>
        </div>
      </div>

      {/* Image Zoom Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-lg w-full max-h-[92vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col p-3 sm:p-4 border border-neutral-100"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 p-2 rounded-full bg-neutral-900/10 hover:bg-neutral-900/20 text-neutral-800 transition-colors z-10 cursor-pointer"
              aria-label="Fechar ampliação"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex-1 overflow-auto flex items-center justify-center pt-2">
              <img
                src={selectedImage.url}
                alt={selectedImage.alt}
                className="max-h-[82vh] w-auto object-contain rounded-2xl drop-shadow-md"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

