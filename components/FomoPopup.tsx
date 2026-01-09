
import React, { useState, useEffect } from 'react';

const names = [
    { name: "Fernanda de Curitiba", city: "Curitiba" },
    { name: "Juliana de São Paulo", city: "São Paulo" },
    { name: "Beatriz do Rio", city: "Rio de Janeiro" },
    { name: "Camila de Belo Horizonte", city: "Belo Horizonte" },
    { name: "Larissa de Porto Alegre", city: "Porto Alegre" }
];

const FomoPopup: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [currentUser, setCurrentUser] = useState(names[0]);

  useEffect(() => {
    const showRandom = () => {
      const randomUser = names[Math.floor(Math.random() * names.length)];
      setCurrentUser(randomUser);
      setVisible(true);
      
      setTimeout(() => {
        setVisible(false);
      }, 5000);
    };

    const interval = setInterval(showRandom, 15000 + Math.random() * 10000);
    const timeout = setTimeout(showRandom, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className={`fixed bottom-4 left-4 bg-white text-black p-3 rounded-xl shadow-2xl flex items-center gap-3 transform transition-all duration-700 z-[70] border-l-4 border-[#E50914] ${visible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
      <div className="w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center overflow-hidden border border-zinc-200">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-zinc-400 w-6 h-6"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
      </div>
      <div>
        <p className="text-[11px] font-black uppercase tracking-tight">{currentUser.name}</p>
        <p className="text-[10px] text-zinc-500 font-bold uppercase">Acabou de adquirir o Dossiê</p>
        <p className="text-[9px] text-green-600 font-black uppercase tracking-widest mt-0.5">🔥 Há 2 minutos</p>
      </div>
    </div>
  );
};

export default FomoPopup;
