import React from 'react';
import { Sparkles, BookOpen, Layers } from 'lucide-react';
import { SUBJECTS, SubjectItem } from '../data/courseData';
import { ImageWithFallback } from './ImageWithFallback';

interface BookItemProps {
  subject: SubjectItem;
}

const BookCard: React.FC<BookItemProps> = ({ subject }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const el = document.getElementById('materias') || document.getElementById('oferta');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      onClick={handleClick}
      className="shrink-0 w-52 sm:w-64 p-4 rounded-2xl bg-white border border-neutral-200 hover:border-emerald-500/50 transition-all duration-300 group hover:scale-[1.03] shadow-md hover:shadow-xl flex flex-col items-center text-center mx-2 sm:mx-3 cursor-pointer select-none"
    >
      <div className="w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center p-1 group-hover:-translate-y-1 transition-transform duration-300">
        <ImageWithFallback
          src={subject.image}
          alt={subject.title}
          className="w-full h-full object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.18)]"
          fallbackText={subject.title}
        />
      </div>
      <div className="mt-3 w-full">
        <span className="text-xs sm:text-sm font-bold text-neutral-900 group-hover:text-emerald-700 transition-colors block truncate">
          {subject.title}
        </span>
        <span className="text-[11px] text-neutral-500 font-medium flex items-center justify-center gap-1 mt-1">
          <BookOpen className="w-3 h-3 text-emerald-600" />
          {subject.topics.length} Módulos Essenciais
        </span>
      </div>
    </div>
  );
};

export const BooksInfiniteCarousel: React.FC = () => {
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

  // To create a seamless infinite loop, duplicate the array
  const row1Books = [...SUBJECTS, ...SUBJECTS];
  // Reverse or offset for row 2 to give visual variety
  const reversedSubjects = [...SUBJECTS].reverse();
  const row2Books = [...reversedSubjects, ...reversedSubjects];

  return (
    <section ref={containerRef} className="py-14 sm:py-16 bg-white border-t border-neutral-200 relative overflow-hidden">
      {/* Background accents (lightweight radial, no heavy blurs) */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-radial from-emerald-500/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 mb-8 sm:mb-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold mb-3">
          <Layers className="w-3.5 h-3.5" />
          <span>Acervo Completo de Estudos</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 leading-tight">
          Todas as 11 Apostilas em Movimento
        </h2>
        <p className="text-xs sm:text-sm text-neutral-600 mt-2 max-w-xl mx-auto">
          Confira o acervo de materiais desenvolvidos especificamente para o ENEM 2026 em movimento contínuo.
        </p>
      </div>

      {/* Marquee Wrapper with side fade gradients - Continuous non-stop */}
      <div className="relative w-full overflow-hidden space-y-4 sm:space-y-6 select-none">
        {/* Left and Right fade overlay masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

        {/* Row 1: Scrolling Left */}
        <div className="overflow-hidden w-full flex">
          <div
            className="animate-marquee-left flex py-1 pointer-events-auto"
            style={{ animationPlayState: isVisible ? 'running' : 'paused' }}
          >
            {row1Books.map((subject, idx) => (
              <BookCard key={`row1-${subject.id}-${idx}`} subject={subject} />
            ))}
          </div>
        </div>

        {/* Row 2: Scrolling Right */}
        <div className="overflow-hidden w-full flex">
          <div
            className="animate-marquee-right flex py-1 pointer-events-auto"
            style={{ animationPlayState: isVisible ? 'running' : 'paused' }}
          >
            {row2Books.map((subject, idx) => (
              <BookCard key={`row2-${subject.id}-${idx}`} subject={subject} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
