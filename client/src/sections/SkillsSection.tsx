import { motion } from "framer-motion";
import SpecialUnderline from "@/components/SpecialUnderline";
import SkillBar from "@/components/SkillBar";
import { playTone } from "@/lib/utils";

const SkillsSection = () => {
  const frontendSkills = [
    { name: "HTML", percentage: 92 },
    { name: "CSS", percentage: 88 },
    { name: "JavaScript", percentage: 65 },
    { name: "React", percentage: 80 }
  ];
  
  const designSkills = [
    { name: "Figma", percentage: 100 },
    { name: "Framer", percentage: 90 },
    { name: "UI Design", percentage: 100},
    { name: "Prototyping", percentage: 95 }
  ];
  
  const techBadges = [
    "HTML5", "CSS3", "JavaScript", "React", 
    "Figma", "Framer", "TailwindCSS", "Git"
  ];
  
  const getBadgeStyle = (index: number) => {
    const styles = [
      "bg-neonPink/20 border-neonPink hover:bg-neonPink",
      "bg-electricBlue/20 border-electricBlue hover:bg-electricBlue",
      "bg-cyberYellow/20 border-cyberYellow hover:bg-cyberYellow"
    ];
    return styles[index % styles.length];
  };
  
  return (
    <section id="skills" className="snap-section relative flex flex-col justify-center items-center min-h-screen px-4 py-16 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-bg opacity-30"></div>
      <motion.div 
        className="absolute top-20 left-10 w-32 h-32 bg-neonPink opacity-20 rounded-full filter blur-xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.25, 0.2]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-40 h-40 bg-electricBlue opacity-20 rounded-full filter blur-xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1
        }}
      />
      
      {/* Section title */}
      <motion.h2 
        className="font-press-start text-3xl md:text-5xl text-cyberYellow mb-16 relative z-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SpecialUnderline>&lt;skills/&gt;</SpecialUnderline>
      </motion.h2>
      
      {/* Skills content */}
      <div className="max-w-5xl w-full mx-auto relative z-10">
        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Frontend */}
          <motion.div 
            className="p-6 border-2 border-neonPink bg-darkPurple/80 hover:shadow-[0_0_15px_rgba(255,42,109,0.5)] transition-all duration-300"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-press-start text-lg md:text-xl text-neonPink mb-4">FRONTEND</h3>
            <div className="space-y-4 font-vt323 text-xl">
              {frontendSkills.map((skill, i) => (
                <SkillBar
                  key={i}
                  name={skill.name}
                  percentage={skill.percentage}
                  colorFrom="neonPink"
                  colorTo="electricBlue"
                  borderColor="border-neonPink/30"
                  textColor="text-neonPink"
                  delay={0.2 + i * 0.1}
                />
              ))}
            </div>
          </motion.div>
          
          {/* Design */}
          <motion.div 
            className="p-6 border-2 border-electricBlue bg-darkPurple/80 hover:shadow-[0_0_15px_rgba(5,217,232,0.5)] transition-all duration-300"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-press-start text-lg md:text-xl text-electricBlue mb-4">DESIGN</h3>
            <div className="space-y-4 font-vt323 text-xl">
              {designSkills.map((skill, i) => (
                <SkillBar
                  key={i}
                  name={skill.name}
                  percentage={skill.percentage}
                  colorFrom="electricBlue"
                  colorTo="cyberYellow"
                  borderColor="border-electricBlue/30"
                  textColor="text-electricBlue"
                  delay={0.4 + i * 0.1}
                />
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Tech badges */}
        <motion.div 
          className="flex flex-wrap gap-3 justify-center mt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {techBadges.map((badge, i) => (
            <motion.span
              key={i}
              className={`px-3 py-1 ${getBadgeStyle(i)} border font-vt323 text-lg hover:text-darkPurple transition-all duration-300`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.8 + i * 0.05 }}
              whileHover={{ scale: 1.1, y: -5 }}
              onMouseEnter={() => playTone(600 + i * 30)}
            >
              {badge}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
