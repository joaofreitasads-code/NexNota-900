import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-white border-t border-neutral-200">
      <div className="max-w-4xl mx-auto">
        <div className="bg-neutral-50 border border-neutral-200 rounded-3xl p-6 sm:p-10 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row items-center gap-8">
          
          {/* Badge Image */}
          <div className="w-48 sm:w-56 shrink-0 flex items-center justify-center">
            <ImageWithFallback
              src="https://i.imgur.com/AGQwAFg.png"
              alt="Garantia Incondicional de 14 Dias"
              className="w-full h-auto object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.15)]"
              fallbackText="Garantia 14 Dias 100% do Dinheiro de Volta"
            />
          </div>

          {/* Text */}
          <div className="space-y-4 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Garantia Blindada de 14 Dias</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900">
              Além disso, seu risco é todo meu!
            </h2>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              Eu confio tanto nesse método que assumo o risco. Teste o material por 14 dias. Se você achar que não consegue aplicar ou não gostar do conteúdo, eu devolvo 100% do seu dinheiro. Sem perguntas. Meu compromisso é com sua aprovação!
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
