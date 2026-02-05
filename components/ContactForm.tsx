import React from 'react';

const ContactForm: React.FC = () => {
    
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Solicitação enviada!');
  };

  return (
    <section className="py-24 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800" id="contato">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4">Vamos Impulsionar?</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Preencha o formulário abaixo e receba um diagnóstico gratuito da sua tecnologia atual.</p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Seu Nome</label>
              <input className="rounded-lg border-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-500 dark:text-gray-200 focus:ring-primary focus:border-primary px-4 py-3" placeholder="Ex: João Silva" type="text" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Seu E-mail Profissional</label>
              <input className="rounded-lg border-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-500 dark:text-gray-200 focus:ring-primary focus:border-primary px-4 py-3" placeholder="contato@empresa.com" type="email" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Como podemos ajudar?</label>
            <textarea className="rounded-lg border-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-500 dark:text-gray-200 focus:ring-primary focus:border-primary px-4 py-3" placeholder="Descreva brevemente sua necessidade..." rows={4}></textarea>
          </div>
          <button className="w-full bg-primary text-white py-4 rounded-xl text-lg font-bold hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all" type="submit">
            Enviar Solicitação
          </button>
        </form>
        <div className="mt-12 flex flex-col items-center gap-4">
          <p className="text-gray-500 dark:text-gray-400">Prefere um contato mais rápido?</p>
          <a className="flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform shadow-lg" href="#">
            <span className="material-symbols-outlined">chat</span>
            Conversar via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
