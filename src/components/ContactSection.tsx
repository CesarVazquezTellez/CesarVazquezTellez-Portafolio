import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ArrowUpRight } from 'lucide-react';

const contactInfo = [
    {
        icon: Mail,
        label: 'Email',
        value: 'cesarvazquezt00@gmail.com',
        href: 'mailto:cesarvazquezt00@gmail.com',
    },
    {
        icon: Phone,
        label: 'Teléfono',
        value: '+52 241 149 7342',
        href: 'tel:+522411497342',
    },
    {
        icon: MapPin,
        label: 'Ubicación',
        value: 'Tlaxcala, México',
        href: null,
    },
];

// Línea decorativa animada
const AnimatedLine = ({ delay = 0 }: { delay?: number }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    return (
        <motion.div
            ref={ref}
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: 'left' }}
            className="h-px bg-white/15 w-full"
        />
    );
};

const ContactSection = () => {
    const [focused, setFocused] = useState<string | null>(null);
    const [sent, setSent] = useState(false);
    const sectionRef = useRef(null);
    const inView = useInView(sectionRef, { once: true, margin: '-10%' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSent(true);
        setTimeout(() => setSent(false), 3000);
    };

    const inputClass = (name: string) =>
        `w-full bg-transparent border-b py-3 text-white text-sm placeholder:text-white/25 focus:outline-none transition-all duration-300 ${focused === name
            ? 'border-white/70'
            : 'border-white/15 hover:border-white/30'
        }`;

    return (
        <section
            ref={sectionRef}
            className="min-h-screen w-full flex flex-col items-center justify-center px-5 py-28 md:px-12 relative overflow-hidden z-10"
        >
            {/* Glow ambiental de fondo */}
            <div
                aria-hidden
                className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[120px] opacity-10"
                style={{ background: 'radial-gradient(ellipse, #ffffff 0%, transparent 70%)' }}
            />

            <div className="max-w-5xl w-full">

                {/* ── ENCABEZADO ── */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 md:mb-20"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contacto</h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="text-white/80 text-sm md:text-base max-w-md mx-auto leading-relaxed"
                    >
                        ¿Tienes una idea en mente? Me encantaría escucharla y
                        ayudarte a convertirla en realidad.
                    </motion.p>
                </motion.div>

                <AnimatedLine delay={0.3} />

                {/* ── GRID PRINCIPAL ── */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-0">

                    {/* ── INFO ── */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="py-12 lg:pr-16 flex flex-col gap-0"
                    >
                        {contactInfo.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <div key={item.label}>
                                    <motion.div
                                        initial={{ opacity: 0, x: -12 }}
                                        animate={inView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.5, delay: 0.45 + i * 0.1 }}
                                        className="py-7 flex items-center justify-between group"
                                    >
                                        <div className="flex items-center gap-5">
                                            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-white/50 group-hover:text-white group-hover:bg-white/10 group-hover:border-white/15 transition-all duration-300">
                                                <Icon size={17} />
                                            </div>
                                            <div>
                                                <p className="text-white/30 text-[10px] uppercase tracking-widest mb-0.5 font-mono">
                                                    {item.label}
                                                </p>
                                                {item.href ? (
                                                    <a
                                                        href={item.href}
                                                        className="text-white text-sm md:text-base font-medium hover:text-white/70 transition-colors"
                                                    >
                                                        {item.value}
                                                    </a>
                                                ) : (
                                                    <p className="text-white text-sm md:text-base font-medium">{item.value}</p>
                                                )}
                                            </div>
                                        </div>
                                        {item.href && (
                                            <ArrowUpRight
                                                size={16}
                                                className="text-white/20 group-hover:text-white/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                                            />
                                        )}
                                    </motion.div>
                                    <AnimatedLine delay={0.5 + i * 0.08} />
                                </div>
                            );
                        })}

                        {/* Disponibilidad */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={inView ? { opacity: 1 } : {}}
                            transition={{ delay: 0.85 }}
                            className="mt-10 flex items-center gap-3"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                            </span>
                            <p className="text-white/40 text-xs font-mono tracking-wide">
                                Disponible para nuevos proyectos
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Divisor vertical solo en desktop */}
                    <div className="hidden lg:block absolute left-[calc(50%-120px)] top-0 bottom-0 w-px bg-white/8" />

                    {/* ── FORMULARIO ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="py-12 lg:pl-16"
                    >
                        <p className="text-white/30 text-[10px] uppercase tracking-[0.3em] mb-10 font-mono">
                            Envíame un mensaje
                        </p>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div>
                                    <label className="text-white/30 text-[10px] uppercase tracking-widest font-mono block mb-1">
                                        Nombre
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Tu nombre"
                                        className={inputClass('name')}
                                        onFocus={() => setFocused('name')}
                                        onBlur={() => setFocused(null)}
                                    />
                                </div>
                                <div>
                                    <label className="text-white/30 text-[10px] uppercase tracking-widest font-mono block mb-1">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="tu@email.com"
                                        className={inputClass('email')}
                                        onFocus={() => setFocused('email')}
                                        onBlur={() => setFocused(null)}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="text-white/30 text-[10px] uppercase tracking-widest font-mono block mb-1">
                                    Asunto
                                </label>
                                <input
                                    type="text"
                                    placeholder="Motivo del contacto"
                                    className={inputClass('subject')}
                                    onFocus={() => setFocused('subject')}
                                    onBlur={() => setFocused(null)}
                                />
                            </div>

                            <div>
                                <label className="text-white/30 text-[10px] uppercase tracking-widest font-mono block mb-1">
                                    Mensaje
                                </label>
                                <textarea
                                    rows={5}
                                    placeholder="Cuéntame sobre tu proyecto..."
                                    className={`${inputClass('message')} resize-none`}
                                    onFocus={() => setFocused('message')}
                                    onBlur={() => setFocused(null)}
                                />
                            </div>

                            {/* Botón de envío */}
                            <div className="flex items-center justify-between pt-2">
                                <p className="text-white/20 text-xs font-mono">
                                    Respondo en menos de 24h
                                </p>
                                <motion.button
                                    type="submit"
                                    whileTap={{ scale: 0.97 }}
                                    className={`group relative flex items-center gap-3 px-7 py-3.5 rounded-full text-sm font-bold tracking-wide overflow-hidden transition-all duration-500 ${sent
                                        ? 'bg-emerald-500 text-white border border-emerald-400'
                                        : 'bg-white text-black hover:bg-white/90'
                                        }`}
                                >
                                    <motion.span
                                        key={sent ? 'sent' : 'idle'}
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -8 }}
                                        className="flex items-center gap-2"
                                    >
                                        {sent ? (
                                            <>✓ ¡Enviado!</>
                                        ) : (
                                            <>
                                                Enviar
                                                <Send size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                            </>
                                        )}
                                    </motion.span>
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>
                </div>

                <AnimatedLine delay={0.6} />
            </div>
        </section>
    );
};

export default ContactSection;