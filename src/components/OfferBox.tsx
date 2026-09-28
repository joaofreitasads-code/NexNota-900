import React, { useState } from 'react';
import { Check, ShieldCheck, Zap, Lock, Sparkles, BookOpen, X } from 'lucide-react';
import { PRICING_PLANS } from '../data/courseData';
import { ImageWithFallback } from './ImageWithFallback';
import { UpgradeModal1890 } from './UpgradeModal1890';

export const OfferBox: React.FC = () => {
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);
  const plan1090 = PRICING_PLANS[0];
  const plan2990 = PRICING_PLANS[1];

  return (
    <section id="oferta" className="py-20 px-4 bg-gradient-to-b from-neutral-50 via-white to-neutral-50 border-t border-neutral-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold mb-3">
            <Zap className="w-4 h-4 fill-emerald-600 text-emerald-600" />
            <span>Condição Especial por Tempo Limitado</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 leading-tight">
            Escolha o melhor plano para alcançar sua aprovação no ENEM 2026:
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 mt-3">
            Ambos os planos contam com acesso imediato e a nossa garantia incondicional de 14 dias.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* PLANO 1: ESSENCIAL (R$ 10,90) */}
          <div className="rounded-3xl bg-white border border-neutral-200 hover:border-neutral-300 p-6 sm:p-8 flex flex-col justify-between shadow-md hover:shadow-xl transition-all relative">
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-700 font-bold text-xs tracking-wider">
                  <BookOpen className="w-3.5 h-3.5 text-neutral-500" />
                  {plan1090.badge}
                </span>
                <span className="text-xs font-medium text-neutral-500">Acesso Digital</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-2">
                {plan1090.name}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 mb-6 leading-relaxed">
                {plan1090.description}
              </p>

              {/* Price display */}
              <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200/90 mb-6 text-center">
                <span className="text-xs text-neutral-500 line-through block mb-0.5">
                  de {plan1090.originalPrice} por apenas:
                </span>
                <div className="text-3xl sm:text-4xl font-black text-neutral-900 my-1">
                  {plan1090.currentPrice}
                </div>
                <span className="text-xs text-neutral-600 font-medium block mb-2">
                  {plan1090.installments}
                </span>
                <span className="inline-block text-[11px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                  {plan1090.discountAmount} de desconto
                </span>
              </div>

              {/* Features list */}
              <div className="space-y-3 mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 block mb-2">
                  O que está incluso:
                </span>
                <div className="space-y-2.5">
                  {plan1090.features.map((feature, i) => {
                    const isExcluded = feature.toLowerCase().startsWith('sem ');
                    return (
                      <div
                        key={i}
                        className={`flex items-start gap-3 p-2.5 rounded-xl border ${
                          isExcluded
                            ? 'bg-neutral-50/50 border-dashed border-neutral-200 text-neutral-400'
                            : 'bg-neutral-50/80 border border-neutral-200/60'
                        }`}
                      >
                        <span
                          className={`p-1 rounded-full shrink-0 mt-0.5 ${
                            isExcluded
                              ? 'bg-neutral-100 text-neutral-400'
                              : 'bg-neutral-200 text-neutral-700'
                          }`}
                        >
                          {isExcluded ? (
                            <X className="w-3.5 h-3.5 stroke-[2.5]" />
                          ) : (
                            <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                          )}
                        </span>
                        <span
                          className={`text-xs sm:text-sm leading-snug font-medium ${
                            isExcluded ? 'text-neutral-400' : 'text-neutral-700'
                          }`}
                        >
                          {feature}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* CTA Button - Triggers 18,90 Upgrade Popup */}
            <div>
              <button
                type="button"
                onClick={() => setIsUpgradeModalOpen(true)}
                className="w-full py-3.5 sm:py-4 px-6 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-sm tracking-wide uppercase transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg text-center cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>{plan1090.ctaText}</span>
              </button>
              <span className="text-[11px] text-neutral-500 text-center block mt-2.5">
                Pagamento único de R$ 10,90 · Sem mensalidades
              </span>
            </div>
          </div>

          {/* PLANO 2: COMBO COMPLETO VIP (R$ 32,90) - HIGHLIGHTED */}
          <div className="rounded-3xl bg-white border-2 border-emerald-500 p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden ring-1 ring-emerald-500/20">
            {/* Top highlight bar */}
            <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-400" />

            <div>
              {/* Header: APENAS PLANO COMPLETO */}
              <div className="mb-5">
                <h3 className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">
                  Plano Completo
                </h3>
              </div>

              {/* Imagem em cima da oferta de 32,90 */}
              <div className="mb-6 flex items-center justify-center">
                <ImageWithFallback
                  src="https://i.imgur.com/jCYWXTu.png"
                  alt="Oferta Especial Combo Completo VIP ENEM 2026 - R$ 32,90"
                  className="w-full h-auto object-contain max-h-[280px] mx-auto drop-shadow-md"
                  fallbackText="Combo Completo VIP ENEM 2026"
                />
              </div>

              {/* Price display */}
              <div className="py-2 mb-6 text-center">
                <span className="text-xs text-neutral-500 line-through block mb-0.5">
                  de {plan2990.originalPrice} por apenas:
                </span>
                <div className="text-4xl sm:text-5xl font-black text-emerald-700 tracking-tight my-1">
                  {plan2990.currentPrice}
                </div>
                <span className="text-xs sm:text-sm text-neutral-700 font-semibold block mb-2">
                  {plan2990.installments}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-emerald-600 px-3 py-1 rounded-full shadow-sm">
                  Economize {plan2990.discountAmount}
                </span>
              </div>

              {/* Features and Bonuses - Clean organized list without cards/boxes */}
              <div className="space-y-4 mb-8">
                {/* 1. Plataforma */}
                <div className="flex items-start gap-3">
                  <span className="p-1 rounded-full bg-emerald-100 text-emerald-700 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                  <span className="text-xs sm:text-sm text-neutral-900 font-bold leading-snug">
                    Acesso à nossa Plataforma Especializada e Treinada para o ENEM 2026
                  </span>
                </div>

                {/* 2. 11 Apostilas */}
                <div className="flex items-start gap-3">
                  <span className="p-1 rounded-full bg-emerald-100 text-emerald-700 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                  <span className="text-xs sm:text-sm text-neutral-800 font-medium leading-snug">
                    Todas as 11 Apostilas Completas (Biologia, Física, Química, Geografia, História, Filosofia, Sociologia, Artes, Literatura, Português, Matemática)
                  </span>
                </div>

                {/* 3. Acesso Vitalício */}
                <div className="flex items-start gap-3">
                  <span className="p-1 rounded-full bg-emerald-100 text-emerald-700 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                  <span className="text-xs sm:text-sm text-neutral-800 font-medium leading-snug">
                    Acesso VITALÍCIO (estude no seu ritmo, sem limites de tempo)
                  </span>
                </div>

                {/* 4. Atualizado 2026 */}
                <div className="flex items-start gap-3">
                  <span className="p-1 rounded-full bg-emerald-100 text-emerald-700 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                  <span className="text-xs sm:text-sm text-neutral-800 font-medium leading-snug">
                    Material 100% atualizado para o ENEM 2026
                  </span>
                </div>

                {/* 5. Leitura e impressão */}
                <div className="flex items-start gap-3">
                  <span className="p-1 rounded-full bg-emerald-100 text-emerald-700 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                  <span className="text-xs sm:text-sm text-neutral-800 font-medium leading-snug">
                    Pronto para leitura digital e impressão gráfica em alta qualidade
                  </span>
                </div>

                {/* 6. Garantia */}
                <div className="flex items-start gap-3">
                  <span className="p-1 rounded-full bg-emerald-100 text-emerald-700 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                  <span className="text-xs sm:text-sm text-neutral-800 font-medium leading-snug">
                    Garantia incondicional blindada de 14 dias
                  </span>
                </div>

                {/* 7. Bonus 1 */}
                <div className="flex items-start gap-3">
                  <span className="p-1 rounded-full bg-emerald-100 text-emerald-700 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                  <span className="text-xs sm:text-sm text-neutral-800 font-medium leading-snug">
                    <strong className="text-neutral-900 font-bold">BONUS 1 -</strong> Questões comentadas de física e matemática dos ENEM passados com resoluções passo a passo.
                  </span>
                </div>

                {/* 8. Bonus 2 */}
                <div className="flex items-start gap-3">
                  <span className="p-1 rounded-full bg-emerald-100 text-emerald-700 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                  <span className="text-xs sm:text-sm text-neutral-800 font-medium leading-snug">
                    <strong className="text-neutral-900 font-bold">BONUS 2 -</strong> Planner de estudos diário e semanal para organização de rotina e acompanhamento de metas.
                  </span>
                </div>

                {/* 9. Bonus 3 */}
                <div className="flex items-start gap-3">
                  <span className="p-1 rounded-full bg-emerald-100 text-emerald-700 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                  <span className="text-xs sm:text-sm text-neutral-800 font-medium leading-snug">
                    <strong className="text-neutral-900 font-bold">BONUS 3 -</strong> Checklist dos Assuntos Mais Cobrados: Lista por matéria com os temas que mais aparecem na prova.
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <a
                href={plan2990.checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 sm:py-5 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-base sm:text-lg tracking-wide uppercase shadow-lg shadow-emerald-600/30 hover:shadow-emerald-600/50 transition-all transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2 text-center"
              >
                <span>{plan2990.ctaText}</span>
              </a>
              <span className="text-[11px] text-neutral-500 text-center block mt-2.5 font-medium">
                ⚡ Acesso Vitalício Imediato · Pagamento 100% Seguro
              </span>
            </div>
          </div>

        </div>

        {/* Global Trust Badges */}
        <div className="mt-12 pt-8 border-t border-neutral-200 flex flex-col items-center gap-4">
          <div className="max-w-xs w-full flex items-center justify-center">
            <ImageWithFallback
              src="https://enem.medvetab.com.br/wp-content/uploads/2026/08/icons2.png"
              alt="Formas de Pagamento e Segurança"
              className="w-full h-auto object-contain"
              fallbackText="Pagamento Seguro via Cartão ou PIX"
            />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-neutral-600">
            <span className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-emerald-600" />
              Ambiente Criptografado & Seguro
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-emerald-600" />
              Envio Automático do Acesso no E-mail
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              Garantia Incondicional de 14 Dias
            </span>
          </div>
        </div>

      </div>

      {/* Upgrade Popup Modal: R$ 18,90 */}
      <UpgradeModal1890
        isOpen={isUpgradeModalOpen}
        onClose={() => setIsUpgradeModalOpen(false)}
      />
    </section>
  );
};

