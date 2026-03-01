import { useState } from 'react';
import { motion } from 'framer-motion';

const techGroups = [
  {
    title: "Backend",
    accent: "from-blue-500/10 to-transparent",
    dot: "bg-blue-400",
    items: [
      { name: "Java", icon: "/java.png" },
      { name: "Python", icon: "/python.png" },
      { name: "JavaScript", icon: "/js.png" },
      { name: "TypeScript", icon: "/mecanografiado.png" },
      { name: "Node.js", icon: "/nodejs.png" },
      { name: "Nest.js", icon: "/nestjs.svg" },
    ]
  },
  {
    title: "Frontend",
    accent: "from-violet-500/10 to-transparent",
    dot: "bg-violet-400",
    items: [
      { name: "HTML", icon: "/html-5.png" },
      { name: "CSS", icon: "/css-3.png" },
      { name: "React.js", icon: "/react.svg" },
      { name: "Figma", icon: "/figma.png" },
      { name: "Adobe XD", icon: "/adobeXD.png" },
      { name: "Inkscape", icon: "/inkscape.webp" },
      { name: "Tailwind", icon: "/tailwind.png" },
    ]
  },
  {
    title: "Base de datos",
    accent: "from-emerald-500/10 to-transparent",
    dot: "bg-emerald-400",
    items: [
      { name: "PostgreSQL", icon: "/postgre.png" },
      { name: "MySQL", icon: "/mysql.png" },
      { name: "SupaBase", icon: "/supabase.png" },
      { name: "Maven", icon: "/maven.jpg" },
    ]
  },
  {
    title: "Herramientas",
    accent: "from-amber-500/10 to-transparent",
    dot: "bg-amber-400",
    items: [
      { name: "VS Code", icon: "/vs.png" },
      { name: "PyCharm", icon: "/pycharm.png" },
      { name: "IntelliJ", icon: "/intelij.png" },
      { name: "Git", icon: "/git.png" },
      { name: "GitHub", icon: "/github1.png" },
      { name: "Vite", icon: "/vite.svg" },
      { name: "Npm", icon: "/npm.png" },
      { name: "Postman", icon: "/postman1.png" },
    ]
  }
];

const TechCard = ({
  group,
  index,
}: {
  group: typeof techGroups[0];
  index: number;
}) => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="glass-card relative overflow-hidden flex flex-col"
    >
      {/* Gradiente sutil por categoría en la esquina superior */}
      <div className={`absolute top-0 left-0 w-full h-32 bg-gradient-to-b ${group.accent} pointer-events-none`} />

      {/* Header de la tarjeta */}
      <div className="flex items-center justify-center gap-2.5 px-6 pt-6 pb-5 border-b border-white/8 relative">
        <span className={`w-2 h-2 rounded-full ${group.dot} shrink-0`} />
        <h3 className="text-white font-bold text-xl tracking-wide">{group.title}</h3>
      </div>

      {/* Grid de íconos */}
      <div className="p-6 grid grid-cols-4 sm:grid-cols-4 gap-3 flex-1">
        {group.items.map((tech) => (
          <motion.div
            key={tech.name}
            onHoverStart={() => setHoveredTech(tech.name)}
            onHoverEnd={() => setHoveredTech(null)}
            whileTap={{ scale: 0.93 }}
            className="relative flex flex-col items-center gap-2 cursor-default"
          >
            {/* Tooltip con nombre */}
            <motion.span
              initial={false}
              animate={{
                opacity: hoveredTech === tech.name ? 1 : 0,
                y: hoveredTech === tech.name ? -2 : 4,
              }}
              transition={{ duration: 0.15 }}
              className="absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-mono bg-white/10 backdrop-blur-sm border border-white/10 text-white px-2 py-0.5 rounded-md pointer-events-none z-10"
            >
              {tech.name}
            </motion.span>

            {/* Ícono container */}
            <motion.div
              animate={{
                scale: hoveredTech === tech.name ? 1.15 : 1,
                backgroundColor: hoveredTech === tech.name
                  ? 'rgba(255,255,255,0.1)'
                  : 'rgba(255,255,255,0.04)',
              }}
              transition={{ duration: 0.2 }}
              className="w-12 h-12 rounded-xl border border-white/8 flex items-center justify-center"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-6 h-6 object-contain"
                style={{
                  filter: hoveredTech === tech.name ? 'none' : 'grayscale(30%)',
                  transition: 'filter 0.2s',
                }}
              />
            </motion.div>

            {/* Nombre debajo (solo mobile, donde no hay tooltip) */}
            <span className="text-[9px] text-white/30 uppercase tracking-widest text-center leading-tight md:hidden">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const TechSection = () => {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center p-4 py-24 md:p-12 relative overflow-hidden z-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12 max-w-2xl z-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Tecnologías</h2>
        <p className="text-white/80 text-sm md:text-base leading-relaxed">
          Lenguajes, herramientas y entornos con los que he trabajado en proyectos reales, escolares, y que sigo aprendiendo.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl w-full">
        {techGroups.map((group, i) => (
          <TechCard key={group.title} group={group} index={i} />
        ))}
      </div>
    </section>
  );
};

export default TechSection;