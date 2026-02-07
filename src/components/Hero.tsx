import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-8">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
            Soluções Tecnológicas Modernas
          </div>
          <h1 className="text-4xl md:text-6xl font-black leading-[1.1] text-gray-900 dark:text-white">
            Tecnologia simples para organizar e fazer seu negócio <span className="text-primary">funcionar</span> melhor. 
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
            Eliminamos a dor de cabeça tecnológica para pequenos empresários focarem no que realmente importa: o crescimento e a gestão do seu sonho.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href='#contato' className="bg-primary text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform">
              Começar Agora
            </a>
{/*             <button className="border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              Ver Portfólio
            </button> */}
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square w-full rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 dark:from-primary/10 dark:to-primary/5 p-4 overflow-hidden border border-gray-200 dark:border-gray-800">
            <div
              className="w-full h-full rounded-xl bg-center bg-cover shadow-2xl"
              style={{ backgroundImage: "url('/images/hero-image.png')" }}
              aria-label="Professional office workspace with high end technology setup"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
