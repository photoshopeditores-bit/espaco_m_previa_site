import React, { useState } from 'react';
import { Star, CheckCircle2, ChevronLeft, ChevronRight, ExternalLink, MapPin, Award } from 'lucide-react';
import { TESTIMONIALS_LIST, VENUE_INFO } from '../data/mockData';

export const Testimonials: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(TESTIMONIALS_LIST.length / itemsPerPage);

  const displayedReviews = TESTIMONIALS_LIST.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section 
      id="depoimentos"
      className="relative py-24 bg-[#07090e] overflow-hidden"
      aria-label="Avaliações do Google Maps"
    >
      {/* Background accents */}
      <div className="absolute inset-0 cyber-grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-40 w-80 h-80 bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Exact semantic H2 and H3 heading hierarchy */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Avaliações do Google Maps
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-3">
            O Que Dizem Nossos Clientes
          </h2>

          <h3 className="font-display font-medium text-lg sm:text-xl text-cyan-400 tracking-wide">
            Experiências Reais no Espaço M
          </h3>

          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed text-balance">
            Transparência e satisfação comprovada. Veja os depoimentos reais de quem alugou o salão para aniversários, casamentos, confraternizações e churrascos em família em Ariquemes.
          </p>

          {/* Google Maps Real Score Badge */}
          <div className="mt-8 inline-flex flex-col sm:flex-row items-center justify-center gap-4 p-4 sm:px-6 sm:py-3.5 rounded-2xl bg-[#0c1424] border border-cyan-500/30 shadow-xl shadow-cyan-950/20">
            <div className="flex items-center gap-3">
              {/* Google G logo badge */}
              <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center p-1.5 shadow-sm">
                <svg viewBox="0 0 24 24" className="w-full h-full" aria-hidden="true">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
              </div>

              <div className="text-left">
                <div className="flex items-center gap-2">
                  <span className="font-display font-black text-xl text-white">5.0</span>
                  <div className="flex items-center text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <div className="text-xs text-slate-400">
                  Classificação máxima no Google Maps • Setor 06, Ariquemes
                </div>
              </div>
            </div>

            <div className="h-6 w-[1px] bg-slate-700 hidden sm:block" />

            <a
              id="google-maps-verified-link"
              href={VENUE_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-400/40 text-cyan-300 hover:text-white text-xs font-semibold transition-all group"
            >
              <span>Ver no Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Real Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {displayedReviews.map((item) => (
            <article
              key={item.id}
              className="glass-panel p-7 rounded-3xl flex flex-col justify-between relative border border-white/10 hover:border-cyan-400/50 transition-all duration-300 shadow-xl group"
            >
              <div>
                {/* Header of review: Author + Local Guide + Stars */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    {item.avatarUrl ? (
                      <img
                        src={item.avatarUrl}
                        alt={item.author}
                        loading="lazy"
                        decoding="async"
                        className="w-11 h-11 rounded-full object-cover border-2 border-cyan-400/40"
                      />
                    ) : (
                      <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-cyan-600 to-blue-500 flex items-center justify-center font-bold text-white text-base border-2 border-cyan-400/40">
                        {item.userInitial || item.author.charAt(0)}
                      </div>
                    )}
                    <div>
                      <h4 className="font-display font-bold text-sm sm:text-base text-white leading-tight">
                        {item.author}
                      </h4>
                      <div className="flex items-center gap-1.5 mt-0.5 flex-wrap">
                        {item.isLocalGuide && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-amber-300 bg-amber-400/10 px-1.5 py-0.5 rounded border border-amber-400/30">
                            <Award className="w-3 h-3 text-amber-400" />
                            Local Guide
                          </span>
                        )}
                        {item.reviewCount && (
                          <span className="text-[11px] text-slate-400">
                            • {item.reviewCount} avaliações
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Google Maps source pill */}
                  <span className="shrink-0 text-[10px] font-mono text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/30 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                    Google
                  </span>
                </div>

                {/* Rating Stars + Published Date */}
                <div className="flex items-center justify-between mb-3.5 pb-3 border-b border-white/5">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400 font-medium">
                    {item.timeAgo}
                  </span>
                </div>

                {/* Event Type Tag */}
                <div className="mb-3">
                  <span className="text-xs font-medium text-cyan-300/90 bg-[#0e172a] px-2.5 py-1 rounded-md border border-cyan-500/20 inline-block">
                    {item.companyOrEvent}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed italic">
                  "{item.comment}"
                </p>
              </div>

              {/* Bottom footer linking to location */}
              <div className="pt-4 mt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1 text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  Espaço M • Ariquemes, RO
                </span>
                <span className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                  ✓ Verificado
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Carousel Pagination Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-[#090f1d] border border-white/5 max-w-2xl mx-auto">
          <div className="flex items-center gap-2">
            <button
              type="button"
              id="prev-testimonials-btn"
              onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
              disabled={currentPage === 0}
              className="w-10 h-10 rounded-xl bg-[#0e1628] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-cyan-400 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              aria-label="Avaliações anteriores"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <span className="text-xs font-mono text-slate-400 px-3">
              Página {currentPage + 1} de {totalPages}
            </span>

            <button
              type="button"
              id="next-testimonials-btn"
              onClick={() => setCurrentPage(prev => Math.min(totalPages - 1, prev + 1))}
              disabled={currentPage === totalPages - 1}
              className="w-10 h-10 rounded-xl bg-[#0e1628] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-cyan-400 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              aria-label="Próximas avaliações"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <a
            id="leave-review-btn"
            href={VENUE_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-cyan-300 hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <span>Deixar uma avaliação no Google</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
