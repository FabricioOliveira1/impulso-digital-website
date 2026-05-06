export default function Content() {
  return (
    <div className="space-y-10 text-gray-700 dark:text-gray-300 leading-relaxed">

      <p>
        O Instagram é uma ferramenta poderosa. Muitos negócios já conseguem clientes por ele, e isso é real. Mas existe uma diferença importante entre <strong className="text-gray-900 dark:text-white">usar o Instagram como canal de vendas</strong> e <strong className="text-gray-900 dark:text-white">depender exclusivamente dele</strong> para existir na internet.
      </p>
      <p>
        Se o seu negócio só está no Instagram, você está sujeito a regras que não são suas, em uma plataforma que pode mudar a qualquer momento — e que frequentemente muda.
      </p>

      <section>
        <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-4">
          O problema de construir em terreno alugado
        </h2>
        <p className="mb-4">
          Imagine que você montou uma loja em um shopping. As vendas vão bem. Mas o shopping decide mudar as regras de como os corredores funcionam, aumenta o aluguel e reduz o horário de funcionamento. Você não tem controle sobre nada disso.
        </p>
        <p>
          É exatamente isso que acontece com quem depende só do Instagram. A plataforma pertence à Meta — e a Meta decide as regras. Nos últimos anos, o alcance orgânico caiu drasticamente, as mudanças no algoritmo afetaram negócios inteiros do dia para a noite, e contas foram suspensas sem aviso por razões muitas vezes arbitrárias.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-4">
          O que o Instagram não consegue fazer pelo seu negócio
        </h2>
        <div className="space-y-4">
          {[
            {
              icon: 'search_off',
              title: 'Aparecer no Google',
              text: 'Quando alguém busca "personal trainer em São Paulo" ou "confeitaria no Rio", o Google mostra sites — não perfis do Instagram. Se você não tem site, você simplesmente não existe para essas buscas.',
            },
            {
              icon: 'link_off',
              title: 'Dar controle sobre seus dados',
              text: 'Quantos seguidores você tem? Ótimo. Mas esses seguidores são da Meta, não seus. Se a conta for suspensa, você perde todo o contato com eles. Um site com formulário de contato constrói uma lista que é sua.',
            },
            {
              icon: 'access_time_filled',
              title: 'Trabalhar por você 24 horas',
              text: 'No Instagram, você precisa postar regularmente para manter relevância. Um site existe independente de você postar. Ele apresenta seus serviços, responde dúvidas e capta contatos enquanto você dorme.',
            },
            {
              icon: 'verified_user',
              title: 'Transmitir credibilidade profissional',
              text: 'Para muitos clientes — especialmente os de ticket mais alto — um perfil no Instagram não basta. Eles querem ver um site. Sem isso, você pode estar perdendo clientes que decidiram pela concorrência só porque ela tinha um site profissional.',
            },
            {
              icon: 'tune',
              title: 'Organizar informações com clareza',
              text: 'No Instagram, suas informações estão espalhadas em posts, stories e destaques. No site, você controla a estrutura: cliente chega, entende o que você faz, vê o preço, entra em contato. Simples e direto.',
            },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 p-5 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900">
              <span className="material-symbols-outlined text-2xl text-red-400 flex-shrink-0 mt-0.5">{item.icon}</span>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                <p className="text-sm leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-4">
          O que um site profissional adiciona ao seu negócio
        </h2>
        <p className="mb-4">
          Ter um site não significa abandonar o Instagram. Os dois canais se complementam e, juntos, criam uma presença digital muito mais sólida.
        </p>
        <ul className="space-y-3 ml-1">
          {[
            'Aparece no Google para quem busca o que você vende — mesmo sem pagar anúncio',
            'Transmite profissionalismo e ganha a confiança de clientes mais exigentes',
            'Centraliza todas as informações: serviços, preços, portfólio e contato em um único lugar',
            'Funciona como vendedor automático 24 horas por dia, 7 dias por semana',
            'Permite capturar leads com formulário — construindo uma base de contatos sua',
            'Independe de algoritmo: você não precisa postar todo dia para existir',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="material-symbols-outlined text-base text-primary mt-1 flex-shrink-0">check_circle</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-4">
          A estratégia que funciona: Instagram + site
        </h2>
        <p className="mb-4">
          O Instagram é excelente para gerar visibilidade, construir relacionamento e manter seu negócio na mente dos seguidores. O site é onde a decisão de compra acontece. Use os dois de forma complementar:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl border-2 border-pink-200 dark:border-pink-800/50 bg-pink-50 dark:bg-pink-900/10">
            <h3 className="font-bold text-gray-900 dark:text-white mb-3">
              <span className="text-pink-500">Instagram</span>
            </h3>
            <ul className="space-y-2 text-sm">
              {['Gera engajamento e visibilidade', 'Constrói relacionamento', 'Mostra o dia a dia do negócio', 'Atrai novos seguidores', 'Direciona para o site'].map((t, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-sm text-pink-400 mt-0.5 flex-shrink-0">arrow_right</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-5 rounded-xl border-2 border-primary/30 bg-primary/5 dark:bg-primary/10">
            <h3 className="font-bold text-gray-900 dark:text-white mb-3">
              <span className="text-primary">Site profissional</span>
            </h3>
            <ul className="space-y-2 text-sm">
              {['Aparece no Google organicamente', 'Apresenta serviços com clareza', 'Transmite credibilidade', 'Converte visitantes em clientes', 'Funciona sem você precisar postar'].map((t, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-sm text-primary mt-0.5 flex-shrink-0">arrow_right</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-4">
          Os motivos que adiam essa decisão — e por que não fazem sentido
        </h2>
        <div className="space-y-4">
          {[
            {
              myth: '"É muito caro."',
              reality: 'Uma landing page profissional custa a partir de R$1.000 — menos do que muitos meses de impulsionamento no Instagram. E o site continua existindo, enquanto o anúncio para quando o dinheiro acaba.',
            },
            {
              myth: '"Não tenho tempo para cuidar de um site."',
              reality: 'Um site bem feito não precisa de atenção diária. Ao contrário do Instagram, ele funciona sozinho. Você atualiza quando tiver algo novo para mostrar.',
            },
            {
              myth: '"Não entendo nada de tecnologia."',
              reality: 'Esse é exatamente o trabalho de uma agência. Você não precisa entender de código ou hospedagem. Explica o que o seu negócio precisa — nós cuidamos do resto.',
            },
          ].map((item, i) => (
            <div key={i} className="p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
              <p className="font-bold text-gray-500 dark:text-gray-400 mb-2 italic">{item.myth}</p>
              <p className="text-sm leading-relaxed">
                <strong className="text-gray-900 dark:text-white">Realidade: </strong>{item.reality}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-4">
          Quando é o momento certo para ter um site?
        </h2>
        <p>
          Agora. Independente do estágio do seu negócio. Se você já tem clientes, um site vai te ajudar a conseguir mais. Se você está começando, um site vai passar a credibilidade que você precisa para atrair os primeiros. Sites levam de 3 a 6 meses para começar a aparecer bem no Google — quanto mais cedo você começar, mais cedo começa a colher os resultados.
        </p>
      </section>

    </div>
  )
}
