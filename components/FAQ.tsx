
import React, { useState } from 'react';
import { FAQItem } from '../types';

const faqData: FAQItem[] = [
  {
    question: "O acesso é realmente anônimo?",
    answer: "Sim. A fatura do cartão virá com um nome genérico (Hotmart ou PayT) e o material é 100% digital, entregue no seu e-mail pessoal. Zero rastros físicos."
  },
  {
    question: "Serve para qualquer tipo de relacionamento?",
    answer: "O padrão predatório e narcisista é humano e comportamental. Este protocolo funciona para parceiros, chefes, amigos ou familiares tóxicos."
  },
  {
    question: "Em quanto tempo recebo?",
    answer: "O envio é imediato após a confirmação do pagamento. Você receberá o link para download direto no e-mail cadastrado."
  },
  {
    question: "E se eu me arrepender?",
    answer: "Você tem 7 dias para testar. Se achar que as técnicas não são para você, basta pedir o reembolso com um clique."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="container mx-auto px-4 mt-20 max-w-3xl">
      <h2 className="text-2xl font-black text-center mb-10 text-white uppercase tracking-tighter italic">DÚVIDAS FREQUENTES</h2>
      <div className="space-y-4">
        {faqData.map((item, idx) => (
          <div key={idx} className="border border-zinc-800 rounded-xl bg-zinc-900/50 overflow-hidden backdrop-blur-sm transition-colors hover:border-zinc-700">
            <button 
              className="w-full p-5 text-left font-bold flex justify-between items-center text-white text-sm md:text-base uppercase tracking-tight"
              onClick={() => toggle(idx)}
            >
              {item.question}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className={`w-5 h-5 text-zinc-500 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div className={`px-5 pb-5 text-zinc-400 text-sm leading-relaxed transition-all duration-300 ${openIndex === idx ? 'block opacity-100' : 'hidden opacity-0'}`}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
