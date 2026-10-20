// All site copy and data in one place, so facts are easy to check and update.

export const LINKS = {
  email: "serjankaur@gmail.com",
  github: "https://github.com/serjankaur05",
  linkedin: "https://www.linkedin.com/in/serjan-kaur-/",
  medium: "https://medium.com/@serjankaur",
  resume: "/resume.pdf",
};

export type Role = {
  id: string;
  org: string;
  title: string;
  start: string;
  end: string;
  place: string;
  now?: boolean;
  context: string;
  did: string[];
  uses: string[];
};

export const ROLES: Role[] = [
  {
    id: "cibc",
    org: "CIBC",
    title: "Data Engineering Intern, AI/ML + EDGE",
    start: "Sep 2026",
    end: "Dec 2026",
    place: "Toronto",
    now: true,
    context:
      "Enterprise AI inside a bank, where reliability, access controls and responsible AI practices are part of every deployment.",
    did: [
      "Deploy LLM-powered applications and model-serving endpoints on Microsoft Azure and Databricks.",
      "Build and configure REST APIs through Azure API Management that connect multiple LLMs to internal applications.",
      "Test and troubleshoot deployments, and create reusable integration workflows other teams can follow.",
    ],
    uses: ["Azure", "Azure APIM", "Databricks", "LLMs", "REST APIs", "Model serving", "Python"],
  },
  {
    id: "mason",
    org: "Mason Technology Corporation",
    title: "AI Automation Engineering Intern",
    start: "Jul 2026",
    end: "Sep 2026",
    place: "Remote",
    context:
      "A small founding team with a lot of manual research work and an appetite for automating it.",
    did: [
      "Built AI workflows with Python, Claude and REST APIs for prospect research, lead enrichment and internal operations.",
      "Built multi-step, AI-assisted workflows that call external services and pass results between steps.",
      "Worked with the founders to understand each problem, then tested and refined automations against real requirements and feedback.",
    ],
    uses: ["Claude", "Tool calling", "Agentic workflows", "Python", "REST APIs", "Prompt engineering"],
  },
  {
    id: "equintel",
    org: "Equintel",
    title: "Technical Intern, AI Systems Development",
    start: "Mar 2026",
    end: "Jun 2026",
    place: "Remote",
    context:
      "Sustainability reports and regulatory disclosures are long, unstructured documents. ESG assessments need structured facts.",
    did: [
      "Built Python NLP and data-processing workflows that extract structured information from unstructured reports.",
      "Contributed to AI-powered retrieval for natural-language exploration of sustainability and regulatory information.",
      "Supported validation and quality checks on AI-driven ESG assessments.",
    ],
    uses: ["NLP", "RAG", "Python", "Pandas", "Data pipelines"],
  },
  {
    id: "pioneer",
    org: "Pioneer Medcare",
    title: "Software Developer and Technology Lead",
    start: "Jan 2024",
    end: "Jan 2026",
    place: "Toronto",
    context:
      "A medical supply business running deliveries, wholesale orders and online marketplaces with a lot of manual coordination.",
    did: [
      "Built software and AI-assisted automation for delivery route planning and order management.",
      "Simplified ordering for wholesale and business customers.",
      "Built REST APIs and backend integrations with Node.js, SQL and AWS, connecting inventory with Amazon and eBay.",
      "Worked with the business side to find where time was being lost and build practical fixes.",
    ],
    uses: ["Node.js", "SQL", "AWS", "REST APIs", "JavaScript", "Automation"],
  },
];

export const OTHER_ROLES = [
  { org: "Liva AI", title: "Operations intern", when: "2026" },
  { org: "Achievable", title: "Head intern", when: "2025" },
  { org: "FuturePath via Riipen", title: "Project consultant", when: "2024–2025" },
  { org: "School Simplified", title: "Machine learning manager", when: "2022–2023" },
];

export const LEADERSHIP = {
  org: "Western Cyber Society",
  title: "Vice President, Events",
  start: "May 2025",
  end: "Apr 2026",
  did: [
    "Ran the club's event lineup with the organizing team: IBM Night, a resume workshop, networking nights and a large member social.",
    "Helped organize the Canadian Tech Summit, which brought together 200+ attendees and 40 project teams.",
  ],
};

