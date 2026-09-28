import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Sparkles, Laptop, ShieldCheck, ArrowRight, Layers } from 'lucide-react';

export const PlatformVideoSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasStartedByUser, setHasStartedByUser] = useState(false);
  const [isNearViewport, setIsNearViewport] = useState(false);

  // IntersectionObserver to preload video when approaching viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsNearViewport(true);
          } else {
            // Pause video when out of viewport
            if (videoRef.current && !videoRef.current.paused) {
              videoRef.current.pause();
              setIsPlaying(false);
            }
          }
        });
      },
      { rootMargin: '150px 0px', threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // When user clicks the YouTube style play button, play directly with sound
  const handlePlayWithSound = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = false;
    videoRef.current.volume = 1;
    setIsMuted(false);
    setHasStartedByUser(true);
    const playPromise = videoRef.current.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // If browser strictly blocks unmuted play on first user tap, fallback to muted then unmute
          if (videoRef.current) {
            videoRef.current.muted = true;
            setIsMuted(true);
            videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
          }
        });
    }
  };

  const handlePause = () => {
    if (!videoRef.current) return;
    videoRef.current.pause();
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      handlePlayWithSound();
    } else {
      handlePause();
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const scrollToOffer = () => {
    const el = document.getElementById('oferta');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={containerRef} className="py-16 sm:py-20 px-4 bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-900 text-white relative overflow-hidden">
      {/* Lightweight ambient gradients optimized for mobile GPUs (no heavy CSS blurs) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-radial from-emerald-500/12 to-transparent pointer-events-none opacity-80" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-wider uppercase">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <Laptop className="w-3.5 h-3.5" />
            <span>Ambiente Exclusivo de Estudos</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
            Você Terá Acesso a Uma Plataforma Feita para o ENEM com{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              Treinamento Prático
            </span>
          </h2>

          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl mx-auto">
            Esqueça arquivos soltos e rotinas bagunçadas. Veja no vídeo abaixo como funciona por dentro a plataforma prática desenvolvida para acelerar a sua revisão e aprovação no ENEM 2026.
          </p>
        </div>

        {/* Video Player Device Mockup */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl sm:rounded-3xl bg-neutral-900 border border-neutral-700/80 shadow-2xl overflow-hidden ring-1 ring-emerald-500/20">
            
            {/* Top Device Bar (Browser / Window Mockup) */}
            <div className="bg-neutral-850 px-4 py-2.5 sm:py-3 border-b border-neutral-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 text-[11px] sm:text-xs font-mono text-neutral-400 truncate max-w-[160px] sm:max-w-none">
                  plataforma.enem2026.app
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[10px] sm:text-[11px] font-semibold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/60">
                  ● Acesso 100% Online
                </span>
              </div>
            </div>

            {/* Video Canvas Container with lazy loading and optimized controls */}
            <div className="relative aspect-video bg-neutral-950 flex items-center justify-center group overflow-hidden">
              <video
                ref={videoRef}
                src="https://i.imgur.com/EjNTaB5.mp4"
                poster="https://i.imgur.com/jCYWXTu.png"
                className="w-full h-full object-cover cursor-pointer"
                loop
                muted={isMuted}
                playsInline
                preload="auto"
                onClick={togglePlay}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />

              {/* YouTube Style Play Button Overlay (Visible whenever paused or before starting) */}
              {!isPlaying && (
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePlayWithSound();
                  }}
                  className="absolute inset-0 bg-neutral-950/40 backdrop-blur-[2px] flex flex-col items-center justify-center gap-3 cursor-pointer z-30 transition-all duration-300 hover:bg-neutral-950/20 group/yt"
                  role="button"
                  aria-label="Assistir vídeo com som"
                >
                  {/* YouTube iconic badge button */}
                  <div className="relative w-16 h-11 sm:w-20 sm:h-14 bg-red-600 group-hover/yt:bg-red-500 rounded-2xl flex items-center justify-center shadow-2xl transition-all duration-200 group-hover/yt:scale-110 drop-shadow-[0_10px_25px_rgba(220,38,38,0.5)]">
                    <svg
                      className="w-7 h-7 sm:w-8 sm:h-8 text-white fill-current ml-1"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  
                  <span className="px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-white/10 text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-lg backdrop-blur-sm group-hover/yt:border-red-500/50">
                    <Volume2 className="w-4 h-4 text-emerald-400 animate-pulse" />
                    {hasStartedByUser ? 'Clique para continuar assistindo' : 'Clique para assistir com som'}
                  </span>
                </div>
              )}

              {/* Fast floating control buttons */}
              {hasStartedByUser && isPlaying && (
                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 flex items-center gap-2 z-20 pointer-events-auto opacity-90 group-hover:opacity-100 transition-opacity">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleMute();
                    }}
                    className="p-2 sm:p-2.5 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-white backdrop-blur-sm border border-white/10 shadow-lg cursor-pointer transition-transform hover:scale-105"
                    title={isMuted ? 'Ativar som' : 'Desativar som'}
                    aria-label={isMuted ? 'Ativar som' : 'Desativar som'}
                  >
                    {isMuted ? <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-neutral-300" /> : <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />}
                  </button>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePause();
                    }}
                    className="p-2 sm:p-2.5 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-white backdrop-blur-sm border border-white/10 shadow-lg cursor-pointer transition-transform hover:scale-105"
                    title="Pausar vídeo"
                    aria-label="Pausar vídeo"
                  >
                    <Pause className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-neutral-300" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 4 Feature Cards of the Platform */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 mt-8 sm:mt-10">
          <div className="p-4 rounded-2xl bg-neutral-850/80 border border-neutral-800 hover:border-emerald-500/40 transition-colors">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
              <Layers className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white mb-1">Tudo Centralizado</h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Todas as 11 apostilas e assuntos organizados por área do conhecimento em um único local.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-neutral-850/80 border border-neutral-800 hover:border-emerald-500/40 transition-colors">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
              <Sparkles className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white mb-1">Treinamento Prático</h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Orientações diretas ao ponto ensinando o método de estudo com aplicação em questões do ENEM.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-neutral-850/80 border border-neutral-800 hover:border-emerald-500/40 transition-colors">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
              <Laptop className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white mb-1">Celular, Tablet e PC</h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Acesse onde e quando quiser, no seu ritmo, com carregamento instantâneo de cada material.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-neutral-850/80 border border-neutral-800 hover:border-emerald-500/40 transition-colors">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white mb-1">Acesso Imediato</h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Liberação automática no seu e-mail logo após a confirmação com garantia blindada de 14 dias.
            </p>
          </div>
        </div>

        {/* CTA Banner inside video section */}
        <div className="mt-8 sm:mt-10 text-center">
          <button
            onClick={scrollToOffer}
            className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-neutral-950 font-black text-sm sm:text-base uppercase tracking-wider shadow-lg shadow-emerald-500/20 transition-transform active:scale-95 cursor-pointer inline-flex items-center justify-center gap-2"
          >
            <span>Quero Acessar a Plataforma & Materiais</span>
            <ArrowRight className="w-4 h-4 stroke-[3]" />
          </button>
          <span className="block text-xs text-neutral-400 mt-2 font-medium">
            Planos a partir de R$ 10,90 · Acesso Imediato
          </span>
        </div>

      </div>
    </section>
  );
};
