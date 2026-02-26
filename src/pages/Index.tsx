import Background from '../components/Background';
import GlassNavbar from '../components/GlassNavbar';
import Hero from '../components/Hero';
import SkillsSection from '../components/SkillsSection';
import TechSection from '../components/TechSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Background />
      <GlassNavbar />

      <main className="relative z-10">
        {/* Envolvemos cada sección para darle un punto de anclaje */}

        <section id="hero">
          <Hero />
        </section>

        <section id="skills">
          <SkillsSection />
        </section>

        <section id="tech">
          <TechSection />
        </section>

        <section id="projects">
          <ProjectsSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>

      </main>
    </div>
  );
};

export default Index;