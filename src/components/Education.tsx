import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

export function Education() {
  return (
    <section id="education" className="py-24 relative bg-card/30">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 flex items-center justify-center gap-3">
            <GraduationCap className="w-8 h-8 text-primary" />
            Education
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Abstract decorative line behind the card */}
            <div className="absolute top-0 bottom-0 left-8 md:left-12 w-0.5 bg-gradient-to-b from-primary/50 via-primary/20 to-transparent -z-10"></div>
            
            <div className="bg-card border border-border/50 rounded-2xl p-6 md:p-10 hover:border-primary/30 transition-colors relative overflow-hidden">
              {/* Subtle background glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-[50px] pointer-events-none"></div>
              
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                <div className="shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center border border-border shadow-inner">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>
                </div>
                
                <div className="flex-grow space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      B.Tech in Computer Science & Engineering
                    </h3>
                    <p className="text-primary font-medium text-lg">
                      Specialization in Artificial Intelligence & Machine Learning
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-muted-foreground text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>Quantum University</span>
                    </div>
                    <div className="hidden sm:block w-1 h-1 rounded-full bg-border"></div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>Currently Pursuing</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed pt-2">
                    Focused on core computer science principles, advanced algorithms, and specialized machine learning models. Actively participating in technical symposiums, hackathons, and practical AI application development.
                  </p>

                  <div className="pt-4 flex flex-wrap gap-2">
                    {["Algorithms", "Data Structures", "Machine Learning", "Web Development", "AI Ethics"].map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-secondary/50 border border-border text-xs text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
