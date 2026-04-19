import dynamic from 'next/dynamic'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TargetAudience from '@/components/TargetAudience'
import Services from '@/components/Services'
import Footer from '@/components/Footer'
import FloatingActionButton from '@/components/FloatingActionButton'

const Products = dynamic(() => import('@/components/Products'))
const Portfolio = dynamic(() => import('@/components/Portfolio'))
const Differentials = dynamic(() => import('@/components/Differentials'))
const HowItWorks = dynamic(() => import('@/components/HowItWorks'))
const ContactForm = dynamic(() => import('@/components/ContactForm'))

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <TargetAudience />
        <Services />
        <Products />
        <Portfolio />
        <Differentials />
        <HowItWorks />
        <ContactForm />
      </main>
      <Footer />
      <FloatingActionButton />
    </div>
  )
}
