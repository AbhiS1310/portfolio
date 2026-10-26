import type { Project } from '@/data/portfolio';

export function ProjectVisual({ project }: { project: Project }) {
  const v = project.visual;
  return (
    <figure className={'project-visual visual-' + v}>
      <svg viewBox="0 0 480 300" fill="none" fontSize={11} role="img" aria-label={project.category + ' — conceptual architecture illustration'}>
        <defs>
          <marker id={'arrow-' + project.id} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10" fill="currentColor" /></marker>
        </defs>
        {v === 'slides' ? <>
          <rect x="110" y="33" width="280" height="180" rx="7" fill="#c8d4d0" transform="rotate(8 250 123)" />
          <rect x="75" y="57" width="300" height="190" rx="7" fill="#fdfdf9" stroke="#b9c7c0" />
          <rect x="98" y="82" width="7" height="7" fill="#255bd6" />
          <text x="114" y="89" fontSize="9" fill="#59646a">A DOCUMENT, DESIGNED.</text>
          <text x="98" y="127" fontSize="23" fontWeight="600" fill="#202b30">Room for ideas.</text>
          <path d="M98 145H228M98 153H211" stroke="#a4b0a9" strokeWidth="3" />
          <rect x="98" y="176" width="73" height="45" rx="3" fill="#dce6dc" />
          <rect x="179" y="176" width="73" height="45" rx="3" fill="#e7e4db" />
          <rect x="272" y="105" width="78" height="116" rx="3" fill="#c6d5c8" />
          <path d="M285 208V157L311 138L337 157V208M301 208V177H322V208" stroke="#637c68" strokeWidth="2" />
        </> : v === 'spatial' ? <>
          <circle cx="240" cy="150" r="113" stroke="#bac5d6" strokeDasharray="3 6" />
          <path d="M240 23V277M113 150H367M150 60L330 240M150 240L330 60" stroke="#c9d2e0" />
          <rect x="157" y="68" width="166" height="164" fill="#fbfcff" stroke="#4e6480" strokeWidth="2" />
          <path d="M157 137H248V68M248 137H323M230 137V232M230 189H323M193 137V196H157" stroke="#4e6480" strokeWidth="2" />
          <path d="M250 150H309V178H250Z" fill="#d2ddf4" />
          <path d="M172 84H232V121H172Z" fill="#dce7df" />
          <path d="M244 206H309V219H244Z" fill="#e9dfc7" />
          <text x="240" y="18" textAnchor="middle" fontSize="10" fill="#59646a">N</text>
          <circle cx="240" cy="150" r="4" fill="#255bd6" />
        </> : <>
          <path d="M118 150H190M290 150H362" stroke="#8b9ba5" strokeWidth="1.5" markerEnd={'url(#arrow-' + project.id + ')'} />
          <rect x="35" y="113" width="91" height="74" rx="10" fill="#fafbf9" stroke="#bac5c4" />
          <rect x="190" y="100" width="100" height="100" rx="14" fill="#255bd6" />
          <rect x="355" y="113" width="91" height="74" rx="10" fill="#fafbf9" stroke="#bac5c4" />
          {v === 'agents' ? <>
            <path d="M240 100V51H338M240 200V249H338" stroke="#8b9ba5" />
            <rect x="338" y="33" width="74" height="36" rx="6" fill="#fafbf9" stroke="#bac5c4" />
            <rect x="338" y="231" width="74" height="36" rx="6" fill="#fafbf9" stroke="#bac5c4" />
            <text x="375" y="55" textAnchor="middle">Search</text><text x="375" y="253" textAnchor="middle">Support</text>
          </> : null}
          {v === 'prediction' ? <path d="M213 176L226 156L239 164L252 134L267 123" stroke="white" strokeWidth="2.5" /> : v === 'voice' ? <path d="M214 150H220L225 131L231 170L237 119L243 181L249 138L255 160L261 150H267" stroke="white" strokeWidth="2" /> : v === 'documents' ? <>
            <path d="M222 125H252L260 133V177H222Z" stroke="white" strokeWidth="2" /><path d="M230 143H252M230 152H252M230 161H244" stroke="white" strokeWidth="1.5" />
          </> : <>
            <circle cx="237" cy="146" r="16" stroke="white" strokeWidth="2" /><path d="M249 159L262 172" stroke="white" strokeWidth="2" />
          </>}
          {v === 'agents' && <text x="240" y="155" textAnchor="middle" fill="white">Coordinator</text>}
          <text x="80" y="155" textAnchor="middle">{v === 'prediction' ? 'Features' : v === 'documents' ? 'Document' : v === 'voice' ? 'Speech' : v === 'agents' ? 'Request' : 'Question'}</text>
          <text x="400" y="155" textAnchor="middle">{v === 'prediction' ? 'Estimate' : v === 'documents' ? 'JSON' : v === 'voice' ? 'Calendar' : v === 'agents' ? 'Tools' : 'Context'}</text>
          <text x="240" y="223" textAnchor="middle" fill="#59646a">{v === 'prediction' ? 'Train · evaluate · serve' : v === 'documents' ? 'Extract · compare · review' : v === 'voice' ? 'Listen · reason · respond' : v === 'agents' ? 'Context-aware orchestration' : 'Retrieve · rerank · generate'}</text>
        </>}
      </svg>
      <figcaption>Conceptual illustration · {project.visual === 'slides' ? 'Document to presentation' : project.visual === 'spatial' ? 'Vision meets geometry' : 'Workflow architecture'}</figcaption>
    </figure>
  );
}
