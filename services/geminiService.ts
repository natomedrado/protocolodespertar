
import { GoogleGenAI } from "@google/genai";

// Inicialização segura para evitar crash no load da página
let aiInstance: GoogleGenAI | null = null;

const getAI = () => {
  if (!aiInstance) {
    // Tenta pegar do ambiente do Vite (import.meta.env) ou fallback para process.env
    // Nota: Em produção, você deve configurar a variável VITE_API_KEY no seu .env ou painel da Hostinger
    // e usar import.meta.env.VITE_API_KEY
    const apiKey = (import.meta.env && import.meta.env.VITE_API_KEY) || 
                   (typeof process !== 'undefined' && process.env && process.env.API_KEY) || 
                   ''; 
    
    // Se não tiver chave, o app não quebra, apenas a IA falha ao tentar executar
    aiInstance = new GoogleGenAI({ apiKey });
  }
  return aiInstance;
};

export const analyzeMessageWithAI = async (message: string): Promise<string> => {
  try {
    const ai = getAI();
    const systemInstruction = "Você é um especialista em psicologia forense, focado em detectar abuso narcisista e manipulação. Analise a mensagem do usuário. 1. Identifique táticas (Gaslighting, Vitimização, Inversão de Culpa, etc). 2. Dê um 'Nível de Toxicidade' de 1 a 10. 3. Explique brevemente o subtexto oculto. Seja direto, clínico e use linguagem 'dark' estilo investigação. Use formatação Markdown.";
    
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: message,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text || "Não foi possível analisar no momento.";
  } catch (error) {
    console.error("Erro na análise:", error);
    return "Erro de conexão com o servidor neural. Verifique a configuração da API Key.";
  }
};

export const generateGreyRockResponse = async (provocation: string): Promise<string> => {
  try {
    const ai = getAI();
    const systemInstruction = "Você é um treinador do método 'Pedra Cinza' (Grey Rock) para vítimas de narcisistas. O usuário enviará uma provocação. Gere 3 opções de respostas: 1. Curta e Entediante. 2. Não-Reativa. 3. Educada mas Distante. O objetivo é não dar suprimento emocional. Formate como uma lista Markdown.";
    
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: provocation,
      config: {
        systemInstruction,
        temperature: 0.5,
      },
    });

    return response.text || "Não foi possível gerar defesas no momento.";
  } catch (error) {
    console.error("Erro na geração:", error);
    return "Erro ao gerar escudos. Tente novamente mais tarde.";
  }
};
