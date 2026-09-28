import { portfolioData } from '../../data/portfolio';
import { useIntersectionObserver } from '../../hooks';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { BarChart3, Zap, Smartphone, Wrench, CheckCircle, Star } from 'lucide-react';

const categoryIcons = {
  Frontend: BarChart3,
  Backend: Zap,
  'Mobile Development': Smartphone,
  'Tools & Concepts': Wrench,
};

const skillCategoryColors = {
  Frontend: 'from-primary to-primary-light',
  Backend: 'from-accent to-accent-light',
  'Mobile Development': 'from-green-500 to-green-400',
  'Tools & Concepts': 'from-purple-500 to-purple-400',
};

export function Skills() {
  const [sectionRef, isVisible] = useIntersectionObserver();

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-24 lg:py-32 px-6 bg-surface/50"
      aria-labelledby="skills-title"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Skills & Expertise"
          subtitle="Technologies and tools I work with"
          isVisible={isVisible}
        />

        <div className="mt-12 space-y-8">
          {portfolioData.skills.map((category, index) => (
            <SkillCategoryCard
              key={category.category}
              category={category}
              icon={categoryIcons[category.category as keyof typeof categoryIcons] || Wrench}
              index={index}
              isVisible={isVisible}
            />
          ))}

          {/* Proficiency Legend */}
          <Card variant="outlined" padding="lg" className="mt-8">
            <h3 className="font-heading text-lg font-semibold text-text mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" aria-hidden="true" />
              Proficiency Scale
            </h3>
            <div className="grid sm:grid-cols-5 gap-4 text-center">
              {[
                { level: 1, label: 'Learning' },
                { level: 2, label: 'Basic' },
                { level: 3, label: 'Intermediate' },
                { level: 4, label: 'Advanced' },
                { level: 5, label: 'Expert' },
              ].map((item) => (
                <div key={item.level} className="p-4 rounded-xl bg-surface-hover">
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((l) => (
                      <div
                        key={l}
                        className="w-2 h-6 rounded transition-colors"
                        style={{
                          backgroundColor:
                            l <= item.level ? 'var(--color-primary)' : 'var(--color-border)',
                          height: `${(l / 5) * 100}%`,
                        }}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-text">{item.label}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Core Competencies Highlight */}
          <Card variant="outlined" padding="lg" className="mt-8">
            <h3 className="font-heading text-lg font-semibold text-text mb-4 flex items-center gap-2">
              <Star className="w-5 h-5 text-primary" aria-hidden="true" />
              Core Competencies
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                'React / React Native',
                'TypeScript / JavaScript',
                'Angular / .NET Core',
                'Flutter / Dart',
                'Node.js / Express',
                'SQL / PostgreSQL',
                'Firebase / Supabase',
                'Git / CI/CD',
                'REST / GraphQL',
                'Tailwind CSS',
              ].map((tech, i) => (
                <Badge key={i} variant="primary" size="sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </Card>
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
      <h2 id="skills-title" className="font-heading text-4xl lg:text-5xl font-bold text-text tracking-tight mb-4">
        {title}
      </h2>
      <p className="text-lg text-text-muted">{subtitle}</p>
    </div>
  );
}

function SkillCategoryCard({
  category,
  icon: Icon,
  index,
  isVisible,
}: {
  category: { category: string; skills: { name: string; level: number }[] };
  icon: React.ComponentType<{ className?: string; ariaHidden?: boolean }>;
  index: number;
  isVisible: boolean;
}) {
  const animationStyle = {
    animation: isVisible ? `slideUp 0.6s ease-out ${(index + 1) * 100}ms forwards` : 'none',
    opacity: isVisible ? 1 : 0,
  };

  const gradient = skillCategoryColors[category.category as keyof typeof skillCategoryColors] || 'from-primary to-accent';

  return (
    <Card variant="outlined" padding="lg" hover style={animationStyle}>
      <div className="flex items-center gap-3 mb-6">
        <div className={`p-3 rounded-xl bg-gradient-to-r ${gradient}`}>
          <Icon className="w-6 h-6 text-white" aria-hidden="true" />
        </div>
        <div>
          <h3 className="font-heading text-xl font-semibold text-text">{category.category}</h3>
          <p className="text-text-muted text-sm">{category.skills.length} technologies</p>
        </div>
      </div>

      <div className="space-y-4">
        {category.skills.map((skill, skillIndex) => (
          <SkillBar
            key={skill.name}
            skill={skill}
            delay={`${skillIndex * 50}ms`}
            isVisible={isVisible}
            gradient={gradient}
          />
        ))}
      </div>
    </Card>
  );
}

function SkillBar({
  skill,
  delay,
  isVisible,
  gradient,
}: {
  skill: { name: string; level: number };
  delay: string;
  isVisible: boolean;
  gradient: string;
}) {
  return (
    <div
      style={{
        animation: isVisible ? `slideUp 0.4s ease-out ${delay} forwards` : 'none',
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="font-medium text-text">{skill.name}</span>
        <Badge variant="outline" size="sm">
          Level {skill.level}/5
        </Badge>
      </div>
      <div className="h-2 bg-border rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-1000 ease-out bg-gradient-to-r ${gradient}`}
          style={{
            width: isVisible ? `${(skill.level / 5) * 100}%` : '0%',
          }}
        />
      </div>
    </div>
  );
}