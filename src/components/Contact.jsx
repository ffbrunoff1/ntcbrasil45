import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(null);

    try {
      const response = await fetch('/.netlify/functions/send-contact-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          userEmail: 'ffbrunoff@yahoo.com.br',
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || 'Ocorreu uma falha ao enviar a mensagem.'
        );
      }

      setSubmitSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      setSubmitError(error.message);
      setTimeout(() => setSubmitError(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary font-semibold">FALE CONOSCO</span>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mt-2 mb-4">
            Vamos Construir Juntos
          </h2>
          <p className="text-lg text-gray-600">
            Tem uma ideia ou um projeto em mente? Entre em contato e vamos
            transformar sua visão em realidade.
          </p>
        </motion.div>

        <div className="mt-16 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nome Completo
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Telefone
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Sua Mensagem
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex justify-center items-center py-3 px-6 border border-transparent rounded-full shadow-sm text-lg font-bold text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:bg-gray-400 transition-all duration-300"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                  {!isSubmitting && <Send className="ml-3 h-5 w-5" />}
                </button>
              </div>
              {submitSuccess && (
                <p className="text-green-600 text-center font-medium">
                  Mensagem enviada com sucesso! Entraremos em contato em breve.
                </p>
              )}
              {submitError && (
                <p className="text-red-600 text-center font-medium">
                  Erro: {submitError}
                </p>
              )}
            </form>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-start space-x-4">
              <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">
                  Telefone
                </h3>
                <a
                  href="tel:+5544991040774"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  +55 44 99104-0774
                </a>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-start space-x-4">
              <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">E-mail</h3>
                <a
                  href="mailto:ffbrunoff@yahoo.com.br"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  ffbrunoff@yahoo.com.br
                </a>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-start space-x-4">
              <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">
                  Endereço
                </h3>
                <p className="text-gray-600">Padre Lebret 801, G05, Bloco 03</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
