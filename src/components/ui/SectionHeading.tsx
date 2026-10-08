import { useIntersectionObserver } from '../../hooks';

interface SectionHeadingProps { id: string; path: string; title: string; subtitle: string; }
export function SectionHeading({ id, path, title, subtitle }: SectionHeadingProps) {
  const [headingRef, isVisible] = useIntersectionObserver<HTMLDivElement>();
  return <div ref={headingRef} className={`section-heading ${isVisible ? 'section-heading-visible' : ''}`}>
    <div className="section-endpoint"><span className="endpoint-method">GET</span><span className="endpoint-path">/{path}</span><span className="endpoint-status">200 OK</span></div>
    <div className="section-title-row"><h2 id={id}>{title}</h2><span className="section-title-line" aria-hidden="true" /></div>
    <p>{subtitle}</p>
  </div>;
}
