import { motion, type Variants } from 'framer-motion';
import { Monitor, Server, Settings, Users } from 'lucide-react';
import React from 'react';

// 1. Definimos los datos fuera del componente
const skillsData = [
  {
    title: "Desarrollo Frontend",
    icon: Monitor,
    description: "Desarrollo de interfaces web responsivas utilizando React y Tailwind, enfocadas en usabilidad, rendimiento y experiencia de usuario.",
    color: "bg-white"
  },
  {
    title: "Estructura y Backend",
    icon: Server,
    description: "Diseño e implementación de APIs REST, modelado de bases de datos relacionales y desarrollo de servicios backend escalables.",
    color: "bg-cyan-600"
  },
  {
    title: "Análisis y Calidad",
    icon: Settings,
    description: "Análisis de requerimientos, resolución de problemas técnicos y aplicación de buenas prácticas para mantener código limpio, mantenible y escalable.",
    color: "bg-cyan-600"
  },
  {
    title: "Colaboración",
    icon: Users,
    description: "Trabajo en equipo bajo metodologías ágiles, comunicación efectiva con equipos técnicos y rápida adaptación a nuevas tecnologías.",
    color: "bg-white"
  }
];

// 2. Definimos las variantes de animación fuera para que el tipado sea estático
const cardVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 30
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const SkillsSection: React.FC = () => {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center p-4 py-24 md:p-12 relative overflow-hidden">

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-12 max-w-2xl z-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Habilidades</h2>
        <p className="text-white/80 text-sm md:text-base leading-relaxed">
          Competencias técnicas y blandas adquiridas para el desarrollo de software.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-6xl w-full z-10">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.1 }}
            className="glass-card p-5 md:p-8 relative overflow-hidden group hover:bg-white/5 transition-colors duration-500"
          >
            {/* Glow effect */}
            <div className={`absolute -top-10 -right-10 w-32 h-32 opacity-10 rounded-full blur-3xl transition-opacity group-hover:opacity-20 ${skill.color}`} />

            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-lg bg-white/5 group-hover:scale-110 transition-transform duration-300">
                <skill.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl md:text-2xl font-display font-bold text-white self-center">
                {skill.title}
              </h3>
            </div>

            <div className={`w-1/3 h-[2px] ${skill.color} mb-4 origin-left`} />

            <p className="text-white/70 text-sm md:text-base leading-relaxed">
              {skill.description}
            </p>

            <div className="absolute bottom-2 right-4 opacity-10 group-hover:opacity-30 transition-opacity">
              <span className="text-4xl font-bold italic text-white select-none">
                0{index + 1}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;