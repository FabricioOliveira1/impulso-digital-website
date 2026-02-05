
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 dark:bg-background-dark py-12 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="bg-primary text-white p-1 rounded-lg">
            <span className="material-symbols-outlined text-xl">rocket_launch</span>
          </div>
          <span className="text-lg font-bold text-gray-900 dark:text-white">Impulso Dev</span>
        </div>
        <p className="text-gray-500 dark:text-gray-400 text-sm text-center">
          © 2024 Impulso Dev Soluções Digitais. Todos os direitos reservados.
        </p>
        <div className="flex gap-6">
          <a className="text-gray-400 hover:text-primary dark:hover:text-primary transition-colors" href="#">LinkedIn</a>
          <a className="text-gray-400 hover:text-primary dark:hover:text-primary transition-colors" href="#">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
