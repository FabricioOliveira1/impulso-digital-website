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
  title: 'Impulso Digital | Tecnologia para Pequenos Negócios',
  description: 'Impulso Digital - Soluções tecnológicas sob medida para pequenos negócios. Sites, sistemas e organização digital para empresas crescerem.',
  keywords: ['desenvolvimento web', 'sites profissionais', 'sistemas personalizados', 'tecnologia para empresas', 'consultoria tecnológica', 'transformação digital', 'sites responsivos', 'aplicativos web'],
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
    title: 'Impulso Digital | Tecnologia para Pequenos Negócios',
    description: 'Eliminamos a dor de cabeça tecnológica para pequenos empresários focarem no crescimento e gestão do seu sonho.',
    url: 'https://impulsodigital.dev.br',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Impulso Digital - Tecnologia para Pequenos Negócios',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Impulso Digital | Tecnologia para Pequenos Negócios',
    description: 'Eliminamos a dor de cabeça tecnológica para pequenos empresários focarem no crescimento.',
    images: [{
      url: '/twitter-image.png',
      alt: 'Impulso Digital - Tecnologia para Pequenos Negócios',
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
  '@type': 'Organization',
  name: 'Impulso Digital',
  description: 'Soluções tecnológicas para pequenos negócios',
  url: 'https://impulsodigital.dev.br',
  logo: 'https://impulsodigital.dev.br/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+55-21-99233-4766',
    contactType: 'customer service',
    availableLanguage: 'Portuguese',
  },
  sameAs: [
    'https://www.linkedin.com/company/impulsodigital',
    'https://www.instagram.com/impulsodigital',
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
