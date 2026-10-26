'use client';

import { useRef, useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Copy, Menu, X } from 'lucide-react';
import { bio, experiences, projects, skills } from '@/data/portfolio';
import type { Project } from '@/data/portfolio';
import { ProjectVisual } from './ProjectVisual';
import { ProjectModal } from './ProjectModal';

const navigation = [{ id: 'work', label: 'Work' }, { id: 'experience', label: 'Experience' }, { id: 'about', label: 'About' }, { id: 'contact', label: 'Contact' }];

export function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [project, setProject] = useState<Project | null>(null);
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'fallback'>('idle');
  const menuButton = useRef<HTMLButtonElement>(null);
  const emailInput = useRef<HTMLInputElement>(null);
  const copyAttempt = useRef(0);
  async function copyEmail() {
    const attempt = ++copyAttempt.current;
    try {
      await navigator.clipboard.writeText(bio.email);
      setCopyState('copied');
      window.setTimeout(() => { if (copyAttempt.current === attempt) setCopyState('idle'); }, 3000);
    } catch {
      setCopyState('fallback');
      window.requestAnimationFrame(() => { emailInput.current?.focus(); emailInput.current?.select(); });
    }
  }
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <header className="site-header" onKeyDown={e => { if (e.key === 'Escape' && menuOpen) { setMenuOpen(false); menuButton.current?.focus(); } }}>
        <div className="container nav-inner">
          <a className="wordmark" href="#main" aria-label="Abhishek Chaudhary, back to top">Abhishek<span className="wordmark-dot">.</span></a>
          <nav className="desktop-nav" aria-label="Main navigation">{navigation.map(n => <a key={n.id} href={'#' + n.id}>{n.label}</a>)}</nav>
          <div className="nav-actions"><a className="nav-resume" href={bio.resume} target="_blank" rel="noopener noreferrer">Resume <ArrowUpRight size={15} /></a>
            <button ref={menuButton} className="icon-button menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
          </div>
        </div>
        {menuOpen && <nav id="mobile-navigation" className="mobile-nav container" aria-label="Mobile navigation" onKeyDown={e => { if (e.key === 'Escape') { setMenuOpen(false); menuButton.current?.focus(); } }}>{navigation.map(n => <a key={n.id} href={'#' + n.id} onClick={() => setMenuOpen(false)}>{n.label}<ArrowUpRight size={16} /></a>)}</nav>}
      </header>
      <main id="main" tabIndex={-1}>
        <section className="hero container" aria-labelledby="hero-title">
          <div className="hero-heading">
            <p className="intro-name">Abhishek Chaudhary <span>AI/ML Engineer</span></p>
            <h1 id="hero-title">Models are a start.<br />Useful products<br /><em>are the work.</em></h1>
          </div>
          <div className="hero-aside">
            <p>I build AI applications that connect models to real workflows—across agents, document intelligence, and predictive machine learning.</p>
            <p className="current-role">Currently at <strong>Square Yards.</strong><br />Previously Mondee and DigiQuanta.</p>
            <div className="hero-actions"><a href="#work" className="button button-primary">Explore work <ArrowDown size={17} /></a><a href={bio.resume} className="text-link" target="_blank" rel="noopener noreferrer">View resume <ArrowUpRight size={16} /></a></div>
          </div>
          <div className="hero-bottom"><span>Applied thinking. End-to-end engineering.</span><span>{bio.location}</span></div>
        </section>

        <section id="work" className="work-section container" aria-labelledby="work-title">
          <div className="section-heading"><h2 id="work-title">Selected work<span className="accent-dot">.</span></h2><p>Different problems. A shared focus on making AI useful.</p></div>
          <div className="featured-projects">{projects.slice(0, 3).map(p => <article className={'project-row project-' + p.id} key={p.id}>
            <button className="visual-button" onClick={() => setProject(p)} aria-label={'Explore ' + p.title}><ProjectVisual project={p} /><span className="visual-open"><ArrowUpRight size={21} /></span></button>
            <div className="project-copy"><h3><button onClick={() => setProject(p)}>{p.title}</button></h3><div className="project-context"><span>{p.organization}</span><span>{p.kind}</span>{p.status && <span className="status-tag">{p.status}</span>}</div><p>{p.description}</p><div className="stack-list">{p.stack.slice(0, 4).map(s => <span key={s}>{s}</span>)}</div><button className="text-link project-detail-link" onClick={() => setProject(p)}>Explore the project <ArrowRight size={17} /></button></div>
          </article>)}</div>
          <div className="more-work-heading"><h3>More ways I work with AI</h3><p>Applied ML, document processing, and independent builds.</p></div>
          <div className="supporting-projects">{projects.slice(3).map(p => <article className="supporting-project" key={p.id}><div><h4><button onClick={() => setProject(p)}>{p.title}</button></h4><p>{p.description}</p><span className="support-context">{p.organization} · {p.kind}</span></div><button className="project-arrow icon-button" aria-label={'Explore ' + p.title} onClick={() => setProject(p)}><ArrowUpRight size={23} /></button></article>)}</div>
        </section>

        <section id="experience" className="experience-section" aria-labelledby="experience-title"><div className="container experience-layout"><div className="section-heading"><h2 id="experience-title">Built through<br /><em>experience.</em></h2><p>From medical documents to travel systems and AI design tools.</p></div><div className="experience-list">{experiences.map(e => <article className="experience-item" key={e.company}><div className="experience-top"><h3>{e.company}</h3><span>{e.date}</span></div><p className="experience-role">{e.role}</p><p>{e.summary}</p><p className="experience-skills">{e.skills}</p></article>)}</div></div></section>

        <section id="about" className="about-section container" aria-labelledby="about-title"><div className="about-intro"><h2 id="about-title">Across the model<br />and the product.</h2><div><p>I enjoy the part where a promising model becomes something people can actually use: preparing data, connecting tools, checking outputs, and building the application around it.</p><p>My background spans Python and PyTorch through TypeScript and Next.js. I’m interested in AI/ML, Applied ML, and Generative AI engineering roles.</p></div></div><div className="skills-grid">{skills.map(group => <div key={group.title}><h3>{group.title}</h3><ul>{group.items.map(skill => <li key={skill}>{skill}</li>)}</ul></div>)}</div><div className="education-row"><div><h3>Delhi Technological University</h3><p>B.Tech, Mechanical Engineering · 2020–2024 · CGPA 7.6/10</p></div><a href="https://www.coursera.org/account/accomplishments/verify/Z95BLFW2MG2F" className="education-certificate" target="_blank" rel="noopener noreferrer">Deep Neural Networks with PyTorch<span>Coursera · May 2024 <ArrowUpRight size={14} /></span></a></div></section>

        <section id="contact" className="contact-section" aria-labelledby="contact-title"><div className="container"><div className="contact-top"><h2 id="contact-title">Have something<br /><em>worth building?</em></h2><p>Let’s talk about AI engineering roles,<br className="desktop-break" /> interesting problems, and useful products.</p></div><div className="contact-bottom"><a href={'mailto:' + bio.email} className="email-link">{bio.email}<ArrowUpRight size={28} /></a><div className="contact-actions"><button className="button button-copy" onClick={copyEmail}>{copyState === 'copied' ? <Check size={16} /> : <Copy size={16} />}{copyState === 'copied' ? 'Email copied' : 'Copy email'}</button><a className="text-link" href={bio.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={17} /></a></div></div><p className="copy-status" role="status" aria-live="polite">{copyState === 'copied' ? 'Email address copied to clipboard.' : copyState === 'fallback' ? 'Could not copy automatically. Select and copy the email below, or use the email link.' : ''}</p>{copyState === 'fallback' && <label className="email-fallback">Email address<input ref={emailInput} readOnly value={bio.email} onFocus={e => e.currentTarget.select()} /></label>}</div></section>
      </main>
      <footer className="container site-footer"><p>Abhishek Chaudhary<span>AI/ML Engineer · {bio.location}</span></p><div><a href={bio.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={14} /></a><a href={bio.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={14} /></a><a href="#main">Back to top <ArrowUpRight size={14} /></a></div></footer>
      <ProjectModal project={project} onClose={() => setProject(null)} />
    </>
  );
}
