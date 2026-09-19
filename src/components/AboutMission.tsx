import React from 'react';
import { Star, ShieldCheck, Zap, Volume2, Wind, CheckCircle2, Award, HeartHandshake, Sparkles } from 'lucide-react';
import { VENUE_INFO, VENUE_DIFFERENTIALS } from '../data/mockData';

export const AboutMission: React.FC = () => {
  return (
    <section 
      id="sobre"
      className="relative py-24 bg-[#080c14] border-t border-b border-cyan-500/15 overflow-hidden"
      aria-label="Sobre o Espaço M e Nossa Missão"
    >
      {/* Background ambient accents */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-24 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block with exact H2 and H3 */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Excelência & Inovação em Eventos
          </div>
          
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-3">
            Sobre o Espaço M
          </h2>
          
          <h3 className="font-display font-medium text-lg sm:text-xl text-cyan-400 tracking-wide">
            Nossa Missão
          </h3>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed text-balance">
            Nascido em Ariquemes com o propósito de redefinir o padrão de salões de eventos no Estado de Rondônia, 
            o Espaço M une engenharia acústica de vanguarda, iluminação cênica dinâmica e hospitalidade executiva.
          </p>
        </div>

        {/* Social Proof Highlight Banner (5 Estrelas - 20 Avaliações Positivas) */}
        <div className="mb-16 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0c1424] via-[#101b33] to-[#0c1424] border border-cyan-500/40 shadow-[0_0_35px_rgba(0,210,255,0.15)] relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-48 h-48 bg-cyan-400/15 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-[0_0_20px_rgba(0,210,255,0.4)] flex-shrink-0">
                <Award className="w-9 h-9 text-slate-950" />
              </div>
              <div>
                <div className="flex items-center justify-center sm:justify-start gap-1 text-amber-400 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-2 font-display font-bold text-xl text-white">5.0 / 5.0</span>
                </div>
                <h4 className="font-display font-bold text-xl text-white">
                  5 estrelas — 20 avaliações positivas no Google Maps
                </h4>
                <p className="text-sm text-slate-300 mt-1 max-w-2xl">
                  Reconhecido por empresas, cerimonialistas e famílias como o espaço de eventos mais bem avaliado de Ariquemes e região do Vale do Jamari.
                </p>
              </div>
            </div>

            <a
              href={VENUE_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 border border-cyan-500/40 hover:border-cyan-400 font-semibold text-sm transition-all duration-200 whitespace-nowrap shadow-[0_0_15px_rgba(0,210,255,0.2)]"
            >
              <span>Ver Avaliações Reais</span>
              <span className="text-xs font-mono bg-cyan-400/20 px-2 py-0.5 rounded">Maps</span>
            </a>
          </div>
        </div>

        {/* Technical Infrastructure Pillars */}
        <div className="border-t border-white/10 pt-8">
          <div className="text-center mb-10">
            <h4 className="font-display font-bold text-2xl text-white">
              Infraestrutura de Ponta a Serviço do Seu Evento
            </h4>
            <p className="text-sm text-slate-400 mt-1">
              Engenharia projetada para anular qualquer imprevisto e garantir conforto térmico, sonoro e visual
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VENUE_DIFFERENTIALS.map((item, index) => {
              const icons = {
                Zap: <Zap className="w-6 h-6 text-cyan-400" />,
                Volume2: <Volume2 className="w-6 h-6 text-sky-400" />,
                Wind: <Wind className="w-6 h-6 text-blue-400" />,
                ShieldCheck: <ShieldCheck className="w-6 h-6 text-cyan-300" />
              };

              return (
                <div 
                  key={index}
                  className="p-6 rounded-2xl bg-[#0b101c]/80 border border-white/5 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="mb-4">{icons[item.icon as keyof typeof icons]}</div>
                  <h5 className="font-display font-semibold text-lg text-white mb-2">{item.title}</h5>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
