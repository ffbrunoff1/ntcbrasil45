import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const navLinks = [
    { name: 'Sobre', href: '#about' },
    { name: 'Diferenciais', href: '#services' },
    { name: 'Contato', href: '#contact' },
  ];

  const year = new Date().getFullYear();

  return (
    <motion.footer
      className="bg-secondary text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex justify-center md:justify-start">
            <a href="#" aria-label="Página Inicial da NTC Brasil">
              <img
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1753842732780_0.png"
                alt="Logo NTC Brasil"
                className="h-14 w-auto"
              />
            </a>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-primary">Navegação</h3>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-primary">NTC Brasil</h3>
            <p className="text-gray-300">
              Transformando visões em realidade com excelência na construção.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {year} NTC Brasil. Todos os direitos reservados.</p>
        </div>
      </div>
    </motion.footer>
  );
}
