import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Briefcase, MapPin, Calendar, CheckCircle, Code2, Globe, Smartphone, Building2 } from 'lucide-react';
import type { Experience } from '../../types';

interface ExperienceCardProps {
  job: Experience;
  index: number;
  isVisible: boolean;
}

export function ExperienceCard({ job, index, isVisible }: ExperienceCardProps) {
  const animationStyle = {
    animation: isVisible ? `slideUp 0.6s ease-out ${(index + 1) * 100}ms forwards` : 'none',
    opacity: isVisible ? 1 : 0,
  };

  const getCategoryIcon = (tech: string) => {
    if (['React', 'React Native', 'Angular', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript'].includes(tech)) return <Code2 className="w-3 h-3" />;
    if (['.NET Core', 'C#', 'SQL Server', 'Node.js', 'Firebase', 'MongoDB', 'REST APIs'].includes(tech)) return <Globe className="w-3 h-3" />;
    if (['Flutter', 'Dart', 'Mobile Development'].includes(tech)) return <Smartphone className="w-3 h-3" />;
    return <Code2 className="w-3 h-3" />;
  };

  const getCategoryColor = (tech: string) => {
    if (['React', 'React Native', 'Angular', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript'].includes(tech)) return 'border-primary/30 bg-primary/5 text-primary';
    if (['.NET Core', 'C#', 'SQL Server', 'Node.js', 'Firebase', 'MongoDB', 'REST APIs'].includes(tech)) return 'border-accent/30 bg-accent/5 text-accent';
    if (['Flutter', 'Dart', 'Mobile Development'].includes(tech)) return 'border-green-500/30 bg-green-500/5 text-green-500';
    return 'border-primary/30 bg-primary/5 text-primary';
  };

  return (
    <div className="relative lg:pl-16" style={animationStyle}>
      <div className="absolute left-4 top-4 w-3 h-3 bg-primary rounded-full border-4 border-bg z-10 hidden lg:block" aria-hidden="true" />
      <div className="absolute left-4 top-4 w-5 h-5 bg-primary/20 rounded-full hidden lg:block" aria-hidden="true" />

      <Card variant="outlined" padding="lg" hover className="relative transition-all duration-300">
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <Badge variant="primary" size="sm">
                  {job.position}
                </Badge>
                {job.current && (
                  <Badge variant="success" size="sm" className="bg-green-500/10 border-green-500/30 text-green-500">
                    Current
                  </Badge>
                )}
                {!job.current && (
                  <Badge variant="outline" size="sm">
                    Past Role
                  </Badge>
                )}
              </div>
              <div className="flex items-center gap-3 mb-2">
                <Building2 className="w-5 h-5 text-primary" aria-hidden="true" />
                <CardTitle className="text-2xl font-bold text-text">{job.company}</CardTitle>
              </div>
            </div>
            <div className="flex items-center gap-4 text-text-muted text-sm flex-wrap sm:self-end">
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" aria-hidden="true" />
                {job.location}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" aria-hidden="true" />
                {formatDateRange(job.startDate, job.endDate, job.current)}
              </span>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-text mb-3 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-primary" aria-hidden="true" />
                Responsibilities
              </h4>
              <ul className="space-y-3 text-text-muted">
                {job.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 pl-8 relative group">
                    <div className="absolute left-0 top-2 w-1.5 h-1.5 bg-primary rounded-full transition-transform group-hover:scale-125" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {job.highlights && job.highlights.length > 0 && (
              <div className="border-t border-border/50 pt-6">
                <h4 className="font-semibold text-text mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" aria-hidden="true" />
                  Key Achievements
                </h4>
                <ul className="space-y-3 text-text-muted">
                  {job.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 pl-8 relative group">
                      <div className="absolute left-0 top-2 w-1.5 h-1.5 bg-green-500 rounded-full transition-transform group-hover:scale-125" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="border-t border-border/50 pt-6">
              <h4 className="font-semibold text-text mb-3 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-primary" aria-hidden="true" />
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {job.technologies.map((tech, i) => (
                  <Badge
                    key={i}
                    variant="outline"
                    size="sm"
                    className={getCategoryColor(tech)}
                  >
                    {getCategoryIcon(tech)}
                    <span>{tech}</span>
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function formatDateRange(start: string, end: string, current: boolean) {
  const startYear = new Date(start).getFullYear();
  const endYear = current ? 'Present' : new Date(end).getFullYear();
  return `${startYear} – ${endYear}`;
}