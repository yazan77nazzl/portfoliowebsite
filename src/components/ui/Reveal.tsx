import type { CSSProperties, ReactNode } from 'react';
import { useIntersectionObserver } from '../../hooks';
export function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const [ref, visible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.05 });
  return <div ref={ref} className={`scroll-reveal ${visible ? 'is-revealed' : ''} ${className}`} style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}>{children}</div>;
}
