import { ArrowUpRight, GraduationCap, MapPin } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
export function Experience() {
  return <section id="experience" className="editorial-section" aria-labelledby="experience-title"><div className="editorial-container">
    <SectionHeading id="experience-title" path="02 / journey" title="Experience that shapes the work." subtitle="The teams, challenges, and ideas that have helped me grow." />
    <div className="career-timeline">{portfolioData.experience.map((job,index) => <Reveal key={job.id} delay={70 * index}>
      <article className="career-entry"><div className="career-date"><span>{job.startDate}</span><span>{job.current ? 'Present' : job.endDate}</span><span className="career-node" aria-hidden="true" /></div>
      <div className="career-body"><div className="career-heading"><div><span className="career-role">{job.position}</span><h3>{job.company}</h3></div><ArrowUpRight size={24} aria-hidden="true" /></div>
        <p className="career-location"><MapPin size={13} aria-hidden="true" /> {job.location}</p>
        <ul>{job.description.map(point => <li key={point}>{point}</li>)}</ul>
        <div className="technology-tags">{job.technologies.map(tech => <span key={tech}>{tech}</span>)}</div>
      </div></article></Reveal>)}</div>
    <div className="education-grid">{portfolioData.education.map((edu,index) => <Reveal key={edu.id} delay={index * 90}><article className="education-note"><GraduationCap size={26} strokeWidth={1.3} aria-hidden="true" /><div>{edu.startDate && <span>{edu.startDate} / {edu.endDate}</span>}<h3>{edu.degree}</h3><p>{edu.institution}</p></div></article></Reveal>)}</div>
  </div></section>;
}
