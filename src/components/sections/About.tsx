import { portfolioData } from '../../data/portfolio';
import { useIntersectionObserver } from '../../hooks';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { MapPin, Mail, Phone, GitBranch, User, Globe, Award, Code } from 'lucide-react';

export function About() {
  const [sectionRef, isVisible] = useIntersectionObserver();

  const { name, title, location, email, phone, github, linkedin, summary } = portfolioData.personal;
  const { experience, languages } = portfolioData;

  const totalExperience = experience.reduce((acc, job) => {
    const start = new Date(job.startDate).getTime();
    const end = job.current ? Date.now() : new Date(job.endDate).getTime();
    return acc + (end - start);
  }, 0);
  const yearsExp = Math.floor(totalExperience / (1000 * 60 * 60 * 24 * 365));

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 lg:py-32 px-6"
      aria-labelledby="about-title"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="About Me" subtitle="Get to know me better" isVisible={isVisible} />

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mt-12">
          <AboutMainContent summary={summary} />
          <AboutSidebar
            name={name}
            title={title}
            location={location}
            email={email}
            phone={phone}
            github={github}
            linkedin={linkedin}
            yearsExp={yearsExp}
            languages={languages}
            isVisible={isVisible}
          />
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ title, subtitle, isVisible }: { title: string; subtitle: string; isVisible: boolean }) {
  return (
    <div
      className="text-center max-w-3xl mx-auto"
      style={{
        animation: isVisible ? 'slideUp 0.6s ease-out forwards' : 'none',
        opacity: isVisible ? 1 : 0,
      }}
    >
      <Badge variant="primary" size="lg" className="mb-4">
        {title}
      </Badge>
      <h2 id="about-title" className="font-heading text-4xl lg:text-5xl font-bold text-text tracking-tight mb-4">
        {title}
      </h2>
      <p className="text-lg text-text-muted">{subtitle}</p>
    </div>
  );
}

function AboutMainContent({ summary }: { summary: string }) {
  return (
    <div className="lg:col-span-2 space-y-8" style={{ animationDelay: '100ms' }}>
      <Card variant="outlined" padding="lg" hover>
        <h3 className="font-heading text-2xl font-semibold text-text mb-4">Professional Summary</h3>
        <p className="text-text-muted leading-relaxed text-lg">{summary}</p>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card variant="outlined" padding="lg" hover>
          <h3 className="font-heading text-xl font-semibold text-text mb-4 flex items-center gap-2">
            <Code className="w-5 h-5 text-primary" aria-hidden="true" />
            What I Do
          </h3>
          <ul className="space-y-3 text-text-muted">
            {[
              'Frontend Development with React, React Native & Angular',
              'Backend Development with .NET Core & Node.js',
              'Mobile App Development with Flutter & React Native',
              'Database Design & API Development',
              'Clean Architecture & Best Practices',
              'Agile Development & Team Collaboration',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card variant="outlined" padding="lg" hover>
          <h3 className="font-heading text-xl font-semibold text-text mb-4 flex items-center gap-2">
            <Globe className="w-5 h-5 text-primary" aria-hidden="true" />
            Core Values
          </h3>
          <ul className="space-y-3 text-text-muted">
            {[
              'Write clean, maintainable, and scalable code',
              'Prioritize user experience and accessibility',
              'Continuous learning and skill improvement',
              'Collaborative development and knowledge sharing',
              'Deliver projects on time with high quality',
              'Embrace best practices and modern tooling',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}

function AboutSidebar({
  name,
  title,
  location,
  email,
  phone,
  github,
  linkedin,
  yearsExp,
  languages,
  isVisible,
}: {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  yearsExp: number;
  languages: { name: string; proficiency: string }[];
  isVisible: boolean;
}) {
  const animationStyle = {
    animation: isVisible ? 'slideUp 0.6s ease-out 200ms forwards' : 'none',
    opacity: isVisible ? 1 : 0,
  };

  return (
    <div className="lg:col-span-1 space-y-6" style={animationStyle}>
      <Card variant="outlined" padding="lg">
        <div className="text-center mb-6">
          <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center">
              <Code className="w-8 h-8 text-white" aria-hidden="true" />
            </div>
          </div>
          <h3 className="font-heading text-xl font-semibold text-text">{name}</h3>
          <p className="text-primary font-medium mt-1">{title}</p>
        </div>

        <div className="space-y-4 border-t border-border/50 pt-6">
          <InfoRow icon={MapPin} label="Location" value={location} />
          <InfoRow icon={Mail} label="Email" value={email} href={`mailto:${email}`} />
          <InfoRow icon={Phone} label="Phone" value={phone} href={`tel:${phone}`} />
          <InfoRow icon={GitBranch} label="GitHub" value="YazanNazal" href={github} external />
          <InfoRow icon={User} label="LinkedIn" value="Yazan Nazzal" href={linkedin} external />
        </div>
      </Card>

      <Card variant="outlined" padding="lg">
        <h3 className="font-heading text-lg font-semibold text-text mb-4 flex items-center gap-2">
          <Award className="w-5 h-5 text-primary" aria-hidden="true" />
          Quick Facts
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <StatItem label="Years Experience" value={`${yearsExp}+`} />
          <StatItem label="Projects Completed" value={`${portfolioData.projects.length}+`} />
          <StatItem label="Technologies" value={`${getTotalSkills()}+`} />
          <StatItem label="Languages" value={languages.length} />
        </div>
      </Card>

      <Card variant="outlined" padding="lg">
        <h3 className="font-heading text-lg font-semibold text-text mb-4 flex items-center gap-2">
          <Globe className="w-5 h-5 text-primary" aria-hidden="true" />
          Languages
        </h3>
        <div className="space-y-3">
          {languages.map((lang) => (
            <div key={lang.name} className="flex items-center justify-between">
              <span className="font-medium text-text">{lang.name}</span>
              <Badge variant="outline" size="sm">{lang.proficiency}</Badge>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
  href,
  external = false,
}: {
  icon: React.ComponentType<{ className?: string; ariaHidden?: boolean }>;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const content = (
    <div className="flex items-center gap-3">
      <div className="p-2 bg-primary/10 rounded-lg">
        <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
      </div>
      <div>
        <p className="text-xs text-text-muted uppercase tracking-wider">{label}</p>
        <p className="font-medium text-text">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className="group flex items-center gap-3 p-3 rounded-xl hover:bg-surface-hover transition-colors"
      >
        {content}
      </a>
    );
  }

  return <div className="flex items-center gap-3">{content}</div>;
}

function StatItem({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="text-center p-3 rounded-xl bg-surface-hover">
      <p className="font-heading text-2xl font-bold text-text">{value}</p>
      <p className="text-xs text-text-muted mt-1">{label}</p>
    </div>
  );
}

function getTotalSkills() {
  return portfolioData.skills.reduce((acc, cat) => acc + cat.skills.length, 0);
}