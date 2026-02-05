
import React from 'react';

const audiences = [
  { icon: 'medical_services', title: 'Clínicas', description: 'Acabe com a confusão nos agendamentos e prontuários digitais.' },
  { icon: 'fitness_center', title: 'Academias', description: 'Gestão de membros e cobranças recorrentes sem dor de cabeça.' },
  { icon: 'business_center', title: 'Escritórios', description: 'Fluxos de trabalho otimizados e documentos sempre organizados.' },
];

const TargetAudience: React.FC = () => {
  return (
    <section className="py-20" id="sobre">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">Para quem é a Impulso Dev?</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Ajudamos negócios que precisam focar no operacional mas estão travados pela tecnologia antiga ou desorganizada.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {audiences.map((audience, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 flex items-start gap-4">
              <div className="bg-blue-50 dark:bg-primary/10 p-3 rounded-lg text-primary">
                <span className="material-symbols-outlined">{audience.icon}</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-gray-100">{audience.title}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{audience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
