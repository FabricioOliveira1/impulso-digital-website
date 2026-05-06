import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Criação de Sites para Empresas no Rio de Janeiro | Impulso Digital',
  description: 'Agência de criação de sites e sistemas para pequenos negócios no Rio de Janeiro. Landing pages, sites completos e automação de processos. Atendemos todo o Brasil. Solicite um orçamento.',
  keywords: [
    'criação de sites',
    'desenvolvimento de sites',
    'criação de sites Rio de Janeiro',
    'desenvolvimento de sites Rio de Janeiro',
    'agência digital Rio de Janeiro',
    'site para pequena empresa',
    'landing page profissional',
    'criação de site para empresa',
    'empresa de criação de sites',
    'sistemas web personalizados',
    'automação de processos',
    'agência de criação de sites',
    'criar site profissional',
  ],
  authors: [{ name: 'Impulso Digital' }],
  robots: { index: true, follow: true },
  metadataBase: new URL('https://impulsodigital.dev.br'),
  alternates: { canonical: '/' },
  verification: {
    google: 'GlB0mTYLcCMqMwiLewPfRXNvONyWzJKg2ChhO8Ybxe0',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Impulso Digital',
    title: 'Criação de Sites e Sistemas para Empresas | Impulso Digital',
    description: 'Agência digital no Rio de Janeiro especializada em sites profissionais e sistemas para pequenos negócios. Atendemos todo o Brasil.',
    url: 'https://impulsodigital.dev.br',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Impulso Digital - Agência de Criação de Sites no Rio de Janeiro',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Criação de Sites para Empresas | Impulso Digital — Rio de Janeiro',
    description: 'Sites profissionais e sistemas para pequenos negócios. Baseados no Rio de Janeiro, atendemos todo o Brasil.',
    images: [{
      url: '/twitter-image.png',
      alt: 'Impulso Digital - Agência de Criação de Sites no Rio de Janeiro',
    }],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/images/impulso-digital-icon.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/impulso-digital-icon.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/images/impulso-digital-icon.png', sizes: '180x180' }],
  },
  manifest: '/site.webmanifest',
  other: {
    'theme-color': '#3B82F6',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ProfessionalService'],
  name: 'Impulso Digital',
  description: 'Agência de criação de sites e sistemas para pequenos negócios. Baseados no Rio de Janeiro, atendemos todo o Brasil de forma 100% online.',
  url: 'https://impulsodigital.dev.br',
  logo: 'https://impulsodigital.dev.br/logo.png',
  image: 'https://impulsodigital.dev.br/og-image.png',
  telephone: '+55-21-99233-4766',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Rio de Janeiro',
    addressRegion: 'RJ',
    addressCountry: 'BR',
  },
  areaServed: [
    { '@type': 'State', name: 'Rio de Janeiro' },
    { '@type': 'Country', name: 'Brasil' },
  ],
  serviceType: [
    'Criação de Sites',
    'Desenvolvimento Web',
    'Landing Pages Profissionais',
    'Sistemas Web Personalizados',
    'Automação de Processos',
  ],
  priceRange: 'R$1.000 - R$1.500',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+55-21-99233-4766',
    contactType: 'customer service',
    availableLanguage: 'Portuguese',
  },
  sameAs: [
    'https://www.linkedin.com/in/fabricioliveira-1/',
    'https://www.instagram.com/impulsodigitaldev/',
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quanto custa criar um site para empresa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Na Impulso Digital, os preços variam de R$1.000 a R$1.500 dependendo da complexidade. Uma landing page profissional começa em R$1.000, e um site completo com até 5 páginas custa de R$1.300 a R$1.500. Sistemas personalizados são orçados sob consulta.',
      },
    },
    {
      '@type': 'Question',
      name: 'O que é uma landing page e para que serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Uma landing page é uma página única e focada que apresenta seu serviço ou produto com o objetivo de converter visitantes em clientes. É ideal para pequenos negócios que querem uma presença profissional e eficiente na internet sem precisar de um site grande.',
      },
    },
    {
      '@type': 'Question',
      name: 'Preciso de site ou só o Instagram é suficiente?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O Instagram é uma ferramenta importante, mas não substitui um site profissional. Um site aparece no Google, funciona 24 horas como um vendedor automático, transmite mais credibilidade e te dá controle total sobre sua presença digital — sem depender dos algoritmos das redes sociais.',
      },
    },
    {
      '@type': 'Question',
      name: 'A Impulso Digital atende fora do Rio de Janeiro?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim! Somos uma agência digital sediada no Rio de Janeiro e atendemos clientes em todo o Brasil de forma 100% online. Todo o processo — do briefing à entrega — é feito remotamente com total transparência.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quanto tempo leva para criar um site profissional?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O prazo varia conforme o projeto. Uma landing page pode ser entregue em 7 a 14 dias. Um site completo com múltiplas páginas leva de 2 a 4 semanas. Sistemas personalizados têm prazo definido no orçamento.',
      },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,400,0..1,0&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        {/* Oculta ícones até a fonte carregar para evitar flash de texto */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.fonts.ready.then(function(){document.documentElement.classList.add('fonts-ready')})`,
          }}
        />
      </head>
      <body suppressHydrationWarning className={`${manrope.variable} font-display bg-background-light dark:bg-background-dark text-[#111418] dark:text-gray-200 transition-colors duration-300`}>
        {children}
        <GoogleAnalytics gaId="G-1X9TYFZPFQ" />
      </body>
    </html>
  )
}
