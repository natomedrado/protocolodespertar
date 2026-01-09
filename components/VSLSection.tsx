
import React, { useState, useEffect, useRef } from 'react';

interface VSLSectionProps {
  onUnlock: () => void;
}

const VSLSection: React.FC<VSLSectionProps> = ({ onUnlock }) => {
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const unlockThreshold = 30; // seconds

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      const currentProgress = (video.currentTime / unlockThreshold) * 100;
      setProgress(Math.min(currentProgress, 100));
      
      if (video.currentTime >= unlockThreshold) {
        onUnlock();
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    return () => video.removeEventListener('timeupdate', handleTimeUpdate);
  }, [onUnlock]);

  return (
    <section className="container mx-auto px-4 relative z-10 max-w-4xl">
      <div className="relative w-full aspect-video bg-black rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden border border-zinc-800 group ring-1 ring-zinc-800">
        <video 
          ref={videoRef}
          className="w-full h-full object-cover" 
          controls 
          autoPlay 
          muted 
          playsInline
          poster="https://picsum.photos/1920/1080?grayscale"
        >
          <source src="https://codigosocul-gbv8rqvf.manus.space/videos/vsl_final_v2_optimized.mp4" type="video/mp4" />
          Seu navegador não suporta a tag de vídeo.
        </video>
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.9)]"></div>
      </div>
      
      <div className="mt-8 max-w-lg mx-auto">
        <div className="flex justify-between items-center mb-2">
          <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">
            <span className="text-[#E50914] animate-pulse">Sincronizando Banco de Dados Neural...</span>
          </p>
          <span className="text-zinc-600 text-[10px] font-mono">{Math.floor(progress)}%</span>
        </div>
        <div className="w-full bg-zinc-900 rounded-full h-1.5 overflow-hidden border border-zinc-800 shadow-inner relative">
          <div 
            className="bg-gradient-to-r from-red-800 to-[#E50914] h-full rounded-full transition-all duration-300 ease-linear shadow-[0_0_10px_rgba(229,9,20,0.5)]" 
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="text-center mt-4 text-zinc-600 text-[9px] flex justify-center items-center gap-2 uppercase font-bold tracking-widest">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
        Conexão Criptografada Nível Militar
      </div>
    </section>
  );
};

export default VSLSection;
