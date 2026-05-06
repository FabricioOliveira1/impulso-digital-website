import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { FaWhatsapp } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Criação de Sites Profissionais para Empresas | Impulso Digital — Rio de Janeiro',
  description: 'Criamos sites profissionais para pequenas empresas e autônomos no Rio de Janeiro. Sites que aparecem no Google, geram credibilidade e convertem visitantes em clientes. Orçamento sem compromisso.',
  alternates: { canonical: '/criacao-de-sites' },
  openGraph: {
    title: 'Criação de Sites Profissionais para Empresas | Impulso Digital',
    description: 'Sites profissionais que aparecem no Google e convertem visitantes em clientes. Atendemos Rio de Janeiro e todo o Brasil.',
    url: 'https://impulsodigital.dev.br/criacao-de-sites',
  },
}

const includes = [
  { icon: 'search', text: 'SEO básico configurado para aparecer no Google' },
  { icon: 'smartphone', text: 'Design responsivo para celular, tablet e desktop' },
  { icon: 'chat', text: 'Botão de WhatsApp integrado e formulário de contato' },
  { icon: 'speed', text: 'Site rápido com bom desempenho no Google PageSpeed' },
  { icon: 'lock', text: 'Certificado SSL (HTTPS) incluso' },
  { icon: 'tune', text: 'Painel para atualizações simples de conteúdo' },
  { icon: 'analytics', text: 'Google Analytics configurado' },
  { icon: 'support_agent', text: 'Suporte após a entrega' },
]

const benefits = [
  {
    icon: 'travel_explore',
    title: 'Aparece no Google',
    description: 'Com SEO configurado desde o início, seu site tem chance real de aparecer nas buscas de quem procura o que você oferece.',
  },
  {
    icon: 'verified',
    title: 'Passa credibilidade',
    description: 'Um site profissional transmite seriedade ao cliente antes mesmo de ele entrar em contato com você.',
  },
  {
    icon: 'schedule',
    title: 'Trabalha por você 24h',
    description: 'Enquanto você dorme, seu site apresenta seus serviços, responde dúvidas e recebe contatos de potenciais clientes.',
  },
  {
    icon: 'trending_up',
    title: 'Independente de algoritmos',
    description: 'Ao contrário do Instagram, seu site é seu. Nenhuma mudança de algoritmo vai esconder o seu negócio dos clientes.',
  },
]

const plans = [
  {
    level: '01',
    tag: 'Para quem está começando',
    title: 'Presença Profissional',
    description: 'Landing page profissional — a primeira estrutura sólida para quem ainda depende só do improviso.',
    price: 'R$1.000 a R$1.200',
    features: ['Landing page (página única profissional)', 'Apresentação clara dos seus serviços', 'Botão direto para WhatsApp', 'SEO básico configurado', 'Certificado SSL'],
    cta: 'Quero minha landing page',
    highlight: false,
  },
  {
    level: '02',
    tag: 'Mais vendido',
    title: 'Site Completo',
    description: 'Site com até 5 páginas, estrutura de serviços e SEO. Para quem quer mais credibilidade e presença digital sólida.',
    price: 'R$1.300 a R$1.500',
    features: ['Site completo (até 5 páginas)', 'Estrutura clara de serviços', 'Página de contato', 'Integração com WhatsApp', 'SEO básico para Google', 'Google Analytics'],
    cta: 'Quero meu site completo',
    highlight: true,
  },
]

const faqs = [
  {
    q: 'Quanto tempo leva para criar o site?',
    a: 'Uma landing page é entregue em 7 a 14 dias. Um site completo com múltiplas páginas leva de 2 a 4 semanas. O prazo começa após a aprovação do briefing e do conteúdo.',
  },
  {
    q: 'Preciso ter textos e fotos prontos?',
    a: 'Ajudamos você a organizar o conteúdo. Para textos, orientamos o que escrever em cada seção. Para fotos, podemos usar banco de imagens gratuito enquanto você não tem as próprias.',
  },
  {
    q: 'O site vai aparecer no Google automaticamente?',
    a: 'Configuramos o SEO básico — título, descrição, sitemap e indexação — para que o Google possa encontrar seu site. Aparecer nas primeiras posições leva tempo e depende de consistência, mas você começa no caminho certo desde o dia 1.',
  },
  {
    q: 'Quem vai hospedar o site?',
    a: 'Orientamos e configuramos a hospedagem junto com você. Trabalhamos com serviços confiáveis e com bom custo-benefício. O domínio e a hospedagem ficam no seu nome.',
  },
  {
    q: 'Posso atualizar o site depois sozinho?',
    a: 'Sim. Entregamos com um painel simples para atualizações básicas de texto e imagem. Para mudanças maiores, pode contar com a gente.',
  },
]

