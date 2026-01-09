
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="container mx-auto px-4 pt-10 pb-6 text-center relative z-10">
      <div className="mb-4">
        <span className="text-xs tracking-[0.3em] text-gray-400 uppercase border border-gray-600 px-3 py-1 rounded-full font-bold">Dossiê Confidencial</span>
      </div>
      <h1 className="text-3xl md:text-5xl lg:text-7xl font-black tracking-tighter leading-none mb-4 text-white drop-shadow-2xl uppercase italic">
        "SE ELE(A) MENTE PARA VOCÊ,<br/><span className="text-[#E50914]">VAMOS DESCOBRIR AGORA</span>"
      </h1>
      <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto mt-4 font-medium">
        Baseado em neurociência comportamental aplicada. Assista ao dossiê antes que o servidor seja derrubado.
      </p>
    </header>
  );
};

export default Header;
