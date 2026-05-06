import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { posts, getPostBySlug, formatDate } from '@/lib/blog'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { FaWhatsapp } from 'react-icons/fa'

import ContentQuanto from '@/lib/blog/content/quanto-custa-criar-um-site-para-empresa'
import ContentInstagram from '@/lib/blog/content/por-que-seu-negocio-precisa-de-site-alem-do-instagram'

const contentMap: Record<string, React.ComponentType> = {
  'quanto-custa-criar-um-site-para-empresa': ContentQuanto,
  'por-que-seu-negocio-precisa-de-site-alem-do-instagram': ContentInstagram,
}

const categoryColors: Record<string, string> = {
  Guias: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  Estratégia: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
  SEO: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
}

export async function generateStaticParams() {
  return posts.map(post => ({ slug: post.slug }))
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  return {
    title: `${post.title} | Impulso Digital`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://impulsodigital.dev.br/blog/${post.slug}`,
      type: 'article',
    },
  }
}

export default async function BlogPostPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const Content = contentMap[slug]
  if (!Content) notFound()

  const relatedPost = getPostBySlug(post.relatedSlug)

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: 'Impulso Digital',
      url: 'https://impulsodigital.dev.br',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Impulso Digital',
      logo: { '@type': 'ImageObject', url: 'https://impulsodigital.dev.br/logo.png' },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://impulsodigital.dev.br/blog/${post.slug}`,
    },
  }

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Header />
      <main>

        {/* Cabeçalho do artigo */}
        <section className="relative py-36 md:py-48 px-6 overflow-hidden">
          <Image
            src="/images/blogging-gone-viral-camera-concept.webp"
            alt="Criação de conteúdo digital — blog sobre sites e presença digital para pequenos negócios"
            fill
            className="object-cover object-center scale-105 blur-sm"
            priority
          />
          <div className="absolute inset-0 bg-[#071c33]/80" />
          <div className="absolute inset-0 bg-primary/12" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <nav className="flex items-center gap-2 text-sm text-white/60 mb-8">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <span className="material-symbols-outlined text-base">chevron_right</span>
              <a href="/blog" className="hover:text-white transition-colors">Blog</a>
              <span className="material-symbols-outlined text-base">chevron_right</span>
              <span className="text-white/80 truncate max-w-[200px]">{post.title}</span>
            </nav>
            <div className="flex items-center gap-3 mb-6">
              <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${categoryColors[post.category] ?? 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400'}`}>
                {post.category}
              </span>
              <span className="text-xs text-white/60 flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">schedule</span>
                {post.readTime} de leitura
              </span>
              <span className="text-xs text-white/60">{formatDate(post.date)}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">
              {post.title}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </section>

        {/* Conteúdo do artigo */}
        <article className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <Content />
          </div>
        </article>

        {/* CTA */}
        <section className="py-16 px-6 bg-primary text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-black mb-4">
              Quer um orçamento sem compromisso?
            </h2>
            <p className="text-white/75 mb-8">
              Me conta sobre o seu negócio e te digo exatamente quanto vai custar e o que você vai receber. Transparente do início ao fim.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/+5521992334766?text=${post.waCtaMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg"
              >
                <FaWhatsapp size={20} />
                Solicitar orçamento
              </a>
              <a
                href={post.ctaSecondaryHref}
                className="inline-flex items-center justify-center gap-2 border-2 border-white/50 text-white px-8 py-4 rounded-xl font-bold hover:border-white transition-colors"
              >
                {post.ctaSecondaryLabel}
              </a>
            </div>
          </div>
        </section>

        {/* Post relacionado */}
        {relatedPost && (
          <section className="py-16 px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-xl font-black text-gray-900 dark:text-white mb-6">Continue lendo</h2>
              <a
                href={`/blog/${relatedPost.slug}`}
                className="group flex items-center gap-4 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-primary/50 hover:shadow-md transition-all"
              >
                <span className="material-symbols-outlined text-3xl text-primary flex-shrink-0">article</span>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-400 mb-1">Leia também</p>
                  <p className="font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors truncate">
                    {relatedPost.title}
                  </p>
                </div>
                <span className="material-symbols-outlined text-primary flex-shrink-0">arrow_forward</span>
              </a>
            </div>
          </section>
        )}

      </main>
      <Footer />
    </div>
  )
}
