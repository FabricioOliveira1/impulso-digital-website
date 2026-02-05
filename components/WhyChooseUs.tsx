
import React from 'react';

const features = [
  { title: 'Tecnologia sem Jargões', description: 'Falamos a sua língua. Explicamos tudo de forma simples e transparente.' },
  { title: 'Suporte Humano e Ágil', description: 'Você não é apenas um ticket. Temos suporte direto e acessível sempre.' },
  { title: 'Foco em Resultado Real', description: 'Não criamos tecnologia por criar. Criamos o que traz lucro e tempo para você.' },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-8">Por que nos escolher?</h2>
          <ul className="space-y-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-4">
                <span className="material-symbols-outlined text-green-500 font-bold mt-1">check_circle</span>
                <div>
                  <h4 className="font-bold text-lg text-gray-900 dark:text-gray-100">{feature.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-gray-900 dark:bg-gray-950 rounded-3xl p-10 text-white relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <span className="material-symbols-outlined text-5xl text-primary !-ml-2">format_quote</span>
            <p className="text-2xl font-medium leading-relaxed my-6 italic">
              "A Impulso Dev organizou todo o nosso fluxo de pacientes. O que levava horas agora é feito em minutos."
            </p>
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full bg-gray-700 bg-cover bg-center"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDkoKPTpU0e_80SdfSKWmV6-JQBNedAKUkWoGdUbhq09LY3ymChzL48_oJuK3zBwhyrQXFu_lxrADP0UbDnSeh1iSLM0LRdxjuPJNpcqNBYvDI8tCyVZPhEWr5HK_K934jSyMViSbEkUQ_QmRqVYj7AW0UZ8cZaVi6SLNLJI1WFzAlCNn-WL9DxB32PBwOqfsvcKJ8qHlZsiotAnjmtZyZSW_NeGNV03HmyYWR5kO3io62rzuYRu-REhOibQKg2P0vbTk26hIX8F4o')" }}
                aria-label="Portrait of Dr. Ricardo Menezes"
              ></div>
              <div>
                <p className="font-bold">Dr. Ricardo Menezes</p>
                <p className="text-sm text-gray-400">Clínica Sorriso Vital</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
