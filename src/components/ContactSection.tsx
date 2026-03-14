import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ArrowUpRight, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

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
    const formRef = useRef<HTMLFormElement>(null);
    const sectionRef = useRef(null);
    const inView = useInView(sectionRef, { once: true, margin: '-10%' });

    const [focused, setFocused] = useState<string | null>(null);
    const [isSending, setIsSending] = useState(false);
    const [sent, setSent] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;

        setIsSending(true);
        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
            setSent(true);
            formRef.current.reset();
            setTimeout(() => setSent(false), 5000);
        } catch (error) {
            console.error("Error:", error);
            alert("Error al enviar.");
        } finally {
            setIsSending(false);
        }
    };

    const inputClass = (name: string) =>
        `w-full bg-transparent border-b py-3 text-white text-sm placeholder:text-white/25 focus:outline-none transition-all duration-300 ${
            focused === name ? 'border-white/70' : 'border-white/15 hover:border-white/30'
        }`;

    return (
        <section
            ref={sectionRef}
            // Eliminé 'bg-black' para que se vea tu fondo global
            className="min-h-screen w-full flex flex-col items-center justify-center px-5 py-28 md:px-12 relative overflow-hidden z-10"
        >
            {/* Glow ambiental restaurado */}
            <div
                aria-hidden
                className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[120px] opacity-10"
                style={{ background: 'radial-gradient(ellipse, #ffffff 0%, transparent 70%)' }}
            />

            <div className="max-w-5xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 md:mb-20"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contacto</h2>
                    <p className="text-white/80 text-sm md:text-base max-w-md mx-auto leading-relaxed">
                        Si te interesa colaborar o conocer más sobre mis proyectos, puedes contactarme directamente.
                    </p>
                </motion.div>

                <AnimatedLine delay={0.3} />

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-0 relative">
                    {/* INFO */}
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
                                    <div className="py-7 flex items-center justify-between group">
                                        <div className="flex items-center gap-5">
                                            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-white/50 group-hover:text-white transition-all">
                                                <Icon size={17} />
                                            </div>
                                            <div>
                                                <p className="text-white/30 text-[10px] uppercase tracking-widest mb-0.5 font-mono">{item.label}</p>
                                                {item.href ? (
                                                    <a href={item.href} className="text-white text-sm font-medium hover:text-white/70">{item.value}</a>
                                                ) : (
                                                    <p className="text-white text-sm font-medium">{item.value}</p>
                                                )}
                                            </div>
                                        </div>
                                        {item.href && <ArrowUpRight size={16} className="text-white/20 group-hover:text-white" />}
                                    </div>
                                    <AnimatedLine delay={0.5 + i * 0.08} />
                                </div>
                            );
                        })}
                    </motion.div>

                    {/* FORMULARIO */}
                    <motion.div className="py-12 lg:pl-16">
                        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-8">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div>
                                    <label className="text-white/30 text-[10px] uppercase font-mono block mb-1">Nombre</label>
                                    <input required name="user_name" type="text" placeholder="Tu nombre" className={inputClass('name')} onFocus={() => setFocused('name')} onBlur={() => setFocused(null)} />
                                </div>
                                <div>
                                    <label className="text-white/30 text-[10px] uppercase font-mono block mb-1">Email</label>
                                    <input required name="user_email" type="email" placeholder="tu@email.com" className={inputClass('email')} onFocus={() => setFocused('email')} onBlur={() => setFocused(null)} />
                                </div>
                            </div>
                            <div>
                                <label className="text-white/30 text-[10px] uppercase font-mono block mb-1">Asunto</label>
                                <input required name="subject" type="text" placeholder="Motivo" className={inputClass('subject')} onFocus={() => setFocused('subject')} onBlur={() => setFocused(null)} />
                            </div>
                            <div>
                                <label className="text-white/30 text-[10px] uppercase font-mono block mb-1">Mensaje</label>
                                <textarea required name="message" rows={4} placeholder="Cuéntame..." className={`${inputClass('message')} resize-none`} onFocus={() => setFocused('message')} onBlur={() => setFocused(null)} />
                            </div>

                            <div className="flex items-center justify-between pt-2">
                                <p className="text-white/20 text-xs font-mono">Respondo en menos de 24h</p>
                                
                                {/* BOTÓN CON TUS COLORES ORIGINALES */}
                                <motion.button
                                    disabled={isSending || sent}
                                    type="submit"
                                    whileTap={{ scale: 0.97 }}
                                    className={`group relative flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-500 ${
                                        sent 
                                        ? 'bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)]' 
                                        : 'glass-button text-black' // Volví a poner tu clase original
                                    } disabled:opacity-50`}
                                >
                                    <AnimatePresence mode="wait">
                                        {isSending ? (
                                            <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2">
                                                <Loader2 className="animate-spin" size={15} />
                                                Enviando...
                                            </motion.div>
                                        ) : sent ? (
                                            <motion.span key="sent" initial={{ y: 5, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
                                                ✓ ¡Enviado!
                                            </motion.span>
                                        ) : (
                                            <motion.div key="idle" className="flex items-center gap-2">
                                                Enviar <Send size={15} />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;