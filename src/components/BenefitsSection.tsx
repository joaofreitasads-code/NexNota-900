import React from 'react';
import { Banknote, BookOpen, CheckSquare, Zap, Brain, Award } from 'lucide-react';
import { BENEFITS } from '../data/courseData';

const iconMap: Record<string, React.ReactNode> = {
  Banknote: <Banknote className="w-6 h-6 text-emerald-600" />,
  BookOpen: <BookOpen className="w-6 h-6 text-emerald-600" />,
  CheckSquare: <CheckSquare className="w-6 h-6 text-emerald-600" />,
  Zap: <Zap className="w-6 h-6 text-emerald-600" />,
  Brain: <Brain className="w-6 h-6 text-emerald-600" />,
  Award: <Award className="w-6 h-6 text-emerald-600" />,
};

export const BenefitsSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-white border-t border-neutral-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest font-semibold text-emerald-700 block mb-2">
            Vantagens Exclusivas
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 leading-tight">
            Veja como o COMBO ENEM NOTA 1000 vai te ajudar na sua rotina de estudos:
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS.map((b, idx) => (
            <div
              key={idx}
              className="bg-neutral-50 hover:bg-emerald-50/40 border border-neutral-200 hover:border-emerald-500/40 rounded-2xl p-6 transition-all duration-300 flex flex-col group shadow-sm hover:shadow-md"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-neutral-200 group-hover:border-emerald-500/40 shadow-sm flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                {iconMap[b.iconName] || <Zap className="w-6 h-6 text-emerald-600" />}
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2.5">
                {b.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
