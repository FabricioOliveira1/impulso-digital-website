import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-6">
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center gap-8">

        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
          Sites · Sistemas · Automação
        </div>

        <h1 className="text-4xl md:text-6xl font-black leading-[1.1] text-gray-900 dark:text-white max-w-4xl">
          Desenvolvimento de sites e sistemas para o{' '}
          <span className="text-primary">seu negócio</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
          Pare de depender só do Instagram. Crie uma estrutura profissional para{' '}
          <strong className="text-gray-800 dark:text-gray-200">atender, vender e organizar</strong>{' '}
          seu negócio.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <a
            href="https://wa.me/+5521992334766?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg hover:scale-[1.02] transition-transform"
          >
            <FaWhatsapp size={22} />
            Falar no WhatsApp
          </a>
          <a
            href="#portfolio"
            className="flex items-center justify-center gap-2 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-xl text-lg font-bold hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-xl">grid_view</span>
            Ver projetos
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-gray-500 dark:text-gray-500">
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-base text-primary">check_circle</span>
            Sem termos técnicos
          </span>
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-base text-primary">check_circle</span>
            Orçamento sem compromisso
          </span>
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-base text-primary">check_circle</span>
            Entrega rápida
          </span>
        </div>

      </div>
    </section>
  );
};

export default Hero;
