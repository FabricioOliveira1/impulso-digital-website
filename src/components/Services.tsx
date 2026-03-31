import React from 'react';

const solutions = [
  {
    icon: 'language',
    title: 'Sites profissionais',
    description:
      'Criamos páginas e sites completos para apresentar seu serviço com clareza, passar credibilidade e converter visitantes em clientes.',
  },
  {
    icon: 'settings_suggest',
    title: 'Sistemas sob medida',
    description:
      'Desenvolvemos ferramentas digitais para organizar seu atendimento, controlar pedidos, agendamentos ou qualquer processo interno do seu negócio.',
  },
  {
    icon: 'bolt',
    title: 'Automação de processos',
    description:
      'Eliminamos tarefas manuais e repetitivas para que você atenda mais, gaste menos tempo operacional e foque em crescer.',
  },
];

const Services: React.FC = () => {
  return (
    <section className="py-20" id="solucoes">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-14">
          <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">O que fazemos</p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4 max-w-xl">
            Estrutura digital que faz o seu negócio trabalhar por você
          </h2>
          <div className="w-16 h-1.5 bg-primary rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-primary/50 hover:shadow-lg transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                <span className="material-symbols-outlined text-3xl">{solution.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">{solution.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{solution.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