export type Article = {
  title: string;
  dek: string;
  when: string;
  where: string;
  url: string;
};

export const ARTICLES: Article[] = [
  {
    title: "Uncovering the surprise response",
    dek: "Using machine learning on EEG recordings to look at how the brain reacts to the unexpected.",
    when: "Dec 2022",
    where: "Medium",
    url: "https://medium.com/@serjankaur/uncovering-the-surprise-response-using-machine-learning-to-analyze-eeg-data-a2e1afd6d450",
  },
  {
    title: "Solving the education crisis using brain–computer interfaces",
    dek: "What BCIs could mean for learning and accessibility, and how far the technology has to go.",
    when: "Oct 2022",
    where: "StudentsxStudents",
    url: "https://medium.com/studentsxstudents/solving-the-education-crisis-using-brain-computer-interface-b793e2c8ca01",
  },
  {
    title: "Using machine learning in personality analysis",
    dek: "How models infer behavioural traits, and the bias risks that come with trying.",
    when: "Jul 2022",
    where: "Innonation",
    url: "https://medium.com/innonation-publication/using-ml-in-personality-analysis-65ce7d1d635b",
  },
  {
    title: "Machine learning can help detect fake news",
    dek: "How misinformation detection works, which signals matter, and where the models fail.",
    when: "Feb 2022",
    where: "Medium",
    url: "https://medium.com/@serjankaur/breaking-news-ml-can-help-detect-fake-news-and-this-isnt-fake-news-e1629268bb20",
  },
  {
    title: "A crossover between AI and advertising",
    dek: "Targeting, measurement and creative testing: where AI earns its place in marketing.",
    when: "Dec 2021",
    where: "Medium",
    url: "https://medium.com/@serjankaur/a-crossover-between-ai-and-advertising-7b95568bf863",
  },
];

// The systems map: what I reach for at each layer of a product.
export const LAYERS = [
  {
    name: "Data",
    note: "getting it in and getting it clean",
    items: ["SQL", "PostgreSQL", "MySQL", "Pandas", "NumPy", "ETL", "Data pipelines", "Databricks"],
  },
  {
    name: "Models",
    note: "learning from it, or solving with it",
    items: ["Scikit-Learn", "XGBoost", "K-Means", "SHAP", "NLP", "OR-Tools CP-SAT"],
  },
  {
    name: "Services",
    note: "making it callable",
    items: ["Python", "Node.js", "Flask", "REST APIs", "Azure APIM", "Model serving", "Azure", "AWS", "Docker"],
  },
  {
    name: "People-facing",
    note: "where someone actually uses it",
    items: ["Claude", "LLMs", "Tool calling", "Agentic workflows", "RAG", "Prompt engineering", "Streamlit", "React", "Next.js", "TypeScript"],
  },
];

export const ALSO_WRITES = ["JavaScript", "Java", "C++", "Git"];

// Which skills each piece of work used, for the systems map highlight.
export const TRACES: { id: string; label: string; uses: string[] }[] = [
  { id: "cibc", label: "CIBC", uses: ["Databricks", "Python", "REST APIs", "Azure APIM", "Model serving", "Azure", "LLMs"] },
  { id: "mason", label: "Mason", uses: ["Python", "REST APIs", "Claude", "Tool calling", "Agentic workflows", "Prompt engineering"] },
  { id: "equintel", label: "Equintel", uses: ["Pandas", "Data pipelines", "NLP", "Python", "RAG"] },
  { id: "pioneer", label: "Pioneer Medcare", uses: ["SQL", "Node.js", "REST APIs", "AWS"] },
  { id: "housing", label: "Housing burden", uses: ["Pandas", "NumPy", "Scikit-Learn", "XGBoost", "K-Means", "SHAP", "Python"] },
  { id: "exams", label: "Exam scheduler", uses: ["Pandas", "OR-Tools CP-SAT", "Python", "Streamlit"] },
  { id: "rides", label: "Ride engine", uses: ["Pandas", "NumPy", "Python", "Streamlit"] },
  { id: "shop", label: "Shopify analytics", uses: ["Pandas", "ETL", "Python", "Streamlit"] },
];
