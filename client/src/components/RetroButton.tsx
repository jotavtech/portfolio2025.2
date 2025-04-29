import { ReactNode } from "react";
import { motion } from "framer-motion";
import { playTone } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface RetroButtonProps {
  children: ReactNode;
  href?: string;
  color: "neonPink" | "electricBlue" | "cyberYellow" | "offWhite";
  onClick?: () => void;
  className?: string;
}

const RetroButton = ({ 
  children, 
  href, 
  color, 
  onClick,
  className
}: RetroButtonProps) => {
  const handleClick = () => {
    playTone(1200, 'square');
    if (onClick) onClick();
  };
  
  const buttonContent = (
    <motion.span
      className="group relative border-2 font-press-start text-xs md:text-sm px-4 py-2 transition-all duration-300"
      whileHover={{ y: 4, scale: 1.05 }}
      onMouseEnter={() => playTone(800)}
      onClick={handleClick}
      style={{
        borderColor: `var(--${color})`,
        color: `var(--${color})`,
      }}
      className={cn(className)}
    >
      <span className="group-hover:hidden">&lt;</span> {children} <span className="group-hover:hidden">/&gt;</span>
      <motion.span
        className="absolute inset-0 origin-left bg-gradient-to-r"
        style={{ 
          background: `var(--${color})`, 
          zIndex: -1 
        }}
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        className="absolute opacity-0 w-full h-full left-0 top-0 flex items-center justify-center"
        style={{ color: 'var(--darkPurple)' }}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.span>
    </motion.span>
  );
  
  return href ? (
    <a href={href}>{buttonContent}</a>
  ) : (
    <button type="button">{buttonContent}</button>
  );
};

export default RetroButton;
