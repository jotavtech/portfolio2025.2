import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface SkillBarProps {
  name: string;
  percentage: number;
  colorFrom: string;
  colorTo: string;
  borderColor: string;
  textColor: string;
  delay?: number;
}

const SkillBar = ({ 
  name, 
  percentage, 
  colorFrom, 
  colorTo, 
  borderColor, 
  textColor,
  delay = 0
}: SkillBarProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      className="hover-effect"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-center mb-1">
        <span className="font-vt323 text-xl">{name}</span>
        <span className={textColor}>{percentage}%</span>
      </div>
      <div className={`w-full bg-darkPurple/50 h-3 border ${borderColor}`}>
        <motion.div 
          className={`bg-gradient-to-r h-full`}
          style={{ 
            backgroundImage: `linear-gradient(to right, var(--${colorFrom}), var(--${colorTo}))` 
          }}
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1, delay: delay + 0.2 }}
          viewport={{ once: true }}
        >
          {isHovered && (
            <motion.div
              className="h-full w-full"
              animate={{ 
                background: [
                  `linear-gradient(to right, var(--${colorFrom}), var(--${colorTo}))`,
                  `linear-gradient(to right, var(--${colorTo}), var(--${colorFrom}))`,
                  `linear-gradient(to right, var(--${colorFrom}), var(--${colorTo}))`
                ]
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SkillBar;
