import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutMission } from './components/AboutMission';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LegalModals } from './components/LegalModals';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  return (
    <div className="min-h-screen bg-[#07090e] text-[#f8fafc] selection:bg-cyan-500 selection:text-black flex flex-col font-sans">
      {/* 1. Header with semantic <header> and <nav> */}
      <Header />

      {/* Semantic <main> container */}
      <main id="conteudo-principal" className="flex-grow">
        {/* 2. Hero Section with exact single <h1> */}
        <Hero />

        {/* 3. Sobre Nós / Missão with <h2> and <h3> */}
        <AboutMission />

        {/* 4. Serviços with <h2> and <h3> */}
        <Services />

        {/* 5. Galeria de Fotos with <h2> and <h3> */}
        <Gallery />

        {/* 6. Depoimentos with <h2> and <h3> */}
        <Testimonials />

        {/* 7. Contato with <h2> and <h3> */}
        <Contact />
      </main>

      {/* 9. Footer with semantic <footer> */}
      <Footer onOpenLegal={(type) => setLegalModalType(type)} />

      {/* Floating Action Button */}
      <FloatingWhatsApp />

      {/* Legal Dialogs */}
      <LegalModals 
        type={legalModalType} 
        onClose={() => setLegalModalType(null)} 
      />
    </div>
  );
}
