import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SpecialUnderlineProps {
  children: ReactNode;
  className?: string;
}

const SpecialUnderline = ({ children, className }: SpecialUnderlineProps) => {
  return (
    <span className={cn("relative inline-block", className)}>
      {children}
      <motion.span
        className="absolute left-0 bottom-[-5px] w-full h-[4px] bg-gradient-to-r from-neonPink to-electricBlue"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.8, 
          delay: 0.2,
          ease: [0.19, 1, 0.22, 1]
        }}
        style={{ transformOrigin: "left" }}
      />
    </span>
  );
};

export default SpecialUnderline;
