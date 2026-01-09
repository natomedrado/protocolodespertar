
import React from 'react';

interface OfferSectionProps {
  onCheckout: () => void;
}

const OfferSection: React.FC<OfferSectionProps> = ({ onCheckout }) => {
  return (
    <section className="container mx-auto px-4 mt-20 mb-20 max-w-4xl text-center">
      <div className="bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 bg-[#E50914] text-white text-[10px] font-black px-4 py-1 rounded-bl-lg uppercase">OFERTA ÚNICA</div>
        
        <h3 className="text-3xl font-black text-white mb-2 tracking-tighter uppercase italic">ANATOMIA DO PREDADOR</h3>
        <p className="text-gray-400 mb-8 font-medium">O Guia Clínico Definitivo + 3 Bônus Secretos</p>
        
        <div className="flex flex-col items-center gap-2 mb-10">
          <span className="text-zinc-600 line-through text-lg font-bold">R$ 197,00</span>
          <div className="flex items-center gap-2">
            <span className="text-5xl md:text-7xl font-black text-white tracking-tighter">R$ 47,90</span>
          </div>
        </div>

        <button 
          onClick={onCheckout}
          className="w-full md:w-2/3 bg-[#E50914] text-white text-xl font-black py-5 px-8 rounded-lg hover:bg-red-700 transition-all shadow-[0_10px_40px_rgba(229,9,20,0.3)] transform hover:-translate-y-1"
        >
          QUERO ACESSO IMEDIATO
        </button>

        {/* Guarantee Badge */}
        <div className="flex flex-col items-center justify-center gap-2 mt-12 opacity-90">
          <div className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center mb-2">
            <span className="font-black text-2xl text-white">7</span>
          </div>
          <h4 className="font-bold text-white uppercase tracking-widest text-sm">GARANTIA INCONDICIONAL</h4>
          <p className="text-[11px] text-gray-500 max-w-xs font-medium uppercase leading-relaxed">
            Se você não sentir que sua percepção mudou drasticamente em 7 dias, devolvemos seu dinheiro via PIX.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
