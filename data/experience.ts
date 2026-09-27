export type ExperienceVariant = "feature" | "visual" | "stat" | "motif" | "compact";

export type ExperienceEntry = {
  number: string;
  title: string;
  role: string;
  date: string;
  year?: string; // only used by the "stat" variant
  location?: string;
  tags: string[]; // shown only in the expanded state
  description: string[]; // paragraphs, shown only in the expanded state
  cta?: { label: string; href: string };
  variant: ExperienceVariant;
};

// Order is fixed — see README before reordering.
export const experience: ExperienceEntry[] = [
  {
    number: "01",
    title: "Mass General Brigham",
    role: "Research Intern",
    date: "June 2025 — Present",
    tags: ["AI", "Neuroscience", "Parkinson's", "Knowledge Graphs"],
    description: [
      "At Mass General Brigham, I've been exploring how computational tools can make biomedical research more accessible and useful. I built Neurobiome Navigator, a Streamlit application connecting Parkinson's disease with microbiome research through AI agents, the MINERVA biomedical knowledge graph, and semantic literature search.",
      "I also designed interactive visualizations and wrote a research thesis examining how complex biomedical findings could be translated into personalized, understandable educational insights.",
    ],
    cta: { label: "View featured project", href: "/work/neurobiome" },
    variant: "feature",
  },
  {
    number: "02",
    title: "TheCoderSchool",
    role: "Code Coach",
    date: "Nov 2024 — Present",
    tags: ["Teaching", "Programming", "Scratch", "Creative Coding"],
    description: [
      "I teach programming through student-driven projects, adapting lessons to different ages, interests, skill levels, and learning styles. Rather than teaching code only through exercises, I help students turn their own ideas into games and interactive projects.",
      "I've also designed Scratch projects that introduce concepts like gravity, acceleration, and collision detection — using game mechanics to make programming and physics more intuitive.",
    ],
    variant: "motif",
  },
  {
    number: "03",
    title: "Weill Cornell Radiology",
    role: "Research Intern",
    date: "Jul 2024 — Present",
    tags: ["Medical Imaging", "Deep Learning", "LLMs", "Radiology"],
    description: [
      "My work at Weill Cornell has exposed me to two different sides of medical AI: understanding medical images and communicating what those images mean.",
      "I have annotated abdominal MRI scans and supported development of a deep-learning segmentation model for organs in patients with ADPKD. I also experimented with few-shot LLM prompting to generate patient-friendly explanations of incidental MRI findings, contributing to work presented in an RSNA abstract.",
    ],
    variant: "visual",
  },
  {
    number: "04",
    title: "MD.ai",
    role: "Intern",
    date: "2023 — 2024",
    tags: ["Healthcare AI", "LLMs", "Radiology", "Product"],
    description: [
      "At MD.ai, I explored practical applications of LLMs in healthcare and radiology, including AI-assisted reporting and patient communication. I tested ideas within the constraints of real clinical software, where accuracy, privacy, and usability matter as much as the model itself.",
      "That work eventually led into a hackathon project using LLM agents to transform clinical information into patient-friendly letters and support downstream care workflows.",
    ],
    cta: { label: "View SIIM project", href: "/work/siim" },
    variant: "compact",
  },
  {
    number: "05",
    title: "Believers",
    role: "Volunteer",
    date: "July 2024",
    year: "2024",
    location: "Tokyo, Japan",
    tags: ["Education", "Community", "Japan"],
    description: [
      "I volunteered with elementary-aged students who had stepped away from traditional school environments. Much of the experience was simply about building trust — spending time together through crafts, geography, cooking, music, and conversation.",
      "It was very different from my technical work, but reinforced something I care about across teaching and research: meeting people where they are rather than assuming one approach works for everyone.",
    ],
    variant: "stat",
  },
];
