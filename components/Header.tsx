'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const Header: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    const root = window.document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [theme])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light')
  const closeMobile = () => { setMobileOpen(false); setServicesOpen(false) }

  return (
    <>
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-[#dbe0e6] dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center" onClick={closeMobile}>
          <Image
            src={theme === 'dark' ? '/images/impulso-digital-logo-dark.webp' : '/images/impulso-digital-logo-light.webp'}
            alt="Impulso Digital"
            className="h-16 lg:h-20 w-auto object-contain"
            width={200}
            height={80}
            priority
          />
        </a>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-6">
          <a className="text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-primary transition-colors" href="/">Home</a>
          <a className="text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-primary transition-colors" href="/sobre">Sobre</a>

          {/* Dropdown Serviços */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
              Serviços
              <span className="material-symbols-outlined text-base leading-none group-hover:rotate-180 transition-transform duration-200">expand_more</span>
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 hidden group-hover:block z-50">
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-xl overflow-hidden min-w-[210px]">
                <a href="/criacao-de-sites" className="flex items-center gap-3 px-5 py-3.5 hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors">
                  <span className="material-symbols-outlined text-base text-primary">language</span>
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Criação de Sites</span>
                </a>
                <a href="/landing-page" className="flex items-center gap-3 px-5 py-3.5 hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors border-t border-gray-100 dark:border-gray-800">
                  <span className="material-symbols-outlined text-base text-primary">ads_click</span>
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Landing Page</span>
                </a>
                <a href="/sistemas-web" className="flex items-center gap-3 px-5 py-3.5 hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors border-t border-gray-100 dark:border-gray-800">
                  <span className="material-symbols-outlined text-base text-primary">settings_suggest</span>
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Sistemas Web</span>
                </a>
              </div>
            </div>
          </div>

          <a className="text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-primary transition-colors" href="/#portfolio">Portfólio</a>
          <a className="text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-primary transition-colors" href="/blog">Blog</a>
          <a className="text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-primary transition-colors" href="/#contato">Contato</a>
        </nav>

        {/* Direita: botão orçamento + tema + hamburguer */}
        <div className="flex items-center gap-3">
          <a
            href="/#contato"
            className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all shadow-md"
          >
            Solicitar orçamento
          </a>
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Alternar tema"
          >
            <span className="material-symbols-outlined">
              {theme === 'light' ? 'dark_mode' : 'wb_sunny'}
            </span>
          </button>

          {/* Botão hamburguer — só mobile */}
          <button
            onClick={() => setMobileOpen(prev => !prev)}
            className="md:hidden w-10 h-10 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Abrir menu"
          >
            <span className="material-symbols-outlined">
              {mobileOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

    </header>

    {/* Menu mobile — fora do header para escapar do stacking context do backdrop-blur */}
    {mobileOpen && (
      <div className="md:hidden fixed inset-0 top-20 z-40 bg-white dark:bg-gray-950 overflow-y-auto">
          <nav className="flex flex-col px-6 py-6 gap-1">

            <a
              href="/"
              onClick={closeMobile}
              className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-base font-semibold text-gray-700 dark:text-gray-200 hover:bg-primary/5 dark:hover:bg-primary/10 hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-base text-primary">home</span>
              Home
            </a>

            <a
              href="/sobre"
              onClick={closeMobile}
              className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-base font-semibold text-gray-700 dark:text-gray-200 hover:bg-primary/5 dark:hover:bg-primary/10 hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-base text-primary">info</span>
              Sobre
            </a>

            {/* Serviços accordion */}
            <div>
              <button
                onClick={() => setServicesOpen(prev => !prev)}
                className="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-base font-semibold text-gray-700 dark:text-gray-200 hover:bg-primary/5 dark:hover:bg-primary/10 hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined text-base text-primary">build</span>
                <span className="flex-1 text-left">Serviços</span>
                <span className={`material-symbols-outlined text-base transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}>
                  expand_more
                </span>
              </button>
              {servicesOpen && (
                <div className="ml-4 mt-1 flex flex-col gap-1 border-l-2 border-primary/20 pl-4">
                  <a
                    href="/criacao-de-sites"
                    onClick={closeMobile}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-gray-600 dark:text-gray-300 hover:bg-primary/5 dark:hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    <span className="material-symbols-outlined text-base text-primary">language</span>
                    Criação de Sites
                  </a>
                  <a
                    href="/landing-page"
                    onClick={closeMobile}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-gray-600 dark:text-gray-300 hover:bg-primary/5 dark:hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    <span className="material-symbols-outlined text-base text-primary">ads_click</span>
                    Landing Page
                  </a>
                  <a
                    href="/sistemas-web"
                    onClick={closeMobile}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-gray-600 dark:text-gray-300 hover:bg-primary/5 dark:hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    <span className="material-symbols-outlined text-base text-primary">settings_suggest</span>
                    Sistemas Web
                  </a>
                </div>
              )}
            </div>

            <a
              href="/#portfolio"
              onClick={closeMobile}
              className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-base font-semibold text-gray-700 dark:text-gray-200 hover:bg-primary/5 dark:hover:bg-primary/10 hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-base text-primary">grid_view</span>
              Portfólio
            </a>

            <a
              href="/blog"
              onClick={closeMobile}
              className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-base font-semibold text-gray-700 dark:text-gray-200 hover:bg-primary/5 dark:hover:bg-primary/10 hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-base text-primary">article</span>
              Blog
            </a>

            <a
              href="/#contato"
              onClick={closeMobile}
              className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-base font-semibold text-gray-700 dark:text-gray-200 hover:bg-primary/5 dark:hover:bg-primary/10 hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-base text-primary">mail</span>
              Contato
            </a>

            <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
              <a
                href="/#contato"
                onClick={closeMobile}
                className="flex items-center justify-center bg-primary hover:bg-primary/90 text-white px-6 py-4 rounded-xl text-base font-bold transition-all shadow-md"
              >
                Solicitar orçamento
              </a>
            </div>

          </nav>
      </div>
    )}
    </>
  )
}

export default Header
