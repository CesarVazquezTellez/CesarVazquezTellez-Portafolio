import Navbar from "../components/Navegation/Navbar"
import HeroSection from "../components/Hero/HeroSection"
import SkillsSection from "../components/Skills/SkillsSection"
import ToolsSection from "../components/Tools/ToolsSection"
import ProjectsSection from "../components/Projects/ProjectsSection"
import ContactSection from "../components/Contact/ContactSection"
import Footer from "../components/Footer/Footer"
import type { Skill } from "../types/skill"
import type { Project } from "../types/project"

export default function Portfolio() {
  const skills: Skill[] = [
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "React", level: 88 },
    { name: "Next.js", level: 82 },
    { name: "Node.js", level: 87 },
    { name: "Python", level: 80 },
    { name: "SQL", level: 85 },
    { name: "MongoDB", level: 78 },
  ]

  const tools: string[] = [
    "Visual Studio Code", "Git & GitHub", "Docker", "AWS", "Vercel",
    "Figma", "Postman", "Jest", "Cypress", "Webpack", "Vite", "Prisma",
  ]

  const projects: Project[] = [
    { title: "E-commerce Platform", description: "Plataforma completa de comercio electrónico...", tech: ["Next.js","TypeScript","Stripe","PostgreSQL"], image: "/modern-ecommerce-website.png", github: "#", demo: "#" },
    { title: "Task Management App", description: "Aplicación de gestión de tareas con colaboración...", tech: ["React","Node.js","Socket.io","MongoDB"], image: "/task-management-dashboard.png", github: "#", demo: "#" },
    { title: "Weather Dashboard", description: "Dashboard meteorológico con visualización de datos...", tech: ["Vue.js","Python","FastAPI","Chart.js"], image: "/weather-dashboard-interface.png", github: "#", demo: "#" },
  ]

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <HeroSection />
      <SkillsSection skills={skills} />
      <ToolsSection tools={tools} />
      <ProjectsSection projects={projects} />
      <ContactSection />
      <Footer />
    </div>
  )
}