export default function CriacaoDeSitesPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header />
      <main>

        {/* Hero */}
        <section className="py-20 md:py-32 px-6 bg-primary/5 dark:bg-background-dark">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
              <a href="/" className="hover:text-primary transition-colors">Home</a>
              <span className="material-symbols-outlined text-base">chevron_right</span>
              <span className="text-gray-600 dark:text-gray-300">Criação de Sites</span>
            </nav>
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Serviço</p>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight mb-6">
              Criação de sites profissionais{' '}
              <span className="text-primary">para pequenas empresas</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mb-10">
              Um site que aparece no Google, transmite credibilidade e transforma visitantes em clientes. Desenvolvemos do zero, com foco no resultado do seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/+5521992334766?text=Ol%C3%A1!%20Tenho%20interesse%20em%20criar%20um%20site%20profissional.%20Pode%20me%20passar%20mais%20informa%C3%A7%C3%B5es%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:scale-[1.02] transition-transform"
              >
                <FaWhatsapp size={20} />
                Solicitar orçamento
              </a>
              <a
                href="#planos"
                className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-xl font-bold hover:border-primary hover:text-primary transition-colors"
              >
                Ver planos e preços
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-500 dark:text-gray-500">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-base text-primary">check_circle</span>
                Rio de Janeiro e todo o Brasil
              </span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-base text-primary">check_circle</span>
                Atendimento 100% online
              </span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-base text-primary">check_circle</span>
                Orçamento sem compromisso
              </span>
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Por que ter um site</p>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4">
                O que um site profissional faz pelo seu negócio
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((item, index) => (
                <div key={index} className="flex gap-5 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* O que está incluso */}
        <section className="py-20 px-6 bg-primary/5 dark:bg-gray-900/50">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">O que você recebe</p>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-6">
                Tudo que o seu site precisa para funcionar de verdade
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Não entregamos apenas o visual. Cada site sai configurado, indexado e pronto para receber visitantes e gerar contatos.
              </p>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {includes.map((item, index) => (
                <li key={index} className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
                  <span className="material-symbols-outlined text-xl text-primary mt-0.5 flex-shrink-0">{item.icon}</span>
                  <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Planos */}
        <section className="py-20 px-6" id="planos">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Planos</p>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4">
                Escolha o plano ideal para o seu momento
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                Preços transparentes, sem surpresas.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`rounded-2xl p-8 flex flex-col gap-6 border ${plan.highlight ? 'border-primary bg-primary text-white shadow-xl shadow-primary/20' : 'border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900'}`}
                >
                  <div>
                    <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${plan.highlight ? 'bg-white/20 text-white' : 'bg-primary/10 text-primary'}`}>
                      {plan.tag}
                    </span>
                  </div>
                  <div>
                    <h3 className={`text-2xl font-black mb-2 ${plan.highlight ? 'text-white' : 'text-gray-900 dark:text-white'}`}>{plan.title}</h3>
                    <p className={`text-sm leading-relaxed ${plan.highlight ? 'text-white/75' : 'text-gray-500 dark:text-gray-400'}`}>{plan.description}</p>
                  </div>
                  <ul className="space-y-3 flex-1">
                    {plan.features.map((f, i) => (
                      <li key={i} className={`flex items-start gap-2 text-sm ${plan.highlight ? 'text-white/90' : 'text-gray-700 dark:text-gray-300'}`}>
                        <span className={`material-symbols-outlined text-base mt-0.5 flex-shrink-0 ${plan.highlight ? 'text-white' : 'text-primary'}`}>check_circle</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div>
                    <p className={`text-2xl font-black mb-4 ${plan.highlight ? 'text-white' : 'text-gray-900 dark:text-white'}`}>{plan.price}</p>
                    <a
                      href={`https://wa.me/+5521992334766?text=Ol%C3%A1!%20Tenho%20interesse%20no%20plano%20${encodeURIComponent(plan.title)}.%20Pode%20me%20passar%20mais%20detalhes%3F`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all w-full ${plan.highlight ? 'bg-white text-primary hover:bg-gray-100' : 'bg-primary text-white hover:bg-primary/90'}`}
                    >
                      <FaWhatsapp size={18} />
                      {plan.cta}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-500 dark:text-gray-400 text-sm mt-8">
              Não sabe qual escolher?{' '}
              <a href="https://wa.me/+5521992334766" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline">
                Me chama no WhatsApp
              </a>{' '}
              e encontramos juntos a melhor opção.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-6 bg-primary/5 dark:bg-gray-900/50">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Dúvidas frequentes</p>
              <h2 className="text-3xl font-black text-gray-900 dark:text-white">
                Perguntas sobre criação de sites
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
                  <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-3">{faq.q}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-20 px-6 bg-primary text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Pronto para ter um site que trabalha por você?
            </h2>
            <p className="text-white/75 text-lg mb-10">
              Me conta sobre o seu negócio e montamos a melhor solução juntos. Sem compromisso.
            </p>
            <a
              href="https://wa.me/+5521992334766?text=Ol%C3%A1!%20Quero%20criar%20um%20site%20profissional%20para%20minha%20empresa.%20Pode%20me%20ajudar%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg"
            >
              <FaWhatsapp size={20} />
              Solicitar orçamento agora
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
