import { motion } from 'framer-motion';
import profilePhoto from '/profilephoto2.jpeg';

const ProfilePhoto = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
      className="relative"
    >
      {/* Outer glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gradient-blue/20 to-gradient-green/20 blur-2xl scale-110" />

      {/* Glass ring container */}
      <div className="glass-ring p-3 relative animate-float">
        {/* Inner photo container */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden">
          <img
            src={profilePhoto}
            alt="César Vázquez Téllez"
            className="w-full h-full object-cover object-top"
          />

          {/* Subtle overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
        </div>
      </div>
    </motion.div>
  );
};

export default ProfilePhoto;