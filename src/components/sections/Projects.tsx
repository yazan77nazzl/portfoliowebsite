import { portfolioData } from '../../data/portfolio';
import { useIntersectionObserver } from '../../hooks';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { GitBranch, ExternalLink, Star, Smartphone, Globe, Layers, CheckCircle } from 'lucide-react';

const categoryIcons = {
  mobile: Smartphone,
  web: Globe,
  fullstack: Layers,
};

const categoryLabels = {
  mobile: 'Mobile App',
  web: 'Web App',
  fullstack: 'Full-Stack',
};

const categoryColors = {
  mobile: 'bg-blue-500/10 text-blue-500 border-blue-500/30',
  web: 'bg-purple-500/10 text-purple-500 border-purple-500/30',
  fullstack: 'bg-green-500/10 text-green-500 border-green-500/30',
};

export function Projects() {
  const [sectionRef, isVisible] = useIntersectionObserver();
  const featuredProjects = portfolioData.projects.filter(p => p.featured);
  const otherProjects = portfolioData.projects.filter(p => !p.featured);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-24 lg:py-32 px-6 bg-surface/50"
      aria-labelledby="projects-title"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Projects"
          subtitle="Selected work and case studies"
          isVisible={isVisible}
        />

        {featuredProjects.length > 0 && (
          <FeaturedProjects projects={featuredProjects} isVisible={isVisible} />
        )}

        {otherProjects.length > 0 && (
          <OtherProjects projects={otherProjects} isVisible={isVisible} />
        )}

        {/* All Projects CTA */}
        <div className="mt-16 text-center" style={{ animation: isVisible ? 'slideUp 0.6s ease-out 300ms forwards' : 'none', opacity: isVisible ? 1 : 0 }}>
          <p className="text-text-muted mb-4">Want to see more of my work?</p>
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/yazannazzal" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <GitBranch className="w-5 h-5" />
              View All on GitHub
            </a>
          </Button>
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
      <h2 id="projects-title" className="font-heading text-4xl lg:text-5xl font-bold text-text tracking-tight mb-4">
        {title}
      </h2>
      <p className="text-lg text-text-muted">{subtitle}</p>
    </div>
  );
}

function FeaturedProjects({ projects, isVisible }: { projects: typeof portfolioData.projects; isVisible: boolean }) {
  return (
    <div className="mt-12 space-y-8">
      <h3 className="font-heading text-2xl font-semibold text-text">Featured Projects</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} isVisible={isVisible} featured={true} />
        ))}
      </div>
    </div>
  );
}

function OtherProjects({ projects, isVisible }: { projects: typeof portfolioData.projects; isVisible: boolean }) {
  return (
    <div className="mt-16 space-y-8">
      <h3 className="font-heading text-2xl font-semibold text-text">Other Projects</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} isVisible={isVisible} featured={false} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  index,
  isVisible,
  featured,
}: {
  project: typeof portfolioData.projects[0];
  index: number;
  isVisible: boolean;
  featured: boolean;
}) {
  const Icon = categoryIcons[project.category];
  const categoryColor = categoryColors[project.category] || 'bg-primary/10 text-primary border-primary/30';
  const animationStyle = {
    animation: isVisible ? `slideUp 0.6s ease-out ${(index + 1) * 100}ms forwards` : 'none',
    opacity: isVisible ? 1 : 0,
  };

  return (
    <Card variant="outlined" padding="none" hover className="overflow-hidden h-full transition-all duration-300" style={animationStyle}>
      <div className="relative h-48 bg-gradient-to-br from-surface-hover to-surface overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent" />
        <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
          <Badge variant="outline" className={categoryColor} size="sm">
            <Icon className="w-3 h-3 mr-1" aria-hidden="true" />
            {categoryLabels[project.category]}
          </Badge>
          {featured && (
            <Badge variant="primary" size="sm" className="bg-amber-500/10 border-amber-500/30 text-amber-500">
              <Star className="w-3 h-3 mr-1" aria-hidden="true" />
              Featured
            </Badge>
          )}
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" aria-hidden="true" />
            <span className="text-sm font-medium text-white">Production Ready</span>
          </div>
        </div>
      </div>

      <CardHeader className="p-6 pb-0">
        <h3 className="font-heading text-xl font-semibold text-text">{project.title}</h3>
      </CardHeader>

      <CardContent className="p-6 space-y-4">
        <p className="text-text-muted leading-relaxed">{project.description}</p>

        {project.longDescription && featured && (
          <p className="text-text-muted leading-relaxed text-sm border-t border-border/50 pt-4">
            {project.longDescription}
          </p>
        )}

        {project.highlights && project.highlights.length > 0 && featured && (
          <div>
            <h4 className="font-semibold text-text mb-2 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" aria-hidden="true" />
              Highlights
            </h4>
            <ul className="space-y-1 text-sm text-text-muted">
              {project.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.role && featured && (
          <div className="flex items-center gap-2 text-sm text-text-muted pt-2 border-t border-border/50">
            <span className="font-medium text-text">Role:</span>
            <span>{project.role}</span>
          </div>
        )}

        {project.outcome && featured && (
          <div className="flex items-center gap-2 text-sm text-text-muted">
            <span className="font-medium text-text">Outcome:</span>
            <span>{project.outcome}</span>
          </div>
        )}

        <div className="flex flex-wrap gap-2 pt-2">
          {project.technologies.slice(0, 8).map((tech, i) => (
            <Badge key={i} variant="outline" size="sm">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 8 && (
            <Badge variant="outline" size="sm" className="text-text-muted">
              +{project.technologies.length - 8} more
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="px-6 pb-6">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-text-muted hover:text-primary transition-colors focus-ring"
                aria-label="View source code"
              >
                <GitBranch className="w-4 h-4" aria-hidden="true" />
                Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-text-muted hover:text-primary transition-colors focus-ring"
                aria-label="View live demo"
              >
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
                Live
              </a>
            )}
          </div>
          {featured && (
            <Button size="sm" variant="ghost" asChild>
              <a href={`#project-${project.id}`} className="flex items-center gap-1.5">
                View Details
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}