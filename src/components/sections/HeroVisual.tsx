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

export { HeroVisual, FloatingCard };