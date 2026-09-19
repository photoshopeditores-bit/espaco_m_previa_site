import React from 'react';
import { MessageSquare, Star, ArrowRight, ShieldCheck, Zap, Users, MapPin } from 'lucide-react';
import { VENUE_INFO } from '../data/mockData';

export const Hero: React.FC = () => {
  return (
    <section 
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-[#07090e]"
      aria-label="Apresentação Principal Espaço M"
    >
      {/* Futuristic Cyberpunk Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 cyber-grid-pattern opacity-60" />

        {/* Ambient Neon Gradients */}
        <div className="absolute -top-32 -left-32 w-[550px] h-[550px] bg-cyan-500/15 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -right-32 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[150px]" />
        <div className="absolute -bottom-40 left-1/3 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[130px]" />

        {/* Diagonal Tech Laser/Lines */}
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent" />
        <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent" />
        
        {/* Glow Horizon Line */}
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/25 to-transparent blur-[1px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        
        {/* Google Reviews & Location Pill */}
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#0e1526]/80 border border-cyan-500/30 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(0,210,255,0.15)] hover:border-cyan-400 transition-all duration-300">
          <div className="flex items-center gap-1 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-xs sm:text-sm font-semibold text-white tracking-wide">
            5.0 Estrelas
          </span>
          <span className="text-slate-500">•</span>
          <a 
            href={VENUE_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm font-medium text-cyan-300 hover:text-cyan-200 underline decoration-cyan-400/40 hover:decoration-cyan-400 flex items-center gap-1"
          >
            20 avaliações no Google Maps
            <MapPin className="w-3.5 h-3.5 inline text-cyan-400" />
          </a>
        </div>

        {/* RIGOROUS SINGLE H1 ON PAGE */}
        <h1 
          id="hero-main-title"
          className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-white max-w-5xl mx-auto leading-[1.12] mb-6"
        >
          Espaço M:{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 drop-shadow-[0_0_35px_rgba(0,210,255,0.4)]">
            Seu Palco para Eventos Inesquecíveis
          </span>{' '}
          em Ariquemes.
        </h1>

        {/* Subtitle */}
        <p 
          id="hero-subtitle"
          className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed mb-10 text-balance"
        >
          Ambiente sofisticado e futurista para celebrações, conferências e experiências memoráveis.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-16">
          <a
            id="hero-cta-agendar"
            href={VENUE_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 shadow-[0_0_30px_rgba(0,210,255,0.5)] hover:shadow-[0_0_45px_rgba(0,210,255,0.8)] transition-all duration-300 active:scale-95 group font-sans tracking-wide"
            aria-label="Agende sua Visita pelo WhatsApp"
          >
            <MessageSquare className="w-5 h-5 fill-slate-950 group-hover:rotate-12 transition-transform" />
            <span>Agende sua Visita</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            id="hero-cta-estrutura"
            href="#galeria"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold text-white bg-[#0e1526]/80 hover:bg-[#151f38] border border-cyan-500/40 hover:border-cyan-400 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)] backdrop-blur-md"
            aria-label="Conhecer a estrutura do salão"
          >
            <span>Ver Estrutura & Fotos</span>
          </a>
        </div>

        {/* Real Venue Preview Showcase Card */}
        <div className="relative max-w-5xl mx-auto mb-16 rounded-3xl overflow-hidden border border-cyan-500/30 bg-[#080d19] shadow-[0_0_50px_rgba(0,210,255,0.2)] group">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden">
            <img 
              src="/images/venue/espaco-m-salao-principal-evento.jpg" 
              alt="Salão Principal do Espaço M em Ariquemes com iluminação e arquitetura moderna" 
              loading="eager"
              decoding="async"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Ambient gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-[#07090e]/30 to-transparent opacity-80" />
            
            {/* Live Badges */}
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-cyan-400/40 text-cyan-300 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                Foto Real do Salão
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-slate-300 text-xs">
                Ariquemes, RO
              </span>
            </div>

            {/* Bottom link to gallery */}
            <div className="absolute bottom-4 right-4 z-10">
              <a 
                href="#galeria" 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-black/70 backdrop-blur-md border border-cyan-500/30 text-xs text-cyan-300 hover:text-white font-medium transition-all shadow-md"
              >
                <span>Ver Carrossel de Fotos</span>
                <span className="text-cyan-400 font-bold">&rarr;</span>
              </a>
            </div>
          </div>
        </div>

        {/* Trust Badges / Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 border-t border-white/10">
          <div className="glass-panel p-4 rounded-2xl text-left border-l-2 border-cyan-400">
            <div className="flex items-center gap-2 text-cyan-400 mb-1">
              <Users className="w-4 h-4" />
              <span className="text-xs uppercase font-mono tracking-wider text-slate-400">Capacidade</span>
            </div>
            <div className="font-display font-bold text-xl text-white">Até 800 pessoas</div>
            <div className="text-xs text-slate-400">Modulável p/ qualquer porte</div>
          </div>

          <div className="glass-panel p-4 rounded-2xl text-left border-l-2 border-blue-400">
            <div className="flex items-center gap-2 text-blue-400 mb-1">
              <Zap className="w-4 h-4" />
              <span className="text-xs uppercase font-mono tracking-wider text-slate-400">Energia</span>
            </div>
            <div className="font-display font-bold text-xl text-white">Gerador 100%</div>
            <div className="text-xs text-slate-400">Autonomia sem oscilação</div>
          </div>

          <div className="glass-panel p-4 rounded-2xl text-left border-l-2 border-sky-400">
            <div className="flex items-center gap-2 text-sky-400 mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-xs uppercase font-mono tracking-wider text-slate-400">Tecnologia</span>
            </div>
            <div className="font-display font-bold text-xl text-white">Luz DMX & Som</div>
            <div className="text-xs text-slate-400">Acústica e lasers de palco</div>
          </div>

          <div className="glass-panel p-4 rounded-2xl text-left border-l-2 border-cyan-400">
            <div className="flex items-center gap-2 text-cyan-400 mb-1">
              <MapPin className="w-4 h-4" />
              <span className="text-xs uppercase font-mono tracking-wider text-slate-400">Localização</span>
            </div>
            <div className="font-display font-bold text-xl text-white">Ariquemes - RO</div>
            <div className="text-xs text-slate-400">Setor 06 • Fácil estacionamento</div>
          </div>
        </div>

      </div>

      {/* Subtle bottom fade transition */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#07090e] to-transparent pointer-events-none" />
    </section>
  );
};
