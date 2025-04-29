import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { playTone } from "@/lib/utils";

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formState.name || !formState.email || !formState.message) {
      alert("Please fill in all fields");
      return;
    }
    
    // Submit form
    setFormStatus("sending");
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus("sent");
      setFormState({ name: "", email: "", message: "" });
      
      // Reset form status after a delay
      setTimeout(() => {
        setFormStatus("idle");
      }, 3000);
    }, 1500);
  };
  
  return (
    <div className="p-6 border-2 border-neonPink bg-darkPurple/80 order-2 md:order-1">
      {/* Form header */}
      <div className="mb-6">
        <div className="h-6 w-full bg-neonPink flex items-center px-2">
          <div className="w-3 h-3 rounded-full bg-darkPurple mr-1"></div>
          <div className="w-3 h-3 rounded-full bg-darkPurple mr-1"></div>
          <div className="w-3 h-3 rounded-full bg-darkPurple"></div>
          <div className="font-vt323 text-darkPurple text-sm ml-2">contact_form.exe</div>
        </div>
      </div>
      
      {/* Form itself */}
      <motion.form 
        className="space-y-4"
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label htmlFor="name" className="block font-vt323 text-xl text-neonPink mb-1">NAME:</label>
          <input 
            type="text" 
            id="name"
            name="name"
            value={formState.name}
            onChange={handleInputChange}
            className="w-full bg-darkPurple/50 border-2 border-neonPink p-2 font-vt323 text-lg text-offWhite focus:outline-none focus:bg-darkPurple/80 focus:shadow-[0_0_10px_rgba(255,42,109,0.5)]"
            onFocus={() => playTone(600)}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email" className="block font-vt323 text-xl text-neonPink mb-1">EMAIL:</label>
          <input 
            type="email" 
            id="email"
            name="email"
            value={formState.email}
            onChange={handleInputChange}
            className="w-full bg-darkPurple/50 border-2 border-neonPink p-2 font-vt323 text-lg text-offWhite focus:outline-none focus:bg-darkPurple/80 focus:shadow-[0_0_10px_rgba(255,42,109,0.5)]"
            onFocus={() => playTone(650)}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="message" className="block font-vt323 text-xl text-neonPink mb-1">MESSAGE:</label>
          <textarea 
            id="message"
            name="message"
            value={formState.message}
            onChange={handleInputChange}
            rows={5}
            className="w-full bg-darkPurple/50 border-2 border-neonPink p-2 font-vt323 text-lg text-offWhite focus:outline-none focus:bg-darkPurple/80 focus:shadow-[0_0_10px_rgba(255,42,109,0.5)]"
            onFocus={() => playTone(700)}
          ></textarea>
        </div>
        
        <motion.button 
          type="submit"
          className="w-full py-3 border-2 border-neonPink text-neonPink font-press-start text-sm relative overflow-hidden group"
          whileHover={{ scale: 1.02 }}
          disabled={formStatus === "sending" || formStatus === "sent"}
          onMouseEnter={() => playTone(800)}
          onClick={() => playTone(1200, 'square')}
          style={{
            backgroundColor: formStatus === "sent" ? "var(--electricBlue)" : "",
            borderColor: formStatus === "sent" ? "var(--electricBlue)" : "",
            color: formStatus === "sent" ? "var(--darkPurple)" : "",
          }}
        >
          <span className="relative z-10">
            {formStatus === "idle" && "SEND_MESSAGE.exe"}
            {formStatus === "sending" && "SENDING..."}
            {formStatus === "sent" && "MESSAGE SENT!"}
            {formStatus === "error" && "ERROR! TRY AGAIN"}
          </span>
          <motion.span 
            className="absolute inset-0 bg-gradient-to-r from-neonPink to-electricBlue"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: formStatus === "idle" ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            style={{ transformOrigin: "left", zIndex: 0 }}
          />
        </motion.button>
      </motion.form>
    </div>
  );
};

export default ContactForm;
