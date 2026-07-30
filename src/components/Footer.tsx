import { Github, Linkedin, Twitter, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border/30 py-12 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-display font-bold tracking-tighter inline-flex items-center gap-2 mb-2">
              <span className="text-foreground">Mnaar</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
            </a>
            <p className="text-muted-foreground text-sm">
              Aspiring AI & Web Developer. Building the future.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="p-2 text-muted-foreground hover:text-primary transition-colors" aria-label="Github">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Mnaar. All rights reserved.</p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-foreground transition-colors group"
          >
            Back to top
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
