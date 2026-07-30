import { motion } from 'framer-motion';
import { User, Code, BrainCircuit, Sparkles } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 flex items-center gap-3">
            <User className="w-8 h-8 text-primary" />
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              I am a passionate <strong className="text-foreground font-medium">B.Tech Computer Science & Engineering</strong> student 
              specializing in <strong className="text-foreground font-medium">Artificial Intelligence & Machine Learning</strong>. 
              My journey is driven by the desire to bridge the gap between complex algorithmic intelligence and intuitive, human-centered design.
            </p>
            <p>
              I thrive at the intersection of data and interfaces. Whether I'm building intelligent web applications, engineering robust data-driven solutions, or experimenting with cutting-edge AI tools and prompt engineering, I am always focused on delivering impactful digital experiences.
            </p>
            
            <div className="pt-6 grid sm:grid-cols-2 gap-6">
              <div className="p-4 rounded-xl border border-border/50 bg-card/50 flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <BrainCircuit className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-foreground font-semibold mb-1">Curious Learner</h4>
                  <p className="text-sm">Constantly exploring new frameworks, ML models, and system architectures.</p>
                </div>
              </div>
              <div className="p-4 rounded-xl border border-border/50 bg-card/50 flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <Code className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-foreground font-semibold mb-1">Project Builder</h4>
                  <p className="text-sm">Hands-on experience developing real-world applications and robust interfaces.</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-3 text-primary font-medium">
              <Sparkles className="w-5 h-5" />
              <span>Currently open to internships and collaborative projects.</span>
            </div>
          </motion.div>

          {/* Abstract Avatar / Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-square max-w-md mx-auto rounded-3xl overflow-hidden border border-border/50 bg-card p-8 group">
              {/* Abstract decorative elements simulating an AI/Dev persona */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="h-full w-full relative flex items-center justify-center">
                <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
                <div className="absolute inset-4 border-2 border-dashed border-primary/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                
                <div className="relative z-10 w-32 h-32 rounded-full bg-background border border-primary/50 flex items-center justify-center shadow-[0_0_40px_rgba(37,99,235,0.2)]">
                  <Code className="w-12 h-12 text-primary" />
                </div>
                
                {/* Floating elements */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }} 
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-10 right-10 bg-card border border-border p-3 rounded-lg shadow-xl"
                >
                  <span className="font-mono text-xs font-bold text-primary">{"</>"}</span>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 15, 0] }} 
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-16 left-8 bg-card border border-border p-3 rounded-lg shadow-xl"
                >
                  <BrainCircuit className="w-5 h-5 text-accent" />
                </motion.div>
              </div>
            </div>
            
            {/* Background glow for the avatar */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 rounded-full blur-[80px] -z-10 pointer-events-none"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
