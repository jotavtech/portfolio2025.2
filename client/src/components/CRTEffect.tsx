import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CRTEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("mousemove", updateMousePosition);
    
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);
  
  return (
    <>
      {/* CRT Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50">
        {/* Scanlines effect */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>
        
        {/* Flicker effect */}
        <motion.div 
          className="absolute inset-0 bg-[rgba(18,16,16,0.1)]"
          animate={{ opacity: [0.27, 0.80] }}
          transition={{ 
            duration: 0.15, 
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear" 
          }}
        ></motion.div>
        
        {/* Scanline */}
        <motion.div 
          className="absolute left-0 w-full h-[10px] bg-white opacity-5"
          animate={{
            y: [-100, window.innerHeight + 100]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear" 
          }}
        ></motion.div>
        
        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-radial-gradient-to-transparent from-transparent to-black/30 opacity-70"></div>
      </div>
      
      {/* Custom cursor effect */}
      <style jsx global>{`
        * {
          cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' style='fill:none;'><rect width='16' height='16' fill='%23FF2A6D'/></svg>") 8 8, auto;
        }
        
        a, button, .hover-effect {
          cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill:none;'><rect width='24' height='24' fill='%2305D9E8'/></svg>") 12 12, pointer;
        }
        
        body {
          -ms-overflow-style: none;
          scrollbar-width: none;
          overflow-y: scroll;
        }
        
        body::-webkit-scrollbar {
          display: none;
        }
        
        /* Grid background pattern */
        .grid-bg {
          background-image: 
            linear-gradient(rgba(5, 217, 232, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(5, 217, 232, 0.2) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        
        /* 3D card effect */
        .perspective {
          perspective: 1000px;
        }
        
        .backface-hidden {
          backface-visibility: hidden;
        }
        
        .transform-style {
          transform-style: preserve-3d;
        }
        
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </>
  );
};

export default CRTEffect;
