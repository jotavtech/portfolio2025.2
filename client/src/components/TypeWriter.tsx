import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface TypeWriterProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayAfterText?: number;
}

const TypeWriter = ({ 
  texts, 
  typingSpeed = 100, 
  deletingSpeed = 50, 
  delayAfterText = 2000 
}: TypeWriterProps) => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[textIndex];
      
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentText.length) {
          timeoutRef.current = setTimeout(() => {
            setDisplayText(currentText.substring(0, displayText.length + 1));
          }, typingSpeed);
        } else {
          // Switch to deleting after delay
          timeoutRef.current = setTimeout(() => {
            setIsDeleting(true);
          }, delayAfterText);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          timeoutRef.current = setTimeout(() => {
            setDisplayText(displayText.substring(0, displayText.length - 1));
          }, deletingSpeed);
        } else {
          // Move to next text
          setIsDeleting(false);
          setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      }
    };
    
    handleTyping();
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [displayText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, delayAfterText]);
  
  return (
    <div className="font-vt323 text-2xl md:text-4xl text-electricBlue mb-10 h-12 flex items-center justify-center">
      <span>{displayText}</span>
      <motion.span
        className="inline-block"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
      >
        |
      </motion.span>
    </div>
  );
};

export default TypeWriter;
