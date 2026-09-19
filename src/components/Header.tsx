import React, { useState, useEffect } from 'react';
import { MessageSquare, Menu, X, Sparkles } from 'lucide-react';
import { VENUE_INFO } from '../data/mockData';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['inicio', 'sobre', 'servicos', 'galeria', 'depoimentos', 'contato'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Início', href: '#inicio', id: 'inicio' },
    { label: 'Sobre', href: '#sobre', id: 'sobre' },
    { label: 'Serviços', href: '#servicos', id: 'servicos' },
    { label: 'Galeria', href: '#galeria', id: 'galeria' },
    { label: 'Depoimentos', href: '#depoimentos', id: 'depoimentos' },
    { label: 'Contato', href: '#contato', id: 'contato' },
  ];

  return (
    <header 
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#07090e]/90 backdrop-blur-xl border-b border-cyan-500/20 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]' 
          : 'bg-gradient-to-b from-[#07090e]/95 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Futuristic Cyberpunk Logo */}
        <a 
          href="#inicio" 
          id="brand-logo-link"
          className="group flex items-center gap-3 text-left focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-lg p-1"
          aria-label="Ir para o início - Espaço M"
        >
          <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-[#0c1427] to-[#070b14] border border-cyan-500/40 group-hover:border-cyan-400 transition-all duration-300 shadow-[0_0_15px_rgba(0,210,255,0.25)] group-hover:shadow-[0_0_25px_rgba(0,210,255,0.5)]">
            <span className="font-display font-black text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 tracking-tighter">
              M
            </span>
            <div className="absolute -inset-0.5 rounded-xl bg-cyan-400/20 blur opacity-40 group-hover:opacity-75 transition duration-300 -z-10" />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-display font-extrabold text-xl tracking-wider text-white group-hover:text-cyan-300 transition-colors">
                ESPAÇO M
              </span>
              <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                Ariquemes
              </span>
            </div>
            <span className="text-[11px] font-medium text-slate-400 tracking-widest uppercase flex items-center gap-1">
              Eventos & Convenções <span className="inline-block w-1 h-1 rounded-full bg-cyan-400 animate-ping"></span>
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav 
          id="desktop-nav"
          aria-label="Navegação Principal"
          className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#0d131f]/60 backdrop-blur-md border border-white/5"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                id={`nav-link-${item.id}`}
                href={item.href}
                className={`relative px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-cyan-300 bg-cyan-500/10 shadow-[0_0_12px_rgba(0,210,255,0.25)]'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-cyan-400 rounded-full shadow-[0_0_6px_#00d2ff]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            id="header-cta-whatsapp"
            href={VENUE_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 shadow-[0_0_20px_rgba(0,210,255,0.4)] hover:shadow-[0_0_30px_rgba(0,210,255,0.7)] transition-all duration-300 active:scale-95 group font-sans tracking-wide"
            aria-label="Fale Conosco pelo WhatsApp (069) 99915-1776"
          >
            <MessageSquare className="w-4 h-4 text-slate-950 fill-slate-950 group-hover:scale-110 transition-transform" />
            <span className="font-semibold">Fale Conosco</span>
            <span className="hidden sm:inline text-xs font-mono opacity-80 pl-1 border-l border-slate-900/30">
              (69) 99915-1776
            </span>
          </a>

          {/* Mobile menu button */}
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white bg-[#0e1422] border border-white/10 hover:border-cyan-500/40 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          id="mobile-navigation"
          className="lg:hidden bg-[#0a0f1c]/98 border-b border-cyan-500/30 backdrop-blur-2xl px-5 pt-4 pb-6 transition-all duration-300 shadow-2xl"
        >
          <nav className="flex flex-col gap-2" aria-label="Menu Mobile">
            {navItems.map((item) => (
              <a
                key={item.id}
                id={`mobile-nav-${item.id}`}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  activeSection === item.id
                    ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-200 hover:bg-white/5 hover:text-cyan-200'
                }`}
              >
                <span>{item.label}</span>
                {activeSection === item.id && (
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                )}
              </a>
            ))}

            <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-2">
              <a
                href={VENUE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-semibold shadow-lg shadow-cyan-500/20 text-center"
              >
                <MessageSquare className="w-5 h-5 fill-slate-950" />
                WhatsApp: (69) 99915-1776
              </a>
              <p className="text-center text-xs text-slate-400 mt-1">
                Ariquemes - RO • Setor 06
              </p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
