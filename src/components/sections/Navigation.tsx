import { useState, useEffect } from 'react';
import { useIntersectionObserver } from '../../hooks';
import { Button } from '../ui/Button';
import { Menu, X } from 'lucide-react';

const navItems = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');

  // Observe sections for active nav highlighting
  const sectionRefs = navItems.map(() => useIntersectionObserver());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update active section based on intersection observer.
  useEffect(() => {
    const visibleSections = navItems
      .map((item, index) => ({ item, isVisible: sectionRefs[index][1] }))
      .filter(({ isVisible }) => isVisible);

    if (visibleSections.length > 0) {
      // Get the last visible section (closest to top of viewport)
      setActiveSection(visibleSections[visibleSections.length - 1].item.href);
    }
  }, sectionRefs.map(([, isVisible]) => isVisible));

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-bg/90 backdrop-blur-md border-b border-border/50' : 'bg-transparent'
      }`}
      role="banner"
    >
      <nav className="max-w-7xl mx-auto px-6" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#hero" className="font-heading text-xl font-bold text-text flex items-center gap-2" aria-label="Go to homepage">
            <span className="text-primary">YN</span>
            <span className="hidden sm:block">Yazan Nazzal</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                isActive={activeSection === item.href}
                onClick={scrollToSection}
              />
            ))}
            <Button variant="primary" size="sm" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg text-text hover:bg-surface transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div id="mobile-menu" className="lg:hidden py-4 border-t border-border/50 animate-slideDown">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`px-4 py-3 rounded-xl text-left transition-colors ${
                    activeSection === item.href
                      ? 'bg-primary/10 text-primary font-medium'
                      : 'text-text-muted hover:text-text hover:bg-surface'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button variant="primary" className="mt-4 w-full" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

function NavLink({
  href,
  label,
  isActive,
  onClick,
}: {
  href: string;
  label: string;
  isActive: boolean;
  onClick: (href: string) => void;
}) {
  return (
    <button
      onClick={() => onClick(href)}
      className={`relative px-2 py-2 text-sm font-medium transition-colors ${
        isActive ? 'text-primary' : 'text-text-muted hover:text-text'
      }`}
      aria-current={isActive ? 'page' : undefined}
    >
      {label}
      {isActive && (
        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" aria-hidden="true" />
      )}
    </button>
  );
}