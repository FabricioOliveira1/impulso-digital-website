import React from 'react';

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-[#dbe0e6] dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="/" className="flex items-center">
        {theme === 'dark' ? (
          <img 
            src="/images/impulso-digital-logo-dark.webp" 
            alt="Impulso Digital" 
            className="h-16 lg:h-20 object-contain"
          />
        ) : (
          <img 
            src="/images/impulso-digital-logo-light.webp" 
            alt="Impulso Digital" 
            className="h-16 lg:h-20 object-contain"
          />
        )}
          </a>
        <nav className="hidden md:flex items-center gap-10">
          <a className="text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-primary transition-colors" href="#servicos">Serviços</a>
          <a className="text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-primary transition-colors" href="#sobre">Sobre</a>
          <a className="text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-primary transition-colors" href="#processo">Processo</a>
          <a className="text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-primary transition-colors" href="#contato">Contato</a>
        </nav>
        <div className="flex items-center gap-4">
          <a href='#contato' className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all shadow-md">
            Fale conosco
          </a>
          <button 
            onClick={toggleTheme} 
            className="w-10 h-10 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            <span className="material-symbols-outlined">
              {theme === 'light' ? 'dark_mode' : 'wb_sunny'}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
