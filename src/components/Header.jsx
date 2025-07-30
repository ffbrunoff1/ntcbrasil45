import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Sobre', href: '#about' },
    { name: 'Diferenciais', href: '#services' },
    { name: 'Contato', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" aria-label="Página Inicial da NTC Brasil">
            <img
              src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1753842732780_0.png"
              alt="Logo NTC Brasil"
              className="h-12 w-auto"
            />
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="text-secondary hover:text-primary transition-colors duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden md:inline-block bg-primary text-white px-6 py-2 rounded-full font-bold hover:bg-primary-dark transition-transform duration-300 hover:scale-105"
          >
            Fale Conosco
          </a>

          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Abrir menu">
              <Menu className="h-8 w-8 text-secondary" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 bg-white z-50 p-6 md:hidden"
          >
            <div className="flex justify-end mb-8">
              <button onClick={toggleMenu} aria-label="Fechar menu">
                <X className="h-8 w-8 text-secondary" />
              </button>
            </div>
            <nav className="flex flex-col items-center space-y-8">
              {navLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={toggleMenu}
                  className="text-2xl text-secondary hover:text-primary transition-colors duration-300 font-medium"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={toggleMenu}
                className="mt-8 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary-dark transition-transform duration-300 hover:scale-105 text-xl"
              >
                Fale Conosco
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
