import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { FaWhatsapp } from 'react-icons/fa';

const ContactForm: React.FC = () => {
  const [state, handleSubmit] = useForm("xwvnendy"); // ⚠️ TROCAR AQUI!
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Função customizada para adicionar loading
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true);
    await handleSubmit(e);
    setIsSubmitting(false);
  };

  // Se o formulário foi enviado com sucesso
  if (state.succeeded) {
    return (
      <section className="py-24 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800" id="contato">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 mb-6">
              <span className="material-symbols-outlined text-5xl text-green-600 dark:text-green-400">check_circle</span>
            </div>
            <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4">Mensagem Enviada!</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
              Obrigado pelo contato! Vamos analisar sua solicitação e retornar em até 24 horas.
            </p>
            <button 
              onClick={() => window.location.reload()} 
              className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-primary/90 transition-all"
            >
              Enviar outra mensagem
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800" id="contato">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4">Vamos Impulsionar?</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Preencha o formulário abaixo e receba um diagnóstico gratuito da sua tecnologia atual.
          </p>
        </div>

        <form className="space-y-6" onSubmit={onSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Campo: Nome */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-bold text-gray-700 dark:text-gray-300">
                Seu Nome *
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                className="rounded-lg border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-500 dark:text-gray-200 focus:ring-2 focus:ring-primary focus:border-primary px-4 py-3 transition-all"
                placeholder="Ex: João Silva"
              />
              <ValidationError prefix="Nome" field="name" errors={state.errors} />
            </div>

            {/* Campo: Email */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-bold text-gray-700 dark:text-gray-300">
                Seu E-mail Profissional *
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="rounded-lg border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-500 dark:text-gray-200 focus:ring-2 focus:ring-primary focus:border-primary px-4 py-3 transition-all"
                placeholder="contato@empresa.com"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
          </div>

          {/* Campo: Telefone (Opcional) */}
          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="text-sm font-bold text-gray-700 dark:text-gray-300">
              Telefone / WhatsApp (Opcional)
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              className="rounded-lg border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-500 dark:text-gray-200 focus:ring-2 focus:ring-primary focus:border-primary px-4 py-3 transition-all"
              placeholder="(11) 99999-9999"
            />
          </div>

          {/* Campo: Mensagem */}
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-bold text-gray-700 dark:text-gray-300">
              Como podemos ajudar? *
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="rounded-lg border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-500 dark:text-gray-200 focus:ring-2 focus:ring-primary focus:border-primary px-4 py-3 transition-all"
              placeholder="Descreva brevemente sua necessidade..."
              rows={4}
            ></textarea>
            <ValidationError prefix="Mensagem" field="message" errors={state.errors} />
          </div>

          {/* Botão de Envio */}
          <button
            type="submit"
            disabled={isSubmitting || state.submitting}
            className="w-full bg-primary text-white py-4 rounded-xl text-lg font-bold hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
          >
            {isSubmitting ? (
              <>
                <span className="material-symbols-outlined animate-spin">progress_activity</span>
                Enviando...
              </>
            ) : (
              <>
                <span className="material-symbols-outlined">send</span>
                Enviar Solicitação
              </>
            )}
          </button>

          {/* Mensagem de erro geral */}
          {state.errors && Object.keys(state.errors).length > 0 && (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 text-red-700 dark:text-red-400">
              <p className="font-bold">Ops! Algo deu errado.</p>
              <p className="text-sm">Por favor, verifique os campos e tente novamente.</p>
            </div>
          )}
        </form>

        {/* Contato Alternativo - WhatsApp */}
        <div className="mt-12 flex flex-col items-center gap-4">
          <p className="text-gray-500 dark:text-gray-400">Prefere um contato mais rápido?</p>
          
           <a className="flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform shadow-lg"
            href="https://wa.me/+5521997592837?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20conversar%20sobre%20tecnologia."
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={32}/>
            Conversar via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;