import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { TARGET_AUDIENCE } from '../data/courseData';

export const TargetAudienceSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-white border-t border-neutral-200">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest font-semibold text-emerald-700 block mb-2">
            Para quem é o método
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900">
            Esse material é ideal para você que deseja:
          </h2>
        </div>

        <div className="space-y-4">
          {TARGET_AUDIENCE.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-5 rounded-2xl bg-neutral-50 border border-neutral-200/90 hover:border-emerald-500/40 transition-colors shadow-sm group"
            >
              <div className="p-1 rounded-full bg-emerald-100 text-emerald-700 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                <CheckCircle2 className="w-5 h-5 fill-emerald-500/20" />
              </div>
              <p className="text-sm sm:text-base text-neutral-800 font-medium leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
