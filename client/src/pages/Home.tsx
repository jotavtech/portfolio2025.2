import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import SkillsSection from "@/sections/SkillsSection";
import ProjectsSection from "@/sections/ProjectsSection";
import ContactSection from "@/sections/ContactSection";
import CRTEffect from "@/components/CRTEffect";

const Home = () => {
  return (
    <div className="bg-darkPurple text-offWhite">
      <CRTEffect />
      
      <div className="snap-container">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default Home;
