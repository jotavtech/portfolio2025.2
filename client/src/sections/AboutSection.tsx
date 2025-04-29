import { motion } from "framer-motion";
import SpecialUnderline from "@/components/SpecialUnderline";

const AboutSection = () => {
  return (
    <section id="about" className="snap-section relative flex flex-col justify-center items-center min-h-screen px-4 py-16 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40"></div>
      
      {/* Section title */}
      <motion.h2 
        className="font-press-start text-3xl md:text-5xl text-electricBlue mb-12 relative z-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SpecialUnderline>&lt;about me/&gt;</SpecialUnderline>
      </motion.h2>
      
      {/* About content */}
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center relative z-10">
        {/* Profile "image" */}
        <motion.div 
          className="order-2 md:order-1"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative w-64 h-64 mx-auto">
            <motion.div 
              className="absolute inset-0 bg-darkPurple border-4 border-neonPink p-3 z-10"
              animate={{ rotate: 3 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="w-full h-full flex items-center justify-center bg-darkPurple overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-neonPink/30 to-electricBlue/30 opacity-50"></div>
                {/* ASCII art profile */}
                <pre className="text-neonPink font-vt323 text-xs leading-none transform scale-90">
                  <span className="text-electricBlue">
     /\\\\\\\\\          
    /\\\///////\\\       
    \///     \//\\\      
              /\\\/      
            /\\\//       
          /\\\//         
         /\\\/           
        /\\\\\\\\\\\\\   
        \///////////////  
    _____________________
    |   João Martins    |
    |___________________|
                  </span>
                </pre>
              </div>
            </motion.div>
            <motion.div 
              className="absolute inset-0 border-4 border-electricBlue"
              animate={{ rotate: -3 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>
        
        {/* About text */}
        <motion.div 
          className="order-1 md:order-2 p-5 bg-darkPurple/80 border-2 border-electricBlue relative"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="h-6 w-full absolute top-0 left-0 bg-electricBlue flex items-center px-2">
            <div className="w-3 h-3 rounded-full bg-neonPink mr-1"></div>
            <div className="w-3 h-3 rounded-full bg-cyberYellow mr-1"></div>
            <div className="w-3 h-3 rounded-full bg-offWhite"></div>
            <div className="font-vt323 text-darkPurple text-sm ml-2">about.exe</div>
          </div>
          <div className="mt-8 font-vt323 text-xl text-offWhite leading-relaxed">
            <motion.p 
              className="mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <span className="text-neonPink">function</span> <span className="text-electricBlue">introduceMyself</span>() {'{'}<br />
              &nbsp;&nbsp;console.<span className="text-electricBlue">log</span>(<span className="text-cyberYellow">"Hello, I'm João Martins!"</span>);<br />
              &nbsp;&nbsp;<span className="text-neonPink">return</span> {'{'}<br />
              &nbsp;&nbsp;&nbsp;&nbsp;passion: <span className="text-cyberYellow">"Creating innovative & beautiful web experiences"</span>,<br />
              &nbsp;&nbsp;&nbsp;&nbsp;skills: [<span className="text-cyberYellow">"HTML"</span>, <span className="text-cyberYellow">"CSS"</span>, <span className="text-cyberYellow">"JavaScript"</span>, <span className="text-cyberYellow">"React"</span>, <span className="text-cyberYellow">"Figma"</span>, <span className="text-cyberYellow">"Framer"</span>]<br />
              &nbsp;&nbsp;{'}'};<br />
              {'}'}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              I'm a creative developer who loves blending code with design to build memorable digital experiences.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
