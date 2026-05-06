import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { FaWhatsapp } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Landing Page Profissional para Pequenos Negócios | Impulso Digital',
  description: 'Landing pages profissionais que convertem visitantes em clientes. Ideal para autônomos e pequenos negócios que querem presença digital rápida e eficiente. A partir de R$1.000.',
  alternates: { canonical: '/landing-page' },
  openGraph: {
    title: 'Landing Page Profissional para Pequenos Negócios | Impulso Digital',
    description: 'Landing pages que convertem. Ideal para quem está começando e quer presença profissional na internet sem complicação.',
    url: 'https://impulsodigital.dev.br/landing-page',
  },
}

const whenYouNeed = [
  { icon: 'storefront', text: 'Você é autônomo ou profissional liberal sem presença digital' },
  { icon: 'campaign', text: 'Quer anunciar um serviço ou produto específico no Google ou Instagram' },
  { icon: 'rocket_launch', text: 'Está começando e precisa de uma estrutura profissional rápida' },
  { icon: 'phone_iphone', text: 'Depende só do WhatsApp e Instagram para se apresentar' },
  { icon: 'sentiment_dissatisfied', text: 'Perde clientes porque não tem um lugar fixo para mostrar seu trabalho' },
  { icon: 'attach_money', text: 'Quer investir de forma inteligente sem gastar mais do que precisa' },
]

const includes = [
  { icon: 'ads_click', text: 'Página única focada em apresentar seu serviço com clareza' },
  { icon: 'search', text: 'SEO básico para aparecer no Google' },
  { icon: 'smartphone', text: 'Design responsivo para celular e desktop' },
  { icon: 'chat', text: 'Botão de WhatsApp para contato direto' },
  { icon: 'mail', text: 'Formulário de contato integrado' },
  { icon: 'lock', text: 'Certificado SSL (HTTPS)' },
  { icon: 'analytics', text: 'Google Analytics configurado' },
  { icon: 'support_agent', text: 'Suporte após a entrega' },
]

const difference = [
  {
    title: 'Landing page',
    description: 'Página única, objetiva e focada em converter o visitante. Ideal para apresentar um serviço ou produto com clareza.',
    best: 'Quem está começando ou tem um serviço bem definido',
    price: 'R$1.000 a R$1.200',
    highlight: true,
  },
  {
    title: 'Site completo',
    description: 'Múltiplas páginas com área de serviços, portfólio, blog e estrutura completa para crescer.',
    best: 'Quem já tem operação rodando e quer mais presença',
    price: 'R$1.300 a R$1.500',
    highlight: false,
  },
]

export default function LandingPagePage() {
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
              <span className="text-gray-600 dark:text-gray-300">Landing Page</span>
            </nav>
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Serviço</p>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight mb-6">
              Landing page profissional{' '}
              <span className="text-primary">para o seu negócio</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mb-10">
              A presença digital ideal para quem está começando. Uma página focada, profissional e configurada para aparecer no Google — entregue em até 14 dias.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/+5521992334766?text=Ol%C3%A1!%20Tenho%20interesse%20em%20uma%20landing%20page%20profissional.%20Pode%20me%20passar%20mais%20informa%C3%A7%C3%B5es%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:scale-[1.02] transition-transform"
              >
                <FaWhatsapp size={20} />
                Solicitar orçamento
              </a>
              <a
                href="#o-que-esta-incluso"
                className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-xl font-bold hover:border-primary hover:text-primary transition-colors"
              >
                Ver o que está incluso
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-500 dark:text-gray-500">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-base text-primary">check_circle</span>
                Entrega em até 14 dias
              </span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-base text-primary">check_circle</span>
                A partir de R$1.000
              </span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-base text-primary">check_circle</span>
                Atendemos todo o Brasil
              </span>
            </div>
          </div>
        </section>

        {/* O que é uma landing page */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Entenda o conceito</p>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-6">
                O que é uma landing page?
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  Uma <strong className="text-gray-800 dark:text-gray-200">landing page</strong> é uma página única, objetiva e focada em apresentar o seu serviço ou produto com clareza suficiente para fazer o visitante entrar em contato ou comprar.
                </p>
                <p>
                  Diferente de um site com muitas páginas e seções, a landing page tem um único objetivo: <strong className="text-gray-800 dark:text-gray-200">converter visitantes em clientes</strong>. Cada elemento da página — texto, imagem, botão — existe para isso.
                </p>
                <p>
                  É a escolha ideal para quem está começando, para quem quer validar um serviço ou para quem tem um produto bem definido e precisa de uma vitrine profissional na internet sem complicação.
                </p>
              </div>
            </div>
            <div className="bg-primary/5 dark:bg-gray-900 rounded-2xl p-8 border border-primary/20 dark:border-gray-800">
              <p className="text-primary font-bold text-sm uppercase tracking-widest mb-4">Quando você precisa</p>
              <ul className="space-y-4">
                {whenYouNeed.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-xl text-primary mt-0.5 flex-shrink-0">{item.icon}</span>
                    <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* O que está incluso */}
        <section className="py-20 px-6 bg-primary/5 dark:bg-gray-900/50" id="o-que-esta-incluso">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Tudo incluso</p>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4">
                O que você recebe na sua landing page
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto">
                Entregamos tudo configurado e pronto para atrair e converter clientes.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {includes.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-5 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
                  <span className="material-symbols-outlined text-xl text-primary mt-0.5 flex-shrink-0">{item.icon}</span>
                  <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Diferença: landing vs site */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Comparativo</p>
              <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">
                Landing page ou site completo?
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                Escolha conforme o seu momento atual.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {difference.map((item, index) => (
                <div
                  key={index}
                  className={`p-8 rounded-2xl border-2 ${item.highlight ? 'border-primary bg-primary/5 dark:bg-primary/10' : 'border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900'}`}
                >
                  {item.highlight && (
                    <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-primary text-white mb-4">
                      Esta página
                    </span>
                  )}
                  <h3 className="text-xl font-black text-gray-900 dark:text-white mb-3">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{item.description}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">
                    <span className="font-bold">Ideal para:</span> {item.best}
                  </p>
                  <p className="text-2xl font-black text-gray-900 dark:text-white">{item.price}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-500 dark:text-gray-400 text-sm mt-8">
              Ainda em dúvida?{' '}
              <a href="https://wa.me/+5521992334766" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline">
                Me conta sobre o seu negócio
              </a>{' '}
              e eu te ajudo a escolher.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-primary text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Sua primeira presença digital começa aqui
            </h2>
            <p className="text-white/75 text-lg mb-10">
              Uma landing page profissional, configurada e entregue em até 14 dias. Sem complicação, sem termos técnicos.
            </p>
            <a
              href="https://wa.me/+5521992334766?text=Ol%C3%A1!%20Quero%20criar%20uma%20landing%20page%20profissional.%20Pode%20me%20ajudar%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg"
            >
              <FaWhatsapp size={20} />
              Quero minha landing page
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
