import React from 'react';
import { Instagram, MessageSquare, MapPin, ArrowUp, Star } from 'lucide-react';
import { VENUE_INFO } from '../data/mockData';

interface FooterProps {
  onOpenLegal: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      id="main-footer"
      className="relative bg-[#04060a] border-t border-cyan-500/20 pt-16 pb-12 overflow-hidden text-slate-400"
    >
      {/* Top subtle line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#0c1427] to-[#070b14] border border-cyan-500/40">
                <span className="font-display font-black text-xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  M
                </span>
              </div>
              <span className="font-display font-black text-2xl text-white tracking-wider">
                ESPAÇO M
              </span>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              O mais moderno e completo salão de eventos de Ariquemes, RO. Arquitetura futurista, climatização inteligente, gerador 100% autônomo e soluções corporativas e sociais de alto padrão.
            </p>

            <div className="flex items-center gap-1 text-amber-400 text-xs">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
              <span className="text-slate-300 ml-1.5 font-semibold">5.0 estrelas no Google Maps</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#inicio" className="hover:text-cyan-300 transition-colors">Início</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-cyan-300 transition-colors">Sobre Nós</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-cyan-300 transition-colors">Nossos Serviços</a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-cyan-300 transition-colors">Galeria de Fotos</a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-cyan-300 transition-colors">Depoimentos</a>
              </li>
              <li>
                <a href="#contato" className="hover:text-cyan-300 transition-colors">Contato</a>
              </li>
            </ul>
          </div>

          {/* Social & Direct Contact */}
          <div>
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-4">
              Redes & Contato
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={VENUE_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-cyan-300 transition-colors group"
                >
                  <MessageSquare className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                  <span>(69) 99915-1776</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5569999571417"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-cyan-300 transition-colors group text-xs text-slate-400 hover:text-white"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-cyan-500" />
                  <span>(69) 99957-1417</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5569996050675"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-cyan-300 transition-colors group text-xs text-slate-400 hover:text-white"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-cyan-500" />
                  <span>(69) 99605-0675</span>
                </a>
              </li>
              <li className="pt-1">
                <a
                  href={VENUE_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-pink-300 transition-colors group"
                >
                  <Instagram className="w-4 h-4 text-pink-400 group-hover:scale-110 transition-transform" />
                  <span>@espacomoficial07</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Address & Hours */}
          <div>
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-4">
              Endereço
            </h4>
            <div className="space-y-2 text-xs leading-relaxed">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>
                  {VENUE_INFO.address}
                </span>
              </div>
              <p className="text-slate-500 pt-1">
                Atendimento presencial mediante agendamento prévio.
              </p>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 text-center sm:text-left">
            © 2026 Espaço M. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-6 text-xs">
            <button
              type="button"
              onClick={() => onOpenLegal('privacy')}
              className="text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer"
            >
              Política de Privacidade
            </button>
            <span className="text-slate-700">•</span>
            <button
              type="button"
              onClick={() => onOpenLegal('terms')}
              className="text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer"
            >
              Termos de Uso
            </button>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="p-2 rounded-xl bg-white/5 hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-300 border border-white/10 transition-all cursor-pointer"
            aria-label="Voltar ao topo da página"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
