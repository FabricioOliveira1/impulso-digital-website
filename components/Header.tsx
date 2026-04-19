'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const Header: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  useEffect(() => {
    const root = window.document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-[#dbe0e6] dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <Image
            src={theme === 'dark' ? '/images/impulso-digital-logo-dark.webp' : '/images/impulso-digital-logo-light.webp'}
            alt="Impulso Digital"
            className="h-16 lg:h-20 w-auto object-contain"
            width={200}
            height={80}
            priority
          />
        </a>

        <nav className="hidden md:flex items-center gap-10">
          <a className="text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-primary transition-colors" href="#solucoes">Soluções</a>
          <a className="text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-primary transition-colors" href="#produtos">Produtos</a>
          <a className="text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-primary transition-colors" href="#portfolio">Portfólio</a>
          <a className="text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-primary transition-colors" href="#processo">Como funciona</a>
          <a className="text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-primary transition-colors" href="#contato">Contato</a>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#contato"
            className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all shadow-md"
          >
            Solicitar orçamento
          </a>
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            <span className="material-symbols-outlined">
              {theme === 'light' ? 'dark_mode' : 'wb_sunny'}
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
