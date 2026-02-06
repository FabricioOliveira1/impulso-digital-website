
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import TargetAudience from './components/TargetAudience';
import HowItWorks from './components/HowItWorks';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FloatingActionButton from './components/FloatingActionButton';

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
        <Services />
        <TargetAudience />
        <HowItWorks />
        <ContactForm />
      </main>
      <Footer />
      <FloatingActionButton />
    </div>
  );
};

export default App;
