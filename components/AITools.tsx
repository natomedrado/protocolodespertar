
import React, { useState } from 'react';
import { analyzeMessageWithAI, generateGreyRockResponse } from '../services/geminiService';

const AITools: React.FC = () => {
  const [analysisInput, setAnalysisInput] = useState('');
  const [analysisResult, setAnalysisResult] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const [defenseInput, setDefenseInput] = useState('');
  const [defenseResult, setDefenseResult] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleAnalyze = async () => {
    if (!analysisInput.trim()) return;
    setIsAnalyzing(true);
    try {
      const result = await analyzeMessageWithAI(analysisInput);
      setAnalysisResult(result);
    } catch (err) {
      setAnalysisResult("Erro ao conectar com a base neural.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleGenerateDefense = async () => {
    if (!defenseInput.trim()) return;
    setIsGenerating(true);
    try {
      const result = await generateGreyRockResponse(defenseInput);
      setDefenseResult(result);
    } catch (err) {
      setDefenseResult("Erro ao gerar escudos emocionais.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section className="container mx-auto px-4 mt-16 max-w-4xl">
      <div className="border border-zinc-700 bg-black/50 rounded-xl p-1 shadow-2xl overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-50"></div>
        
        <div className="p-6 md:p-8">
          <div className="flex items-center gap-2 mb-6">
            <span className="animate-pulse text-red-500 text-xl">✨</span>
            <h2 className="text-2xl font-bold text-white tracking-wide">LABORATÓRIO DE DEFESA NEURAL</h2>
          </div>
          <p className="text-gray-400 text-sm mb-8">Utilize nossa IA treinada em psicologia comportamental para analisar mensagens ou gerar defesas em tempo real.</p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Tool 1: Message Analyzer */}
            <div className="bg-zinc-900/80 p-6 rounded-lg border border-zinc-800 hover:border-zinc-600 transition-colors">
              <h3 className="font-bold text-lg text-white mb-3 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                Decodificador de Manipulação
              </h3>
              <p className="text-xs text-gray-500 mb-4">Cole uma mensagem suspeita para detectar Gaslighting ou táticas de culpa.</p>
              <textarea 
                className="w-full h-32 bg-zinc-800 border border-zinc-700 rounded p-3 text-sm text-white resize-none mb-4 focus:border-red-600 outline-none transition-colors"
                placeholder="Ex: 'Você é louca, eu nunca disse isso...'"
                value={analysisInput}
                onChange={(e) => setAnalysisInput(e.target.value)}
              />
              <button 
                onClick={handleAnalyze}
                disabled={isAnalyzing}
                className="w-full bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-white font-semibold py-2 rounded flex justify-center items-center gap-2 transition-colors disabled:opacity-50"
              >
                {isAnalyzing ? "Analisando..." : "✨ Analisar Toxicidade"}
              </button>
              {analysisResult && (
                <div className="mt-4 p-4 rounded bg-black/60 text-sm text-gray-300 border-l-4 border-red-600 animate-in fade-in slide-in-from-top-4 duration-500">
                  <h4 className="text-red-500 font-bold text-xs uppercase mb-2">RELATÓRIO FORENSE</h4>
                  <div className="whitespace-pre-wrap">{analysisResult}</div>
                </div>
              )}
            </div>

            {/* Tool 2: Grey Rock Generator */}
            <div className="bg-zinc-900/80 p-6 rounded-lg border border-zinc-800 hover:border-zinc-600 transition-colors">
              <h3 className="font-bold text-lg text-white mb-3 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                Gerador de Escudo (Pedra Cinza)
              </h3>
              <p className="text-xs text-gray-500 mb-4">Insira a provocação e receba respostas frias para desarmar o predador.</p>
              <textarea 
                className="w-full h-32 bg-zinc-800 border border-zinc-700 rounded p-3 text-sm text-white resize-none mb-4 focus:border-red-600 outline-none transition-colors"
                placeholder="Ex: 'Por que você não me responde mais rápido?'"
                value={defenseInput}
                onChange={(e) => setDefenseInput(e.target.value)}
              />
              <button 
                onClick={handleGenerateDefense}
                disabled={isGenerating}
                className="w-full bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-white font-semibold py-2 rounded flex justify-center items-center gap-2 transition-colors disabled:opacity-50"
              >
                {isGenerating ? "Gerando..." : "✨ Gerar Defesa"}
              </button>
              {defenseResult && (
                <div className="mt-4 p-4 rounded bg-black/60 text-sm text-gray-300 border-l-4 border-red-600 animate-in fade-in slide-in-from-top-4 duration-500">
                  <h4 className="text-red-500 font-bold text-xs uppercase mb-2">OPÇÕES DE ESCUDO</h4>
                  <div className="whitespace-pre-wrap">{defenseResult}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITools;
