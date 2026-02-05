
import React from 'react';

const FloatingActionButton: React.FC = () => {
  return (
    <a className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform" href="#" aria-label="Chat on WhatsApp">
      <span className="material-symbols-outlined text-3xl">chat</span>
    </a>
  );
};

export default FloatingActionButton;
