import React, { useState, useEffect, lazy, Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TargetAudience from './components/TargetAudience';
import Services from './components/Services';
import Footer from './components/Footer';
import FloatingActionButton from './components/FloatingActionButton';

const Products = lazy(() => import('./components/Products'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Differentials = lazy(() => import('./components/Differentials'));
const HowItWorks = lazy(() => import('./components/HowItWorks'));
const ContactForm = lazy(() => import('./components/ContactForm'));

type Theme = 'light' | 'dark';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('dark');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <TargetAudience />
        <Services />
        <Suspense fallback={null}>
          <Products />
          <Portfolio />
          <Differentials />
          <HowItWorks />
          <ContactForm />
        </Suspense>
      </main>
      <Footer theme={theme} />
      <FloatingActionButton />
    </div>
  );
};

export default App;
