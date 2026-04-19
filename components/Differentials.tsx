import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const differentials = [
  {
    icon: 'construction',
    title: 'Não é só site bonito',
    description:
      'Todo projeto começa entendendo como o seu negócio funciona. Construímos estruturas que resolvem problemas reais, não apenas páginas que ficam bem na tela.',
  },
  {
    icon: 'record_voice_over',
    title: 'Linguagem simples, sem enrolação',
    description:
      'Você não precisa entender de tecnologia para trabalhar com a gente. Explicamos tudo de forma clara e tomamos as decisões técnicas por você.',
  },
  {
    icon: 'target',
    title: 'Foco em resultado, não em tecnologia',
    description:
      'Usamos o que é necessário para resolver o seu problema. Sem exageros, sem complicação. O que importa é que o seu negócio funcione melhor.',
  },
  {
    icon: 'support_agent',
    title: 'Você não fica sozinho depois',
    description:
      'A entrega não é o fim. Ficamos disponíveis para dúvidas, ajustes e evoluções. Seu negócio cresce, e seu sistema cresce junto.',
  },
]

const Differentials: React.FC = () => {
  return (
    <section className="py-20 bg-primary text-white" id="diferenciais">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <p className="text-white/60 font-bold uppercase tracking-widest text-sm mb-4">Por que a Impulso Digital?</p>
            <h2 className="text-3xl md:text-4xl font-black mb-6 leading-snug">
              A diferença está em como a gente pensa o seu projeto
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-10">
              Não trabalhamos com fórmulas prontas. Cada projeto é pensado do zero para o seu negócio, com atenção ao que realmente vai fazer diferença no dia a dia.
            </p>
            <a
              href="https://wa.me/+5521992334766?text=Ol%C3%A1!%20Gostaria%20de%20entender%20como%20voc%C3%AAs%20trabalham."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary px-7 py-3.5 rounded-xl font-bold hover:bg-gray-100 transition-colors"
            >
              <FaWhatsapp size={20} />
              Vamos conversar
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {differentials.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-colors"
              >
                <span className="material-symbols-outlined text-3xl text-white/70 mb-4 block">{item.icon}</span>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-white/65 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Differentials
