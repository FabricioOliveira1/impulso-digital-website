import type { Metadata } from 'next'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { FaWhatsapp } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Sobre a Impulso Digital | Agência Digital no Rio de Janeiro',
  description: 'Conheça a Impulso Digital, agência digital sediada no Rio de Janeiro especializada em criação de sites e sistemas para pequenos negócios. Atendemos todo o Brasil de forma 100% online.',
  alternates: { canonical: '/sobre' },
  openGraph: {
    title: 'Sobre a Impulso Digital | Agência Digital no Rio de Janeiro',
    description: 'Agência digital especializada em criação de sites e sistemas para pequenos negócios. Baseados no Rio de Janeiro, atendemos todo o Brasil.',
    url: 'https://impulsodigital.dev.br/sobre',
  },
}

const values = [
  {
    icon: 'gps_fixed',
    title: 'Resultado acima de tecnologia',
    description: 'Não usamos tecnologia por vaidade. Usamos o que resolve o problema do seu negócio — de forma simples e eficiente.',
  },
  {
    icon: 'handshake',
    title: 'Parceria de verdade',
    description: 'A entrega não é o fim do trabalho. Ficamos disponíveis para ajustes, dúvidas e evoluções enquanto você crescer.',
  },
  {
    icon: 'translate',
    title: 'Linguagem que você entende',
    description: 'Sem termos técnicos desnecessários. Explicamos cada decisão em português claro para que você tenha autonomia no processo.',
  },
  {
    icon: 'visibility',
    title: 'Transparência em tudo',
    description: 'Prazos, preços e processos sempre claros desde o início. Sem surpresas no meio do projeto.',
  },
]

const services = [
  {
    icon: 'language',
    title: 'Criação de Sites',
    description: 'Sites completos que aparecem no Google e convertem visitantes em clientes.',
    href: '/criacao-de-sites',
  },
  {
    icon: 'ads_click',
    title: 'Landing Pages',
    description: 'A presença profissional ideal para quem está começando ou quer uma página focada em conversão.',
    href: '/landing-page',
  },
  {
    icon: 'settings_suggest',
    title: 'Sistemas Web',
    description: 'Ferramentas personalizadas para organizar processos, atendimento e crescimento do seu negócio.',
    href: '/sistemas-web',
  },
]

export default function SobrePage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header />
      <main>

        {/* Hero — banner com imagem de fundo */}
        <section className="relative py-36 md:py-52 px-6 overflow-hidden">
          <Image
            src="/images/agencia-digital-equipe-trabalhando.webp"
            alt="Equipe da Impulso Digital trabalhando — agência de criação de sites e sistemas no Rio de Janeiro"
            fill
            className="object-cover object-center scale-105 blur-sm"
            priority
          />
          <div className="absolute inset-0 bg-[#071c33]/80" />
          <div className="absolute inset-0 bg-primary/12" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Sobre nós</p>
            <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              Mais do que uma agência.{' '}
              <span className="text-primary">Uma parceria para o seu crescimento.</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              A Impulso Digital nasceu da observação de um problema real: a maioria dos pequenos negócios brasileiros ficam invisíveis na internet — não por falta de qualidade, mas por falta de estrutura digital adequada.
            </p>
          </div>
        </section>

        {/* Missão */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Nossa missão</p>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-6">
                Colocar pequenos negócios no mapa digital
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  Somos uma agência digital sediada no Rio de Janeiro que atende pequenos negócios e empreendedores em todo o Brasil de forma 100% online. Nosso foco é claro: entregar estrutura digital que funciona — sites que aparecem no Google, sistemas que organizam o atendimento e automações que economizam tempo.
                </p>
                <p>
                  Não trabalhamos com fórmulas prontas. Cada projeto começa do zero, com entendimento real do negócio do cliente. Porque um site para uma academia tem necessidades completamente diferentes de um site para um advogado ou uma confeitaria.
                </p>
                <p>
                  Acreditamos que tecnologia deve ser acessível — tanto no preço quanto na linguagem. Por isso, cuidamos de todo o lado técnico enquanto você foca em fazer o que faz de melhor: tocar o seu negócio.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900">
                  <span className="material-symbols-outlined text-3xl text-primary mb-4 block">{value.icon}</span>
                  <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Como trabalhamos */}
        <section className="py-20 px-6 bg-primary/5 dark:bg-gray-900/50">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Nosso processo</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4">
              Como trabalhamos com você
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto mb-16">
              Do primeiro contato até a entrega — e além dela — o processo é simples e transparente.
            </p>
            <div className="relative flex flex-col md:flex-row justify-between items-start gap-10 max-w-5xl mx-auto">
              <div className="hidden md:block absolute top-[2.75rem] left-0 w-full h-0.5 bg-gray-200 dark:bg-gray-800 z-0" />
              {[
                { n: 1, title: 'Entendemos seu negócio', desc: 'Conversamos para entender como você trabalha, o que vende e onde está o problema. Sem formulário complicado.' },
                { n: 2, title: 'Desenvolvemos a solução', desc: 'Criamos a solução ideal com aprovação em cada etapa. Você acompanha o projeto do início ao fim.' },
                { n: 3, title: 'Entregamos e seguimos juntos', desc: 'Seu projeto vai ao ar. Ficamos disponíveis para dúvidas, ajustes e evoluções conforme seu negócio cresce.' },
              ].map((step) => (
                <div key={step.n} className="relative z-10 flex flex-col items-center gap-4 bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 w-full shadow-sm">
                  <div className="w-14 h-14 bg-primary text-white font-black rounded-full flex items-center justify-center text-xl shadow-lg shadow-primary/30">
                    {step.n}
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-gray-100 text-lg">{step.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Serviços */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">O que oferecemos</p>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4">
                Soluções para cada estágio do seu negócio
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <a
                  key={index}
                  href={service.href}
                  className="p-8 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-primary/50 hover:shadow-lg transition-all group"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                    <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{service.description}</p>
                  <span className="text-primary text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Saiba mais <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-primary text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Pronto para dar o próximo passo?
            </h2>
            <p className="text-white/75 text-lg mb-10 leading-relaxed">
              Me conta sobre o seu negócio e vemos juntos qual é a melhor solução para o seu momento. Sem compromisso.
            </p>
            <a
              href="https://wa.me/+5521992334766?text=Ol%C3%A1!%20Vim%20pela%20p%C3%A1gina%20Sobre%20e%20gostaria%20de%20conversar%20sobre%20o%20meu%20neg%C3%B3cio."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg"
            >
              <FaWhatsapp size={20} />
              Falar no WhatsApp
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
