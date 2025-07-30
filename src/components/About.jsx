import React from 'react';
import { motion } from 'framer-motion';
import { Building, Target, ShieldCheck, HardHat } from 'lucide-react';

export default function About() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const features = [
    {
      icon: <HardHat className="h-8 w-8 text-primary" />,
      title: 'Expertise Comprovada',
      description:
        'Anos de experiência no setor da construção, entregando projetos com maestria e conhecimento técnico.',
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: 'Foco no Cliente',
      description:
        'Cada projeto é uma parceria. Entendemos suas necessidades para entregar resultados que superam expectativas.',
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-primary" />,
      title: 'Segurança e Conformidade',
      description:
        'Operamos com os mais altos padrões de segurança e seguimos rigorosamente todas as normas regulatórias.',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-gray-50">
      <motion.div
        className="container mx-auto px-6"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div variants={itemVariants}>
            <span className="text-primary font-semibold">SOBRE NÓS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mt-2 mb-4">
              Soluções Inovadoras para Construções de Excelência
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              A NTC Brasil especializa-se em soluções de construção eficientes e
              inovadoras. Oferecemos serviços e expertise para transformar
              projetos em realidade com um compromisso inabalável com a
              qualidade, prazo e satisfação do cliente.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Nossa missão é ir além da construção de estruturas; é construir
              legados duradouros e relações de confiança com cada cliente que
              atendemos.
            </p>
          </motion.div>

          <div className="space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4"
                custom={index}
                variants={itemVariants}
              >
                <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
