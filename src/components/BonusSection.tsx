import React from 'react';
import { Gift, ArrowRight, Zap, Trophy, Calendar, FileCheck, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

interface BonusSectionProps {
  onScrollToOffer?: () => void;
}

export const BonusSection: React.FC<BonusSectionProps> = ({ onScrollToOffer }) => {
  const scrollToOffer = () => {
    if (onScrollToOffer) {
      onScrollToOffer();
    } else {
      const el = document.getElementById('oferta');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const bonuses = [
    {
      badge: 'BÔNUS 1',
      icon: <Trophy className="w-7 h-7 text-amber-600" />,
      title: 'Questões Comentadas Passo a Passo (Física & Matemática)',
      description:
        'Resoluções detalhadas das questões mais recorrentes dos últimos ENEMs. Aprenda o raciocínio exato para destravar as disciplinas de exatas que mais elevam sua pontuação na Teoria de Resposta ao Item (TRI).',
      highlight: 'De R$ 47,00 por R$ 0,00',
      image: 'https://i.imgur.com/tqouMAZ.png',
    },
    {
      badge: 'BÔNUS 2',
      icon: <Calendar className="w-7 h-7 text-emerald-600" />,
      title: 'Planner de Estudos Estratégico (Diário & Semanal)',
      description:
        'A estrutura perfeita para organizar suas horas de estudo, definir metas claras de revisão e monitorar sua evolução sem procrastinação ou sobrecarga mental.',
      highlight: 'De R$ 37,00 por R$ 0,00',
      image: 'https://i.imgur.com/Ux2WSKe.png',
    },
    {
      badge: 'BÔNUS 3',
      icon: <FileCheck className="w-7 h-7 text-teal-600" />,
      title: 'Checklist dos Assuntos Mais Cobrados no ENEM',
      description:
        'O raio-X definitivo com os conteúdos prioritários por matéria. Saiba exatamente o que priorizar nos seus estudos e revisões para garantir os maiores ganhos de nota em menos tempo.',
      highlight: 'De R$ 29,00 por R$ 0,00',
      image: 'https://i.imgur.com/DbRalJq.png',
    },
  ];

  return (
    <section id="bonus" className="py-16 sm:py-20 px-4 bg-gradient-to-b from-white via-emerald-50/30 to-white border-t border-neutral-200 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold uppercase tracking-wider shadow-2xs">
            <Gift className="w-4 h-4 text-emerald-700" />
            <span>Presentes Especiais Para Você</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-neutral-900 leading-tight tracking-tight">
            Levando o Plano Completo Hoje, Você Ainda Ganha{' '}
            <span className="text-emerald-700 underline decoration-emerald-400 underline-offset-4">
              3 Super Bônus Exclusivos
            </span>
          </h2>

          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            Criamos ferramentas práticas complementares para você não apenas ter o conteúdo, mas ter o método e a rotina ideais para ser aprovado no ENEM 2026.
          </p>

          <div className="pt-1">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-100/90 px-3.5 py-1 rounded-full border border-emerald-300 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
              Valor total dos bônus: R$ 113,00 (100% Grátis hoje)
            </span>
          </div>
        </div>

        {/* 3-Column Centered Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-10">
          {bonuses.map((bonus, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-neutral-200 hover:border-emerald-400 transition-all duration-300 shadow-xs hover:shadow-md flex flex-col items-center text-center group"
            >
              {/* 1. PRIMEIRO AS IMAGENS (CENTRALIZADAS) */}
              {bonus.image ? (
                <div className="h-40 sm:h-44 w-full flex items-center justify-center p-3 mb-5 bg-gradient-to-b from-neutral-50 to-white rounded-xl border border-neutral-200/80 shadow-2xs group-hover:border-emerald-300/60 transition-colors">
                  <ImageWithFallback
                    src={bonus.image}
                    alt={bonus.title}
                    className="max-h-36 sm:max-h-40 w-auto object-contain drop-shadow-sm rounded transform group-hover:scale-105 transition-transform duration-300"
                    fallbackText={bonus.title}
                  />
                </div>
              ) : (
                <div className="h-40 sm:h-44 w-full flex flex-col items-center justify-center p-4 mb-5 bg-gradient-to-b from-emerald-50/60 to-white rounded-xl border border-emerald-200/70 shadow-2xs group-hover:border-emerald-300 transition-colors">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-100 border border-emerald-300/80 flex items-center justify-center mb-2.5 shadow-2xs group-hover:scale-110 transition-transform">
                    {bonus.icon}
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-emerald-800">
                    Checklist ENEM 2026
                  </span>
                </div>
              )}

              {/* 2. DEPOIS A COPY (CENTRALIZADA) */}
              <div className="w-full flex flex-col items-center text-center flex-1 space-y-2">
                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200/80">
                  {bonus.badge}
                </span>

                <div className="text-xs font-bold text-neutral-400 line-through">
                  {bonus.highlight.split(' por ')[0]}
                  <strong className="text-emerald-700 no-underline ml-1.5 font-black">
                    → GRÁTIS
                  </strong>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-neutral-900 group-hover:text-emerald-800 transition-colors leading-snug pt-1">
                  {bonus.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed pt-1">
                  {bonus.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout & Quick Action */}
        <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-emerald-900 text-white shadow-lg text-center sm:text-left">
          <div className="space-y-0.5">
            <span className="text-xs font-bold text-emerald-300 flex items-center justify-center sm:justify-start gap-1">
              <Zap className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" /> Disponível no Plano Completo
            </span>
            <p className="text-xs sm:text-sm text-emerald-100 font-medium">
              Acesso imediato e vitalício a todos os bônus inclusos na sua compra.
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToOffer}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shrink-0 cursor-pointer shadow-md hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Garantir com Bônus</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
