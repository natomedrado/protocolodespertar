
import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import VSLSection from './components/VSLSection';
import AITools from './components/AITools';
import OfferSection from './components/OfferSection';
import FAQ from './components/FAQ';
import ExitModal from './components/ExitModal';
import FomoPopup from './components/FomoPopup';

const App: React.FC = () => {
  const [contentVisible, setContentVisible] = useState(false);
  const [showExitModal, setShowExitModal] = useState(false);
  const [exitModalTriggered, setExitModalTriggered] = useState(false);
  const [timer, setTimer] = useState(600); // 10 minutes

  useEffect(() => {
    // Urgency Timer
    const interval = setInterval(() => {
      setTimer(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Exit Intent logic
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 0 && !exitModalTriggered && contentVisible) {
        setShowExitModal(true);
        setExitModalTriggered(true);
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [contentVisible, exitModalTriggered]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleUnlock = () => {
    setContentVisible(true);
  };

  const handleCheckout = () => {
    window.open('https://checkout.exemplo.com/protocolo-despertar', '_blank');
  };

  return (
    <div className="antialiased selection:bg-red-600 selection:text-white">
      {/* Sticky Urgency Bar */}
      <div className="fixed top-0 w-full bg-[#E50914] z-[60] py-2 text-center text-white font-bold text-sm md:text-base shadow-lg">
        <span className="animate-pulse">⚠️ ALERTA:</span> O acesso a este Protocolo fecha em <span className="font-mono">{formatTime(timer)}</span> minutos.
      </div>

      <div className="mt-10 md:mt-12 hero-gradient min-h-screen relative pb-20">
        <Header />
        
        <VSLSection onUnlock={handleUnlock} />

        {contentVisible && (
          <div className="animate-in fade-in slide-in-from-top-4 duration-1000">
            {/* Scarcity Widget */}
            <div className="container mx-auto px-4 mt-8 max-w-2xl">
              <div className="bg-zinc-900 border border-red-900/30 rounded-lg p-4 flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                  <span className="text-gray-300 text-sm font-semibold uppercase tracking-wider">Vagas restantes para o protocolo:</span>
                </div>
                <span className="text-[#E50914] font-black text-xl">10</span>
              </div>
            </div>

            <div className="container mx-auto px-4 mt-10 text-center">
              <button 
                onClick={handleCheckout}
                className="bg-[#E50914] text-white text-xl md:text-2xl font-black py-4 px-8 md:px-16 rounded shadow-[0_0_20px_rgba(229,9,20,0.5)] transform hover:scale-105 transition-all duration-300 w-full md:w-auto uppercase tracking-tighter"
              >
                QUERO DESCOBRIR A VERDADE
              </button>
              <p className="mt-3 text-gray-500 text-xs font-semibold flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                Acesso imediato • Compra 100% Segura
              </p>
            </div>

            <AITools />

            <OfferSection onCheckout={handleCheckout} />

            <FAQ />

            <footer className="text-center text-gray-600 text-[10px] py-12 border-t border-zinc-900 max-w-4xl mx-auto px-4">
              <p>&copy; 2024 Anatomia do Predador. Todos os direitos reservados. Este site não é afiliado ao Facebook ou Meta Inc.</p>
              <div className="mt-4 flex justify-center gap-4">
                <a href="#" className="hover:text-gray-400">Termos de Uso</a>
                <a href="#" className="hover:text-gray-400">Privacidade</a>
                <a href="#" className="hover:text-gray-400">Contato</a>
              </div>
            </footer>
          </div>
        )}
      </div>

      {showExitModal && (
        <ExitModal 
          onClose={() => setShowExitModal(false)} 
          onConfirm={handleCheckout}
        />
      )}

      {contentVisible && <FomoPopup />}
    </div>
  );
};

export default App;
