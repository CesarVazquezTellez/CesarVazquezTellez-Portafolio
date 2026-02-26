import ProfilePhoto from './ProfilePhoto';
import HeroCard from './HeroCard';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id="about"
      className="relative z-10 min-h-screen flex items-center justify-center p-4 py-24 md:p-12"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col items-center z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 w-full">
          {/* Profile Photo */}
          <ProfilePhoto />

          {/* Hero Card */}
          <HeroCard />
        </div>
      </div>
    </section>
  );
};

export default Hero;