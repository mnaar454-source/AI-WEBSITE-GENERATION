import { motion } from 'framer-motion';
import { ExternalLink, FolderGit2, Github } from 'lucide-react';

const PROJECTS = [
  {
    title: "NGO Awareness Webpage",
    description: "A responsive website built to raise awareness for a non-profit organization, featuring their mission, upcoming events, and secure donation information pathways. Designed with accessibility and mobile-first principles.",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "#",
    featured: true,
  },
  {
    title: "Tata Group Data Analytics",
    description: "Completed Forage's Tata Group virtual internship. Performed exploratory data analysis, generated business insights, and built interactive data visualizations for executive decision-making processes.",
    stack: ["Python", "EDA", "Data Visualization"],
    link: "#",
    featured: false,
  },
  {
    title: "AI Web Development Lab",
    description: "A collection of AI-powered web applications developed during internship training. Integrated advanced prompt engineering techniques and various machine learning APIs to create intelligent web interfaces.",
    stack: ["Python", "JavaScript", "AI/ML APIs", "Prompt Engineering"],
    link: "#",
    featured: false,
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 flex items-center gap-3">
              <FolderGit2 className="w-8 h-8 text-primary" />
              Featured Work
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full"></div>
          </div>
          <p className="text-muted-foreground max-w-md md:text-right">
            A selection of projects that showcase my focus on AI integration, data analysis, and frontend development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group h-full"
            >
              <div className="h-full flex flex-col bg-card border border-border/50 rounded-2xl p-6 md:p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.1)] hover:-translate-y-1">
                
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                    <FolderGit2 className="w-6 h-6" />
                  </div>
                  <div className="flex gap-3">
                    <a href={project.link} className="text-muted-foreground hover:text-primary transition-colors" aria-label="View Source">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href={project.link} className="text-muted-foreground hover:text-primary transition-colors" aria-label="Live Demo">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Footer / Stack */}
                <div className="mt-auto pt-6 border-t border-border/50">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border border-border/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={project.link}
                    className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-primary hover:text-primary/80 transition-colors group/btn"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
