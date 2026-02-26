import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

const ContactSection = () => {
    return (
        <section className="min-h-screen w-full flex flex-col items-center justify-center p-4 py-24 md:p-12 relative overflow-hidden z-10">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center mb-12 max-w-2xl z-10"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contacto</h2>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                    ¿Tienes un proyecto en mente o quieres ponerte en contacto?
                    Me encantaría escuchar de ti para explorar nuevas oportunidades.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl w-full">
                {/* Info Contacto */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="glass-card p-8 flex flex-col justify-center space-y-10"
                >
                    <div className="flex items-center gap-5 group">
                        <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-white group-hover:bg-white/10 transition-colors">
                            <Mail size={26} className="group-hover:scale-110 transition-transform" />
                        </div>
                        <div>
                            <p className="text-white/50 text-sm mb-0.5">Contactar vía Email</p>
                            <a href="mailto:contacto@ejemplo.com" className="text-white font-medium text-base md:text-lg hover:text-white/80 transition-colors">
                                cesarvazquezt00@gmail.com
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center gap-5 group">
                        <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-white group-hover:bg-white/10 transition-colors">
                            <Phone size={26} className="group-hover:scale-110 transition-transform" />
                        </div>
                        <div>
                            <p className="text-white/50 text-sm mb-0.5">Llamar</p>
                            <a href="tel:+1234567890" className="text-white font-medium text-lg hover:text-white/80 transition-colors">
                                +52 241 149 7342
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center gap-5 group">
                        <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-white group-hover:bg-white/10 transition-colors">
                            <MapPin size={26} className="group-hover:scale-110 transition-transform" />
                        </div>
                        <div>
                            <p className="text-white/50 text-sm mb-0.5">Ubicación</p>
                            <p className="text-white font-medium text-lg">
                                Tlaxcala, México
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Formulario */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="glass-card p-8"
                >
                    <div className="flex items-center gap-3 mb-6 hidden">
                        <MessageSquare className="text-white/70" />
                        <h3 className="text-xl font-semibold text-white">Envíame un mensaje</h3>
                    </div>

                    <form className="flex flex-col space-y-5" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div className="flex flex-col">
                                <label htmlFor="name" className="text-white/70 text-sm mb-2 font-medium">Nombre</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl p-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all font-light"
                                    placeholder="Tu nombre"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="email" className="text-white/70 text-sm mb-2 font-medium">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl p-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all font-light"
                                    placeholder="tu@email.com"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="subject" className="text-white/70 text-sm mb-2 font-medium">Asunto</label>
                            <input
                                type="text"
                                id="subject"
                                className="w-full bg-white/5 border border-white/10 rounded-xl p-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all font-light"
                                placeholder="Motivo del contacto"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="message" className="text-white/70 text-sm mb-2 font-medium">Mensaje</label>
                            <textarea
                                id="message"
                                rows={5}
                                className="w-full bg-white/5 border border-white/10 rounded-xl p-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all font-light resize-none"
                                placeholder="Escribe tu mensaje aquí..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="glass-button w-full py-4 px-6 text-black rounded-full transition-all flex items-center justify-center gap-2 font-bold mt-2"
                        >
                            <Send size={18} />
                            <span>Enviar Mensaje</span>
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;
