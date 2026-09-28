// Professional ProfilePhoto Component
const profilePhotoCode = `function ProfilePhoto() {
  return (
    <div
      className="relative flex justify-center"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Background glow - large subtle radial gradient */}
      <div
        className="absolute inset-0 rounded-full opacity-30"
        style={{
          background: 'radial-gradient(ellipse at center, var(--color-primary) 0%, var(--color-accent) 50%, transparent 70%)',
          filter: 'blur(80px)',
          transform: 'scale(1.3)',
        }}
        aria-hidden="true"
      />

      {/* Outer ambient ring - subtle pulse animation */}
      <div
        className="absolute rounded-full opacity-40"
        style={{
          inset: '-2.5rem',
          background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)',
          filter: 'blur(40px)',
          animation: 'pulse-ring 4s ease-in-out infinite',
        }}
        aria-hidden="true"
      />

      {/* Middle gradient ring - refined thickness */}
      <div
        className="absolute rounded-full"
        style={{
          inset: '-1.25rem',
          background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 50%, var(--color-primary-light) 100%)',
          filter: 'blur(8px)',
          opacity: 0.6,
        }}
        aria-hidden="true"
      />

      {/* Inner crisp border ring */}
      <div
        className="absolute rounded-full border"
        style={{
          inset: '-0.5rem',
          borderWidth: '2px',
          borderColor: 'rgb(var(--color-primary-rgb) / 0.4)',
          boxShadow: 'inset 0 0 0 1px rgb(var(--color-accent-rgb) / 0.2), 0 0 30px -10px rgb(var(--color-primary-rgb) / 0.3)',
        }}
        aria-hidden="true"
      />

      {/* Main photo container - clean, professional */}
      <div className="relative rounded-full overflow-hidden bg-surface shadow-2xl">
        <img
          src={profilePhoto}
          alt="Yazan Nazzal - Full Stack Developer"
          className="block object-cover object-center"
          style={{
            width: 'clamp(240px, 35vw, 380px)',
            height: 'clamp(240px, 35vw, 380px)',
            animation: 'float-subtle 8s ease-in-out infinite',
          }}
          loading="eager"
          fetchPriority="high"
          width={380}
          height={380}
        />

        {/* Subtle inner highlight */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            boxShadow: 'inset 0 -2px 4px -2px rgb(0 0 0 / 0.1), inset 0 2px 4px -2px rgb(255 255 255 / 0.1)',
          }}
          aria-hidden="true"
        />
      </div>

      {/* Accent indicator - bottom right */}
      <div
        className="absolute rounded-full"
        style={{
          bottom: '-0.75rem',
          right: '-0.75rem',
          width: '3.5rem',
          height: '3.5rem',
          background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)',
          filter: 'blur(16px)',
          opacity: 0.4,
          transform: 'scale(0.8)',
        }}
        aria-hidden="true"
      />

      {/* Accent indicator - top left */}
      <div
        className="absolute rounded-full"
        style={{
          top: '-0.5rem',
          left: '-0.5rem',
          width: '2.5rem',
          height: '2.5rem',
          background: 'var(--color-primary)',
          filter: 'blur(20px)',
          opacity: 0.25,
        }}
        aria-hidden="true"
      />
    </div>
  );
}`;

console.log(profilePhotoCode);