import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-4 bg-neutral-100 border-t border-neutral-200 text-center text-xs text-neutral-600">
      <div className="max-w-4xl mx-auto space-y-4 leading-relaxed">
        <p className="font-semibold text-neutral-800">
          © 2026 Nex Nota. Todos os direitos reservados. Material de uso exclusivamente educacional.
        </p>
        <p className="text-neutral-500">
          Este site não é afiliado ao Facebook, Instagram, Google ou a qualquer outra plataforma mencionada.
        </p>
        <p className="text-neutral-500">
          Todos os direitos sobre a obra e metodologia &ldquo;Nex Nota&rdquo; são protegidos nos termos da Lei nº 9.610/98 (Lei de Direitos Autorais).
        </p>
        <p className="text-neutral-500">
          A reprodução, distribuição ou comercialização não autorizada deste material, no todo ou em parte, por qualquer meio, constitui violação dos direitos autorais e sujeitará os infratores às sanções cíveis e criminais cabíveis.
        </p>
      </div>
    </footer>
  );
};
