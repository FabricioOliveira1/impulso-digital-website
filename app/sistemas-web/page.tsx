import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { FaWhatsapp } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Sistemas Web Personalizados para Empresas | Impulso Digital',
  description: 'Desenvolvemos sistemas web sob medida para organizar processos, automatizar tarefas e escalar seu negócio. Atendimentos, agendamentos, pedidos e painéis administrativos. Orçamento sob consulta.',
  alternates: { canonical: '/sistemas-web' },
  openGraph: {
    title: 'Sistemas Web Personalizados para Empresas | Impulso Digital',
    description: 'Sistemas que organizam o atendimento, automatizam tarefas e fazem seu negócio escalar sem caos operacional.',
    url: 'https://impulsodigital.dev.br/sistemas-web',
  },
}

const examples = [
  {
    icon: 'calendar_month',
    title: 'Sistema de agendamento',
    description: 'Clientes agendam horários online. Você vê tudo em um painel organizado, sem confusão no WhatsApp.',
  },
  {
    icon: 'receipt_long',
    title: 'Controle de pedidos',
    description: 'Receba, organize e acompanhe pedidos em tempo real. Ideal para confeitarias, restaurantes e lojas.',
  },
  {
    icon: 'manage_accounts',
    title: 'Painel administrativo',
    description: 'Gerencie cadastros, relatórios e operações do negócio em um único lugar, com acesso pelo celular.',
  },
  {
    icon: 'hub',
    title: 'Automação de atendimento',
    description: 'Respostas automáticas, triagem de clientes e fluxos que eliminam tarefas manuais repetitivas.',
  },
  {
    icon: 'inventory_2',
    title: 'Controle de estoque',
    description: 'Entradas, saídas e alertas de reposição para quem trabalha com produto físico.',
  },
  {
    icon: 'attach_money',
    title: 'Controle financeiro',
    description: 'Fluxo de caixa, contas a pagar e receber, e relatórios simples para quem precisa de clareza nos números.',
  },
]

const signs = [
  'Você perde informações porque tudo está no WhatsApp ou caderno',
  'Processos manuais consomem horas que poderiam ser automáticas',
  'Não tem visão clara de quanto entra e sai no negócio',
  'Agendamentos ou pedidos se sobrepõem por falta de organização',
  'Não consegue escalar porque a operação trava sem você',
  'Quer atender mais clientes sem contratar mais pessoas',
]

const steps = [
  {
    n: 1,
    title: 'Diagnóstico do processo',
    desc: 'Entendemos como você trabalha hoje, onde estão os gargalos e o que precisa ser automatizado ou organizado.',
  },
  {
    n: 2,
    title: 'Proposta sob medida',
    desc: 'Desenhamos a solução ideal para o seu caso — sem tecnologia desnecessária e sem subestimar o que seu negócio precisa.',
  },
  {
    n: 3,
    title: 'Desenvolvimento com aprovação',
    desc: 'Desenvolvemos o sistema com aprovação em cada etapa. Você acompanha e valida antes de cada entrega.',
  },
  {
    n: 4,
    title: 'Entrega e treinamento',
    desc: 'Sistema em produção com treinamento para uso. Documentação simples para que você e sua equipe se virem.',
  },
]

export default function SistemasWebPage() {
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
              <span className="text-gray-600 dark:text-gray-300">Sistemas Web</span>
            </nav>
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Serviço</p>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight mb-6">
              Sistemas web sob medida{' '}
              <span className="text-primary">para organizar e escalar seu negócio</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mb-10">
              Desenvolvemos ferramentas digitais personalizadas para automatizar tarefas, organizar o atendimento e fazer seu negócio crescer sem depender de processos manuais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/+5521992334766?text=Ol%C3%A1!%20Tenho%20interesse%20em%20um%20sistema%20web%20personalizado.%20Pode%20me%20passar%20mais%20informa%C3%A7%C3%B5es%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:scale-[1.02] transition-transform"
              >
                <FaWhatsapp size={20} />
                Solicitar orçamento
              </a>
              <a
                href="#exemplos"
                className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-xl font-bold hover:border-primary hover:text-primary transition-colors"
              >
                Ver exemplos de sistemas
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-500 dark:text-gray-500">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-base text-primary">check_circle</span>
                Desenvolvido do zero para o seu negócio
              </span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-base text-primary">check_circle</span>
                Preço sob consulta
              </span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-base text-primary">check_circle</span>
                Atendemos todo o Brasil
              </span>
            </div>
          </div>
        </section>

        {/* Sinais que você precisa */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Você se identifica?</p>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-6">
                Sinais de que seu negócio precisa de um sistema
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Quando o negócio cresce mas os processos não acompanham, a operação começa a travar. Um sistema sob medida resolve isso.
              </p>
            </div>
            <ul className="space-y-4">
              {signs.map((sign, index) => (
                <li key={index} className="flex items-start gap-3 p-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900">
                  <span className="material-symbols-outlined text-xl text-primary mt-0.5 flex-shrink-0">warning</span>
                  <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{sign}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Exemplos */}
        <section className="py-20 px-6 bg-primary/5 dark:bg-gray-900/50" id="exemplos">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">O que desenvolvemos</p>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4">
                Exemplos de sistemas que criamos
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto">
                Cada sistema é desenvolvido do zero para o caso específico. Esses são os tipos mais comuns que atendemos.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {examples.map((item, index) => (
                <div key={index} className="p-8 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-primary/50 hover:shadow-lg transition-all group">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                    <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-gray-100">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Processo */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Como funciona</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4">
              Do briefing à entrega
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto mb-16">
              Um processo simples e transparente para que você acompanhe cada etapa do desenvolvimento.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {steps.map((step) => (
                <div key={step.n} className="flex flex-col items-center gap-4 bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
                  <div className="w-14 h-14 bg-primary text-white font-black rounded-full flex items-center justify-center text-xl shadow-lg shadow-primary/30">
                    {step.n}
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-gray-100 text-base">{step.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Preço */}
        <section className="py-20 px-6 bg-primary/5 dark:bg-gray-900/50">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Investimento</p>
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-6">
              Quanto custa um sistema personalizado?
            </h2>
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-10">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                Sistemas personalizados não têm preço fixo — porque cada negócio tem necessidades diferentes. O valor depende da complexidade, número de funcionalidades e integrações necessárias.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                O processo começa com uma conversa para entender o seu caso. A partir daí, montamos uma proposta detalhada com escopo, prazo e investimento exatos — sem surpresas no meio do projeto.
              </p>
              <a
                href="https://wa.me/+5521992334766?text=Ol%C3%A1!%20Preciso%20de%20um%20sistema%20personalizado%20para%20meu%20neg%C3%B3cio.%20Podemos%20conversar%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
              >
                <FaWhatsapp size={20} />
                Solicitar diagnóstico gratuito
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-primary text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Pare de crescer no limite da operação manual
            </h2>
            <p className="text-white/75 text-lg mb-10">
              Me conta como funciona o seu negócio hoje e vemos juntos o que pode ser automatizado ou organizado para você atender mais com menos esforço.
            </p>
            <a
              href="https://wa.me/+5521992334766?text=Ol%C3%A1!%20Quero%20entender%20como%20um%20sistema%20pode%20ajudar%20meu%20neg%C3%B3cio.%20Pode%20me%20ajudar%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg"
            >
              <FaWhatsapp size={20} />
              Falar sobre o meu negócio
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
