import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { playTone } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  details: string;
  tags: string[];
  borderColor: string;
  gradient: string;
  index: number;
}

const ProjectCard = ({ 
  title, 
  description, 
  details, 
  tags, 
  borderColor, 
  gradient, 
  index 
}: ProjectCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    const rotateY = (mouseX / (rect.width / 2)) * 5;
    const rotateX = (mouseY / (rect.height / 2)) * -5;
    
    setRotation({ x: rotateX, y: rotateY });
  };
  
  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };
  
  const handleClick = () => {
    playTone(1200, 'square');
    setIsFlipped(!isFlipped);
  };
  
  const getTagColorClass = (index: number) => {
    const colors = [
      "border-neonPink text-neonPink",
      "border-electricBlue text-electricBlue",
      "border-cyberYellow text-cyberYellow"
    ];
    return colors[index % colors.length];
  };
  
  const getBackBorderColor = () => {
    const colors = ["border-electricBlue", "border-cyberYellow", "border-neonPink"];
    return colors[index % colors.length];
  };
  
  return (
    <motion.div 
      className="relative perspective h-80 w-full"
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1 
      }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      whileHover={{ scale: 1.02 }}
      onMouseEnter={() => playTone(800)}
    >
      <motion.div
        className="h-full w-full transform-style"
        animate={{ 
          rotateY: isFlipped ? 180 : 0,
          rotateX: rotation.x,
          rotateZ: rotation.y * 0.2
        }}
        transition={{ 
          duration: 0.5, 
          ease: [0.19, 1, 0.22, 1]
        }}
      >
        {/* Front side */}
        <div className={`absolute inset-0 border-2 ${borderColor} bg-darkPurple/90 p-4 backface-hidden`}>
          {/* Project Preview */}
          <div className={`w-full h-40 mb-4 overflow-hidden border border-${borderColor.split('-')[1]}/50`}>
            <div className={`w-full h-full ${gradient} flex items-center justify-center`}>
              <span className="font-vt323 text-2xl text-center">{title}</span>
            </div>
          </div>
          
          {/* Project Title */}
          <h3 className={`font-press-start text-lg ${borderColor.replace('border', 'text')} mb-2`}>{title}</h3>
          
          {/* Tech stack tags */}
          <div className="flex flex-wrap gap-2 mb-2">
            {tags.map((tag, i) => (
              <span 
                key={i} 
                className={`px-2 py-0.5 bg-darkPurple text-xs font-vt323 border ${getTagColorClass(i)}`}
              >
                {tag}
              </span>
            ))}
          </div>
          
          {/* Description */}
          <p className="font-vt323 text-sm text-offWhite">{description}</p>
        </div>
        
        {/* Back side */}
        <div className={`absolute inset-0 border-2 ${getBackBorderColor()} bg-darkPurple/90 p-4 backface-hidden rotate-y-180`}>
          <div className="flex flex-col h-full justify-between">
            <div>
              <h3 className={`font-press-start text-lg ${getBackBorderColor().replace('border', 'text')} mb-2`}>Project Details</h3>
              <p className="font-vt323 text-sm text-offWhite mb-4">{details}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <a href="#" className="block text-center py-2 bg-neonPink/20 border border-neonPink font-vt323 hover:bg-neonPink hover:text-darkPurple transition-all duration-300">Demo</a>
              <a href="#" className="block text-center py-2 bg-electricBlue/20 border border-electricBlue font-vt323 hover:bg-electricBlue hover:text-darkPurple transition-all duration-300">Code</a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
