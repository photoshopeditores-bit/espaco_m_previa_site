import React from 'react';
import { 
  Sparkles, 
  GraduationCap, 
  PartyPopper, 
  Mic, 
  ArrowUpRight,
  MessageCircle
} from 'lucide-react';
import { SERVICES_LIST, VENUE_INFO } from '../data/mockData';

export const Services: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Sparkles: <Sparkles className="w-8 h-8 text-sky-400" />,
    GraduationCap: <GraduationCap className="w-8 h-8 text-blue-400" />,
    PartyPopper: <PartyPopper className="w-8 h-8 text-cyan-300" />,
    Mic: <Mic className="w-8 h-8 text-indigo-400" />
  };

  return (
    <section 
      id="servicos"
      className="relative py-24 bg-[#07090e] overflow-hidden"
      aria-label="Nossos Serviços"
    >
      {/* Cyberpunk subtle background accents */}
      <div className="absolute inset-0 cyber-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/3 -right-24 w-80 h-80 bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Strict H2 and H3 heading hierarchy */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-4">
            Viver Bons Momentos
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-3">
            Nossos Serviços
          </h2>
          <h3 className="font-display font-medium text-lg sm:text-xl text-cyan-400 tracking-wide">
            Eventos que Realizamos
          </h3>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed text-balance">
            O espaço ideal em Ariquemes para comemorar suas datas mais especiais com estrutura completa, lazer e conforto.
          </p>
        </div>

        {/* 4 Clean Services Cards (No description, strictly the 4 requested items) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_LIST.map((service) => {
            const whatsappText = encodeURIComponent(
              `Olá Espaço M! Gostaria de solicitar um orçamento para ${service.title} em Ariquemes.`
            );
            const whatsappUrl = `https://wa.me/5569999151776?text=${whatsappText}`;

            return (
              <article
                key={service.id}
                id={`servico-card-${service.id}`}
                className="glass-panel glass-panel-hover rounded-3xl p-7 flex flex-col justify-between relative group overflow-hidden border border-white/10 hover:border-cyan-400/50 transition-all duration-300 shadow-xl"
              >
                {/* Neon glow effect on card hover */}
                <div className="absolute top-0 right-0 w-28 h-28 bg-cyan-500/0 group-hover:bg-cyan-500/10 rounded-bl-full transition-all duration-500 pointer-events-none" />

                <div>
                  {/* Icon & Category Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-[#0c1424] border border-cyan-500/30 flex items-center justify-center group-hover:shadow-[0_0_25px_rgba(0,210,255,0.35)] group-hover:border-cyan-400 transition-all">
                      {iconMap[service.iconName]}
                    </div>
                    <span className="text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-full bg-white/5 text-cyan-300 border border-white/10">
                      {service.category}
                    </span>
                  </div>

                  {/* Title only (Strictly NO description as requested) */}
                  <h4 className="font-display font-bold text-xl text-white group-hover:text-cyan-300 transition-colors leading-snug mb-2">
                    {service.title}
                  </h4>
                </div>

                {/* Direct Action Link */}
                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <MessageCircle className="w-3.5 h-3.5 text-cyan-400" />
                    Espaço M
                  </span>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-300 hover:text-white transition-colors group/link"
                    aria-label={`Solicitar orçamento para ${service.title}`}
                  >
                    <span>Orçar</span>
                    <ArrowUpRight className="w-4 h-4 text-cyan-400 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Quick Contact Banner with WhatsApp Phones from the Real Flyer */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0c1424] via-[#09101d] to-[#0c1424] border border-cyan-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
              Faça do seu evento inesquecível
            </div>
            <h4 className="font-display font-bold text-xl sm:text-2xl text-white">
              Pronto para celebrar no Espaço M?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Entre em contato direto pelo WhatsApp ou ligue para agendar uma visita ao local no Setor 06.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={VENUE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 flex items-center gap-2 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chamar no WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
