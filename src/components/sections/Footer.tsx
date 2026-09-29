import { portfolioData } from '../../data/portfolio';
import { User, GitBranch, Mail, MapPin, ArrowUp, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-surface/50 border-t border-border/50" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="md:col-span-2 lg:col-span-1 space-y-6">
            <a href="#hero" className="font-heading text-2xl font-bold text-text flex items-center gap-2" aria-label="Go to homepage">
              <span className="text-primary">YN</span>
              <span>Yazan Nazzal</span>
            </a>
            <p className="text-text-muted leading-relaxed max-w-xs">
              Software Developer passionate about building scalable applications and delightful user experiences.
            </p>
            <div className="flex items-center gap-4">
              {portfolioData.personal.linkedin && (
                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-bg rounded-xl text-text-muted hover:text-primary hover:bg-primary/10 transition-colors"
                  aria-label="LinkedIn"
                >
                  <User className="w-5 h-5" />
                </a>
              )}
              {portfolioData.personal.github && (
                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-bg rounded-xl text-text-muted hover:text-primary hover:bg-primary/10 transition-colors"
                  aria-label="GitHub"
                >
                  <GitBranch className="w-5 h-5" />
                </a>
              )}
              
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="p-2 bg-bg rounded-xl text-text-muted hover:text-primary hover:bg-primary/10 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-text">Quick Links</h4>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                <li><a href="#about" className="text-text-muted hover:text-primary transition-colors">About</a></li>
                <li><a href="#skills" className="text-text-muted hover:text-primary transition-colors">Skills</a></li>
                <li><a href="#experience" className="text-text-muted hover:text-primary transition-colors">Experience</a></li>
                <li><a href="#projects" className="text-text-muted hover:text-primary transition-colors">Projects</a></li>
                <li><a href="#contact" className="text-text-muted hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-text">Contact</h4>
            <address className="not-italic space-y-3 text-text-muted">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>{portfolioData.personal.location}</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <a href={`mailto:${portfolioData.personal.email}`} className="hover:text-primary transition-colors">
                  {portfolioData.personal.email}
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-text-muted text-sm">
            © {currentYear} Yazan Nazzal. All rights reserved.
          </p>

          <p className="text-text-muted text-sm flex items-center gap-2">
            Built with
            <Heart className="w-4 h-4 text-red-500" aria-hidden="true" />
            React + TypeScript + Tailwind CSS
          </p>

          <button
            onClick={scrollToTop}
            className="p-2 bg-primary/10 rounded-xl text-primary hover:bg-primary/20 transition-colors md:ml-auto"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}