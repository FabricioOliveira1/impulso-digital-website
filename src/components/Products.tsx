import React from 'react';

const products = [
  {
    level: '01',
    tag: 'Para quem está começando',
    title: 'Presença Profissional',
    description:
      'Landing page profissional + organização do Instagram + conteúdo inicial. A primeira estrutura sólida para quem ainda depende só do improviso.',
    audience: [
      'Autônomos e pequenos negócios',
      'Quem só usa Instagram e WhatsApp',
      'Quem ainda está no improviso',
    ],
    items: [
      'Landing page (página única profissional)',
      'Apresentação clara dos seus serviços',
      'Botão direto para WhatsApp',
      'Organização do perfil do Instagram',
      '12 posts prontos (3 por semana, 30 dias)',
    ],
    results: [
      'Presença profissional imediata',
      'Primeiros clientes via site',
      'Menos dependência do Instagram',
    ],
    price: 'R$1.000 a R$1.200',
    highlight: false,
    cta: 'Quero minha presença profissional',
  },
  {
    level: '02',
    tag: 'Mais vendido',
    title: 'Estrutura Digital Profissional',
    description:
      'Site completo com até 5 páginas, estrutura de serviços e SEO básico. Para quem quer mais credibilidade e converter visitantes em clientes.',
    audience: [
      'Empresas que já têm clientes',
      'Negócios em crescimento',
      'Quem quer transmitir mais profissionalismo',
    ],
    items: [
      'Site completo (até 5 páginas)',
      'Estrutura clara de serviços',
      'Página de contato',
      'Integração com WhatsApp',
      'SEO básico para Google',
    ],
    results: [
      'Mais credibilidade',
      'Melhor apresentação do negócio',
      'Mais conversão de contato',
    ],
    price: 'R$1.300 a R$1.500',
    highlight: true,
    cta: 'Quero meu site completo',
  },
  {
    level: '03',
    tag: 'Para escalar',
    title: 'Sistema sob Medida',
    description:
      'Solução personalizada para automatizar processos, organizar o atendimento ou criar uma ferramenta específica para o seu negócio crescer.',
    audience: [
      'Empresas com demanda crescente',
      'Negócios com processos desorganizados',
      'Quem já sente dor operacional',
    ],
    items: [
      'Sistema personalizado do zero',
      'Painel administrativo',
      'Automação de processos',
      'Integração com a operação atual',
      'Aplicativos e soluções mobile'
    ],
    results: [
      'Organização interna',
      'Capacidade de escalar',
      'Mais eficiência operacional',
    ],
    price: 'Sob consulta',
    highlight: false,
    cta: 'Solicitar orçamento',
  },
];

const Divider: React.FC<{ highlight: boolean }> = ({ highlight }) => (
  <div className={`my-5 h-px w-full ${highlight ? 'bg-white/20' : 'bg-gray-200 dark:bg-gray-700'}`} />
);

const Products: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900" id="produtos">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Planos</p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4">
            Escolha a solução ideal para o seu momento
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-lg">
            Cada negócio está em um estágio diferente. Trabalhamos com três níveis de solução.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {products.map((product, index) => (
            <div
              key={index}
              className={`relative flex flex-col rounded-2xl border p-8 transition-all ${
                product.highlight
                  ? 'border-primary bg-primary text-white shadow-2xl shadow-primary/30 scale-[1.02]'
                  : 'border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50'
              }`}
            >
              {product.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow">
                  Mais vendido
                </div>
              )}

              {/* Número decorativo */}
              <div className="mb-4">
                <span
                  className={`text-5xl font-black opacity-20 leading-none ${
                    product.highlight ? 'text-white' : 'text-primary'
                  }`}
                >
                  {product.level}
                </span>
              </div>

              {/* Tag */}
              {!product.highlight && (
                <span className="inline-block mb-2 text-xs font-bold text-primary uppercase tracking-wider">
                  {product.tag}
                </span>
              )}

              {/* Título */}
              <h3
                className={`text-2xl font-black mb-3 ${
                  product.highlight ? 'text-white' : 'text-gray-900 dark:text-white'
                }`}
              >
                {product.title}
              </h3>

              {/* Descrição */}
              <p
                className={`text-sm leading-relaxed ${
                  product.highlight ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'
                }`}
              >
                {product.description}
              </p>

              <Divider highlight={product.highlight} />

              {/* O que inclui */}
              <div className="mb-4 flex-1">
                <p className={`text-xs font-bold uppercase tracking-wider mb-3 ${product.highlight ? 'text-white/60' : 'text-gray-400 dark:text-gray-500'}`}>
                  O que inclui
                </p>
                <ul className="flex flex-col gap-2.5">
                  {product.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm">
                      <span
                        className={`material-symbols-outlined text-base mt-0.5 shrink-0 ${
                          product.highlight ? 'text-white/70' : 'text-primary'
                        }`}
                      >
                        check_circle
                      </span>
                      <span className={product.highlight ? 'text-white/90' : 'text-gray-700 dark:text-gray-300'}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resultado */}
              {product.results && product.results.length > 0 && (
                <>
                  <Divider highlight={product.highlight} />
                  <div className="mb-4">
                    <p className={`text-xs font-bold uppercase tracking-wider mb-3 ${product.highlight ? 'text-white/60' : 'text-gray-400 dark:text-gray-500'}`}>
                      Resultado
                    </p>
                    <ul className="flex flex-col gap-2">
                      {product.results.map((result, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm font-semibold">
                          <span
                            className={`material-symbols-outlined text-base shrink-0 ${
                              product.highlight ? 'text-yellow-300' : 'text-green-500'
                            }`}
                          >
                            trending_up
                          </span>
                          <span className={product.highlight ? 'text-white' : 'text-gray-800 dark:text-gray-200'}>
                            {result}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}

              <Divider highlight={product.highlight} />

              {/* Preço */}
              <div className="mb-6">
                <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${product.highlight ? 'text-white/60' : 'text-gray-400 dark:text-gray-500'}`}>
                  Investimento
                </p>
                <p
                  className={`text-2xl font-black ${
                    product.highlight ? 'text-white' : 'text-gray-900 dark:text-white'
                  }`}
                >
                  {product.price}
                </p>
              </div>

              {/* CTA */}
              <a
                href={`https://wa.me/+5521992334766?text=Ol%C3%A1!%20Tenho%20interesse%20no%20plano%20${encodeURIComponent(product.title)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-auto text-center py-3.5 rounded-xl font-bold transition-all hover:scale-[1.02] ${
                  product.highlight
                    ? 'bg-white text-primary hover:bg-gray-100'
                    : 'bg-primary text-white hover:bg-primary/90'
                }`}
              >
                {product.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 dark:text-gray-600 text-lg mt-10">
          Não sabe qual escolher? Fale comigo e encontramos a melhor opção juntos.
        </p>

      </div>
    </section>
  );
};

export default Products;
