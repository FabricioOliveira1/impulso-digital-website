export default function Content() {
  return (
    <div className="space-y-10 text-gray-700 dark:text-gray-300 leading-relaxed">

      <p>
        Quando um pequeno empresário decide que precisa ter um site, a primeira pergunta quase sempre é a mesma: <strong className="text-gray-900 dark:text-white">quanto custa?</strong> E a resposta honesta é: depende. Mas isso não significa que você vai sair sem informação útil daqui. Neste artigo, vamos detalhar os fatores que influenciam o preço e o que você pode esperar em cada faixa de investimento.
      </p>

      <section>
        <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-4">
          O que determina o preço de um site?
        </h2>
        <p className="mb-4">
          Antes de falar em números, é preciso entender que o preço de um site não é arbitrário. Ele reflete o tempo, a complexidade e a qualidade do trabalho envolvido. Os principais fatores são:
        </p>
        <ul className="space-y-3 ml-1">
          {[
            { title: 'Tipo de projeto:', text: 'Uma landing page (página única) é muito mais simples e rápida de desenvolver do que um site com 5 páginas, que por sua vez é mais simples que um e-commerce com carrinho de compras.' },
            { title: 'Funcionalidades:', text: 'Formulário de contato, integração com WhatsApp, área de blog, sistema de agendamento — cada funcionalidade adiciona tempo e custo.' },
            { title: 'Design personalizado vs. template:', text: 'Sites feitos do zero, com identidade visual única, custam mais do que sites baseados em modelos prontos. Mas templates genéricos raramente transmitem a personalidade do seu negócio.' },
            { title: 'SEO e configuração técnica:', text: 'Um site só é útil se aparecer no Google. A configuração de SEO — título, meta description, sitemap, performance — deve ser feita desde o início, e isso tem custo de tempo.' },
            { title: 'Suporte após a entrega:', text: 'Sites com suporte contínuo custam mais, mas evitam que você fique desamparado depois da entrega.' },
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="material-symbols-outlined text-base text-primary mt-1 flex-shrink-0">arrow_right</span>
              <span><strong className="text-gray-900 dark:text-white">{item.title}</strong> {item.text}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-4">
          Faixas de preço no Brasil (2026)
        </h2>
        <p className="mb-6">
          Com base na realidade do mercado brasileiro, aqui estão as faixas de investimento mais comuns por tipo de projeto:
        </p>
        <div className="space-y-4">
          {[
            {
              type: 'Landing page (página única)',
              range: 'R$800 a R$2.000',
              desc: 'Ideal para autônomos, profissionais liberais e pequenos negócios que precisam de uma presença profissional rápida. Uma página bem feita já é suficiente para apresentar seus serviços, gerar contato via WhatsApp e aparecer no Google.',
              color: 'border-green-200 dark:border-green-800/50 bg-green-50 dark:bg-green-900/10',
              badge: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
            },
            {
              type: 'Site completo (3 a 5 páginas)',
              range: 'R$2.000 a R$8.000',
              desc: 'Para negócios que precisam de mais estrutura: página inicial, sobre, serviços, portfólio e contato. Transmite mais credibilidade e permite conteúdo mais organizado. Ideal para empresas em crescimento.',
              color: 'border-blue-200 dark:border-blue-800/50 bg-blue-50 dark:bg-blue-900/10',
              badge: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
            },
            {
              type: 'Site institucional completo',
              range: 'R$5.000 a R$20.000',
              desc: 'Sites com múltiplas seções, blog, integração com sistemas e desenvolvimento sob medida. Para empresas consolidadas com necessidades mais complexas.',
              color: 'border-purple-200 dark:border-purple-800/50 bg-purple-50 dark:bg-purple-900/10',
              badge: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
            },
            {
              type: 'E-commerce (loja virtual)',
              range: 'R$5.000 a R$30.000+',
              desc: 'Lojas virtuais têm complexidade muito maior: catálogo de produtos, carrinho, checkout, meios de pagamento e logística. O investimento varia muito conforme o número de produtos e funcionalidades.',
              color: 'border-orange-200 dark:border-orange-800/50 bg-orange-50 dark:bg-orange-900/10',
              badge: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
            },
          ].map((item, i) => (
            <div key={i} className={`p-6 rounded-xl border-2 ${item.color}`}>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <h3 className="font-bold text-gray-900 dark:text-white">{item.type}</h3>
                <span className={`text-sm font-bold px-3 py-1 rounded-full ${item.badge}`}>{item.range}</span>
              </div>
              <p className="text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-4">
          Freelancer, agência ou plataforma DIY?
        </h2>
        <p className="mb-6">
          Além do tipo de site, o custo também depende de quem vai fazer. Existem três caminhos principais:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: 'Freelancer',
              pros: 'Preço geralmente mais baixo, contato direto com quem faz',
              cons: 'Menos estrutura de suporte, risco de abandono do projeto, qualidade varia muito',
              ideal: 'Projetos simples com orçamento limitado',
            },
            {
              title: 'Agência digital',
              pros: 'Processo estruturado, suporte após entrega, mais segurança no prazo e qualidade',
              cons: 'Investimento maior',
              ideal: 'Quem quer qualidade e segurança na entrega',
            },
            {
              title: 'Wix, Squarespace, etc.',
              pros: 'Baixo custo inicial, você mesmo monta',
              cons: 'Sites lentos, difíceis de ranquear no Google, visual genérico, mensalidade perpétua',
              ideal: 'Testes rápidos sem intenção de crescer',
            },
          ].map((item, i) => (
            <div key={i} className="p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
              <h3 className="font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
              <p className="text-sm mb-2"><span className="text-green-600 dark:text-green-400 font-bold">+ </span>{item.pros}</p>
              <p className="text-sm mb-2"><span className="text-red-500 font-bold">- </span>{item.cons}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 pt-3 border-t border-gray-100 dark:border-gray-800">
                <span className="font-bold">Ideal para:</span> {item.ideal}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-4">
          O que desconfiar quando o preço é muito baixo
        </h2>
        <p className="mb-4">
          Sites por R$200, R$300 existem. Mas é importante entender o que você está comprando. Sites muito baratos geralmente apresentam:
        </p>
        <ul className="space-y-2 ml-1">
          {[
            'Modelos genéricos de plataformas gratuitas — sem personalização real',
            'Sem configuração de SEO — o site não aparece no Google',
            'Sem suporte após a entrega — qualquer problema é por sua conta',
            'Hospedagem lenta que prejudica a experiência do usuário',
            'Código de baixa qualidade que dificulta atualizações futuras',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="material-symbols-outlined text-base text-red-500 mt-1 flex-shrink-0">cancel</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4">
          Um site barato que não aparece no Google e não passa credibilidade não é um investimento — é um custo sem retorno.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-4">
          Quanto cobra a Impulso Digital?
        </h2>
        <p className="mb-4">
          Na Impulso Digital trabalhamos com preços transparentes e sem surpresas:
        </p>
        <div className="bg-primary/5 dark:bg-primary/10 border border-primary/30 rounded-xl p-6">
          <ul className="space-y-3">
            {[
              { type: 'Landing page profissional', price: 'R$1.000 a R$1.200' },
              { type: 'Site completo (até 5 páginas)', price: 'R$1.300 a R$1.500' },
              { type: 'Sistema web personalizado', price: 'Sob consulta' },
            ].map((item, i) => (
              <li key={i} className="flex justify-between items-center py-2 border-b border-primary/20 last:border-0">
                <span className="font-medium text-gray-900 dark:text-white">{item.type}</span>
                <span className="font-black text-primary">{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-4 text-sm">
          Todos os projetos incluem: SEO básico configurado, design responsivo, botão de WhatsApp, certificado SSL e suporte após a entrega. Sem cobranças extras surpresa.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-4">
          Qual o melhor momento para criar um site?
        </h2>
        <p>
          Não existe o momento perfeito. Mas existe o momento ideal: <strong className="text-gray-900 dark:text-white">antes de você precisar muito</strong>. Um site leva tempo para aparecer no Google — geralmente de 3 a 6 meses após a publicação. Quanto mais cedo você começar, mais cedo começa a colher os resultados. Além disso, um site bem feito trabalha por você 24 horas por dia, capturando clientes enquanto você faz outras coisas.
        </p>
      </section>

    </div>
  )
}
