import { motion } from 'framer-motion';
import { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import imageFlow from '/Flow.png';
import imageVojo from '/Vojo.png';
import imageFonito from '/FonitoStore.png';
import imageAetherys from '/Aetherys.png';

const projects = [
    {
        title: "Sistema Web para gestión de Servicio de Agua Potable FLOW",
        description: "SaaS web para la gestión de servicio de agua potable en municipios del estado de Tlaxcala.",
        image: imageFlow,
        tech: ["Node.js", "TypeScript", "Next.js", "React", "Tailwind CSS", "Supabase", "Prisma ORM", "Supabase Auth", "PostgreSQL"],
        github: "https://github.com",
        live: "https://example.com"
    },
    {
        title: "Sistema de Gestión de Transporte Publico VOJO",
        description: "Panel de control de horarios, rutas, unidades, conductores y paradas.",
        image: imageVojo,
        tech: ["Java", "Apache Maven", "PostgreSQL", "Swing", "Bcrypt"],
        github: "https://github.com",
        live: "https://example.com"
    },
    {
        title: "Fonito Store",
        description: "Sistema backend para la administración de E-commerce de telefonia con autenticación segura con JWT para administrador.",
        image: imageFonito,
        tech: ["Node.js", "TypeScript", "Nest.js", "React", "Vite", "PostgreSQL", "Railway", "JWT", "Bcrypt"],
        github: "https://github.com/CesarVazquezTellez/fonito-store-page",
        live: "https://example.com"
    },
    {
        title: "Landing Page Aetherys startup",
        description: "Diseño de landing page profesional para startup de desarrollo de software.",
        image: imageAetherys,
        tech: ["React", "Tailwind CSS", "Framer Motion", "Figma"],
        github: "https://github.com",
        live: "https://example.com"
    }
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
    const [tapped, setTapped] = useState(false);

    return (
        <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-card overflow-hidden group flex flex-col"
        >
            {/* Image container */}
            <div
                className="relative h-56 sm:h-64 w-full overflow-hidden cursor-pointer"
                onClick={() => setTapped((prev) => !prev)}
            >
                <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-all duration-500
                        /* Desktop: grayscale normal, color on hover */
                        md:grayscale md:group-hover:grayscale-0 md:group-hover:scale-110
                        /* Mobile: always color, scale on tap */
                        grayscale-0
                        ${tapped ? 'scale-105 blur-sm' : 'scale-100'}
                    `}
                />

                {/* Desktop hover overlay */}
                <div className="absolute inset-0 bg-black/40 md:group-hover:bg-black/10 transition-colors duration-500 hidden md:block" />

                {/* Desktop: botones en hover */}
                <div className="absolute inset-0 hidden md:flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-3 rounded-full bg-black/60 border border-white/20 hover:bg-white/20 text-white backdrop-blur-sm transition-all transform hover:-translate-y-1"
                        aria-label="Ver código en GitHub"
                    >
                        <Github size={22} />
                    </a>
                    <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-3 rounded-full bg-black/60 border border-white/20 hover:bg-white/20 text-white backdrop-blur-sm transition-all transform hover:-translate-y-1"
                        aria-label="Ver sitio en vivo"
                    >
                        <ExternalLink size={22} />
                    </a>
                </div>

                {/* Mobile: botones en tap */}
                <div
                    className={`absolute inset-0 flex md:hidden items-center justify-center gap-5 transition-opacity duration-300 ${tapped ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                >
                    {/* Overlay oscuro suave solo cuando está tapeado */}
                    <div className="absolute inset-0 bg-black/30" />
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="relative z-10 flex items-center gap-2 px-5 py-3 rounded-full bg-black/70 border border-white/20 text-white text-sm font-medium backdrop-blur-sm active:scale-95 transition-transform"
                        aria-label="Ver código en GitHub"
                    >
                        <Github size={18} />
                        Repositorio
                    </a>
                    <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="relative z-10 flex items-center gap-2 px-5 py-3 rounded-full bg-white/90 border border-white/20 text-black text-sm font-medium backdrop-blur-sm active:scale-95 transition-transform"
                        aria-label="Ver sitio en vivo"
                    >
                        <ExternalLink size={18} />
                        Ver sitio
                    </a>
                </div>
            </div>

            {/* Card body */}
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-white/70 text-sm mb-6 flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map(t => (
                        <span key={t} className="text-xs px-2 py-1 rounded-md bg-white/10 border border-white/5 text-white/90">
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

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
                    <ProjectCard key={project.title} project={project} index={index} />
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;