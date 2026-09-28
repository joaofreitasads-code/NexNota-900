import React, { useState } from 'react';
import { Plus, Minus, BookCheck } from 'lucide-react';
import { SubjectItem } from '../data/courseData';
import { ImageWithFallback } from './ImageWithFallback';

interface SubjectCardProps {
  subject: SubjectItem;
}

export const SubjectCard: React.FC<SubjectCardProps> = ({ subject }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white hover:bg-neutral-50/80 border border-neutral-200 hover:border-emerald-500/50 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl">
      <div>
        {/* Book Mockup Preview */}
        <div className="relative aspect-square max-w-[280px] mx-auto mb-6 flex items-center justify-center p-2 group-hover:scale-105 transition-transform duration-300">
          <ImageWithFallback
            src={subject.image}
            alt={subject.title}
            className="w-full h-full object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.18)]"
            fallbackText={subject.title}
          />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-neutral-900 mb-3 text-center sm:text-left flex items-center justify-center sm:justify-start gap-2">
          <BookCheck className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>{subject.title}</span>
        </h3>

        {/* Description */}
        <p className="text-sm text-neutral-600 leading-relaxed mb-5 text-center sm:text-left">
          {subject.description}
        </p>
      </div>

      {/* Accordion / Dropdown */}
      <div className="border-t border-neutral-200 pt-4 mt-auto">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full py-2.5 px-4 rounded-xl bg-neutral-50 hover:bg-emerald-50 border border-neutral-200 hover:border-emerald-300 text-emerald-700 text-xs font-bold uppercase tracking-wider flex items-center justify-between transition-colors cursor-pointer"
          aria-expanded={isOpen}
        >
          <span>{isOpen ? 'Ocultar Assuntos' : 'Ver Assuntos Abordados'}</span>
          <span className="p-1 rounded-md bg-white border border-neutral-200 text-neutral-700 shadow-sm">
            {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
          </span>
        </button>

        {isOpen && (
          <div className="mt-4 p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-xs text-neutral-700 max-h-80 overflow-y-auto space-y-3.5">
            {subject.topics.map((cat, idx) => (
              <div key={idx} className="pb-2.5 border-b border-neutral-200/80 last:border-b-0 last:pb-0">
                <span className="font-bold text-emerald-700 block mb-1">
                  {cat.category}:
                </span>
                <p className="text-neutral-600 leading-relaxed">
                  {cat.items.join(', ')}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
