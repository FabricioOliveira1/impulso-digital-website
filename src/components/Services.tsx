import React from 'react';

const services = [
  {
    icon: 'language',
    title: 'Sites Estratégicos',
    description: 'Sites profissionais otimizados para conversão e visibilidade no Google, atraindo mais clientes qualificados.',
  },
  {
    icon: 'terminal',
    title: 'Sistemas Práticos',
    description: 'Desenvolvimento de ferramentas personalizadas para gerir estoques, pedidos ou fluxos internos sem complicações.',
  },
  {
    icon: 'dashboard_customize',
    title: 'Diagnóstico de Organização Digital',
    description: 'Analisamos sua presença digital e processos internos para identificar oportunidades de melhoria ou crescimento online.',
  },
];

const Services: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900" id="servicos">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">O Que Fazemos</h2>
          <div className="w-20 h-1.5 bg-primary rounded-full"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-400 text-lg">Soluções digitais sob medida, desenvolvidas para trazer eficiência real.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-8 rounded-2xl border border-gray-100 dark:border-gray-800 bg-background-light/50 dark:bg-background-dark hover:border-primary/50 transition-all group">
              <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                <span className="material-symbols-outlined text-3xl">{service.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
