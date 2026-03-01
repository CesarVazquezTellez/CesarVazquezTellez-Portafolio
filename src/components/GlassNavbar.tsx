import { useState, useEffect, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { id: 'hero', label: 'Sobre mí' },
  { id: 'skills', label: 'Habilidades' },
  { id: 'tech', label: 'Tecnologías' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'contact', label: 'Contacto' },
];

const GlassNavbar = () => {
  const [activeItem, setActiveItem] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  // Ref para saber si el scroll fue iniciado por nosotros (click en nav)
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // 1. Actualizamos el activeItem INMEDIATAMENTE al hacer click
      setActiveItem(id);
      setIsMenuOpen(false);

      // 2. Marcamos que el scroll es nuestro para que el observer no lo pise
      isScrollingRef.current = true;
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
        // Damos tiempo suficiente para que termine el scroll suave (~800ms típico)
        scrollTimeoutRef.current = setTimeout(() => {
          isScrollingRef.current = false;
        }, 900);
      }, 50);
    }
  }, []);

  useEffect(() => {
    // rootMargin más permisivo: detecta la sección cuando ocupa el centro del viewport
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      // Si el scroll fue iniciado por nosotros, ignoramos al observer
      if (isScrollingRef.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveItem((prev) => (prev !== entry.target.id ? entry.target.id : prev));
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => {
      observer.disconnect();
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  // Bloquear scroll del body cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Overlay renderizado con Portal directamente en body
  const mobileOverlay = (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100%',
            height: '100dvh',
            zIndex: 9999,
            margin: 0,
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0.95)',
            backdropFilter: 'blur(12px)',
          }}
        >
          <button
            onClick={() => setIsMenuOpen(false)}
            style={{
              position: 'absolute',
              top: '2.5rem',
              right: '2rem',
              color: 'rgba(255,255,255,0.8)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem',
            }}
            aria-label="Cerrar menú"
          >
            <X size={32} />
          </button>

          <nav style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2.5rem' }}>
            {navItems.map((item, i) => (
              <motion.button
                key={`mobile-link-${item.id}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, ease: 'easeOut' }}
                onClick={() => scrollToSection(item.id)}
                style={{
                  fontSize: '1.875rem',
                  fontWeight: 700,
                  letterSpacing: '-0.025em',
                  color: activeItem === item.id ? 'white' : 'rgba(255,255,255,0.4)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                {item.label}
              </motion.button>
            ))}

            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              onClick={() => scrollToSection('contact')}
              style={{
                marginTop: '1rem',
                padding: '1rem 3rem',
                backgroundColor: 'white',
                color: 'black',
                fontWeight: 800,
                borderRadius: '9999px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 0 20px rgba(255,255,255,0.3)',
              }}
            >
              HABLEMOS
            </motion.button>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <motion.nav
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-6 left-0 right-0 z-50 flex justify-center"
      >
        {/* Desktop Menu */}
        <div className="glass-navbar px-3 py-2 md:flex hidden items-center backdrop-blur-md bg-black/20 rounded-full border border-white/10">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={`desktop-${item.id}`} className="relative">
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`relative z-10 px-5 py-2.5 text-sm font-medium transition-colors duration-200 ${activeItem === item.id ? 'text-white' : 'text-white/50'
                    }`}
                >
                  {item.label}
                  {activeItem === item.id && (
                    <motion.div
                      layoutId="nav-indicator-desktop"
                      className="absolute inset-0 bg-white/10 rounded-full -z-10"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Trigger */}
        <div className="md:hidden glass-navbar px-4 py-3 flex justify-between items-center w-[90vw] max-w-sm backdrop-blur-md bg-black/20 rounded-2xl border border-white/10">
          <span className="text-white font-bold text-xs tracking-widest">MENU</span>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Portal: renderiza el overlay directamente en document.body */}
      {createPortal(mobileOverlay, document.body)}
    </>
  );
};

export default GlassNavbar;