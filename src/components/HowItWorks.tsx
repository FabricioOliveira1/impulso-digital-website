
import React from 'react';

const steps = [
  { number: 1, title: 'Diagnóstico', description: 'Analisamos seu negócio e identificamos os gargalos.' },
  { number: 2, title: 'Solução', description: 'Implementamos a tecnologia necessária sem burocracia.' },
  { number: 3, title: 'Acompanhamento', description: 'Garantimos que tudo funcione e cresça com você.' },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-primary/5 dark:bg-background-dark" id="processo">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-16">Como Funciona</h2>
        <div className="relative flex flex-col md:flex-row justify-between items-center gap-12 max-w-5xl mx-auto">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 dark:bg-gray-800 -translate-y-1/2 z-0"></div>
          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center gap-4 bg-background-light dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 w-full md:w-64 shadow-sm">
              <div className="w-12 h-12 bg-primary text-white font-bold rounded-full flex items-center justify-center text-xl">{step.number}</div>
              <h4 className="font-bold text-gray-900 dark:text-gray-100">{step.title}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
