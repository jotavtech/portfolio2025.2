import { motion } from "framer-motion";
import SpecialUnderline from "@/components/SpecialUnderline";
import ProjectCard from "@/components/ProjectCard";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Retro Game UI",
      description: "A retro-style game interface with pixel art graphics and synthwave aesthetics.",
      details: "Developed a full game UI with animated components, character selection screen, and settings menu.",
      tags: ["React", "CSS", "JavaScript"],
      borderColor: "border-neonPink",
      gradient: "bg-gradient-to-br from-neonPink/20 to-electricBlue/20",
    },
    {
      title: "Synthwave Dashboard",
      description: "Data visualization dashboard with 80s-inspired design and neon color scheme.",
      details: "Created interactive charts and graphs with retro visual style and smooth animations for data transitions.",
      tags: ["React", "JavaScript", "ChartJS"],
      borderColor: "border-electricBlue",
      gradient: "bg-gradient-to-br from-electricBlue/20 to-cyberYellow/20",
    },
    {
      title: "Retro Music Player",
      description: "Music player with visualization inspired by vintage cassette players and vinyl records.",
      details: "Designed audio visualization effects and vintage UI controls with realistic animations and sound feedback.",
      tags: ["React", "Web Audio API", "CSS"],
      borderColor: "border-cyberYellow",
      gradient: "bg-gradient-to-br from-cyberYellow/20 to-neonPink/20",
    }
  ];
  
  return (
    <section id="projects" className="snap-section relative flex flex-col justify-center items-center min-h-screen px-4 py-16 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30"></div>
      
      {/* Section title */}
      <motion.h2 
        className="font-press-start text-3xl md:text-5xl text-neonPink mb-16 relative z-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SpecialUnderline>&lt;projects/&gt;</SpecialUnderline>
      </motion.h2>
      
      {/* Projects grid */}
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            details={project.details}
            tags={project.tags}
            borderColor={project.borderColor}
            gradient={project.gradient}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
