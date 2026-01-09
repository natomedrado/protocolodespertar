import React from 'react';

interface ExitModalProps {
  onClose: () => void;
  onConfirm: () => void;
}

const ExitModal: React.FC<ExitModalProps> = ({ onClose, onConfirm }) => {
  return (
    <div className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center backdrop-blur-sm p-4 animate-in fade-in duration-300">
      <div className="bg-zinc-900 border border-red-600 rounded-xl p-6 max-w-md w-full text-center relative shadow-2xl animate-in slide-in-from-bottom-8 duration-500">
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-6 h-6"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
        <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tighter">ESPERE! NÃO VÁ AINDA...</h3>
        <p className="text-gray-300 mb-4 text-sm">Você está prestes a perder a chance de descobrir a verdade e se proteger para sempre.</p>
        <div className="bg-black/50 p-4 rounded mb-4 border border-zinc-800">
          <p className="text-red-500 font-bold uppercase text-xs mb-1">Última chance de resgate</p>
          <p className="text-white font-black text-2xl">Leve por apenas R$ 47,90</p>
        </div>
        <button 
          onClick={onConfirm}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg shadow-lg transform transition-all hover:scale-105 active:scale-95"
        >
          RESGATAR DESCONTO AGORA
        </button>
        <button 
          onClick={onClose}
          className="block w-full mt-3 text-xs text-gray-500 underline hover:text-gray-400 transition-colors"
        >
          Não, prefiro continuar na dúvida e insegurança.
        </button>
      </div>
    </div>
  );
};

export default ExitModal;