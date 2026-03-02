import { useState, useEffect, useMemo } from "react";
import Silk from "./backgrounds/Silk";

const Background = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Estrellas memoizadas para rendimiento
  const stars = useMemo(() => {
    return Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1 + "px",
      duration: Math.random() * 3 + 2 + "s",
      delay: Math.random() * 5 + "s",
    }));
  }, []);

  if (!mounted) return <div className="fixed inset-0 bg-[#050505]" />;

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#050505]">
      {isMobile ? (
        /* --- MÓVIL: ESPACIO PROFUNDO --- */
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradiente radial para dar profundidad */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#0d1417_0%,#050505_100%)]" />

          {/* Estrellas */}
          {stars.map((star) => (
            <div
              key={star.id}
              className="absolute rounded-full bg-white opacity-0 animate-twinkle"
              style={{
                top: star.top,
                left: star.left,
                width: star.size,
                height: star.size,
                animationDuration: star.duration,
                animationDelay: star.delay,
              }}
            />
          ))}

          {/* Nebulosa muy tenue */}
          <div className="absolute top-1/4 left-1/4 w-full h-full bg-[#1a363d] opacity-10 filter blur-[120px] rounded-full animate-pulse" />
        </div>
      ) : (
        /* --- ESCRITORIO: SILK ANIMADO --- */
        /* Ajustamos el color para que sea visible pero elegante sobre negro */
        <div className="absolute inset-0 opacity-80">
          <Silk
            speed={4} // Bajé la velocidad para que sea más fluido/elegante
            scale={0.6}
            color="#222a2cff" // Un gris azulado que se nota sobre el fondo
            noiseIntensity={2.0}
            rotation={0}
          />
        </div>
      )}

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.1; transform: scale(0.9); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }
        .animate-twinkle {
          animation: twinkle linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Background;