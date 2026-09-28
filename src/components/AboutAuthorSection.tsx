import React from 'react';
import { Sparkles, ArrowRight, GraduationCap } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

export const AboutAuthorSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-white border-t border-neutral-200">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          
          {/* Portrait Photo */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] aspect-[2/3] rounded-3xl overflow-hidden border-2 border-emerald-500/40 shadow-xl bg-neutral-100">
              <ImageWithFallback
                src="https://enem.medvetab.com.br/wp-content/uploads/2026/08/PS01-659x1024.webp"
                alt="Ana Beatriz - Médica Veterinária & Criadora do Método"
                className="w-full h-full object-cover object-top"
                fallbackText="Ana Beatriz - Criadora do Método"
              />
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black via-black/70 to-transparent text-center">
                <span className="text-white font-bold text-base block">Dra. Ana Beatriz</span>
                <span className="text-xs text-emerald-300 font-medium">Médica Veterinária & Criadora do Combo ENEM</span>
              </div>
            </div>
          </div>

          {/* Bio text */}
          <div className="md:col-span-7 space-y-5 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
              <GraduationCap className="w-4 h-4 text-emerald-600" />
              <span>Conheça sua Mentora</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 leading-tight">
              Quem eu sou para te ensinar alguma coisa?
            </h2>

            <div className="space-y-4 text-neutral-700 text-sm sm:text-base leading-relaxed">
              <p>
                Meu nome é <strong className="text-emerald-700">Ana Beatriz</strong>, hoje sou médica veterinária formada, mas essa história começou em 2020, quando eu estava me preparando para o ENEM. E logo no início eu percebi o quanto era fácil se perder no meio de tanto conteúdo. Por mais que eu estudasse, nada parecia fazer sentido de verdade.
              </p>

              <p>
                Foi quando eu <strong className="text-emerald-700">decidi criar o meu próprio método</strong>. Peguei todo o conteúdo das matérias e <strong className="text-emerald-700">organizei de forma estratégica, em um só lugar, com lógica e clareza</strong>.
              </p>

              <p>
                Dessa forma, estudar ficou mais leve, e logo vieram os resultados:
              </p>

              <div className="space-y-2.5 pl-2 sm:pl-4 border-l-2 border-emerald-500 py-1 text-sm sm:text-base">
                <div className="flex items-center gap-2 text-neutral-800">
                  <ArrowRight className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Comecei a dominar todos os conteúdos de forma muito mais rápida e sem estresse;</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-800">
                  <ArrowRight className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Passei no ENEM logo de primeira, com <strong className="text-emerald-700 font-bold">940 pontos na redação</strong> e notas altas em todas as áreas;</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-800">
                  <ArrowRight className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>E fui aprovada em três cursos concorridos de uma vez: <strong>odontologia</strong>, <strong>terceiro lugar em biomedicina</strong> e <strong>medicina veterinária</strong> na instituição que eu sempre sonhei.</span>
                </div>
              </div>

              <p className="pt-2 text-neutral-800 font-medium bg-emerald-50 p-4 rounded-xl border border-emerald-200">
                Foi então que, vendo o potencial desse método, eu coloquei um novo objetivo de vida: <span className="text-emerald-900 font-semibold">ajudar o máximo de estudantes que estão se preparando para o ENEM a aprender de forma prática e eficiente, com um método que realmente funciona, sem depender de decoreba</span>.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
