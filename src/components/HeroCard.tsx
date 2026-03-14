import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Download } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/CesarVazquezTellez', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/césar-vázquez-téllez-550a4b354', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/cesarvt0031/', label: 'Instagram' },
];

const HeroCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
      className="glass-card p-8 md:p-10 max-w-2xl relative"
    >
      {/* Subtle corner glow */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-gradient-blue/10 to-transparent rounded-full blur-3xl" />

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4"
      >
        César Vázquez Téllez
      </motion.h1>

      {/* Role title with gradient */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="text-lg md:text-2xl font-display font-semibold text-gradient mb-4"
      >
        Desarrollador de Software Backend
      </motion.h2>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="glass-divider mb-6
                origin-left
                w-1/2           /* ancho */
                h-[2px]         /* grosor */
                bg-cyan-600    /* color */
            "
      />

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="text-sm md:text-base text-white/70 text-secondary-foreground leading-relaxed mb-8"
      >
        Hola, soy César, Estudiante de Software orientado al Desarrollo Backend Web y la gestión de datos. Me entusiasma transformar requerimientos complejos en soluciones funcionales, especialmente para el sector público. He dedicado mi etapa universitaria a aprender tecnologías solidas y modernas, aplicándolas en proyectos que buscan mejorar procesos administrativos. Soy una persona autodidacta, comprometida con la calidad y con gran disposición para integrarme a equipos de trabajo profesionales.
      </motion.p>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="glass-divider mb-6
                origin-right
                w-1/2           /* ancho */
                h-[2px]         /* grosor */
                bg-white   /* color */
                ml-auto
            "
      />

      {/* Social links and CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="flex items-center justify-between flex-wrap gap-4"
      >
        {/* Social icons */}
        <div className="flex items-center gap-9">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="text-foreground/70 hover:text-foreground transition-colors duration-300 hover:scale-110 hover:text-cyan-300 transform"
            >
              <social.icon className="w-9 h-9" strokeWidth={1.5} />
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="/Cesar_Vazquez_Tellez_CV.pdf" // Nombre exacto de tu archivo en la carpeta public
          download="Cesar_Vazquez_Tellez_CV.pdf" // Nombre con el que se guardará en la PC del usuario
          className="glass-button px-6 py-3 flex items-center gap-2 rounded-full text-black font-medium transition-transform hover:scale-105"
        >
          <Download className="w-5 h-5 text-black" />
          <span className="text-black font-bold">Descargar CV</span>
        </a>
      </motion.div>
    </motion.div>
  );
};

export default HeroCard;