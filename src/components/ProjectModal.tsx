'use client';

import { useEffect, useRef } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import type { Project } from '@/data/portfolio';

export function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = ref.current;
    if (!project || !dialog) return;
    const previous = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      dialog.close();
      document.body.style.overflow = overflow;
      previous?.focus();
    };
  }, [project]);
  return (
    <dialog ref={ref} className="project-dialog" aria-labelledby="project-title" onCancel={e => { e.preventDefault(); onClose(); }} onClick={e => { if (e.target === e.currentTarget) { const box = e.currentTarget.getBoundingClientRect(); if (e.clientX < box.left || e.clientX > box.right || e.clientY < box.top || e.clientY > box.bottom) onClose(); } }}>
      {project && <>
        <div className="dialog-bar"><span>{project.organization} · {project.kind}</span><button className="icon-button" onClick={onClose} aria-label="Close project details" autoFocus><X size={20} /></button></div>
        <div className="dialog-content">
          <h2 id="project-title">{project.title}</h2>
          {project.status && <span className="status-tag">{project.status}</span>}
          <p className="dialog-intro">{project.description}</p>
          <h3>The problem</h3><p>{project.problem}</p>
          <h3>My contributions</h3><ul className="contribution-list">{project.contributions.map(c => <li key={c}>{c}</li>)}</ul>
          <h3>How it connects</h3>
          <ol className="architecture-flow">{project.architecture.map(step => <li key={step.title}><strong>{step.title}</strong><p>{step.detail}</p></li>)}</ol>
          <h3>Scope and limitations</h3><p>{project.limitations}</p>
          <div className="stack-list">{project.stack.map(s => <span key={s}>{s}</span>)}</div>
          {(project.repository || project.demo) && <div className="dialog-links">{project.repository && <a className="text-link" href={project.repository} target="_blank" rel="noopener noreferrer">View repository <ArrowUpRight size={16} /></a>}{project.demo && <a className="text-link" href={project.demo} target="_blank" rel="noopener noreferrer">Visit project <ArrowUpRight size={16} /></a>}</div>}
        </div>
      </>}
    </dialog>
  );
}
