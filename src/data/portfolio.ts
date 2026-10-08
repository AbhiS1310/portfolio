// Enhanced data structure with more details for portfolio projects
// This replaces the old constants.js structure

export interface Project {
  id: number;
  title: string;
  date: string;
  description: string;
  fullDescription?: string; // Detailed description for modal
  image: string;
  tags: string[];
  category: string;
  github: string;
  webapp: string;
  features?: string[]; // Key features of the project
  challenges?: string[]; // Challenges faced
  solutions?: string[]; // How you solved them
  metrics?: {
    label: string;
    value: string;
  }[]; // Performance metrics
  keyContributions?: string[]; // Your specific contributions
}

export interface Experience {
  id: number;
  img: string;
  role: string;
  company: string;
  date: string;
  desc: string;
  skills: string[];
  doc?: string;
  fullDescription?: string;
  achievements?: string[];
  technologies?: string[];
  keyMetrics?: {
    label: string;
    value: string;
  }[];
}

export interface Skill {
  name: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const projects: Project[] = [
  {
    id: 6,
    title: "Real-Time Voice Scheduling Agent",
    date: "January 2026",
    description:
      "Designed an ultra-low-latency (<400ms) voice-to-voice AI pipeline for automated meeting scheduling using WebSockets, AssemblyAI, Cartesia, and a stateful LangGraph agent.",
    fullDescription:
      "A production-grade voice-first AI scheduling agent designed to handle real-time conversational meeting workflows. The pipeline ingests streaming raw PCM audio from the browser over WebSockets, performs speech-to-text with AssemblyAI, orchestrates multi-turn state machine logic via a stateful LangGraph agent, and generates ultra-low-latency synthesized speech via Cartesia. The agent autonomously parses natural language scheduling intent, checks availability, resolves conflicts, and programmatically creates calendar events via Google Calendar API.",
    image: "voice-agent.png",
    tags: ["LangGraph", "WebSockets", "AssemblyAI", "Cartesia", "Python", "Google Calendar API", "FastAPI"],
    category: "Generative AI",
    github: "https://github.com/AbhiS1310/Voice-Assistant.git",
    webapp: "",
    features: [
      "Real-time streaming voice-to-voice communication via WebSockets",
      "Stateful conversational agent managing 5+ multi-turn workflow states",
      "Streaming STT and Cartesia TTS for ultra-low latency (<400ms)",
      "Automated Google Calendar event creation and conflict resolution",
      "Multi-turn context tracking with 95% intent resolution accuracy",
      "Unified event-driven protocol for granular audio chunk delivery",
    ],
    challenges: [
      "Minimizing end-to-end voice roundtrip latency below 400ms",
      "Handling asynchronous audio streams without blocking LLM reasoning",
      "Resolving complex calendar conflicts and ambiguous date/time mentions via voice",
      "Preventing speech interruptions during streaming audio playback",
    ],
    solutions: [
      "Implemented async generators and a producer-consumer pattern for the audio pipeline",
      "Used ultra-fast LLM inference to minimize context-switching latency",
      "Developed custom validation logic within LangGraph for multi-slot calendar parameters",
      "Created a robust WebSocket protocol with granular event types (stt_chunk, tts_chunk)",
    ],
    metrics: [
      { label: "Audio Latency", value: "<400ms" },
      { label: "Intent Accuracy", value: "95%" },
      { label: "Workflow States", value: "5+ States" },
      { label: "Scheduling Automation", value: "100%" },
    ],
    keyContributions: [
      "Designed the multi-stage async generator streaming pipeline",
      "Built the stateful LangGraph agent logic and Google Calendar tool calling",
      "Engineered the WebSocket communication protocol for concurrent audio buffers",
      "Tuned STT and TTS streaming buffers for sub-400ms responsiveness",
    ],
  },
  {
    id: 7,
    title: "DesignDeck — AI Presentation Engine",
    date: "March 2026",
    description:
      "Architected an enterprise generative slide engine featuring a recursive DDML layout pipeline with 0 parser errors, Next.js ProseMirror editor, and 100% vector fidelity PPTX export.",
    fullDescription:
      "DesignDeck is an enterprise AI presentation authoring engine that allows LLMs to design multi-slide decks with recursive layouts. Developed a custom DDML (XML DSL) layout pipeline that eliminates parser errors and ensures 100% schema compliance. Integrated a multi-agent generation pipeline producing 15-20 slide decks in <60 seconds, accompanied by a custom ProseMirror canvas editor in Next.js with live overset scaling and high-fidelity OpenXML PPTX vector export.",
    image: "",
    tags: ["DDML / XML DSL", "LangGraph", "ProseMirror", "Next.js", "Python", "FastAPI", "OpenXML / PPTX", "Langfuse"],
    category: "Generative AI",
    github: "https://github.com/AbhiS1310",
    webapp: "",
    features: [
      "Custom DDML (XML DSL) layout pipeline with 0 parser errors and 100% schema compliance",
      "Multi-agent slide generator creating 15–20 slide decks in <60 seconds",
      "ProseMirror block-document canvas editor in Next.js with live overset scaling",
      "OpenXML / PPTX export engine with 100% vector fidelity and zero-inset alignment",
      "Full observability with Langfuse tracing and Puppeteer DOM validation",
    ],
    challenges: [
      "Preventing LLM hallucinations in deeply nested slide layout hierarchies",
      "Eliminating text truncation and layout oversets across varying content lengths",
      "Translating browser DOM layouts into native PowerPoint OpenXML shapes with exact positioning",
    ],
    solutions: [
      "Engineered a rigid DDML schema with deterministic XML validation rules",
      "Built dynamic overset scaling algorithms inside the ProseMirror editor runtime",
      "Architected a custom OpenXML compiler that maps DOM coordinates directly to PPTX EMU dimensions",
    ],
    metrics: [
      { label: "Parser Errors", value: "0" },
      { label: "Deck Gen Time", value: "<60s" },
      { label: "Vector Fidelity", value: "100%" },
      { label: "Deck Scale", value: "15–20 Slides" },
    ],
    keyContributions: [
      "Designed the recursive DDML layout grammar and LLM system prompts",
      "Implemented the Next.js ProseMirror canvas and live overset scaling",
      "Built the native OpenXML export engine achieving pixel-perfect slide replication",
      "Set up Langfuse observability tracing and Puppeteer headless validation",
    ],
  },
  {
    id: 8,
    title: "Enterprise RAG Knowledge Assistant",
    date: "August 2025",
    description:
      "Engineered an enterprise RAG microservice indexing 100K+ technical documents with hybrid vector retrieval, Flashrank cross-encoder reranking, and <200ms retrieval latency.",
    fullDescription:
      "A production-grade Retrieval-Augmented Generation system designed for fast, accurate question-answering over unstructured enterprise knowledge bases. Implements recursive character and semantic chunking, dual-stage hybrid retrieval combining BM25 keyword matching with FAISS vector similarity, and Flashrank cross-encoder reranking to ensure high precision without hallucination. Served via asynchronous FastAPI endpoints with streaming responses and Docker containerization.",
    image: "",
    tags: ["RAG", "FastAPI", "FAISS", "Sentence Transformers", "Docker", "Python", "Weaviate"],
    category: "Artificial Intelligence",
    github: "https://github.com/AbhiS1310/TechCorp_RAG_ChatBot",
    webapp: "",
    features: [
      "Hybrid retrieval combining dense vector embeddings and BM25 sparse keyword search",
      "Cross-encoder reranking for maximum context relevance and zero hallucination",
      "Sub-200ms retrieval latency across 100K+ document chunks",
      "Streaming LLM response generation with exact citation attribution",
      "Asynchronous FastAPI microservice containerized with Docker",
    ],
    challenges: [
      "High retrieval latency when querying large vector spaces (>100K chunks)",
      "Loss of semantic context in long-tail domain-specific technical documents",
      "Handling concurrent user queries without GPU bottlenecking",
    ],
    solutions: [
      "Implemented hierarchical indexing with FAISS IVF-PQ index quantization",
      "Applied cross-encoder reranking over the top 20 retrieved candidates",
      "Optimized asynchronous FastAPI workers and connection pooling",
    ],
    metrics: [
      { label: "Retrieval Latency", value: "<200ms" },
      { label: "Indexed Chunks", value: "100K+" },
      { label: "Answer Accuracy", value: "94%" },
      { label: "Service Uptime", value: "99.9%" },
    ],
    keyContributions: [
      "Built end-to-end data ingestion pipeline and semantic chunking modules",
      "Integrated FAISS vector index with cross-encoder reranker",
      "Developed high-throughput FastAPI endpoints with streaming SSE support",
      "Containerized service using multi-stage Docker builds for production deployment",
    ],
  },
  {
    id: 9,
    title: "Spatial Intelligence & Vaastu AI Engine",
    date: "April 2026",
    description:
      "Built a 7-agent hierarchical floor plan generation system and a 2-stage Gemini spatial audit engine evaluating 16 zones in <3s, boosting compliance scores from 35 to 65+.",
    fullDescription:
      "An advanced spatial AI system combining generative LLM hierarchies with computational geometry algorithms. Features a 2-stage Gemini pipeline with polygon intersection solvers to evaluate architectural compliance across 16 directional zones in <3 seconds. Powered by the Floorplan-Agents multi-agent hierarchy with constraint satisfaction solvers to generate compliant floor plans reaching ≥75 Vaastu scores.",
    image: "",
    tags: ["Multi-Agent Systems", "Gemini 2.5", "Computational Geometry", "Python", "FastAPI", "Constraint Solvers"],
    category: "Artificial Intelligence",
    github: "https://github.com/AbhiS1310",
    webapp: "",
    features: [
      "2-stage Gemini vision & geometry pipeline auditing 16 spatial zones in <3 seconds",
      "Dynamic room weighting and remedial simulation boosting scores from 35 to 65+",
      "Floorplan-Agents 7-agent hierarchical generation with constraint satisfaction solvers",
      "Automated executive PDF compliance reports with interactive geometric overlays",
      "Generates architectural floor plans achieving ≥75 Vaastu compliance scores",
    ],
    challenges: [
      "Translating non-standard architectural blueprints into normalized geometric coordinate systems",
      "Complex constraint satisfaction across 16 overlapping directional zones",
      "Balancing architectural viability with strict spatial rule compliance",
    ],
    solutions: [
      "Combined Gemini multimodal extraction with Shapely polygon geometry solvers",
      "Implemented a hierarchical multi-agent workflow separating room zoning from boundary solving",
      "Built a remedial recommendation simulator dynamically re-evaluating room layouts",
    ],
    metrics: [
      { label: "Audit Latency", value: "<3s" },
      { label: "Spatial Zones", value: "16 Zones" },
      { label: "Compliance Boost", value: "35 → 65+" },
      { label: "Floorplan Score", value: "≥75" },
    ],
    keyContributions: [
      "Architected the 2-stage Gemini audit pipeline and polygon intersection math",
      "Engineered the remedial simulator with dynamic room weighting",
      "Built the 7-agent Floorplan-Agents hierarchical orchestration engine",
      "Integrated automated PDF report generation and FastAPI service",
    ],
  },
  {
    id: 0,
    title: "Text Summarizer",
    date: "June 2024",
    description:
      "Built a text summarization tool using NLP techniques to automatically generate concise summaries of dialogues. Achieved 20% improvement in summary coherence.",
    fullDescription:
      "An advanced NLP-based text summarization tool that uses transformer models to generate accurate and coherent summaries of long-form text. The application features both extractive and abstractive summarization techniques, achieving a 20% improvement in summary coherence and relevance through careful data preprocessing and hyperparameter tuning.",
    image: "summarizer.png",
    tags: ["Python", "Pandas", "Pytorch", "FastAPI", "Hugging Face Transformers", "AWS", "Docker"],
    category: "machine learning",
    github: "https://github.com/AbhiS1310/TextSummarizer",
    webapp: "",
    features: [
      "Abstractive text summarization using transformers",
      "Extractive summarization fallback",
      "Support for multiple languages",
      "Adjustable summary length",
      "RESTful API with FastAPI",
      "Docker containerization for easy deployment",
      "AWS deployment with scalability",
    ],
    challenges: [
      "Improving summary coherence and relevance",
      "Handling long documents efficiently",
      "Optimizing model inference time",
      "Managing memory constraints during inference",
    ],
    solutions: [
      "Fine-tuned Hugging Face transformer models on custom datasets",
      "Implemented text chunking for long documents",
      "Used quantization and model distillation for faster inference",
      "Deployed on AWS with auto-scaling",
    ],
    metrics: [
      { label: "Coherence Score", value: "0.92/1.0" },
      { label: "Avg Inference", value: "2.5s" },
      { label: "ROUGE Score", value: "0.45" },
    ],
    keyContributions: [
      "Researched and selected optimal transformer models",
      "Fine-tuned models on domain-specific data",
      "Built FastAPI backend",
      "Deployed on AWS with Docker",
    ],
  },
  {
    id: 1,
    title: "Student Performance Predictor",
    date: "May 2024",
    description:
      "Developed a model to predict student performance in math using factors like gender, scores, and test prep data. Achieved robust predictions with comprehensive model evaluation.",
    fullDescription:
      "A machine learning model that predicts student math performance based on various factors including gender, previous scores, study hours, and test preparation status. The model was built using scikit-learn with comprehensive data preprocessing, feature engineering, and model evaluation. Achieved high accuracy through careful hyperparameter tuning and cross-validation.",
    image: "performance.png",
    tags: ["Python", "Machine learning", "Pandas", "Flask", "Pickle", "AWS", "Docker"],
    category: "machine learning",
    github: "https://github.com/AbhiS1310/mlproject",
    webapp: "",
    features: [
      "Multi-factor performance prediction",
      "Data preprocessing and feature engineering",
      "Model comparison and selection",
      "Flask API for predictions",
      "Docker containerization",
      "AWS deployment",
      "Model persistence with Pickle",
    ],
    challenges: [
      "Handling imbalanced dataset",
      "Feature engineering for better predictions",
      "Selecting the best model",
      "Deployment and scalability",
    ],
    solutions: [
      "Used SMOTE for handling imbalanced data",
      "Performed extensive feature engineering and correlation analysis",
      "Compared multiple algorithms (Random Forest, XGBoost, SVM)",
      "Deployed with Docker on AWS EC2",
    ],
    metrics: [
      { label: "Accuracy", value: "92%" },
      { label: "Precision", value: "0.91" },
      { label: "Recall", value: "0.89" },
      { label: "F1-Score", value: "0.90" },
    ],
    keyContributions: [
      "Performed data analysis and preprocessing",
      "Engineered predictive features",
      "Trained and evaluated multiple models",
      "Built Flask API and deployment pipeline",
    ],
  },
  {
    id: 2,
    title: "Ecommerce Website",
    date: "Jun 2023 - Jul 2023",
    description:
      "Built a full-featured e-commerce website with functionalities like product browsing, secure payment processing via Stripe, and real-time cart management.",
    fullDescription:
      "A comprehensive e-commerce platform that enables users to browse products, add them to cart, and complete purchases securely. The seller dashboard allows vendors to manage their products, orders, and earnings in real-time. Integrated real-time chat functionality using WebSocket and Socket.io for customer support.",
    image: "ecommerce.png",
    tags: ["React Js", "MongoDb", "Node Js", "Express Js", "Redux", "Stripe", "Cloudinary"],
    category: "web app",
    github: "https://github.com/AbhiS1310/EcommerceWebsite",
    webapp: "https://ecommerce-web-peach.vercel.app/",
    features: [
      "Product browsing with filters and search",
      "Secure payment processing with Stripe",
      "Real-time cart management",
      "Seller dashboard for product management",
      "Real-time chat with WebSocket",
      "Order tracking and history",
      "User authentication and profiles",
    ],
    challenges: [
      "Implementing real-time updates across multiple clients",
      "Ensuring secure payment processing",
      "Managing state across the entire application",
      "Scaling the database for high traffic",
    ],
    solutions: [
      "Used Socket.io for real-time WebSocket connections",
      "Integrated Stripe API for secure payments",
      "Implemented Redux for global state management",
      "Optimized MongoDB queries and added indexing",
    ],
    metrics: [
      { label: "Users", value: "500+" },
      { label: "Transactions", value: "1000+" },
      { label: "Uptime", value: "99.5%" },
      { label: "Load Time", value: "<2s" },
    ],
    keyContributions: [
      "Built entire frontend architecture with React and Redux",
      "Designed and implemented backend APIs with Node.js and Express",
      "Integrated Stripe for payment processing",
      "Implemented real-time chat feature with Socket.io",
    ],
  },
  {
    id: 3,
    title: "iNotebook",
    date: "June 2022",
    description:
      "Developed a full-stack web application that allows users to maintain their notes (Create, Update, Delete). Implemented user authentication using JWT Auth.",
    fullDescription:
      "A Note-taking application built with React and Node.js that allows users to securely store and manage their notes. Features include user authentication with JWT tokens, note CRUD operations, and a responsive design that works seamlessly across all devices.",
    image: "inotebook.png",
    tags: ["React Js", "MongoDb", "Node Js", "Express Js", "Redux"],
    category: "web app",
    github: "https://github.com/AbhiS1310/iNotebook",
    webapp: "",
    features: [
      "User registration and login with JWT authentication",
      "Create, read, update, and delete notes",
      "Organize notes with categories and tags",
      "Search functionality for quick note retrieval",
      "Responsive design for all devices",
      "Auto-save functionality",
    ],
    challenges: [
      "Implementing secure JWT-based authentication",
      "Ensuring data persistence and synchronization",
      "Managing state across the application",
    ],
    solutions: [
      "Implemented JWT tokens with secure headers",
      "Used MongoDB for reliable data persistence",
      "Implemented Redux for efficient state management",
    ],
    metrics: [
      { label: "Notes Created", value: "10K+" },
      { label: "Users", value: "200+" },
      { label: "Avg Response Time", value: "150ms" },
    ],
    keyContributions: [
      "Designed and implemented full authentication system",
      "Built note management APIs",
      "Created responsive UI with React",
    ],
  },
  {
    id: 4,
    title: "NewsApp",
    date: "May 2022",
    description:
      "Developed a fully responsive frontend application using Reactjs. Let users browse current news around the world and offered flexibility in selecting news categories.",
    fullDescription:
      "A news aggregation application that fetches real-time news from various sources using the NewsAPI. Users can browse news by categories, search for specific topics, and read full articles. The application features a clean, responsive design that works perfectly on mobile, tablet, and desktop devices.",
    image: "newsapp.png",
    tags: ["React Js", "HTML", "CSS", "Bootstrap", "NewsApi"],
    category: "web app",
    github: "https://github.com/AbhiS1310/NewsApp_project",
    webapp: "",
    features: [
      "Real-time news fetching from NewsAPI",
      "Multiple news categories (Technology, Business, Sports, etc.)",
      "Search functionality for specific topics",
      "Responsive design for all screen sizes",
      "Article filtering by date and source",
      "Infinite scroll for loading more articles",
    ],
    challenges: [
      "Handling API rate limits",
      "Optimizing component re-renders",
      "Ensuring responsive design",
    ],
    solutions: [
      "Implemented pagination and caching strategies",
      "Used React.memo and useCallback for optimization",
      "Used CSS media queries for responsive design",
    ],
    metrics: [
      { label: "Articles Loaded", value: "100K+" },
      { label: "Page Load", value: "<1s" },
      { label: "Avg Session", value: "8 min" },
    ],
    keyContributions: [
      "Built entire React frontend",
      "Integrated NewsAPI",
      "Implemented responsive design",
    ],
  },
  {
    id: 5,
    title: "Blockchain Smart Contracts",
    date: "May 2023",
    description:
      "Created Smart Contracts on Solidity for exchanging tokens and deploying new tokens on blockchain.",
    fullDescription:
      "A blockchain project that demonstrates expertise in creating and deploying smart contracts on the Ethereum network. The project includes token creation, token exchange mechanisms, and transaction management using Solidity. Provides a practical implementation of blockchain technology with real-world token economics.",
    image: "",
    tags: ["BlockChain", "Solidity", "Ethereum", "Reactjs"],
    category: "blockchain",
    github: "https://github.com/AbhiS1310/Blockchain-project",
    webapp: "",
    features: [
      "ERC-20 token creation and deployment",
      "Token exchange and transfer mechanism",
      "Smart contract security implementations",
      "React frontend for contract interaction",
      "Real-time transaction tracking",
      "Wallet integration",
    ],
    challenges: [
      "Understanding blockchain architecture",
      "Writing secure smart contracts",
      "Gas optimization",
      "Integration with Web3.js",
    ],
    solutions: [
      "Studied Ethereum and Solidity documentation",
      "Implemented security best practices",
      "Optimized contract code for gas efficiency",
      "Integrated React with Web3.js",
    ],
    metrics: [
      { label: "Contracts Deployed", value: "5+" },
      { label: "Transactions", value: "1000+" },
      { label: "Gas Efficiency", value: "Optimized" },
    ],
    keyContributions: [
      "Designed and coded smart contracts",
      "Implemented token economics",
      "Created web interface for interactions",
    ],
  },
];

export const experiences: Experience[] = [
  {
    id: 0,
    img: "",
    role: "AI Engineer",
    company: "Square Yards",
    date: "Mar 2026 - Present",
    desc: "Architecting generative AI document layout pipelines and spatial intelligence multi-agent systems. Built the DesignDeck DDML layout engine with 0 parser errors and the real-time Vaastu AI audit engine evaluating 16 spatial zones in <3s.",
    fullDescription:
      "As an AI Engineer at Square Yards, I architect production-grade Generative AI pipelines and multi-agent systems. I designed DesignDeck's recursive DDML layout engine with 0 parser errors and 100% schema compliance, an end-to-end multi-agent slide deck generator creating 15-20 slides in <60s, and an OpenXML PPTX export engine with 100% vector fidelity. Additionally, I spearheaded the Vaastu AI spatial audit engine and the Floorplan-Agents 7-agent hierarchical generation system.",
    achievements: [
      "Architected DesignDeck's DDML layout pipeline, enabling LLMs to author recursive slide structures with 0 parser errors and 100% schema compliance",
      "Orchestrated a multi-agent generation pipeline producing 15–20 slide decks in <60 seconds, integrating archetype batch filling, Langfuse observability tracing, and Puppeteer DOM validation",
      "Engineered a ProseMirror canvas editor in Next.js with live overset scaling and built an OpenXML/PPTX export engine delivering 100% vector fidelity",
      "Spearheaded the production Vaastu AI audit engine, combining a 2-stage Gemini pipeline with geometry solvers to evaluate 16 spatial zones in <3 seconds",
      "Formulated a remedial simulator with dynamic room weighting, boosting floor plan compliance scores from 35 to 65+ across automated executive PDF reports",
      "Pioneered the Floorplan-Agents system, coordinating a 7-agent hierarchy with constraint solvers to generate compliant floor plans achieving ≥75 Vaastu scores",
    ],
    skills: [
      "Generative AI",
      "Multi-Agent Systems",
      "LangGraph",
      "Python",
      "FastAPI",
      "Next.js",
      "ProseMirror",
      "OpenXML / PPTX",
      "Langfuse",
    ],
    technologies: [
      "LangGraph",
      "Gemini 2.5",
      "DDML / XML DSL",
      "ProseMirror",
      "Next.js",
      "FastAPI",
      "OpenXML / PPTX",
      "Puppeteer",
      "Langfuse",
      "Docker",
    ],
    keyMetrics: [
      { label: "Parser Errors", value: "0" },
      { label: "Deck Generation", value: "<60s" },
      { label: "Vector Export Fidelity", value: "100%" },
      { label: "Spatial Zone Audit", value: "<3s" },
      { label: "Compliance Score Boost", value: "35 → 65+" },
      { label: "Floorplan Score", value: "≥75" },
    ],
    doc: "",
  },
  {
    id: 1,
    img: "https://media.licdn.com/dms/image/v2/D560BAQGuqOz9OcB3SA/company-logo_200_200/company-logo_200_200/0/1716242429236?e=1753920000&v=beta&t=Wn3J2OdTDQ1Et42hFFpQdMrpje0OG89D9kC_FCyZA5Y",
    role: "AI Developer",
    company: "DigiQuanta / Mondee",
    date: "Dec 2024 - Oct 2025",
    desc: "Developed an autonomous travel ecosystem of 20+ agents using Google ADK & Gemini, deployed a FastMCP server hosting 20+ tools with <150ms latency, and built enterprise RAG microservices over 100K+ chunks with <200ms retrieval latency.",
    fullDescription:
      "Engineered production multi-agent travel systems, low-latency microservices, and multimodal document intelligence pipelines. Developed an autonomous travel system of 20+ specialized agents using Google ADK and Gemini, automating 85% of itinerary planning and booking workflows. Deployed a high-throughput FastMCP server hosting 20+ travel tools with <150ms execution latency. Implemented FastAPI microservices powering enterprise RAG pipelines over 100K+ document chunks with <200ms retrieval latency via cross-encoder reranking. Automated 95% of manual medical data extraction using Qwen2.5-VL, Llama 3.1, and PaddleOCR, and fine-tuned LayoutLMv3 to 98% accuracy.",
    achievements: [
      "Developed an autonomous travel system of 20+ agents using Google ADK and Gemini, automating 85% of itinerary planning and booking workflows",
      "Deployed a FastMCP server hosting 20+ travel tools, achieving <150ms tool execution latency for real-time external API integrations and schema validation",
      "Implemented FastAPI microservices powering enterprise RAG pipelines over 100K+ document chunks, maintaining <200ms retrieval latency via cross-encoder reranking",
      "Automated 95% of manual medical data extraction by deploying multimodal pipelines using Qwen2.5-VL, Llama 3.1, and PaddleOCR",
      "Fine-tuned LayoutLMv3 for document classification with 98% accuracy (cutting QA effort by 90%) and trained custom YOLO models achieving 95% signature precision",
      "Created patient risk scoring and rehospitalization prediction models, reaching 75% predictive accuracy",
    ],
    skills: [
      "Agentic AI",
      "Multi-Agent Systems",
      "RAG",
      "FastMCP / MCP",
      "FastAPI",
      "Python",
      "PyTorch",
      "LayoutLMv3",
      "YOLO",
      "Docker",
    ],
    technologies: [
      "Google ADK",
      "Gemini API",
      "FastMCP",
      "FastAPI",
      "Qwen 2.5-VL",
      "Llama 3.1",
      "LayoutLMv3",
      "PaddleOCR",
      "YOLO",
      "FAISS",
      "Docker",
      "AWS",
    ],
    keyMetrics: [
      { label: "Workflow Automation", value: "85%" },
      { label: "Tool Execution Latency", value: "<150ms" },
      { label: "RAG Retrieval Latency", value: "<200ms" },
      { label: "Classification Accuracy", value: "98%" },
      { label: "Manual Extraction Cut", value: "95%" },
      { label: "Signature Precision", value: "95%" },
    ],
    doc: "",
  },
  {
    id: 2,
    img: "https://media.licdn.com/dms/image/v2/C510BAQHrIB0srJqHLw/company-logo_200_200/company-logo_200_200/0/1630586257062/enthuons_logo?e=1731542400&v=beta&t=MCBYmoOpPD5azwHO8CYetbbOGXqINXhUHO8yrYktsSY",
    role: "Backend Developer Intern",
    company: "Enthuons Technologies Pvt. Ltd.",
    date: "Jan 2024 - Jun 2024",
    desc: "Developed 12+ scalable RESTful APIs using Node.js, Express, and Python handling 1,000+ requests/min. Optimized database queries and error handling, reducing backend failures by 20%.",
    fullDescription:
      "During my internship at Enthuons Technologies, I designed and deployed scalable backend microservices, real-time communication modules, and database architectures. Developed 12+ RESTful APIs handling 1,000+ requests per minute, integrated real-time WebSockets, and optimized MongoDB/PostgreSQL schemas to reduce query execution times.",
    achievements: [
      "Designed and deployed 12+ scalable RESTful APIs using Node.js, Express, and Python, supporting 1,000+ requests/min",
      "Built real-time event streaming and live data sync modules using WebSockets and Socket.io",
      "Optimized MongoDB and PostgreSQL queries, indexing, and middleware, reducing backend failure rates by 20%",
      "Collaborated in Agile sprints with regular code reviews, API testing via Postman, and Git CI/CD workflows",
    ],
    skills: [
      "Node.js",
      "Express.js",
      "Python",
      "MongoDB",
      "PostgreSQL",
      "WebSockets",
      "RESTful APIs",
      "Git",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "Python",
      "MongoDB",
      "PostgreSQL",
      "WebSockets",
      "Socket.io",
      "Postman",
      "Git",
    ],
    keyMetrics: [
      { label: "APIs Developed", value: "12+" },
      { label: "Request Capacity", value: "1000+/min" },
      { label: "Failure Reduction", value: "-20%" },
      { label: "Uptime", value: "99%+" },
    ],
    doc: "",
  },
];

export const skills = [
  {
    title: "Generative AI & Agents",
    skills: [
      { name: "LangGraph" },
      { name: "LangChain" },
      { name: "Multi-Agent Systems" },
      { name: "Google ADK" },
      { name: "OpenAI API" },
      { name: "Gemini 2.5" },
      { name: "FastMCP / MCP" },
      { name: "Prompt Engineering" },
      { name: "DDML / XML DSL" },
    ],
  },
  {
    title: "RAG & NLP",
    skills: [
      { name: "RAG Pipelines" },
      { name: "FAISS" },
      { name: "Weaviate" },
      { name: "Sentence Transformers" },
      { name: "Semantic Search" },
      { name: "Cross-Encoder Reranking" },
      { name: "Hugging Face" },
      { name: "Tokenization & Embeddings" },
    ],
  },
  {
    title: "Machine Learning & CV",
    skills: [
      { name: "PyTorch" },
      { name: "LayoutLMv3" },
      { name: "PaddleOCR" },
      { name: "YOLO" },
      { name: "Scikit-learn" },
      { name: "XGBoost" },
      { name: "Computer Vision" },
    ],
  },
  {
    title: "Backend & Systems",
    skills: [
      { name: "Python" },
      { name: "FastAPI" },
      { name: "Node.js" },
      { name: "WebSockets" },
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "Docker" },
      { name: "REST APIs" },
    ],
  },
  {
    title: "Frontend & Tooling",
    skills: [
      { name: "Next.js" },
      { name: "React" },
      { name: "TypeScript" },
      { name: "TailwindCSS" },
      { name: "ProseMirror" },
      { name: "Langfuse" },
      { name: "Puppeteer" },
      { name: "Git & GitHub" },
      { name: "AWS / GCP" },
    ],
  },
];

