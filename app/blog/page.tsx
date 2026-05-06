import type { Metadata } from 'next'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { posts, formatDate } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog | Impulso Digital — Dicas de Presença Digital para Pequenos Negócios',
  description: 'Artigos sobre criação de sites, presença digital, SEO e tecnologia para pequenos negócios. Conteúdo prático para quem quer crescer na internet.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog | Impulso Digital — Dicas de Presença Digital para Pequenos Negócios',
    description: 'Artigos práticos sobre sites, SEO e presença digital para pequenos negócios.',
    url: 'https://impulsodigital.dev.br/blog',
  },
}

const categoryColors: Record<string, string> = {
  Guias: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  Estratégia: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
  SEO: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
}

export default function BlogPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header />
      <main>

        {/* Hero */}
        <section className="relative py-36 md:py-52 px-6 overflow-hidden">
          <Image
            src="/images/blogging-gone-viral-camera-concept.webp"
            alt="Pessoa criando conteúdo digital — blog sobre criação de sites e presença digital para pequenos negócios"
            fill
            className="object-cover object-center scale-105 blur-sm"
            priority
          />
          <div className="absolute inset-0 bg-[#071c33]/80" />
          <div className="absolute inset-0 bg-primary/12" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Blog</p>
            <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              Conteúdo prático para{' '}
              <span className="text-primary">crescer na internet</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              Artigos sobre presença digital, criação de sites, SEO e tecnologia para quem tem um pequeno negócio e quer crescer de forma sustentável.
            </p>
          </div>
        </section>

        {/* Artigos */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-8">
              {posts.map((post) => (
                <a
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block p-8 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-primary/50 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${categoryColors[post.category] ?? 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400'}`}>
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400 dark:text-gray-500 flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">schedule</span>
                      {post.readTime} de leitura
                    </span>
                    <span className="text-xs text-gray-400 dark:text-gray-500">
                      {formatDate(post.date)}
                    </span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-black text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
                    {post.excerpt}
                  </p>
                  <span className="text-primary text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Ler artigo <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-primary/5 dark:bg-gray-900/50">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Pronto para agir?</p>
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">
              Leu o suficiente. Hora de ter um site que funciona.
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg mb-10">
              Me conta sobre o seu negócio e montamos a melhor solução para o seu momento.
            </p>
            <a
              href="/#contato"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary/90 transition-colors shadow-lg"
            >
              Solicitar orçamento
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
