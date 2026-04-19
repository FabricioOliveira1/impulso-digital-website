import React from 'react'
import Image from 'next/image'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 dark:bg-background-dark py-12 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <Image
          src="/images/impulso-digital-logo-dark.webp"
          alt="Impulso Digital"
          className="h-16 lg:h-20 w-auto object-contain hidden dark:block"
          width={200}
          height={80}
        />
        <Image
          src="/images/impulso-digital-logo-light.webp"
          alt="Impulso Digital"
          className="h-16 lg:h-20 w-auto object-contain block dark:hidden"
          width={200}
          height={80}
        />
        <p className="text-gray-500 dark:text-gray-400 text-sm text-center">
          © 2026 Impulso Digital. Todos os direitos reservados.
        </p>
        <div className="flex gap-6">
          <a className="text-gray-400 hover:text-primary dark:hover:text-primary transition-colors" href="https://www.linkedin.com/in/fabricioliveira-1/">LinkedIn</a>
          <a className="text-gray-400 hover:text-primary dark:hover:text-primary transition-colors" href="https://www.instagram.com/impulsodigitaldev/">Instagram</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
