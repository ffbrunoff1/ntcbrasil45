import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-white"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-50 -z-1"></div>
      <div className="container mx-auto px-6 text-center flex flex-col items-center justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-secondary leading-tight mb-4"
          >
            Transformando Visões em Realidade com{' '}
            <span className="gradient-text">Excelência na Construção</span>.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8"
          >
            Inovação e Qualidade na Construção que Faz a Diferença.
          </motion.p>

          <motion.div variants={itemVariants}>
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-dark transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-glow"
            >
              Construa o Futuro Conosco
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-sm text-gray-500"
          >
            Veja como podemos transformar seu projeto em uma obra-prima.
          </motion.p>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 p-4">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg
            className="w-6 h-6 text-primary"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
