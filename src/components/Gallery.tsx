import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight, MapPin, ExternalLink, Play, Pause } from 'lucide-react';
import { GALLERY_IMAGES, VENUE_INFO } from '../data/mockData';
import { GalleryImage } from '../types';

export const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [isAutoplay, setIsAutoplay] = useState<boolean>(false);
  const thumbnailsRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  const currentImage: GalleryImage = GALLERY_IMAGES[currentIndex] || GALLERY_IMAGES[0];

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  }, []);

  const goToIndex = (index: number) => {
    setCurrentIndex(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'ArrowLeft') goToPrev();
      if (e.key === 'Escape' && isLightboxOpen) setIsLightboxOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev, isLightboxOpen]);

  // Autoplay
  useEffect(() => {
    if (!isAutoplay || isLightboxOpen) return;
    const interval = setInterval(goToNext, 4000);
    return () => clearInterval(interval);
  }, [isAutoplay, isLightboxOpen, goToNext]);

  const isFirstRender = useRef<boolean>(true);

  // Auto-scroll thumbnails inside the horizontal bar ONLY when user changes slides (never scroll window/page)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (thumbnailsRef.current) {
      const container = thumbnailsRef.current;
      const activeThumb = container.children[currentIndex] as HTMLElement | undefined;
      if (activeThumb) {
        const targetScroll = activeThumb.offsetLeft - (container.clientWidth / 2) + (activeThumb.clientWidth / 2);
        container.scrollTo({ left: targetScroll, behavior: 'smooth' });
      }
    }
  }, [currentIndex]);

  // Touch swipe support for main stage
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goToNext();
      else goToPrev();
    }
    touchStartX.current = null;
  };

  return (
    <section 
      id="galeria"
      className="relative py-20 bg-[#080c14] border-t border-b border-cyan-500/15 overflow-hidden"
      aria-label="Nossa Estrutura e Galeria de Fotos"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block with exact H2 and H3 */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Galeria do Espaço M
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-2">
            Nossa Estrutura
          </h2>
          <h3 className="font-display font-medium text-lg sm:text-xl text-cyan-400 tracking-wide">
            Um Espaço para Sonhar
          </h3>

          <div className="mt-4 inline-flex items-center gap-2 text-xs text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            <span>Fotos reais do espaço em Ariquemes registradas no</span>
            <a 
              href={VENUE_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-300 hover:text-cyan-200 underline inline-flex items-center gap-1"
            >
              Google Maps
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Main Showcase Stage - Preserves 100% Original Aspect Ratio */}
          <div 
            className="relative w-full h-[360px] sm:h-[480px] md:h-[560px] lg:h-[620px] bg-[#050811] rounded-3xl border border-cyan-500/25 shadow-[0_0_50px_rgba(0,210,255,0.12)] flex items-center justify-center p-3 sm:p-5 overflow-hidden group select-none"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Subtle neon ambient grid inside stage */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,210,255,0.06)_0%,transparent_70%)] pointer-events-none" />

            {/* Current Photo in its true original format */}
            <img
              key={currentImage.id}
              src={currentImage.imageUrl}
              alt={`Espaço M - Foto ${currentIndex + 1} de ${GALLERY_IMAGES.length}`}
              loading="eager"
              decoding="async"
              referrerPolicy="no-referrer"
              onClick={() => setIsLightboxOpen(true)}
              className="max-h-full max-w-full w-auto h-auto object-contain rounded-2xl shadow-2xl cursor-pointer transition-transform duration-300 group-hover:scale-[1.01]"
            />

            {/* Floating Top Controls: Index counter + Autoplay toggle + Lightbox trigger */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-20">
              <div className="pointer-events-auto flex items-center gap-2">
                <span className="px-3 py-1 rounded-xl bg-black/70 backdrop-blur-md border border-white/15 text-xs font-mono text-cyan-300 shadow-md">
                  {currentIndex + 1} / {GALLERY_IMAGES.length}
                </span>
                <button
                  type="button"
                  onClick={() => setIsAutoplay(!isAutoplay)}
                  className={`p-2 rounded-xl backdrop-blur-md border text-xs transition-all flex items-center gap-1.5 ${
                    isAutoplay 
                      ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300' 
                      : 'bg-black/60 border-white/10 text-slate-400 hover:text-white'
                  }`}
                  title={isAutoplay ? 'Pausar apresentação automática' : 'Iniciar apresentação automática'}
                  aria-label={isAutoplay ? 'Pausar' : 'Reproduzir'}
                >
                  {isAutoplay ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  <span className="hidden sm:inline text-[11px] font-medium">
                    {isAutoplay ? 'Auto' : 'Play'}
                  </span>
                </button>
              </div>

              <button
                type="button"
                onClick={() => setIsLightboxOpen(true)}
                className="pointer-events-auto p-2.5 rounded-xl bg-black/70 backdrop-blur-md border border-white/15 hover:border-cyan-400 text-slate-300 hover:text-white transition-all shadow-md flex items-center gap-1 text-xs cursor-pointer"
                title="Ampliar foto em tela cheia"
                aria-label="Ampliar foto em tela cheia"
              >
                <Maximize2 className="w-4 h-4 text-cyan-400" />
                <span className="hidden sm:inline text-[11px]">Ampliar</span>
              </button>
            </div>

            {/* Left Navigation Arrow */}
            <button
              type="button"
              onClick={goToPrev}
              className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/70 hover:bg-cyan-500 hover:text-slate-950 text-white backdrop-blur-md border border-white/15 hover:border-cyan-400 flex items-center justify-center transition-all duration-200 shadow-[0_0_20px_rgba(0,0,0,0.5)] cursor-pointer z-20 group/btn"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 group-hover/btn:-translate-x-0.5 transition-transform" />
            </button>

            {/* Right Navigation Arrow */}
            <button
              type="button"
              onClick={goToNext}
              className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/70 hover:bg-cyan-500 hover:text-slate-950 text-white backdrop-blur-md border border-white/15 hover:border-cyan-400 flex items-center justify-center transition-all duration-200 shadow-[0_0_20px_rgba(0,0,0,0.5)] cursor-pointer z-20 group/btn"
              aria-label="Próxima foto"
            >
              <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 group-hover/btn:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Filmstrip / Reel Thumbnails in their Natural Proportions */}
          <div className="mt-5 relative">
            <div 
              ref={thumbnailsRef}
              className="flex items-center gap-3 overflow-x-auto py-2 px-1 scroll-smooth no-scrollbar"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {GALLERY_IMAGES.map((img, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={img.id}
                    type="button"
                    onClick={() => goToIndex(idx)}
                    className={`relative flex-shrink-0 h-16 sm:h-20 md:h-24 w-auto rounded-xl overflow-hidden bg-[#0c1220] border transition-all duration-200 cursor-pointer p-0.5 ${
                      isActive 
                        ? 'border-cyan-400 ring-2 ring-cyan-400/80 shadow-[0_0_15px_rgba(0,210,255,0.5)] scale-105 z-10' 
                        : 'border-white/10 opacity-60 hover:opacity-100 hover:border-white/30'
                    }`}
                    aria-label={`Ver foto ${idx + 1}`}
                  >
                    <img
                      src={img.imageUrl}
                      alt={`Miniatura ${idx + 1}`}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="h-full w-auto object-contain rounded-lg block"
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-1.5 mt-4">
            {GALLERY_IMAGES.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => goToIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex 
                    ? 'w-6 bg-cyan-400 shadow-[0_0_10px_rgba(0,210,255,0.7)]' 
                    : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Ir para a foto ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>

      {/* Fullscreen Modal - Clean Display with Zero Description */}
      {isLightboxOpen && (
        <div 
          id="gallery-lightbox-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Foto em tamanho original"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-2 sm:p-6"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center border border-white/20 hover:border-cyan-400 transition-all cursor-pointer z-50 shadow-lg"
            aria-label="Fechar"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Nav arrow Prev */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); goToPrev(); }}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/70 hover:bg-cyan-500 hover:text-slate-950 text-white backdrop-blur-md border border-white/20 hover:border-cyan-400 flex items-center justify-center transition-all cursor-pointer z-50 shadow-xl"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>

          {/* Nav arrow Next */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/70 hover:bg-cyan-500 hover:text-slate-950 text-white backdrop-blur-md border border-white/20 hover:border-cyan-400 flex items-center justify-center transition-all cursor-pointer z-50 shadow-xl"
            aria-label="Próxima foto"
          >
            <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>

          {/* Photo in Full Original Resolution - Zero Descriptions */}
          <div 
            className="relative max-w-full max-h-[92vh] flex items-center justify-center select-none"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentImage.imageUrl}
              alt={`Espaço M - Foto ${currentIndex + 1}`}
              loading="eager"
              decoding="async"
              referrerPolicy="no-referrer"
              className="max-h-[90vh] max-w-[94vw] w-auto h-auto object-contain rounded-xl shadow-[0_0_60px_rgba(0,210,255,0.2)] border border-cyan-500/30"
            />
            
            {/* Minimal counter badge */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-xs font-mono text-cyan-300 shadow-md">
              {currentIndex + 1} / {GALLERY_IMAGES.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
