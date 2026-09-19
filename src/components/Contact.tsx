import React, { useState } from 'react';
import { 
  MessageSquare, 
  Instagram, 
  MapPin, 
  Mail, 
  Phone, 
  Send, 
  Clock, 
  CheckCircle2, 
  ExternalLink 
} from 'lucide-react';
import { VENUE_INFO } from '../data/mockData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleSendViaWhatsApp = () => {
    const text = encodeURIComponent(
      `Olá Espaço M!\nMeu nome é ${formData.nome || 'Interessado'}.\nEmail: ${formData.email || 'Não informado'}\nAssunto: ${formData.assunto || 'Consulta Geral'}\nMensagem: ${formData.mensagem || 'Gostaria de solicitar informações sobre o salão.'}`
    );
    window.open(`https://wa.me/5569999151776?text=${text}`, '_blank');
  };

  return (
    <section 
      id="contato"
      className="relative py-24 bg-[#07090e] overflow-hidden"
      aria-label="Entre em Contato com o Espaço M"
    >
      {/* Background cyber lines and gradient glow */}
      <div className="absolute inset-0 cyber-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Exact H2 and H3 heading structure */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-4">
            Atendimento Personalizado
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-3">
            Entre em Contato
          </h2>
          <h3 className="font-display font-medium text-lg sm:text-xl text-cyan-400 tracking-wide">
            Estamos Prontos para Atendê-lo
          </h3>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed text-balance">
            Planeje sua data com antecedência e receba um atendimento corporativo ou social dedicado para tirar todas as suas dúvidas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Card */}
            <a
              id="contact-whatsapp-link"
              href={VENUE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-6 rounded-3xl flex items-start gap-4 border border-cyan-500/30 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(0,210,255,0.25)] transition-all group block"
            >
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 block mb-1">
                  WhatsApp & Telefones Oficiais
                </span>
                <div className="font-display font-bold text-xl text-white group-hover:text-cyan-300 transition-colors">
                  (69) 99915-1776
                </div>
                <div className="text-xs text-slate-300 mt-1 flex flex-wrap gap-2">
                  <span>Outros números:</span>
                  <span className="text-cyan-300 font-mono">(69) 99957-1417</span>
                  <span>•</span>
                  <span className="text-cyan-300 font-mono">(69) 99605-0675</span>
                </div>
                <p className="text-xs text-slate-400 mt-1.5">
                  Atendimento ágil para reservas de datas, visitas e orçamentos.
                </p>
              </div>
            </a>

            {/* Instagram Card */}
            <a
              id="contact-instagram-link"
              href={VENUE_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-6 rounded-3xl flex items-start gap-4 border border-white/10 hover:border-pink-500/50 hover:shadow-[0_0_25px_rgba(236,72,153,0.2)] transition-all group block"
            >
              <div className="w-12 h-12 rounded-2xl bg-pink-500/15 border border-pink-500/30 text-pink-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Instagram className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-pink-400 block mb-1">
                  Instagram Oficial
                </span>
                <div className="font-display font-bold text-lg text-white group-hover:text-pink-300 transition-colors">
                  @espacomoficial07
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  Acompanhe coberturas de eventos, vídeos e tendências de montagem no feed.
                </p>
              </div>
            </a>

            {/* Address Card */}
            <div className="glass-panel p-6 rounded-3xl flex items-start gap-4 border border-white/10">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/15 border border-blue-500/30 text-blue-400 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-blue-400 block mb-1">
                  Localização & Visitas
                </span>
                <div className="font-display font-bold text-base text-white">
                  R. Cecília Meireles - St. 06
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  Ariquemes - RO, 76873-632
                </p>
                <div className="mt-3 flex items-center gap-2 text-xs text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Visitas técnicas com agendamento prévio</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-cyan-500/25 relative">
              
              {isSubmitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-display font-bold text-2xl text-white">
                    Mensagem Recebida com Sucesso!
                  </h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Agradecemos pelo seu contato com o Espaço M. Nossa equipe de concierge responderá seu pedido em até poucas horas.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ nome: '', email: '', assunto: '', mensagem: '' });
                      }}
                      className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-medium transition-colors"
                    >
                      Enviar Nova Mensagem
                    </button>
                    <button
                      type="button"
                      onClick={handleSendViaWhatsApp}
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 text-xs font-bold transition-all shadow-md"
                    >
                      Continuar pelo WhatsApp
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  
                  {/* Name field */}
                  <div>
                    <label htmlFor="contato-nome" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      Nome Completo <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="contato-nome"
                      name="nome"
                      type="text"
                      required
                      value={formData.nome}
                      onChange={handleChange}
                      placeholder="Ex: Carlos Eduardo ou Empresa LTDA"
                      className="w-full px-4 py-3 rounded-xl bg-[#090d18] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm transition-colors"
                    />
                  </div>

                  {/* Email & Assunto in 2 cols */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contato-email" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                        Seu E-mail <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        id="contato-email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="seuemail@dominio.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#090d18] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="contato-assunto" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                        Tipo / Assunto <span className="text-cyan-400">*</span>
                      </label>
                      <select
                        id="contato-assunto"
                        name="assunto"
                        required
                        value={formData.assunto}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#090d18] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm transition-colors"
                      >
                        <option value="" disabled>Selecione uma opção</option>
                        <option value="Casamentos & Celebrações">Casamentos & Celebrações</option>
                        <option value="Formatura e Bailes">Formatura e Bailes</option>
                        <option value="Festas de 15 Anos e Debutantes">Festas de 15 Anos e Debutantes</option>
                        <option value="Shows e Apresentações">Shows e Apresentações</option>
                        <option value="Aniversário / Confraternização em Família">Aniversário / Confraternização em Família</option>
                        <option value="Outros Eventos / Visita">Outros Eventos / Visita</option>
                      </select>
                    </div>
                  </div>

                  {/* Mensagem */}
                  <div>
                    <label htmlFor="contato-mensagem" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      Detalhes do Evento ou Mensagem <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      id="contato-mensagem"
                      name="mensagem"
                      rows={4}
                      required
                      value={formData.mensagem}
                      onChange={handleChange}
                      placeholder="Conte-nos a data pretendida, estimativa de convidados e expectativas técnicas..."
                      className="w-full px-4 py-3 rounded-xl bg-[#090d18] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm transition-colors resize-none"
                    />
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                    <button
                      id="contato-submit-button"
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 shadow-[0_0_20px_rgba(0,210,255,0.4)] transition-all disabled:opacity-50 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>{loading ? 'Enviando Dados...' : 'Enviar Solicitação'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleSendViaWhatsApp}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-xs font-semibold text-cyan-300 hover:text-white bg-[#0e1628] border border-cyan-500/30 hover:border-cyan-400 transition-colors cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4 text-cyan-400" />
                      <span>Ou Chamar no WhatsApp</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-400 text-center sm:text-left mt-2">
                    Respeitamos sua privacidade. Seus dados serão usados exclusivamente para responder à sua proposta de evento.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

        {/* Interactive Google Maps Embed */}
        <div className="mt-16 rounded-3xl overflow-hidden border border-cyan-500/30 shadow-[0_0_30px_rgba(0,0,0,0.8)]">
          <div className="bg-[#0b101c] px-6 py-4 border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-cyan-400" />
              <div>
                <span className="font-display font-bold text-white text-sm">
                  Espaço M no Google Maps
                </span>
                <span className="text-xs text-slate-400 block sm:inline sm:ml-2">
                  R. Cecília Meireles - St. 06, Ariquemes - RO, 76873-632
                </span>
              </div>
            </div>

            <a
              href={VENUE_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-300 hover:text-cyan-200"
            >
              <span>Abrir no App do Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="w-full h-80 sm:h-96 relative bg-[#07090e]">
            <iframe
              title="Mapa de Localização do Espaço M em Ariquemes RO"
              src={VENUE_INFO.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(100%)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
