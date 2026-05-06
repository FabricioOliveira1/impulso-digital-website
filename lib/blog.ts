export type BlogPost = {
  slug: string
  title: string
  description: string
  date: string
  readTime: string
  category: string
  excerpt: string
  relatedSlug: string
  waCtaMessage: string
  ctaSecondaryLabel: string
  ctaSecondaryHref: string
}

export const posts: BlogPost[] = [
  {
    slug: 'quanto-custa-criar-um-site-para-empresa',
    title: 'Quanto custa criar um site para empresa?',
    description: 'Entenda os fatores que influenciam o preço de um site profissional no Brasil. Landing page, site completo, e-commerce: veja faixas de preço e o que esperar de cada tipo.',
    date: '2026-05-05',
    readTime: '6 min',
    category: 'Guias',
    excerpt: 'Uma das perguntas mais comuns de quem quer ter presença na internet. O preço de um site varia bastante — entenda o que influencia esse valor e o que você deve esperar em cada faixa de investimento.',
    relatedSlug: 'por-que-seu-negocio-precisa-de-site-alem-do-instagram',
    waCtaMessage: 'Ol%C3%A1!%20Li%20o%20artigo%20sobre%20custo%20de%20sites%20e%20quero%20um%20or%C3%A7amento.',
    ctaSecondaryLabel: 'Ver nossos planos',
    ctaSecondaryHref: '/criacao-de-sites',
  },
  {
    slug: 'por-que-seu-negocio-precisa-de-site-alem-do-instagram',
    title: 'Por que seu negócio precisa de site além do Instagram',
    description: 'O Instagram é importante, mas não é suficiente. Entenda por que depender só das redes sociais é arriscado e como um site profissional transforma a presença do seu negócio.',
    date: '2026-05-05',
    readTime: '5 min',
    category: 'Estratégia',
    excerpt: 'Muitos empreendedores acreditam que o Instagram é suficiente para ter presença digital. Mas dependendo só das redes sociais, você está construindo sua empresa em terreno alugado.',
    relatedSlug: 'quanto-custa-criar-um-site-para-empresa',
    waCtaMessage: 'Ol%C3%A1!%20Li%20o%20artigo%20sobre%20site%20x%20Instagram%20e%20quero%20criar%20minha%20presen%C3%A7a%20digital.',
    ctaSecondaryLabel: 'Ver opções de landing page',
    ctaSecondaryHref: '/landing-page',
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find(post => post.slug === slug)
}

export function formatDate(dateStr: string): string {
  const [year, month, day] = dateStr.split('-').map(Number)
  const date = new Date(year, month - 1, day)
  return date.toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })
}
