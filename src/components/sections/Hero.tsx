import { portfolioData } from '../../data/portfolio';
import { useIntersectionObserver, useReducedMotion } from '../../hooks';
import { HeroContent } from './HeroContent';

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const [heroRef, isVisible] = useIntersectionObserver();

  const { name, title, location, email, phone, github, linkedin, summary } = portfolioData.personal;

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-[calc(100vh-7rem)] flex items-center justify-center overflow-hidden pt-20"
      aria-labelledby="hero-title"
    >
      <HeroBackground />
      <HeroContent
        name={name}
        title={title}
        location={location}
        email={email}
        phone={phone}
        github={github}
        linkedin={linkedin}
        summary={summary}
        isVisible={isVisible}
        prefersReducedMotion={prefersReducedMotion}
      />
      <ScrollIndicator />
    </section>
  );
}

function HeroBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl" />
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z' fill='%231e3a8a' fillOpacity='0.05'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  );
}

function ScrollIndicator() {
  return (
    <div
      className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      aria-hidden="true"
    >
      <svg
        className="w-6 h-6 text-text-muted"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    </div>
  );
}