import React from 'react'

const problems = [
  { icon: 'chat_bubble', text: 'Responde tudo no WhatsApp e perde mensagens importantes?' },
  { icon: 'help', text: 'Seu cliente não entende o que você vende de primeira?' },
  { icon: 'visibility_off', text: 'Depende só do Instagram para aparecer e atrair clientes?' },
  { icon: 'sentiment_dissatisfied', text: 'Perde clientes porque não tem um lugar fixo para mostrar seu trabalho?' },
  { icon: 'schedule', text: 'Gasta horas em tarefas que poderiam ser automáticas?' },
  { icon: 'trending_down', text: 'Sente que seu negócio não transmite profissionalismo suficiente?' },
]

const TargetAudience: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900" id="problemas">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4">
            Você se identifica com alguma dessas situações?
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto">
            Se sim, você não está sozinho. Esses são os problemas mais comuns de quem ainda não tem uma estrutura digital adequada.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50"
            >
              <div className="mt-0.5 text-primary shrink-0">
                <span className="material-symbols-outlined text-2xl">{problem.icon}</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 font-medium leading-snug">{problem.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 dark:text-gray-400 mb-6 text-lg">
            A solução é mais simples do que você imagina.
          </p>
          <a
            href="#solucoes"
            className="inline-flex items-center gap-2 bg-primary text-white px-7 py-3.5 rounded-xl font-bold hover:bg-primary/90 transition-colors shadow-md"
          >
            Ver como resolvemos
            <span className="material-symbols-outlined text-lg">arrow_downward</span>
          </a>
        </div>

      </div>
    </section>
  )
}

export default TargetAudience
