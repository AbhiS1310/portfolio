export type ProjectKind = 'Employer project' | 'Personal project';
export interface Project {
  id: string;
  title: string;
  category: string;
  organization: string;
  kind: ProjectKind;
  status?: string;
  description: string;
  problem: string;
  contributions: string[];
  architecture: { title: string; detail: string }[];
  limitations: string;
  stack: string[];
  repository?: string;
  demo?: string;
  visual: 'slides' | 'spatial' | 'agents' | 'prediction' | 'documents' | 'voice' | 'retrieval';
}
export const bio = {
  name: 'Abhishek Chaudhary',
  role: 'AI/ML Engineer',
  location: 'Gurugram / NCR, India',
  email: 'chaudhary.abhi627@gmail.com',
  github: 'https://github.com/AbhiS1310',
  linkedin: 'https://www.linkedin.com/in/abhis1310/',
  resume: 'https://drive.google.com/file/d/18MC6QcycC4HnE7uWRYMgtAIS6apGiThr/view?usp=drive_link',
};
export const projects: Project[] = [
  {
    id: 'designdeck', title: 'From a brief to an editable presentation.',
    category: 'Generative AI · Document engineering', organization: 'Square Yards',
    kind: 'Employer project', status: 'Pre-release', visual: 'slides',
    description: 'DesignDeck connects LLM-authored markup, validated slide documents, and an editor that carries the layout through to export.',
    problem: 'Generated presentations need a dependable document structure that can be edited and exported—not just a picture of a slide.',
    contributions: [
      'Contributed DDML parsing and recursive document-validation workflows for generated slide layouts.',
      'Developed editing workflows with Next.js and ProseMirror.',
      'Worked on browser-measured layout compilation for editable PPTX and PDF output.',
    ],
    architecture: [
      { title: 'Compose', detail: 'LLM-generated DDML describes the slide content and layout.' },
      { title: 'Validate', detail: 'Parse markup into recursive slide documents and check their structure.' },
      { title: 'Edit', detail: 'Use the document in a Next.js / ProseMirror editing workflow.' },
      { title: 'Export', detail: 'Measure browser geometry and compile presentation elements.' },
    ],
    limitations: 'Pre-release work. Editable export has format-specific limitations; no universal fidelity or generation-speed guarantee is claimed.',
    stack: ['TypeScript', 'Next.js', 'ProseMirror', 'Express', 'PPTX / PDF'],
  },
  {
    id: 'spatial', title: 'Making floor plans readable to software.',
    category: 'Multimodal AI · Spatial reasoning', organization: 'Square Yards',
    kind: 'Employer project', visual: 'spatial',
    description: 'Vision-based floor-plan interpretation meets deterministic geometry and 16-zone Vaastu evaluation, with reports people can inspect.',
    problem: 'An architectural image needs to become explicit geometry before spatial rules can be evaluated consistently.',
    contributions: [
      'Built workflows connecting Gemini vision with deterministic geometric analysis and 16-zone rules evaluation.',
      'Connected analysis results to interactive reports and PDF dossiers.',
      'Integrated Express/TypeScript services, PostgreSQL/Prisma persistence, and model usage telemetry.',
      'Explored constrained multi-agent floor-plan generation as a separate experimental workflow.',
    ],
    architecture: [
      { title: 'Interpret', detail: 'Extract spatial information from a floor-plan image with Gemini.' },
      { title: 'Assemble', detail: 'Normalize geometry and room relationships for analysis.' },
      { title: 'Evaluate', detail: 'Apply deterministic spatial rules rather than asking a model to invent scores.' },
      { title: 'Explain', detail: 'Present results in an interactive report and PDF dossier.' },
    ],
    limitations: 'Analysis depends on the quality of extracted geometry. Floor-plan generation remains experimental; compliance scores are not building-safety certifications.',
    stack: ['Gemini vision', 'TypeScript', 'Computational geometry', 'PostgreSQL'],
  },
  {
    id: 'travel-agents', title: 'Specialist agents. One travel workflow.',
    category: 'Agentic AI · Tool integration', organization: 'Mondee',
    kind: 'Employer project', visual: 'agents',
    description: 'A travel coordinator routes requests across specialist agents, with modular MCP tools connecting conversations to travel services.',
    problem: 'Travel requests cross search, itinerary planning, booking changes, and support—each with different tools and request structures.',
    contributions: [
      'Developed Google ADK and Gemini workflows connecting a coordinator to 20 specialist agents.',
      'Built modular FastMCP interfaces for travel APIs with typed request handling and service-level error handling.',
      'Connected itinerary context and conversation state to structured requests and UI responses.',
    ],
    architecture: [
      { title: 'Understand', detail: 'Use conversation and itinerary context to interpret a request.' },
      { title: 'Route', detail: 'Delegate search, planning, cancellation, or support to a specialist.' },
      { title: 'Call tools', detail: 'Expose service integrations through modular FastMCP tools.' },
      { title: 'Respond', detail: 'Return structured results for downstream travel interfaces.' },
    ],
    limitations: 'Tool outcomes depend on upstream travel services. Agent count describes the implemented coordinator roster, not a measured automation rate.',
    stack: ['Python', 'Google ADK', 'Gemini', 'FastMCP', 'Travel APIs'],
  },
  {
    id: 'travel-ml', title: 'Putting travel data to work.',
    category: 'Applied ML · Recommendations', organization: 'Mondee',
    kind: 'Employer project', visual: 'prediction',
    description: 'Recommendation scoring and PyTorch pricing pipelines connect data preparation, model evaluation, and usable API services.',
    problem: 'Personalized discovery and price estimation need reproducible data preparation and a practical route from models to applications.',
    contributions: [
      'Contributed to customer/product segmentation and recommendation scoring for flights and experiences.',
      'Worked on PyTorch hotel and flight pricing pipelines with preprocessing and mini-batch training.',
      'Used train/test evaluation with MAE, MSE, and R-squared; exposed training and inference through FastAPI services.',
    ],
    architecture: [
      { title: 'Prepare', detail: 'Map source data into model features and recommendation inputs.' },
      { title: 'Model', detail: 'Train pricing networks and apply segmentation or interest-based scoring.' },
      { title: 'Evaluate', detail: 'Inspect regression errors on held-out data.' },
      { title: 'Serve', detail: 'Make training and inference available through FastAPI.' },
    ],
    limitations: 'No accuracy uplift or commercial outcome is claimed without a reproducible benchmark. Predictions depend on the source data and its coverage.',
    stack: ['PyTorch', 'Pandas', 'scikit-learn', 'FastAPI', 'Python'],
  },
  {
    id: 'documents', title: 'From medical documents to structured data.',
    category: 'Document intelligence · Multimodal AI', organization: 'DigiQuanta',
    kind: 'Employer project', visual: 'documents',
    description: 'Qwen2.5-VL extraction workflows turn document information into JSON, with field-level comparisons against reference data.',
    problem: 'Document extraction needs inspectable outputs and a way to identify mismatched fields before the data moves downstream.',
    contributions: [
      'Developed medical-document extraction workflows using Qwen2.5-VL and structured JSON output.',
      'Implemented field-level comparisons against reference JSON to identify unmatched information.',
      'Explored queued GPU inference for document-processing tasks.',
    ],
    architecture: [
      { title: 'Read', detail: 'Provide document images to a multimodal extraction workflow.' },
      { title: 'Extract', detail: 'Generate structured information using Qwen2.5-VL.' },
      { title: 'Compare', detail: 'Compare extracted fields with reference JSON.' },
    ],
    limitations: 'Extraction requires validation and may need human review. No patient data, medical records, or private examples are presented here.',
    stack: ['Python', 'Qwen2.5-VL', 'Hugging Face', 'Flask'],
  },
  {
    id: 'voice', title: 'A conversation that reaches the calendar.',
    category: 'Voice AI · Personal project', organization: 'Independent',
    kind: 'Personal project', visual: 'voice',
    description: 'A streaming scheduling assistant connects speech recognition, conversational state, speech synthesis, and Google Calendar tools.',
    problem: 'Voice scheduling needs to carry context between spoken turns and translate the conversation into calendar actions.',
    contributions: [
      'Built a streaming speech workflow using AssemblyAI, Cartesia, and WebSockets.',
      'Used LangGraph to manage conversation state and Google Calendar tool calls.',
    ],
    architecture: [
      { title: 'Listen', detail: 'Stream speech to AssemblyAI over the application audio workflow.' },
      { title: 'Reason', detail: 'Maintain dialogue state with LangGraph and call scheduling tools.' },
      { title: 'Speak', detail: 'Stream synthesized responses with Cartesia.' },
    ],
    limitations: 'Personal project; no independently verified latency, intent-accuracy, or scheduling-automation benchmark is claimed.',
    stack: ['LangGraph', 'WebSockets', 'AssemblyAI', 'Cartesia', 'FastAPI'],
    repository: 'https://github.com/AbhiS1310/Voice-Assistant',
  },
  {
    id: 'retrieval', title: 'Finding context before generating answers.',
    category: 'RAG · Personal project', organization: 'Independent',
    kind: 'Personal project', visual: 'retrieval',
    description: 'TechCorp RAG ChatBot combines document embeddings, vector retrieval, and reranking behind a FastAPI service.',
    problem: 'Document question answering needs a retrieval step that surfaces relevant context before a model produces a response.',
    contributions: [
      'Built a document question-answering project using embeddings and vector retrieval.',
      'Connected retrieval and reranking to a Python / FastAPI service.',
    ],
    architecture: [
      { title: 'Index', detail: 'Prepare document chunks and their embedding representations.' },
      { title: 'Retrieve', detail: 'Search the vector index for relevant context.' },
      { title: 'Rerank', detail: 'Prioritize candidate context before answer generation.' },
    ],
    limitations: 'Personal project; retrieval does not guarantee factual answers. Dataset scale, uptime, and accuracy figures are omitted without benchmark evidence.',
    stack: ['Python', 'FAISS', 'Sentence Transformers', 'FastAPI', 'Docker'],
    repository: 'https://github.com/AbhiS1310/TechCorp_RAG_ChatBot',
  },
];
export const experiences = [
  { company: 'Square Yards', role: 'AI/ML Engineer', date: 'Mar 2026 — Present', summary: 'AI product engineering across presentation generation, editing/export workflows, and spatial intelligence.', skills: 'TypeScript · Next.js · Gemini · PostgreSQL' },
  { company: 'Mondee', role: 'AI Developer', date: 'Apr 2025 — Oct 2025', summary: 'Travel-agent orchestration, MCP integrations, recommendation systems, and predictive pricing services.', skills: 'Python · Google ADK · FastMCP · PyTorch · FastAPI' },
  { company: 'DigiQuanta', role: 'AI Developer', date: 'Dec 2024 — Apr 2025', summary: 'Multimodal medical-document extraction and reference-based field comparison.', skills: 'Python · Qwen2.5-VL · Hugging Face · Flask' },
  { company: 'Enthuons Technologies', role: 'Back End Developer · Internship', date: 'Jan 2024 — Jun 2024', summary: 'Backend development internship using Node.js and MongoDB.', skills: 'Node.js · MongoDB' },
];
export const skills = [
  { title: 'AI applications', items: ['Google ADK', 'LangGraph', 'MCP / FastMCP', 'Gemini', 'RAG', 'OpenAI APIs'] },
  { title: 'Applied machine learning', items: ['PyTorch', 'scikit-learn', 'Hugging Face', 'Pandas', 'NumPy', 'Model evaluation'] },
  { title: 'Product engineering', items: ['Python', 'TypeScript', 'FastAPI', 'Express', 'Next.js', 'ProseMirror', 'PostgreSQL', 'Docker'] },
];
