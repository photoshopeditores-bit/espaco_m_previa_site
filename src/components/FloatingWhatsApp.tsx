import React from 'react';
import { MessageSquare } from 'lucide-react';
import { VENUE_INFO } from '../data/mockData';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <a
        id="floating-whatsapp-btn"
        href={VENUE_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp com o Espaço M"
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 shadow-[0_0_25px_rgba(16,185,129,0.5)] hover:shadow-[0_0_35px_rgba(0,210,255,0.8)] transition-all duration-300 hover:scale-105 active:scale-95"
      >
        {/* Animated pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-40 animate-ping pointer-events-none" />
        
        <MessageSquare className="w-7 h-7 fill-slate-950 text-slate-950" />

        {/* Tooltip on hover for desktop */}
        <span className="hidden md:group-hover:flex absolute right-16 items-center px-3 py-1.5 rounded-xl bg-[#0c1220] border border-cyan-500/40 text-xs font-semibold text-white whitespace-nowrap shadow-xl">
          Fale no WhatsApp (69) 99915-1776
        </span>
      </a>
    </div>
  );
};
