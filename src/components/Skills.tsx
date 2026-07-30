import { motion } from 'framer-motion';
import { Layout, Terminal, Github, Bot, Database, Lightbulb } from 'lucide-react';
import { SiPython, SiCplusplus, SiHtml5, SiJavascript } from 'react-icons/si';
import { Palette } from 'lucide-react';

const SKILL_CATEGORIES = [
  {
    title: "Web Technologies",
    icon: <Layout className="w-6 h-6" />,
    skills: [
      { name: "HTML", icon: <SiHtml5 className="w-5 h-5 text-[#E34F26]" />, level: 90 },
      { name: "CSS", icon: <Palette className="w-5 h-5 text-[#1572B6]" />, level: 85 },
      { name: "JavaScript", icon: <SiJavascript className="w-5 h-5 text-[#F7DF1E]" />, level: 80 },
    ]
  },
  {
    title: "Programming",
    icon: <Terminal className="w-6 h-6" />,
    skills: [
      { name: "Python", icon: <SiPython className="w-5 h-5 text-[#3776AB]" />, level: 85 },
      { name: "C++", icon: <SiCplusplus className="w-5 h-5 text-[#00599C]" />, level: 75 },
    ]
  },
  {
    title: "Data Science & AI",
    icon: <Bot className="w-6 h-6" />,
    skills: [
      { name: "Exploratory Data Analysis", icon: <Database className="w-5 h-5 text-primary" />, level: 80 },
      { name: "Data Visualization", icon: <Lightbulb className="w-5 h-5 text-accent" />, level: 85 },
      { name: "Prompt Engineering", icon: <Bot className="w-5 h-5 text-primary" />, level: 90 },
    ]
  },
  {
    title: "Tools & Platforms",
    icon: <Github className="w-6 h-6" />,
    skills: [
      { name: "GitHub", icon: <Github className="w-5 h-5 text-foreground" />, level: 85 },
    ]
  }
];

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-24 relative bg-card/30">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 flex items-center gap-3">
            <CodeIcon className="w-8 h-8 text-primary" />
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div 
              key={idx} 
              variants={cardVariants}
              className="p-6 md:p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors group relative overflow-hidden"
            >
              {/* Subtle background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="p-3 bg-secondary rounded-xl text-primary">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-6 relative z-10">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {skill.icon}
                        <span className="font-medium text-muted-foreground group-hover:text-foreground transition-colors">{skill.name}</span>
                      </div>
                      <span className="text-xs font-mono text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (sIdx * 0.1), ease: "easeOut" }}
                        className="h-full bg-primary relative"
                      >
                        <div className="absolute inset-0 bg-white/20"></div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Just a small helper icon component since lucide-react Code is used
function CodeIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}
