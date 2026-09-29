import { GitBranch, User, ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import profilePhoto from '/profile-photo.jpg';

function HeroContactInfo({
  location,
  email,
  phone,
  animationStyle,
}: {
  location: string;
  email: string;
  phone: string;
  animationStyle: React.CSSProperties;
}) {
  return (
    <div className="flex flex-wrap items-center gap-4 mb-8" style={animationStyle}>
      <a
        href={`mailto:${email}`}
        className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors"
      >
        <Mail className="w-5 h-5" aria-hidden="true" />
        <span>{email}</span>
      </a>
      <span className="flex items-center gap-2 text-text-muted">
        <MapPin className="w-5 h-5" aria-hidden="true" />
        <span>{location}</span>
      </span>
      <a
        href={`tel:${phone}`}
        className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors"
      >
        <Phone className="w-5 h-5" aria-hidden="true" />
        <span>{phone}</span>
      </a>
    </div>
  );
}

function HeroCTAs({ animationStyle }: { animationStyle: React.CSSProperties }) {
  return (
    <div className="flex flex-wrap items-center gap-4 mb-8" style={animationStyle}>
      <a
        href="#contact"
        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-xl hover:bg-primary-dark transition-colors focus-ring"
      >
        Get In Touch
        <ArrowRight className="w-5 h-5" aria-hidden="true" />
      </a>
      <a
        href="#projects"
        className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-medium rounded-xl hover:bg-primary/5 transition-colors focus-ring"
      >
        View Projects
      </a>
    </div>
  );
}

function HeroSocialLinks({
  github,
  linkedin,
  animationStyle,
}: {
  github: string;
  linkedin: string;
  animationStyle: React.CSSProperties;
}) {
  return (
    <div className="flex items-center gap-4" style={animationStyle}>
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-surface rounded-xl text-text-muted hover:text-primary hover:bg-primary/10 transition-colors focus-ring"
        aria-label="GitHub"
      >
        <GitBranch className="w-5 h-5" />
      </a>
      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-surface rounded-xl text-text-muted hover:text-primary hover:bg-primary/10 transition-colors focus-ring"
        aria-label="LinkedIn"
      >
        <User className="w-5 h-5" />
      </a>
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative">
      <div className="bg-surface border border-border/50 rounded-2xl overflow-hidden shadow-2xl max-w-md mx-auto">
        <div className="flex items-center gap-2 px-4 py-3 bg-surface-hover border-b border-border/50">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="flex-1 text-center text-sm text-text-muted font-mono">
            portfolio/src/App.tsx
          </div>
        </div>
        <pre className="p-6 overflow-x-auto text-sm leading-relaxed">
          <code className="font-mono text-text">
            {`const developer = {\n  name: "Yazan Nazzal",\n  role: "Software Developer",\n  stack: [\n    "React", "React Native",\n    "Angular", ".NET Core",\n    "Flutter", "Firebase"\n  ],\n  focus: "Clean code &\n         great UX",\n  status: "Building..."\n};`}
          </code>
        </pre>
      </div>

      <div className="absolute -top-4 -right-4 w-48">
        <FloatingCard
          icon="⚛️"
          title="React Ecosystem"
          subtitle="5+ Years"
          bgColor="bg-primary/10"
          delay="0s"
        />
        <FloatingCard
          icon="📱"
          title="Mobile Apps"
          subtitle="React Native & Flutter"
          bgColor="bg-accent/10"
          delay="0.5s"
        />
        <FloatingCard
          icon="☁️"
          title="Full-Stack"
          subtitle=".NET Core & Firebase"
          bgColor="bg-green-500/10"
          delay="1s"
        />
      </div>
    </div>
  );
}

function FloatingCard({
  icon,
  title,
  subtitle,
  bgColor,
  delay,
}: {
  icon: string;
  title: string;
  subtitle: string;
  bgColor: string;
  delay: string;
}) {
  return (
    <div
      className={`bg-surface border border-border/50 rounded-xl p-4 shadow-lg animate-float ${bgColor}`}
      style={{ animationDelay: delay, marginTop: '0.75rem' }}
    >
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg">
          <span className="text-2xl">{icon}</span>
        </div>
        <div>
          <p className="font-semibold text-text">{title}</p>
          <p className="text-sm text-text-muted">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

function ProfilePhoto() {
  const frameThickness = 20; // px
  const frameStyle: React.CSSProperties = {
    inset: `-${frameThickness}px`,
    borderRadius: `calc(1.5rem + ${frameThickness}px)`,
  };

  return (
    <div className="relative flex justify-center">
      {/* Frame wrapper – same size as portrait container */}
      <div className="relative aspect-square w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[560px]">
        {/* Premium physical frame drawn behind the image */}
        <div
          className="absolute pointer-events-none -z-10"
          style={{
            ...frameStyle,
            background: 'linear-gradient(135deg, #1e3a8a 0%, #06b6d4 50%, #1e3a8a 100%)',
            boxShadow: `
              0 ${frameThickness}px ${frameThickness * 2}px -${frameThickness}px rgba(0,0,0,0.4),
              inset 0 -2px 4px rgba(255,255,255,0.15),
              inset 0 2px 4px rgba(0,0,0,0.2),
              inset 0 0 0 1px rgba(30,58,138,0.3)
            `,
          }}
          aria-hidden="true"
        />

        {/* Subtle animated light reflection on the frame surface */}
        <div
          className="absolute pointer-events-none -z-10 animate-frame-sweep"
          style={{
            ...frameStyle,
            // mask to keep only the frame ring
            mask: 'linear-gradient(black, black) content-box, linear-gradient(black, black) border-box',
            WebkitMask: 'linear-gradient(black, black) content-box, linear-gradient(black, black) border-box',
            maskComposite: 'exclude',
            WebkitMaskComposite: 'xor',
            background: 'linear-gradient(90deg, transparent, rgba(6,182,212,0.25), transparent)',
            backgroundSize: '200% 100%',
          }}
          aria-hidden="true"
        />

        {/* Ambient soft glow around the frame */}
        <div
          className="absolute inset-0 rounded-[inherit] bg-gradient-to-r from-primary via-accent to-primary opacity-10 blur-2xl -inset-2"
          aria-hidden="true"
        />

        {/* Portrait container – unchanged size */}
        <div className="relative aspect-square w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-surface">
          <img
            src={profilePhoto}
            alt="Yazan Nazzal - Full Stack Developer"
            className="w-full h-full object-cover object-center"
            loading="eager"
            fetchPriority="high"
            width={560}
            height={560}
          />
          {/* Subtle inner highlight on the image itself */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              boxShadow: 'inset 0 -2px 4px -2px rgb(0 0 0 / 0.1), inset 0 2px 4px -2px rgb(255 255 255 / 0.1)',
            }}
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}

function HeroContent({
  name,
  title,
  location,
  email,
  phone,
  github,
  linkedin,
  summary,
  isVisible,
  prefersReducedMotion,
}: {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  summary: string;
  isVisible: boolean;
  prefersReducedMotion: boolean;
}) {
  const getAnimationStyle = (delay: string) => ({
    animation: isVisible && !prefersReducedMotion
      ? `slideUp 0.8s ease-out ${delay} forwards`
      : 'none',
    opacity: prefersReducedMotion ? 1 : 0,
  });

  return (
    <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
      <div className="flex flex-col items-center text-center gap-10 lg:gap-16">
        {/* Profile Photo - Prominently at the top */}
        <div
          className="relative w-full flex-shrink-0"
          style={{}}
        >
          <ProfilePhoto />
        </div>

        {/* Text Content - Below the photo */}
        <div className="w-full max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface/80 backdrop-blur-md border border-border/50 mb-6" style={getAnimationStyle('200ms')}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-sm font-medium text-text-muted">Available for opportunities</span>
          </div>

          <h1
            id="hero-title"
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-text tracking-tight leading-tight mb-6"
            style={getAnimationStyle('300ms')}
          >
            {name.split(' ').map((part, i) => (
              <span key={i} className="block">
                {part}
                {i === 0 && <span className="gradient-text"> </span>}
              </span>
            ))}
          </h1>

          <p
            className="text-xl sm:text-2xl lg:text-3xl text-primary font-medium mb-6"
            style={getAnimationStyle('400ms')}
          >
            {title}
          </p>

          <p
            className="text-lg text-text-muted leading-relaxed mb-8"
            style={getAnimationStyle('500ms')}
          >
            {summary}
          </p>

          <HeroContactInfo location={location} email={email} phone={phone} animationStyle={getAnimationStyle('600ms')} />
          <HeroCTAs animationStyle={getAnimationStyle('700ms')} />
          <HeroSocialLinks github={github} linkedin={linkedin} animationStyle={getAnimationStyle('800ms')} />
        </div>
      </div>
    </div>
  );
}

export { HeroContent, HeroContactInfo, HeroCTAs, HeroSocialLinks, HeroVisual, FloatingCard, ProfilePhoto };
