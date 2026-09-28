// Things I've worked with — a map, not a proficiency ranking. `major` only
// makes a tag slightly larger; `usedIn` is the tiny note shown on hover.
export type Skill = {
  name: string;
  major?: boolean;
  usedIn?: string;
};

export type SkillGroup = {
  title: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming",
    skills: [
      { name: "Java", major: true },
      { name: "Python", major: true },
      { name: "JavaScript" },
      { name: "TypeScript", usedIn: "This website" },
      { name: "HTML / CSS" },
      { name: "Processing" },
      { name: "DrRacket" },
      { name: "NetLogo" },
      { name: "Scratch", usedIn: "TheCoderSchool" },
    ],
  },
  {
    title: "Web / Product",
    skills: [
      { name: "React", major: true, usedIn: "This website" },
      { name: "Next.js", usedIn: "This website" },
      { name: "Tailwind CSS", usedIn: "This website" },
      { name: "Framer Motion", usedIn: "This website" },
      { name: "Streamlit", usedIn: "Neurobiome Navigator" },
      { name: "Git" },
      { name: "GitHub" },
      { name: "Vercel" },
      { name: "VS Code" },
      { name: "Notion" },
    ],
  },
  {
    title: "AI / Machine Learning",
    skills: [
      { name: "LLMs", major: true },
      { name: "RAG" },
      { name: "LLM Agents", usedIn: "Agent00HL7 · Dream Team" },
      { name: "Few-Shot Prompting", usedIn: "Weill Cornell Radiology" },
      { name: "Semantic Search", usedIn: "Neurobiome Navigator" },
      { name: "Deep Learning", usedIn: "Weill Cornell Radiology" },
      { name: "Image Segmentation", usedIn: "Weill Cornell Radiology" },
      { name: "Knowledge Graphs", usedIn: "Neurobiome Navigator" },
    ],
  },
  {
    title: "Libraries / Data Tools",
    skills: [
      { name: "LangChain" },
      { name: "Docker" },
      { name: "Neo4j", usedIn: "Neurobiome Navigator" },
      { name: "PyMuPDF" },
      { name: "Plotly" },
      { name: "py2neo" },
      { name: "streamlit-agraph" },
    ],
  },
  {
    title: "Medical / Health Tech",
    skills: [
      { name: "MRI Annotation", usedIn: "Weill Cornell Radiology" },
      { name: "Medical Imaging", major: true },
      { name: "DICOM", usedIn: "Dream Team" },
      { name: "FHIR", usedIn: "SIIM Hackathon" },
      { name: "Radiology AI", usedIn: "MD.ai · Weill Cornell" },
      { name: "ADPKD Imaging", usedIn: "Weill Cornell Radiology" },
      { name: "Patient Communication", usedIn: "Agent00HL7" },
      { name: "Biomedical Research", usedIn: "Mass General Brigham" },
    ],
  },
  {
    title: "Other Technical",
    skills: [
      { name: "MCP", usedIn: "Dream Team" },
      { name: "Onshape CAD" },
      { name: "Data Visualization", usedIn: "Neurobiome Navigator" },
      { name: "Interactive Prototyping" },
      { name: "Research App Development", usedIn: "Neurobiome Navigator" },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "English" },
      { name: "Japanese" },
      { name: "Chinese" },
      { name: "Basic French" },
    ],
  },
];
