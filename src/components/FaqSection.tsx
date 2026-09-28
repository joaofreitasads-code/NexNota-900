import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/courseData';

export const FaqSection: React.FC = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  const toggleIndex = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="py-20 px-4 bg-white border-t border-neutral-200">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold mb-2">
            <HelpCircle className="w-4 h-4 text-emerald-600" />
            <span>Tire suas Dúvidas</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndexes.includes(idx);
            return (
              <div
                key={idx}
                className="rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-emerald-300 transition-colors overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-neutral-900 text-base sm:text-lg transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <span
                    className={`p-1.5 rounded-full bg-white border border-neutral-200 text-emerald-700 shrink-0 transition-transform duration-300 shadow-sm ${
                      isOpen ? 'rotate-180 bg-emerald-100 border-emerald-300' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm sm:text-base text-neutral-600 border-t border-neutral-200 leading-relaxed whitespace-pre-line">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
