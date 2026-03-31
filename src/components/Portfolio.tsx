import React from 'react';

const cases = [
  {
    name: 'CFTVK CrossFit',
    segment: 'Academia de CrossFit',
    image: '/images/portfolio-crossfit.webp',
    iconColor: 'text-orange-500',
    accentBorder: 'border-orange-200 dark:border-orange-800/50',
    problem: 'A academia não tinha presença online. Novos alunos chegavam apenas por indicação e não havia um lugar para apresentar a estrutura, horários e diferenciais.',
    solution: 'Desenvolvemos um site completo com apresentação da academia, galeria, programas e botão direto para contato via WhatsApp.',
    result: 'Um canal próprio para atrair e converter novos alunos sem depender só do boca a boca.',
    link: 'https://cftvk-website.vercel.app/',
  },
  {
    name: 'Dr. Rafael Andrade',
    segment: 'Advogado Trabalhista',
    image: '/images/portfolio-advogado.webp',
    iconColor: 'text-blue-500',
    accentBorder: 'border-blue-200 dark:border-blue-800/50',
    problem: 'Advogado com boa reputação mas sem presença digital. Clientes não entendiam as áreas de atuação e o contato era feito de forma improvisada.',
    solution: 'Criamos uma landing page profissional com apresentação das especialidades, perfil do advogado e formulário de consulta.',
    result: 'Uma vitrine digital que transmite autoridade e facilita o primeiro contato de potenciais clientes.',
    link: 'https://advogado-trabalhista-premium.vercel.app/',
  },
  {
    name: 'Bella Forma Estética',
    segment: 'Clínica Estética',
    image: '/images/portfolio-clinica.webp',
    iconColor: 'text-pink-500',
    accentBorder: 'border-pink-200 dark:border-pink-800/50',
    problem: 'Agendamentos feitos por WhatsApp geravam confusão, horários sobrepostos e clientes sem retorno adequado.',
    solution: 'Desenvolvemos um site com apresentação dos procedimentos, galeria de resultados e botão de agendamento integrado ao WhatsApp.',
    result: 'Atendimento mais organizado e uma vitrine profissional que aumenta a confiança antes mesmo da consulta.',
    link: 'https://bellaforma-website.vercel.app/',
  },
  {
    name: 'Doce Encanto',
    segment: 'Confeitaria Artesanal',
    image: '/images/portfolio-confeitaria.webp',
    iconColor: 'text-amber-500',
    accentBorder: 'border-amber-200 dark:border-amber-800/50',
    problem: 'Pedidos chegavam por DM no Instagram, mensagens se perdiam e clientes ficavam sem resposta na hora de encomendar.',
    solution: 'Criamos um catálogo online com os produtos, preços e botão direto para o WhatsApp com o pedido já formatado.',
    result: 'Um canal de vendas próprio, fora do Instagram, que organiza os pedidos e facilita a compra pelo cliente.',
    link: 'https://doce-encanto-site-six.vercel.app/',
  },
];

const Portfolio: React.FC = () => {
  return (
    <section className="py-20" id="portfolio">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Projetos Conceito</p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4">
            Veja como ficaria para o seu segmento
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Cada projeto abaixo é uma proposta de solução desenvolvida para um tipo de negócio específico — mostrando na prática o que entregamos para resolver problemas como os seus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((item, index) => (
            <div
              key={index}
              className={`rounded-2xl border bg-white dark:bg-gray-900 overflow-hidden flex flex-col ${item.accentBorder}`}
            >
              {/* Capa com screenshot */}
              <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
                <img
                  src={item.image}
                  alt={`Screenshot do projeto ${item.name}`}
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute top-3 right-3">
                  <span className="bg-black/50 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
                    Projeto conceito
                  </span>
                </div>
                <div className="absolute bottom-3 left-4">
                  <p className="font-black text-white text-base leading-tight drop-shadow">{item.name}</p>
                  <p className="text-white/80 text-xs">{item.segment}</p>
                </div>
              </div>

              {/* Conteúdo */}
              <div className="p-7 flex flex-col gap-5 flex-1">
                <div className="flex flex-col gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1.5">Problema</p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{item.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1.5">Solução</p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{item.solution}</p>
                  </div>
                  <div className={`rounded-xl p-4 border ${item.accentBorder} bg-gray-50 dark:bg-gray-800/50`}>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1.5">Resultado</p>
                    <p className={`font-bold text-sm ${item.iconColor}`}>{item.result}</p>
                  </div>
                </div>

                {/* Link do projeto */}
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-auto inline-flex items-center justify-center gap-2 py-3 rounded-xl border-2 font-bold text-sm transition-all hover:scale-[1.01] ${item.accentBorder} ${item.iconColor} hover:bg-gray-50 dark:hover:bg-gray-800`}
                >
                  <span className="material-symbols-outlined text-base">open_in_new</span>
                  Ver projeto
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://wa.me/+5521992334766?text=Ol%C3%A1!%20Vi%20o%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20meu%20neg%C3%B3cio."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary/90 transition-colors shadow-lg"
          >
            <span className="material-symbols-outlined">chat</span>
            Quero uma solução para o meu negócio
          </a>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
