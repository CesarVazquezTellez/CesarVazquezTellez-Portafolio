import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { id: 'hero', label: 'Sobre mí' }, // Cambié 'about' por 'hero' para que coincida con tu primer sección
  { id: 'skills', label: 'Habilidades' },
  { id: 'tech', label: 'Tecnologías' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'contact', label: 'Contacto' },
];

const GlassNavbar = () => {
  const [activeItem, setActiveItem] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para hacer scroll suave
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Cierra el menú en móvil al hacer click
    }
  };

  // Lógica para detectar la sección activa al hacer scroll
  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveItem(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Detecta cuando la sección está en el centro de la pantalla
      threshold: 0,
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center"
    >
      <div className="glass-navbar px-3 py-2 w-auto min-w-[200px] flex justify-between items-center md:block hidden">
        <ul className="flex items-center gap-1">
          {navItems.map((item) => (
            <li key={`desktop-${item.id}`} className="relative flex-none">
              <button
                onClick={() => scrollToSection(item.id)}
                className="relative z-10 px-5 py-2.5 text-sm font-medium transition-colors duration-300 whitespace-nowrap"
                style={{
                  color: activeItem === item.id
                    ? 'white'
                    : 'rgba(255, 255, 255, 0.5)'
                }}
              >
                {item.label}
              </button>

              {activeItem === item.id && (
                <motion.div
                  layoutId="nav-indicator-desktop"
                  className="nav-indicator absolute left-4 right-4 bottom-1 h-[2px] rounded-full bg-white"
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Menú Móvil (Botón Hamburguesa) */}
      <div className="md:hidden glass-navbar px-4 py-3 flex justify-between items-center w-[90vw] max-w-sm relative z-50">
        <span className="text-white font-bold text-sm tracking-widest uppercase">CONOCE SOBRE MÍ</span>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white p-1 hover:bg-white/10 rounded-md transition-colors z-[60]"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 min-h-screen bg-black/90 backdrop-blur-xl z-[40] flex flex-col items-center justify-center"
            style={{ margin: 0 }}
          >
            <div className="flex flex-col items-center justify-center w-full h-full gap-8">
              {navItems.map((item, i) => (
                <motion.button
                  key={`mobile-${item.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-3xl font-bold tracking-wide transition-all ${activeItem === item.id
                    ? 'text-white'
                    : 'text-white/60 hover:text-white'
                    }`}
                >
                  {item.label}
                </motion.button>
              ))}

              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.1, duration: 0.4 }}
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
                className="mt-8 px-8 py-3 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform"
              >
                HABLEMOS
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default GlassNavbar;