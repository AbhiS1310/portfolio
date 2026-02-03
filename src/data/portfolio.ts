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
    id: 9,
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
    id: 0,
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
    id: 1,
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
    id: 2,
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
    id: 3,
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
    img: "https://media.licdn.com/dms/image/v2/D560BAQGuqOz9OcB3SA/company-logo_200_200/company-logo_200_200/0/1716242429236?e=1753920000&v=beta&t=Wn3J2OdTDQ1Et42hFFpQdMrpje0OG89D9kC_FCyZA5Y",
    role: "AI Engineer",
    company: "DigiQuanta / Mondee",
    date: "Dec 2024 - Oct 2025",
    desc: "Led development of LLM-driven autonomous travel agents and multimodal medical document intelligence pipelines. Fine-tuned vision models for 98% accuracy in document classification.",
    fullDescription:
      "As an AI Engineer at DigiQuanta/Mondee, I designed and deployed cutting-edge LLM-driven autonomous travel agents for flight/hotel search, itinerary generation, and personalized recommendations. Built multimodal medical document intelligence pipelines using Qwen 2.5-VL and Llama 3.1, automating 95% of manual data extraction processes. Fine-tuned LayoutLMv3 for document classification and field extraction with 98% accuracy. Additionally, trained YOLO-based vision models for handwritten signature detection and created patient risk scoring models achieving 75% predictive accuracy.",
    achievements: [
      "Designed and deployed LLM-driven autonomous travel agents for flight/hotel search, itinerary generation, and personalized recommendations",
      "Built multimodal medical document intelligence pipelines using Qwen 2.5-VL and Llama 3.1, automating 95% of manual data extraction",
      "Fine-tuned LayoutLMv3 for document classification and field extraction, achieving 98% accuracy and reducing QA effort by 90%",
      "Trained and optimized YOLO-based vision models for handwritten signature detection with 95% precision on scanned medical forms",
      "Created patient risk scoring and rehospitalization prediction models, reaching 75% predictive accuracy",
      "Implemented RAG pipelines with semantic chunking and embedding-based retrieval to improve factual accuracy of LLM responses",
      "Implemented a multilingual AI medical assistant (English, Hindi, Telugu) with sub-10s inference latency using OpenAI and Gemini APIs",
      "Improved flight and hotel price prediction accuracy by 30% through feature engineering and ensemble learning",
    ],
    skills: [
      "Python",
      "LLM (Qwen, Llama)",
      "Vision Models",
      "LayoutLMv3",
      "YOLO",
      "RAG",
      "FastAPI",
      "AWS",
      "Git & Github",
    ],
    technologies: [
      "Qwen 2.5-VL",
      "Llama 3.1",
      "LayoutLMv3",
      "YOLO",
      "OpenAI API",
      "Gemini API",
      "FastAPI",
      "AWS",
      "Semantic Chunking",
      "Vector Databases",
    ],
    keyMetrics: [
      { label: "Data Extraction Automation", value: "95%" },
      { label: "Document Classification Accuracy", value: "98%" },
      { label: "QA Effort Reduction", value: "90%" },
      { label: "Signature Detection Precision", value: "95%" },
      { label: "Prediction Accuracy", value: "75%" },
      { label: "Price Prediction Improvement", value: "+30%" },
    ],
    doc: "",
  },
  {
    id: 1,
    img: "https://media.licdn.com/dms/image/v2/C510BAQHrIB0srJqHLw/company-logo_200_200/company-logo_200_200/0/1630586257062/enthuons_logo?e=1731542400&v=beta&t=MCBYmoOpPD5azwHO8CYetbbOGXqINXhUHO8yrYktsSY",
    role: "Backend Developer Intern",
    company: "Enthuons Technologies Pvt. Ltd.",
    date: "Jan 2024 - Jun 2024",
    desc: "Developed 12+ RESTful APIs using Node.js and Express.js, supporting 1,000+ requests/min. Optimized database queries and error handling, reducing backend failures by 20%.",
    fullDescription:
      "During my internship at Enthuons Technologies, I developed and deployed 12+ RESTful APIs using Node.js and Express.js, capable of handling 1,000+ requests per minute. I optimized database queries, middleware, and error handling mechanisms which resulted in a 20% reduction in backend failures. Collaborated actively in Agile sprints, contributing to code reviews, debugging, and version control using Git and GitHub. This experience provided solid foundational knowledge in backend development and API design patterns.",
    achievements: [
      "Developed and deployed 12+ RESTful APIs using Node.js and Express.js",
      "Supported 1,000+ requests/min with optimized performance",
      "Optimized database queries, middleware, and error handling, reducing backend failures by 20%",
      "Collaborated in Agile sprints with regular code reviews and debugging sessions",
      "Implemented comprehensive error handling and validation mechanisms",
      "Established best practices for API design and documentation",
      "Contributed to version control workflow using Git and GitHub",
    ],
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "RESTful API Design",
      "JavaScript",
      "Postman",
      "Git & Github",
      "Agile",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Postman",
      "Git",
      "GitHub",
      "JavaScript",
      "Database Optimization",
      "Middleware",
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
    title: "Languages",
    skills: [
      { name: "C/C++" },
      { name: "Python" },
      { name: "Java" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "PHP" },
    ],
  },
  {
    title: "Technologies/Tools",
    skills: [
      { name: "Node Js" },
      { name: "Express Js" },
      { name: "Reactjs" },
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "Pytorch" },
      { name: "Tensorflow" },
      { name: "Bootstrap" },
      { name: "TailwindCSS" },
      { name: "LLM" },
      { name: "NLP" },
    ],
  },
  {
    title: "Others",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Docker" },
      { name: "Vercel" },
      { name: "VS Code" },
      { name: "Postman" },
      { name: "AWS" },
    ],
  },
  {
    title: "Concepts",
    skills: [
      { name: "Machine Learning" },
      { name: "DSA" },
      { name: "OOPS" },
      { name: "Artificial Intelligence" },
      { name: "Deep Learning" },
      { name: "Computer Networks" },
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
  name: "Abhishek Chaudahry",
  roles: [
    "Full Stack Developer",
    "AI/ML Engineer",
    "Programmer",
  ],
  description:
    "I'm currently working at a startup, building AI and GenAI solutions that solve real-world problems across healthcare, travel, and content domains. My work focuses on automating complex tasks, improving accuracy, and delivering intelligent systems that make a real impact. I'm passionate about artificial intelligence and always looking forward to learning, growing, and contributing to innovative AI projects.",
  github: "https://github.com/AbhiS1310",
  resume: "https://drive.google.com/file/d/18MC6QcycC4HnE7uWRYMgtAIS6apGiThr/view?usp=drive_link",
  linkedin: "https://www.linkedin.com/in/abhis1310/",
  twitter: "",
  insta: "https://www.instagram.com/abhi.ch1310/",
};
