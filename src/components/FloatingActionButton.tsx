
import React from 'react';

const FloatingActionButton: React.FC = () => {
  return (
    <a 
    className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform" 
    href="https://wa.me/SEU_NUMERO?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20Impulso%20Digital." 
    aria-label="Chat on WhatsApp"
    target="_blank"
    rel="noopener noreferrer"
    >
      <span className="material-symbols-outlined text-3xl">chat</span>
    </a>
  );
};

export default FloatingActionButton;
