import React, { useEffect } from 'react';
import { X, Check, Sparkles, ShieldCheck, Zap, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';
import { PLAN_UPGRADE_1890, PRICING_PLANS } from '../data/courseData';

interface UpgradeModal1890Props {
  isOpen: boolean;
  onClose: () => void;
}

export const UpgradeModal1890: React.FC<UpgradeModal1890Props> = ({ isOpen, onClose }) => {
  const plan1090 = PRICING_PLANS[0];

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200">
      {/* Backdrop overlay clickable */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-md bg-white rounded-2xl sm:rounded-3xl shadow-2xl border-2 border-emerald-500 overflow-hidden z-10 max-h-[94vh] flex flex-col">
        {/* Top Header Banner */}
        <div className="bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-800 text-white px-3.5 py-2 sm:px-4 sm:py-2.5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-black tracking-wide uppercase">
            <span className="flex h-2 w-2 relative shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-300"></span>
            </span>
            <span>⚡ Oportunidade Única Desbloqueada</span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Fechar pop-up"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-3.5 sm:p-5 overflow-y-auto space-y-3 sm:space-y-4">
          {/* Main Title */}
          <div className="text-center space-y-1">
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] sm:text-xs font-bold">
              <Sparkles className="w-3 h-3 fill-emerald-600 text-emerald-600" />
              <span>UPGRADE ESPECIAL</span>
            </div>
            <h3 className="text-base sm:text-xl font-black text-neutral-900 leading-tight">
              Leve o <span className="text-emerald-600">PLANO COMPLETO</span> por{' '}
              <span className="text-emerald-700 underline decoration-emerald-400 underline-offset-2">
                R$ 18,90
              </span>
              !
            </h3>
            <p className="text-[11px] sm:text-xs text-neutral-600 leading-snug max-w-xs mx-auto">
              Por apenas <strong className="text-emerald-700 font-extrabold">+R$ 8,00</strong> você garante o Combo com <strong className="text-neutral-900">todas as 11 matérias</strong> e todos os bônus!
            </p>
          </div>

          {/* Combo Image Mockup (compact) */}
          <div className="bg-gradient-to-b from-neutral-50 to-white rounded-xl p-1.5 border border-neutral-200/80 flex items-center justify-center">
            <ImageWithFallback
              src="https://i.imgur.com/fFoVM3v.png"
              alt="Combo ENEM Completo Todas as 11 Apostilas"
              className="max-h-20 sm:max-h-28 w-auto object-contain drop-shadow-sm"
              fallbackText="Combo Completo ENEM 11 Apostilas"
            />
          </div>

          {/* Pricing Highlight Pill (compact) */}
          <div className="bg-emerald-50/90 border border-emerald-300 rounded-xl p-2 sm:p-2.5 text-center shadow-xs">
            <div className="flex items-center justify-center gap-1.5 text-[11px] text-neutral-500 font-semibold leading-none mb-0.5">
              <span>De <del className="text-neutral-400">R$ 32,90</del></span>
              <span className="text-neutral-400">•</span>
              <span className="text-emerald-700 font-bold">Economize R$ 14,00</span>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-emerald-700 tracking-tight my-0.5">
              R$ 18,90
            </div>
            <div className="text-[10px] sm:text-[11px] text-neutral-600 font-medium">
              Pagamento único via PIX ou até 3x de R$ 6,70 no cartão
            </div>
          </div>

          {/* What you get checklist - Listed one below the other */}
          <div className="space-y-1.5 text-left">
            <span className="text-[10px] font-black uppercase tracking-wider text-emerald-900 block">
              Incluso no Plano Completo:
            </span>
            <div className="space-y-1.5 text-[11px] sm:text-xs text-neutral-800">
              <div className="flex items-start gap-2">
                <span className="p-0.5 rounded-full bg-emerald-100 text-emerald-700 shrink-0 mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span className="leading-snug"><strong>Acesso à nossa Plataforma</strong> Especializada para o ENEM 2026</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="p-0.5 rounded-full bg-emerald-100 text-emerald-700 shrink-0 mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span className="leading-snug"><strong>Todas as 11 Apostilas Completas</strong> (Todas as Matérias)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="p-0.5 rounded-full bg-emerald-100 text-emerald-700 shrink-0 mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span className="leading-snug"><strong>Acesso VITALÍCIO</strong> (sem mensalidades ou prazos)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="p-0.5 rounded-full bg-emerald-100 text-emerald-700 shrink-0 mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span className="leading-snug"><strong>100% Atualizado ENEM 2026</strong> + Pronto para leitura e impressão</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="p-0.5 rounded-full bg-emerald-100 text-emerald-700 shrink-0 mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span className="leading-snug"><strong>Garantia incondicional de 14 dias</strong></span>
              </div>

              {/* Bonus 1 */}
              <div className="flex items-start gap-2">
                <span className="p-0.5 rounded-full bg-emerald-100 text-emerald-700 shrink-0 mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span className="leading-snug"><strong>BONUS 1 -</strong> Questões comentadas de física e matemática passo a passo</span>
              </div>

              {/* Bonus 2 */}
              <div className="flex items-start gap-2">
                <span className="p-0.5 rounded-full bg-emerald-100 text-emerald-700 shrink-0 mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span className="leading-snug"><strong>BONUS 2 -</strong> Planner de estudos diário e semanal</span>
              </div>

              {/* Bonus 3 */}
              <div className="flex items-start gap-2">
                <span className="p-0.5 rounded-full bg-emerald-100 text-emerald-700 shrink-0 mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span className="leading-snug"><strong>BONUS 3 -</strong> Checklist dos Assuntos Mais Cobrados no ENEM</span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="space-y-1.5 pt-1">
            {/* Primary Action Button: 18,90 */}
            <a
              href={PLAN_UPGRADE_1890.checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs sm:text-sm tracking-wide uppercase shadow-md shadow-emerald-600/30 hover:shadow-emerald-600/50 transition-all flex items-center justify-center gap-2 text-center group transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>QUERO O PLANO COMPLETO POR R$ 18,90</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Secondary Action: Keep 10,90 basic plan */}
            <a
              href={plan1090.checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="w-full py-1 text-center text-[11px] text-neutral-500 hover:text-neutral-800 transition-colors underline underline-offset-2 block font-medium"
            >
              Não, quero abrir mão dos bônus e ficar apenas com o básico por R$ 10,90 →
            </a>
          </div>

          {/* Trust footer note */}
          <div className="flex items-center justify-center gap-1 text-[10px] text-neutral-400 font-medium pt-0.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Pagamento 100% Seguro · Acesso Imediato</span>
          </div>
        </div>
      </div>
    </div>
  );
};
