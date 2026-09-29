import { portfolioData } from '../../data/portfolio';
import { useIntersectionObserver } from '../../hooks';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Mail, MapPin, User, GitBranch, X, MessageSquare, Sparkles } from 'lucide-react';

export function Contact() {
  const [sectionRef, isVisible] = useIntersectionObserver();

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-24 lg:py-32 px-6"
      aria-labelledby="contact-title"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Contact"
          subtitle="Get in touch"
          isVisible={isVisible}
        />

        <ContactContent isVisible={isVisible} />
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
      <h2 id="contact-title" className="font-heading text-4xl lg:text-5xl font-bold text-text tracking-tight mb-4">
        {title}
      </h2>
      <p className="text-lg text-text-muted">{subtitle}</p>
    </div>
  );
}

function ContactContent({ isVisible }: { isVisible: boolean }) {
  return (
    <div className="mt-12 max-w-3xl mx-auto">
      <ContactInfo isVisible={isVisible} />
    </div>
  );
}

function ContactInfo({ isVisible }: { isVisible: boolean }) {
  return (
    <div className="space-y-6" style={{
      animation: isVisible ? 'slideUp 0.6s ease-out forwards' : 'none',
      opacity: isVisible ? 1 : 0,
    }}>
      <Card variant="outlined" padding="lg" className="relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" aria-hidden="true" />
        
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <div className="p-2 bg-primary/10 rounded-xl">
              <MessageSquare className="w-5 h-5 text-primary" aria-hidden="true" />
            </div>
            <CardTitle className="text-xl">Let's Work Together</CardTitle>
          </div>
          <p className="text-text-muted mt-2">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your team.
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <ContactItem
              icon={Mail}
              label="Email"
              value={portfolioData.personal.email}
              href={`mailto:${portfolioData.personal.email}`}
            />
            <ContactItem
              icon={MapPin}
              label="Location"
              value={portfolioData.personal.location}
            />
            {portfolioData.personal.phone && (
              <ContactItem
                icon={MapPin}
                label="Phone"
                value={portfolioData.personal.phone}
                href={`tel:${portfolioData.personal.phone}`}
              />
            )}
          </div>

          <div className="pt-6 border-t border-border/50">
            <h4 className="font-semibold text-text mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" aria-hidden="true" />
              Connect
            </h4>
            <div className="flex items-center gap-3">
              {portfolioData.personal.linkedin && (
                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-surface rounded-xl text-text-muted hover:text-primary hover:bg-primary/10 transition-all duration-200 group focus-ring"
                  aria-label="LinkedIn"
                >
                  <User className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              )}
              {portfolioData.personal.github && (
                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-surface rounded-xl text-text-muted hover:text-primary hover:bg-primary/10 transition-all duration-200 group focus-ring"
                  aria-label="GitHub"
                >
                  <GitBranch className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              )}
              <a
                href="https://twitter.com/yazannazzal"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-surface rounded-xl text-text-muted hover:text-primary hover:bg-primary/10 transition-all duration-200 group focus-ring"
                aria-label="Twitter"
              >
                <X className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          <div className="pt-6 border-t border-border/50">
            <h4 className="font-semibold text-text mb-4">Availability</h4>
            <div className="flex items-center gap-3 p-4 bg-surface-hover rounded-xl">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" aria-hidden="true" />
              <span className="text-text-muted">Open for freelance & full-time opportunities</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card variant="outlined" padding="lg">
        <h4 className="font-semibold text-text mb-4 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-primary" aria-hidden="true" />
          Quick Response
        </h4>
        <div className="grid grid-cols-2 gap-4 text-center">
          <div className="p-4 bg-surface rounded-xl">
            <div className="font-heading text-3xl font-bold text-primary">24h</div>
            <div className="text-sm text-text-muted">Typical Reply</div>
          </div>
          <div className="p-4 bg-surface rounded-xl">
            <div className="font-heading text-3xl font-bold text-primary">GMT+3</div>
            <div className="text-sm text-text-muted">Timezone</div>
          </div>
        </div>
      </Card>
    </div>
  );
}



function ContactItem({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="p-2 bg-primary/10 rounded-xl flex-shrink-0">
        <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
      </div>
      <div>
        <p className="text-sm text-text-muted">{label}</p>
        {href ? (
          <a href={href} className="text-text hover:text-primary transition-colors">{value}</a>
        ) : (
          <p className="text-text">{value}</p>
        )}
      </div>
    </div>
  );
}