export const education = [
  {
    id: 0,
    img: "",
    school: "Delhi Technological University",
    date: "Dec 2020 - July 2024",
    grade: "7.6 CGPA",
    degree: "Bachelor of Technology - BTech, Mechanical Engineering",
  },
  {
    id: 1,
    img: "",
    school: "Rockwood Sr. Sec. School",
    date: "Apr 2018 - Apr 2019",
    grade: "78.8%",
    degree: "CBSE(XII), Science with Computer",
  },
  {
    id: 2,
    img: "",
    school: "Rockwood Sr. Sec. School",
    date: "Apr 2016 - Apr 2017",
    grade: "9 CGPA",
    degree: "CBSE(X)",
  },
];

export const Bio = {
  name: "Abhishek Chaudhary",
  roles: [
    "AI Engineer",
    "Generative AI Specialist",
    "Multi-Agent Systems Architect",
  ],
  description:
    "AI Engineer with 2+ years of production experience architecting autonomous multi-agent systems, enterprise RAG pipelines, and high-throughput multimodal AI applications. Specialized in building deterministic generative workflows with LangGraph, FastAPI, and custom DSL pipelines at Square Yards and previously DigiQuanta / Mondee.",
  github: "https://github.com/AbhiS1310",
  resume: "https://drive.google.com/file/d/18MC6QcycC4HnE7uWRYMgtAIS6apGiThr/view?usp=drive_link",
  linkedin: "https://www.linkedin.com/in/abhis1310/",
  twitter: "",
  insta: "https://www.instagram.com/abhi.ch1310/",
};
