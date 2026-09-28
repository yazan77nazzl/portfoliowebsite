import { portfolioData } from '../../data/portfolio';
import { useIntersectionObserver } from '../../hooks';
import { ExperienceCard } from './ExperienceCard';
import { EducationCard } from './EducationCard';
import { Badge } from '../ui/Badge';

export function Experience() {
  const [sectionRef, isVisible] = useIntersectionObserver();

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="py-24 lg:py-32 px-6"
      aria-labelledby="experience-title"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Experience"
          subtitle="My professional journey"
          isVisible={isVisible}
        />

        <div className="mt-12 relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border/50 hidden lg:block" aria-hidden="true" />

          <div className="space-y-8">
            {portfolioData.experience.map((job, index) => (
              <ExperienceCard key={job.id} job={job} index={index} isVisible={isVisible} />
            ))}
          </div>
        </div>

        {/* Experience Summary */}
        <ExperienceSummary isVisible={isVisible} />

        <div className="mt-20">
          <h3 className="font-heading text-2xl font-semibold text-text mb-8 text-center">
            Education
          </h3>
          <div className="space-y-6">
            {portfolioData.education.map((edu, index) => (
              <EducationCard key={edu.id} edu={edu} index={index} isVisible={isVisible} />
            ))}
          </div>
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
      <h2 id="experience-title" className="font-heading text-4xl lg:text-5xl font-bold text-text tracking-tight mb-4">
        {title}
      </h2>
      <p className="text-lg text-text-muted">{subtitle}</p>
    </div>
  );
}

function ExperienceSummary({ isVisible }: { isVisible: boolean }) {
  const totalYears = portfolioData.experience.reduce((acc, job) => {
    const start = new Date(job.startDate).getTime();
    const end = job.current ? Date.now() : new Date(job.endDate).getTime();
    return acc + (end - start);
  }, 0);
  const years = Math.floor(totalYears / (1000 * 60 * 60 * 24 * 365));
  const companies = portfolioData.experience.length;
  const technologies = new Set(
    portfolioData.experience.flatMap((job) => job.technologies)
  ).size;

  return (
    <div
      className="grid sm:grid-cols-3 gap-6 mt-16"
      style={{
        animation: isVisible ? 'slideUp 0.6s ease-out 200ms forwards' : 'none',
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div className="bg-surface border border-border/50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
        <div className="text-4xl font-heading font-bold text-text mb-1">{years}+</div>
        <div className="text-text-muted">Years Experience</div>
      </div>
      <div className="bg-surface border border-border/50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
        <div className="text-4xl font-heading font-bold text-text mb-1">{companies}</div>
        <div className="text-text-muted">Companies</div>
      </div>
      <div className="bg-surface border border-border/50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
        <div className="text-4xl font-heading font-bold text-text mb-1">{technologies}+</div>
        <div className="text-text-muted">Technologies</div>
      </div>
    </div>
  );
}