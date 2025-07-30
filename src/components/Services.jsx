import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Award, ClipboardCheck, Users } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      title: 'Inovação Construtiva',
      description:
        'Aplicamos as mais recentes tecnologias e métodos para otimizar cada etapa do seu projeto, garantindo eficiência e vanguarda.',
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: 'Qualidade Superior',
      description:
        'Compromisso com materiais de primeira linha e acabamento impecável, assegurando durabilidade e valorização do seu investimento.',
    },
    {
      icon: <ClipboardCheck className="h-10 w-10 text-primary" />,
      title: 'Gestão Eficiente',
      description:
        'Planejamento rigoroso e gerenciamento de projetos que garantem o cumprimento de prazos e orçamentos com total transparência.',
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: 'Parceria e Confiança',
      description:
        'Construímos mais do que edifícios; construímos relacionamentos sólidos baseados na comunicação clara e confiança mútua.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="services" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary font-semibold">
            NOSSOS DIFERENCIAIS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mt-2 mb-4">
            Por que escolher a NTC Brasil?
          </h2>
          <p className="text-lg text-gray-600">
            Entregamos mais do que obras. Entregamos soluções completas que unem
            engenharia de ponta, gestão inteligente e um compromisso real com
            seus objetivos.
          </p>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-secondary mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 flex-grow">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
