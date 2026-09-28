import { Card } from '../ui/Card';
import { Calendar } from 'lucide-react';
import type { Education } from '../../types';

interface EducationCardProps {
  edu: Education;
  index: number;
  isVisible: boolean;
}

export function EducationCard({ edu, index, isVisible }: EducationCardProps) {
  const animationStyle = {
    animation: isVisible ? `slideUp 0.6s ease-out ${(index + 1) * 100}ms forwards` : 'none',
    opacity: isVisible ? 1 : 0,
  };

  return (
    <Card variant="outlined" padding="lg" hover style={animationStyle}>
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-primary/10 rounded-xl flex-shrink-0">
            <GraduationCap className="w-6 h-6 text-primary" aria-hidden="true" />
          </div>
          <div>
            <h4 className="font-heading text-xl font-semibold text-text">{edu.degree}</h4>
            <p className="text-primary font-medium mt-1">{edu.institution}</p>
            <p className="text-text-muted text-sm mt-1">{edu.location}</p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-text-muted text-sm flex-wrap">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" aria-hidden="true" />
            {formatDateRange(edu.startDate, edu.endDate, false)}
          </span>
        </div>
      </div>
      {edu.description && (
        <p className="text-text-muted mt-4 pt-4 border-t border-border/50">{edu.description}</p>
      )}
    </Card>
  );
}

function formatDateRange(start: string, end: string, _current: boolean) {
  const startYear = new Date(start).getFullYear();
  const endYear = new Date(end).getFullYear();
  return `${startYear} – ${endYear}`;
}

function GraduationCap({ className, ...props }: { className?: string } & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      {...props}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      />
    </svg>
  );
}