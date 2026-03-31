import React from 'react';

const steps = [
  {
    number: 1,
    title: 'Entendemos seu negócio',
    description: 'Conversamos para entender como você trabalha, o que vende e o que precisa melhorar. Sem formulários complicados.',
  },
  {
    number: 2,
    title: 'Desenvolvemos a solução',
    description: 'Criamos o site ou sistema ideal para o seu caso, com aprovação em cada etapa. Você acompanha tudo.',
  },
  {
    number: 3,
    title: 'Entregamos e damos suporte',
    description: 'Seu projeto vai ao ar e você não fica sozinho. Estamos disponíveis para ajustes e evoluções.',
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-primary/5 dark:bg-background-dark" id="processo">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Processo</p>
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4">
          Como funciona o projeto
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto mb-16">
          Do primeiro contato até a entrega, o processo é simples e transparente.
        </p>

        <div className="relative flex flex-col md:flex-row justify-between items-center gap-12 max-w-5xl mx-auto">
          <div className="hidden md:block absolute top-[2.75rem] left-0 w-full h-0.5 bg-gray-200 dark:bg-gray-800 z-0"></div>
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative z-10 flex flex-col items-center gap-4 bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 w-full md:w-72 shadow-sm hover:border-primary/40 transition-colors"
            >
              <div className="w-14 h-14 bg-primary text-white font-black rounded-full flex items-center justify-center text-xl shadow-lg shadow-primary/30">
                {step.number}
              </div>
              <h4 className="font-bold text-gray-900 dark:text-gray-100 text-lg">{step.title}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
