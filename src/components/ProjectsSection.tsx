import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
    {
        title: "E-Commerce Frontend",
        description: "Una plataforma de comercio electrónico demostrativa con diseño moderno y animaciones fluidas.",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop",
        tech: ["React", "Tailwind CSS", "Framer Motion"],
        github: "https://github.com",
        live: "https://example.com"
    },
    {
        title: "Dashboard Analítico",
        description: "Panel de control para visualización de datos con gráficos interactivos y métricas en tiempo real.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
        tech: ["TypeScript", "React", "Chart.js"],
        github: "https://github.com",
        live: "https://example.com"
    },
    {
        title: "API REST Gestor de Tareas",
        description: "Sistema backend para la administración de tareas, usuarios y autenticación segura con JWT.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
        tech: ["Node.js", "Express", "PostgreSQL"],
        github: "https://github.com",
        live: "https://example.com"
    },
    {
        title: "Aplicación de Clima",
        description: "Herramienta que consume una API pública para mostrar pronósticos meteorológicos de cualquier ciudad.",
        image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=1000&auto=format&fit=crop",
        tech: ["JavaScript", "HTML", "CSS"],
        github: "https://github.com",
        live: "https://example.com"
    }
];

const ProjectsSection = () => {
    return (
        <section className="min-h-screen w-full flex flex-col items-center justify-center p-4 py-24 md:p-12 relative overflow-hidden z-10">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center mb-12 max-w-2xl z-10"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Proyectos</h2>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                    Algunos de mis trabajos más recientes y destacados, donde he aplicado diversas tecnologías.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="glass-card overflow-hidden group flex flex-col"
                    >
                        <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500" />
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                            <p className="text-white/70 text-sm mb-6 flex-grow">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                                {project.tech.map(t => (
                                    <span key={t} className="text-xs px-2 py-1 rounded-md bg-white/10 border border-white/5 text-white/90">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-3">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/20 text-white transition-all transform hover:-translate-y-1"
                                    aria-label="Ver código en GitHub"
                                >
                                    <Github size={20} />
                                </a>
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/20 text-white transition-all transform hover:-translate-y-1"
                                    aria-label="Ver sitio en vivo"
                                >
                                    <ExternalLink size={20} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;
