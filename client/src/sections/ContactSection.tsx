import { motion } from "framer-motion";
import SpecialUnderline from "@/components/SpecialUnderline";
import ContactForm from "@/components/ContactForm";
import { playTone } from "@/lib/utils";

const ContactSection = () => {
  const contactLinks = [
    {
      icon: "fa-envelope",
      text: "martinsjoao1227@gmail.com",
      href: "https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlDTRNtCkRDfBKfnTzvfMPzPWLxcnSGHdkwtzlZSlfwKpLvPCTXdcNWMrZLVBTPbcdlGSq",
      borderColor: "border-electricBlue",
      textColor: "text-electricBlue",
      hoverTextColor: "text-electricBlue"
    },
    {
      icon: "fa-github",
      text: "github.com/jotavtech",
      href: "https://github.com/jotavtech",
      borderColor: "border-neonPink",
      textColor: "text-neonPink",
      hoverTextColor: "text-neonPink"
    },
    {
      icon: "fa-linkedin",
      text: "linkedin.com/in/joaomartins",
      href: "https://linkedin.com",
      borderColor: "border-cyberYellow",
      textColor: "text-cyberYellow",
      hoverTextColor: "text-cyberYellow"
    }
  ];
  
  return (
    <section id="contact" className="snap-section relative flex flex-col justify-center items-center min-h-screen px-4 py-16 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30"></div>
      
      {/* Visual elements */}
      <motion.div 
        className="absolute left-10 top-20 w-20 h-20 bg-neonPink rounded-full opacity-30"
        animate={{ y: [0, -10, 0] }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "easeInOut" 
        }}
      />
      
      <motion.div 
        className="absolute right-10 bottom-20 w-20 h-20 bg-electricBlue rounded-full opacity-30"
        animate={{ y: [0, -10, 0] }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 0.7 
        }}
      />
      
      {/* Section title */}
      <motion.h2 
        className="font-press-start text-3xl md:text-5xl text-electricBlue mb-16 relative z-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SpecialUnderline>&lt;contact me/&gt;</SpecialUnderline>
      </motion.h2>
      
      {/* Contact form and info */}
      <div className="w-full max-w-4xl mx-auto grid md:grid-cols-2 gap-8 relative z-10">
        {/* Contact form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ContactForm />
        </motion.div>
        
        {/* Contact info */}
        <motion.div 
          className="p-6 border-2 border-electricBlue bg-darkPurple/80 flex flex-col justify-between order-1 md:order-2"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h3 className="font-press-start text-xl text-electricBlue mb-6">CONTATE-ME:</h3>
            
            <div className="space-y-5 font-vt323 text-xl">
              {contactLinks.map((link, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center group"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <div 
                    className={`w-10 h-10 flex items-center justify-center ${link.borderColor} ${link.textColor} group-hover:bg-${link.textColor.split('-')[1]} group-hover:text-darkPurple transition-all duration-300`}
                    style={{ border: "1px solid" }}
                  >
                    <i className={`fas ${link.icon}`}></i>
                  </div>
                  <a 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`ml-3 text-offWhite hover:${link.hoverTextColor} transition-colors`}
                    onMouseEnter={() => playTone(700 + index * 50)}
                  >
                    {link.text}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div 
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="font-vt323 text-lg text-offWhite p-4 bg-darkPurple border border-electricBlue/50">
              <p className="text-electricBlue">&gt; Interessado em trabalhar comigo?</p>
              <p className="text-offWhite">&gt; Vamos criar algo incrível!</p>
              <p className="flex items-center">
                <span className="text-neonPink mr-2">&gt;</span> 
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                >
                  |
                </motion.span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Footer */}
      <motion.div 
        className="w-full max-w-4xl mx-auto mt-16 border-t border-electricBlue pt-4 text-center relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <p className="font-vt323 text-offWhite text-lg">
          <span className="text-neonPink">&copy; {new Date().getFullYear()}</span> 
          <span className="text-electricBlue"> João Martins</span> 
          <span className="text-offWhite"> |</span> 
          <span className="text-cyberYellow"> Made with &lt;/&gt; and 💙</span>
        </p>
      </motion.div>
    </section>
  );
};

export default ContactSection;
