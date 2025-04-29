import { useEffect } from "react";
import { motion } from "framer-motion";
import TypeWriter from "@/components/TypeWriter";
import RetroButton from "@/components/RetroButton";
import { scrollToElement } from "@/lib/utils";

const HeroSection = () => {
  const typewriterTexts = [
    "Front-end Developer",
    "UI/UX Designer",
    "Creative Coder"
  ];
  
  return (
    <section id="home" className="snap-section relative grid-bg flex flex-col justify-center items-center h-screen overflow-hidden">
      {/* Navigation/tabs at the top */}
      <motion.div 
        className="fixed top-0 left-0 w-full z-50 bg-darkPurple/80 backdrop-blur-sm py-4 px-6 border-b border-electricBlue/30"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto flex justify-center">
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <RetroButton 
              color="neonPink"
              onClick={() => scrollToElement("about")}
            >
              ABOUT
            </RetroButton>
            
            <RetroButton 
              color="electricBlue"
              onClick={() => scrollToElement("skills")}
            >
              SKILLS
            </RetroButton>
            
            <RetroButton 
              color="cyberYellow"
              onClick={() => scrollToElement("projects")}
            >
              PROJECTS
            </RetroButton>
            
            <RetroButton 
              color="offWhite"
              onClick={() => scrollToElement("contact")}
            >
              CONTACT
            </RetroButton>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Retro visual elements */}
      <motion.div 
        className="absolute -top-10 -left-10 w-28 h-28 md:w-40 md:h-40 bg-neonPink rounded-full opacity-30"
        animate={{ y: [0, -10, 0] }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "easeInOut" 
        }}
      />
      
      <motion.div 
        className="absolute top-1/4 -right-10 w-32 h-32 md:w-48 md:h-48 bg-electricBlue rounded-full opacity-30"
        animate={{ y: [0, -10, 0] }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 0.5
        }}
      />
      
      <motion.div 
        className="absolute bottom-10 left-1/3 w-24 h-24 md:w-36 md:h-36 bg-cyberYellow rounded-full opacity-30"
        animate={{ y: [0, -10, 0] }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      {/* Main heading with glitch effect */}
      <motion.div
        className="relative mt-16"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="font-press-start text-4xl md:text-6xl lg:text-7xl text-neonPink mb-4 text-center"
          animate={{ 
            x: [0, -2, 2, -2, 2, 0],
            y: [0, 2, -2, 2, -2, 0],
          }}
          transition={{ 
            duration: 1, 
            repeat: Infinity, 
            repeatType: "loop",
            ease: "linear",
            repeatDelay: 5
          }}
        >
          JOÃO MARTINS
        </motion.h1>
      </motion.div>
      
      {/* Terminal-style typewriter effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <TypeWriter texts={typewriterTexts} />
      </motion.div>
      
      {/* Scroll down indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "easeInOut" 
        }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-electricBlue flex justify-center">
          <motion.div 
            className="w-2 h-2 bg-electricBlue rounded-full mt-2"
            animate={{ y: [0, 10, 0] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              repeatType: "reverse",
              ease: "easeInOut" 
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
