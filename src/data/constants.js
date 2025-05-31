import ecommerce from "../images/ecommerce.png"
import inotebook from "../images/iNotebook.png"
import newsapp from "../images/newsapp.png"
import summarizer from "../images/summarizer.png"
import performance from "../images/performance.png"




export const Bio = {
  name: "Abhishek Chaudahry",
  roles: [
    "Full Stack Developer",
    "AI/ML Engineer",
    "Programmer"
  ],
  description:
    "I'm currently working at a startup, building AI and GenAI solutions that solve real-world problems across healthcare, travel, and content domains. My work focuses on automating complex tasks, improving accuracy, and delivering intelligent systems that make a real impact. I'm passionate about artificial intelligence and always looking forward to learning, growing, and contributing to innovative AI projects.",
    
  github: "https://github.com/AbhiS1310",
  resume:
    "https://drive.google.com/file/d/18MC6QcycC4HnE7uWRYMgtAIS6apGiThr/view?usp=drive_link",
  linkedin: "https://www.linkedin.com/in/abhis1310/",
  twitter: "",
  insta: "https://www.instagram.com/abhi.ch1310/",
};

export const skills = [
  {
    title: "Languages",
    skills: [
      {
        name: "C/C++",
      },
      {
        name: "Python",
      },
      {
        name: "Java",
      },
      {
        name: "HTML",
      },
      {
        name: "CSS",
      },
      {
        name: "JavaScript",
      },
      {
        name: "PHP",
      }
    ],
  },
  {
    title: "Technologies/Tools",
    skills: [
      {
        name: "Node Js",
      },
      {
        name: "Express Js",
      },
      {
        name: "Reactjs",
      },
      {
        name: "MySQL",
      },
      {
        name: "MongoDB",
      },
      {
        name: "Pytorch",
      },
      {
        name: "Tensorflow",
      },
      {
        name: "Bootstrap",
      },
      {
        name: "TailwindCSS",
      },
      {
        name: "LLM",
      },
      {
        name: "NLP",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Git",
      },
      {
        name: "GitHub",
      },
      {
        name: "Docker",
      },
      {
        name: "Vercel",
      },
      {
        name: "VS Code",
      },
      {
        name: "Postman",
      },
      {
        name: "AWS",
      },
    ],
  },
  {
    title: "Concepts",
    skills: [
      {
        name: "Machine Learning",
      },
      {
        name: "DSA",
      },
      {
        name: "OOPS",
      },
      {
        name: "Artificial Intelligence",
      },
      {
        name: "Deep Learning",
      },
      {
        name: "Computer Networks",
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: "https://media.licdn.com/dms/image/v2/D560BAQGuqOz9OcB3SA/company-logo_200_200/company-logo_200_200/0/1716242429236?e=1753920000&v=beta&t=Wn3J2OdTDQ1Et42hFFpQdMrpje0OG89D9kC_FCyZA5Y",
    role: "Software Developer",
    company: "DigiQuanta",
    date: "Dec 2024 - Present",
    desc: "Developed a medical data extraction pipeline using Qwen2.5-VL 7B (VLM), Llama 3.1-8B Instruct (LLM), and PaddleOCR, reducing manual entry effort by 90% and requiring minimal human verification. Fine-tuned LayoutLMv3 for document classification, achieving 98% accuracy on medical datasets and reducing manual effort by 90% through automated classification. Enhanced document verification by fine-tuning YOLOv11 for handwritten signature detection (95% accuracy), and built patient risk profiling models with Scikit-learn, enabling targeted care for high-risk patients and predicting rehospitalization risk with 75% accuracy. Improved previous in-place flight and hotel price prediction models by 30% through advanced feature engineering and optimized model selection.",
    skills: [
      "Python",
      "Machine Learning",
      "Scikit-learn",
      "Generative AI",
      "Git & Github",
      "AWS",
      "FastAPI",
    ],
    doc: "",
  },
  {
    id: 1,
    img: "https://media.licdn.com/dms/image/v2/C510BAQHrIB0srJqHLw/company-logo_200_200/company-logo_200_200/0/1630586257062/enthuons_logo?e=1731542400&v=beta&t=MCBYmoOpPD5azwHO8CYetbbOGXqINXhUHO8yrYktsSY",
    role: "Backend Developer Intern",
    company: "Enthuons Technologies Pvt. Ltd.",
    date: "Jan 2024 - Jul 2024",
    desc: "Designed and implemented 10+ RESTful APIs using Node.js and Express to support front-end applications and mobile platforms. Ensured APIs handled up to 5,000 requests per minute by optimizing query handling and database interactions. Established middlewares for data validation and error handling, resulting in a 20% reduction in data errors.",
    skills: [
      "Mongodb",
      "Expressjs",
      "Postman",
      "Git & Github",
      "JavaScript",
      "Nodejs"
    ],
    doc: "",
  }
]

export const education = [
  {
    id: 0,
    img: "",
    school: "Delhi Techonological University",
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

export const projects = [
  {
    id: 9,
    title: "Ecommerce Website",
    date: "Jun 2023 - Jul 2023",
    description:
      "Built a full-featured e-commerce website with functionalities like product browsing, secure payment processing via Stripe, and real-time cart management. Built a seller dashboard for sellers to maintain their products, orders and money. Enhanced user engagement with a real-time chat feature powered by WebSocket and Socket.io. ",
    image:
      ecommerce,
    tags: [
      "React Js",
      "MongoDb",
      "Node Js",
      "Express Js",
      "Redux",
      "Stripe",
      "Cloudinary"
    ],
    category: "web app",
    github: "https://github.com/AbhiS1310/EcommerceWebsite",
    webapp: "https://ecommerce-web-peach.vercel.app/",
  },
  {
    id: 0,
    title: "iNotebook",
    date: "June 2022",
    description:
      "Developed a full-stack web application that allows users to maintain their notes (Create, Update, Delete). Implemented user authentication using Jwt Auth, made responsive user interface with React JS that provides users with a seamless experience across all devices.",
    image: inotebook,
    tags: ["React Js", "MongoDb", "Node Js", "Express Js", "Redux"],
    category: "web app",
    github: "https://github.com/AbhiS1310/iNotebook",
    webapp: "",
  },
  {
    id: 1,
    title: "NewsApp",
    date: "May 2022",
    description:
      "Developed a fully responsive frontend application using Reactjs. Let users browsing current news around the world and Offered flexibility in selecting news categories, ensuring users could customize their content consumption.",
    image: newsapp,
    tags: [
      "React Js",
      "HTML",
      "CSS",
      "Bootstrap",
      "NewsApi"
    ],
    category: "web app",
    github: "https://github.com/AbhiS1310/NewsApp_project",
    webapp: "",
  },
  {
    id: 2,
    title: "Text Summarizer",
    date: "June 2024",
    description:
      "Built a text summarization tool using NLP techniques to automatically generate concise summaries of dialogues. Achieved a 20% improvement in summary coherence and relevance through data pre-processing and hyperparameter tuning. Implemented a user-friendly interface for end-users to input text and receive summaries, enhancing user experience and accessibility.",
    image: summarizer,
    tags: ["Python", "Pandas", "Pytorch", "FastAPI", "Hugging Face Transformers", "AWS", "Docker"],
    category: "machine learning",
    github: "https://github.com/AbhiS1310/TextSummarizer",
    webapp: "",
  },
  {
    id: 3,
    title: "Student Perfomance Predicter",
    date: "May 2024",
    description:
      "Developed a model to predict student performance in math using factors like gender, scores, and test prep data. Identified the best-performing machine learning algorithm through comprehensive model evaluation. Implemented a robust data pipeline for efficient and accurate model deployment.",
    image: performance,
    tags: ["Python", "Machine learning", "Pandas", "Flask", "Pickle", "AWS", "Docker"],
    category: "machine learning",
    github: "https://github.com/AbhiS1310/mlproject",
    webapp: "",
  },
  
  {
    id: 5,
    title: "BlockChain",
    date: "May 2023",
    description:
      "Create Smart Contracts on solidity for exchange tokens and deploying new tokens on bockchain",
    image:"",
    tags: ["BlockChain", "Solidity", "Etherium", "Reactjs"],
    category: "blockchain",
    github: "https://github.com/AbhiS1310/Blockchain-project",
    webapp: "",
  },

];

