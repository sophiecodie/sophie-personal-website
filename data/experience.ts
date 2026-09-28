export type ExperienceVariant = "feature" | "visual" | "stat" | "motif" | "compact";

export type ExperienceEntry = {
  number: string;
  title: string;
  role: string;
  date: string; // shown exactly as written
  descriptor: string; // one short line, shown collapsed
  year?: string; // only used by the "stat" variant
  location?: string;
  tags: string[]; // first tag shows collapsed; all show expanded
  description: string[]; // paragraphs, shown only in the expanded state
  // shown in the expanded state; a link with an empty href is hidden until
  // you fill it in
  links?: { label: string; href: string }[];
  variant: ExperienceVariant;
};

// Order is fixed — see README before reordering.
export const experience: ExperienceEntry[] = [
  {
    number: "01",
    title: "Mass General Brigham",
    role: "Research Intern",
    date: "Jun. 2025 – Sep. 2025",
    descriptor: "AI tools for microbiome + Parkinson's research",
    tags: ["AI", "Neuroscience", "Parkinson's", "Knowledge Graphs"],
    description: [
      "Independently developed an interactive, research-based app exploring links between the microbiome and Parkinson's disease, integrating AI agents, the MINERVA knowledge graph, semantic literature search, and personalized health insights.",
      "Designed the Streamlit interface and dynamic visualizations, conducted biomedical research, and authored a comprehensive thesis examining the use of AI to translate complex scientific findings into accessible educational tools.",
    ],
    links: [{ label: "View Neurobiome Navigator", href: "/work/neurobiome" }],
    variant: "feature",
  },
  {
    number: "02",
    title: "TheCoderSchool",
    role: "Intern / Code Coach",
    date: "Nov. 2024 – Jun. 2025",
    descriptor: "Teaching code + physics through games",
    tags: ["Teaching", "Scratch", "Physics", "Creative Coding"],
    description: [
      "Developed custom code projects and challenges to reinforce key programming concepts and foster creativity.",
      "Designed and led coding projects that introduced fundamental physics concepts — including gravity, acceleration, and collisions — through interactive games in Scratch.",
    ],
    variant: "motif",
  },
  {
    number: "03",
    title: "Weill Cornell Radiology",
    role: "Research Intern",
    date: "Jul. 2024 – Jun. 2025",
    descriptor: "MRI segmentation + patient-friendly AI",
    tags: ["Medical Imaging", "Deep Learning", "LLMs", "ADPKD"],
    description: [
      "Annotated MRIs of ADPKD patients and contributed to development of a deep-learning model for organ segmentation in MR abdomen and pelvis studies.",
      "Worked on a project using few-shot LLM prompting to generate patient-friendly explanations of incidental findings on MRI.",
      "Also explored mathematical models and spatial algorithms underlying image segmentation and neural-network training for volumetric data.",
    ],
    links: [{ label: "RSNA abstract", href: "" }], // TODO: add the abstract URL
    variant: "visual",
  },
  {
    number: "04",
    title: "MD.ai",
    role: "Intern",
    date: "Jun. 2023 – Jul. 2023",
    descriptor: "LLMs for healthcare + radiology reporting",
    tags: ["Healthcare AI", "LLMs", "Radiology", "Reporting"],
    description: [
      "Researched and presented healthcare applications of LLMs, including approaches for curating high-quality medical information for question answering.",
      "Shadowed engineers and helped test features in the MD.ai Reporting product, including HIPAA-compliant AI-assisted radiology report generation.",
      "Worked on an LLM-agent project for generating patient-friendly letters that later earned second place at the SIIM Hackathon.",
    ],
    links: [
      { label: "View Agent00HL7", href: "/work/agent00hl7" },
      { label: "Paper", href: "" }, // TODO
      {
        label: "Slides",
        href: "https://docs.google.com/presentation/d/1NYz9PMY-VRUH5TXXdrn-F39_1K8a4C-nPN4Km93GL4g/edit?usp=sharing",
      },
      { label: "Video", href: "" }, // TODO
    ],
    variant: "compact",
  },
  {
    number: "05",
    title: "Believers",
    role: "Volunteer",
    date: "Jul. 2024, 2025",
    year: "’24 ’25",
    location: "Tokyo, Japan",
    descriptor: "A “third space” between home and school",
    tags: ["Education", "Community", "Japan"],
    description: [
      "Believers addresses the problem of students in Japan leaving traditional school environments by creating a supportive “third space” between home and school.",
      "I worked alongside elementary-school students through crafts, geography, cooking, and music. So much of it was simply about building trust and spending time together — and it reminded me how much I care about meeting people where they are.",
    ],
    variant: "stat",
  },
];
