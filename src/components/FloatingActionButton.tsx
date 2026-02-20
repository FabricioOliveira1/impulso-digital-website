
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingActionButton: React.FC = () => {
  return (
    <a 
    className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform" 
    href="https://wa.me/+5521992334766?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20Impulso%20Digital." 
    aria-label="Chat on WhatsApp"
    target="_blank"
    rel="noopener noreferrer"
    >
      <FaWhatsapp size={32}/>
    </a>
  );
};

export default FloatingActionButton;
