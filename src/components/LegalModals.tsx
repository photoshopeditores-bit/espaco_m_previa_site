import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
    >
      <div className="bg-[#0b101c] border border-cyan-500/30 rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/15 text-cyan-400 flex items-center justify-center">
              {type === 'privacy' ? <ShieldCheck className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
            </div>
            <div>
              <h3 id="legal-modal-title" className="font-display font-bold text-lg text-white">
                {type === 'privacy' ? 'Política de Privacidade' : 'Termos de Uso do Espaço M'}
              </h3>
              <span className="text-xs text-slate-400">
                Atualizado para 2026 • Ariquemes, RO
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
            aria-label="Fechar janela"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-sm text-slate-300 leading-relaxed font-sans">
          {type === 'privacy' ? (
            <>
              <p>
                O <strong>Espaço M</strong> preza pela total transparência e segurança dos dados fornecidos por nossos clientes e parceiros corporativos em Ariquemes, RO, em consonância com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
              </p>
              <h4 className="font-bold text-white text-base mt-3">1. Coleta de Informações</h4>
              <p>
                Os dados inseridos em nossos formulários de contato ou via WhatsApp (como nome, endereço de e-mail e informações sobre o evento planejado) são coletados única e exclusivamente para a elaboração de orçamentos técnicos e agendamento de visitas presenciais.
              </p>
              <h4 className="font-bold text-white text-base mt-3">2. Não Compartilhamento</h4>
              <p>
                Garantimos que suas informações jamais serão vendidas, comercializadas ou repassadas a terceiros sem prévia autorização por escrito.
              </p>
              <h4 className="font-bold text-white text-base mt-3">3. Contato e Retificação</h4>
              <p>
                Você pode a qualquer momento solicitar a exclusão ou alteração de seus dados cadastrais através do nosso WhatsApp oficial: <strong>(69) 99915-1776</strong>.
              </p>
            </>
          ) : (
            <>
              <p>
                Bem-vindo ao site institucional do <strong>Espaço M</strong>. Ao navegar nesta aplicação ou solicitar um orçamento de locação de espaço, você concorda com as condições descritas abaixo.
              </p>
              <h4 className="font-bold text-white text-base mt-3">1. Propostas e Reservas</h4>
              <p>
                Os orçamentos gerados e datas consultadas estão sujeitos à disponibilidade no momento da assinatura do contrato formal de locação. A reserva efetiva da data ocorre somente após assinatura contratual e cumprimento das cláusulas comerciais.
              </p>
              <h4 className="font-bold text-white text-base mt-3">2. Normas de Utilização e Segurança</h4>
              <p>
                O Espaço M obedece a todas as normas do Corpo de Bombeiros Militar de Rondônia e legislações de segurança pública. A capacidade máxima do salão de até 800 pessoas deve ser respeitada em todos os formatos de evento.
              </p>
              <h4 className="font-bold text-white text-base mt-3">3. Propriedade Intelectual</h4>
              <p>
                As fotos, marcas, vídeos e cenografia exibidos neste portal pertencem ao Espaço M e são protegidos pelas leis de direito autoral.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10 bg-[#070b14] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition-colors"
          >
            Entendido
          </button>
        </div>

      </div>
    </div>
  );
};
