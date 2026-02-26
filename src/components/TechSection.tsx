import { motion } from 'framer-motion';

// Definimos la estructura de datos
const techGroups = [
  {
    title: "Backend",
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
    items: [
      { name: "PostgreSQL", icon: "/postgre.png" },
      { name: "MySQL", icon: "/mysql.png" },
      { name: "SupaBase", icon: "/supabase.png" },
      { name: "Maven", icon: "/maven.jpg" },
    ]
  },
  {
    title: "Herramientas",
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

const TechSection = () => {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center p-4 py-24 md:p-12 relative overflow-hidden z-10">
      {/* Título de la sección */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-12 max-w-2xl z-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Tecnologías</h2>
        <p className="text-white/80 text-sm md:text-base leading-relaxed">
          Estas son algunas de los lenguajes, programas y herramientas con las que he trabajado en proyectos reales, escolares y continuo que aprendiendo
        </p>
      </motion.div>

      {/* Grid de Tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
        {techGroups.map((group, groupIndex) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: groupIndex * 0.1 }}
            className="glass-card p-6 flex flex-col items-center"
          >
            <h3 className="text-white font-semibold mb-6 text-lg">{group.title}</h3>

            <div className="flex flex-wrap justify-center gap-6">
              {group.items.map((tech) => (
                <div key={tech.name} className="flex flex-col items-center gap-2 group">
                  <div className="w-10 h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-full h-full object-contain group-hover:grayscale-0 transition-all"
                    />
                  </div>
                  <span className="text-[10px] text-white/50 uppercase tracking-widest group-hover:text-white transition-colors">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechSection;