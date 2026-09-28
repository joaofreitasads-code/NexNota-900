/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { SUBJECTS } from './data/courseData';
import { ImageWithFallback } from './components/ImageWithFallback';
import { SubjectCard } from './components/SubjectCard';
import { BooksInfiniteCarousel } from './components/BooksInfiniteCarousel';
import { SamplesCarousel } from './components/SamplesCarousel';
import { PlatformVideoSection } from './components/PlatformVideoSection';
import { BenefitsSection } from './components/BenefitsSection';
import { StorySection } from './components/StorySection';
import { BonusSection } from './components/BonusSection';
import { OfferBox } from './components/OfferBox';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'natureza' | 'humanas' | 'linguagens' | 'matematica'>('all');

  const filterMap: Record<string, string[]> = {
    natureza: ['biologia', 'fisica', 'quimica'],
    humanas: ['geografia', 'historia', 'filosofia', 'sociologia'],
    linguagens: ['artes', 'literatura', 'portugues'],
    matematica: ['matematica'],
  };

  const filteredSubjects = SUBJECTS.filter((sub) => {
    if (selectedFilter === 'all') return true;
    return filterMap[selectedFilter]?.includes(sub.id);
  });

  const scrollToOffer = () => {
    const el = document.getElementById('oferta');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col selection:bg-emerald-500 selection:text-white">
      {/* HERO SECTION */}
      <section className="pt-12 pb-16 px-4 bg-gradient-to-b from-white via-neutral-50/50 to-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          
          {/* Main Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-neutral-900 leading-tight tracking-tight max-w-3xl mx-auto">
            Estude com um material completo para o ENEM 2026, incluindo redação, simulados e revisões pensadas para quem quer chegar mais perto dos <span className="text-emerald-600 underline decoration-emerald-500/50 underline-offset-4">900+</span>.
          </h1>

          {/* Hero Mockup */}
          <div className="max-w-2xl mx-auto my-6 sm:my-8 px-2">
            <ImageWithFallback
              src="https://i.imgur.com/fFoVM3v.png"
              alt="Mockup do Combo ENEM com todas as apostilas"
              priority={true}
              className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)] transform hover:scale-[1.01] transition-transform duration-300"
              fallbackText="Combo ENEM - Apostilas Completas"
            />
          </div>

          {/* Highlight Callout */}
          <div className="max-w-2xl mx-auto bg-emerald-50/80 p-4 sm:p-5 rounded-2xl border border-emerald-200 text-emerald-950 text-base sm:text-lg font-medium shadow-sm">
            <p>
              <strong>Menos confusão, mais foco:</strong> organize sua rotina, revise os conteúdos certos e avance com confiança rumo à aprovação no <strong>ENEM 2026</strong>.
            </p>
          </div>

          {/* Descriptive Copy */}
          <div className="max-w-2xl mx-auto space-y-4 text-neutral-700 text-sm sm:text-base leading-relaxed">
            <p>
              Neste combo você encontrará <strong>apostilas completas</strong>, de <strong>todas as matérias</strong>, bem <strong>visuais</strong>, <strong>fáceis de entender e revisar</strong>. De hoje em diante, <strong>seus estudos serão muito mais produtivos</strong>.
            </p>
            <p>
              Transforme sua preparação para o ENEM e alcance a aprovação que você tanto deseja.
            </p>
          </div>

          {/* Fast CTA */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToOffer}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-base uppercase tracking-wider shadow-lg shadow-emerald-600/30 transition-all cursor-pointer flex items-center justify-center gap-2 hover:-translate-y-0.5"
            >
              <span>Ver Planos & Garantir Acesso</span>
              <ArrowDown className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* TWO-ROW INFINITE BOOKS CAROUSEL */}
      <BooksInfiniteCarousel />

      {/* APOSTILAS / SUBJECTS SECTION */}
      <section id="materias" className="py-20 px-4 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <span className="text-xs uppercase tracking-widest font-semibold text-emerald-700">
              Grade Completa de Estudos
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 leading-tight">
              Você terá acesso a todos os assuntos, de todas as matérias, mastigadinhos e fáceis de consumir, entender e revisar. Veja:
            </h2>
            <p className="text-sm text-neutral-600 leading-relaxed pt-2">
              <strong className="text-neutral-800">Obs:</strong> todas as matérias com <strong>foco único nos assuntos essenciais para o estudo do que realmente cai no ENEM</strong>. Nada mais, para não sobrecarregar você de assuntos desnecessários. Veja todos:
            </p>
          </div>

          {/* Quick Filter Tabs for Easy Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {[
              { id: 'all', label: 'Todas as Matérias (11)' },
              { id: 'matematica', label: 'Matemática (1)' },
              { id: 'linguagens', label: 'Linguagens & Artes (3)' },
              { id: 'humanas', label: 'Ciências Humanas (4)' },
              { id: 'natureza', label: 'Ciências da Natureza (3)' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  selectedFilter === tab.id
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                    : 'bg-white border border-neutral-200 text-neutral-700 hover:text-neutral-900 hover:border-neutral-300 shadow-sm'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Subject Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredSubjects.map((subject) => (
              <SubjectCard key={subject.id} subject={subject} />
            ))}
          </div>

          {/* Bottom call to action banner in subjects */}
          <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-emerald-50 border border-emerald-200 text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="text-left space-y-1">
              <h4 className="text-lg font-bold text-neutral-900">Gostou da grade completa de estudos?</h4>
              <p className="text-xs sm:text-sm text-neutral-600">Planos a partir de apenas R$ 10,90 ou Combo Completo Vitalício por R$ 32,90!</p>
            </div>
            <button
              onClick={scrollToOffer}
              className="py-3 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-colors shrink-0 cursor-pointer shadow-md shadow-emerald-600/20"
            >
              Escolher Plano
            </button>
          </div>

        </div>
      </section>

      {/* SAMPLE PAGES CAROUSEL */}
      <SamplesCarousel />

      {/* PLATFORM & PRACTICAL TRAINING VIDEO */}
      <PlatformVideoSection />

      {/* BENEFITS / VALUE PROPOSITION */}
      <BenefitsSection />

      {/* STORY & METHOD SECTION */}
      <StorySection />

      {/* EXCLUSIVE BONUSES SECTION */}
      <BonusSection onScrollToOffer={scrollToOffer} />

      {/* MAIN OFFER & PRICING CARD */}
      <OfferBox />

      {/* GUARANTEE SECTION */}
      <GuaranteeSection />

      {/* FAQS */}
      <FaqSection />

      {/* FOOTER */}
      <Footer />

    </div>
  );
}
