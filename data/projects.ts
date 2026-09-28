import type { StaticImageData } from "next/image";
import { images } from "@/lib/images";

export type Project = {
  number: string;
  slug: string; // page lives at /work/[slug]
  title: string;
  context: string; // small line under the title — where / award
  summary: string; // the one sentence on the homepage widget
  image?: StaticImageData; // widget visual + detail-page header; missing = placeholder
  // "contain" shows the whole image on white (for posters/photos that
  // shouldn't be cropped or pixel-rendered); default fills the frame
  imageFit?: "cover" | "contain";
  detail: ProjectDetail; // only shown on /work/[slug], never on the homepage
};

// Anything optional or left empty is simply not rendered on the detail
// page, so fill sections in as you have material for them.
export type ProjectDetail = {
  descriptor: string; // short "× × ×" line under the title
  overview: string;
  team?: string;
  problem?: string;
  context?: string; // research context
  built: string[];
  process: string[];
  processLabel?: string; // defaults to "Process"
  tech: string[];
  screenshots: { src: string; alt: string }[]; // files in /public; empty = placeholder frames
  outcomes: string[];
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    number: "01",
    slug: "neurobiome",
    title: "Neurobiome Navigator",
    context: "Mass General Brigham · Research",
    summary: "An AI research app exploring links between the gut microbiome and Parkinson's disease.",
    image: images.neurobiome,
    detail: {
      descriptor: "Parkinson's × microbiome × AI",
      overview:
        "Exploring Parkinson's research through knowledge graphs, semantic search, and LLMs.",
      context:
        "Built independently during my research internship at Mass General Brigham, alongside a thesis on using AI to translate complex scientific findings into accessible educational tools.",
      built: [
        "An interactive, research-based Streamlit app exploring links between the microbiome and Parkinson's disease",
        "AI agents working with the MINERVA biomedical knowledge graph",
        "Semantic literature search",
        "Personalized health insights",
        "Dynamic visualizations",
      ],
      process: [], // TODO: how the project came together
      tech: ["Streamlit", "MINERVA knowledge graph", "AI agents", "Semantic search"],
      screenshots: [], // TODO: e.g. { src: "/work/neurobiome-1.png", alt: "…" }
      outcomes: [
        "A comprehensive thesis on using AI to translate complex scientific findings into accessible educational tools",
      ],
      links: [
        {
          label: "Thesis (medRxiv)",
          href: "https://www.medrxiv.org/content/10.1101/2025.09.18.25335721v1",
        },
        // TODO: demo / repo
      ],
    },
  },
  {
    number: "02",
    slug: "agent00hl7",
    title: "Agent00HL7",
    context: "SIIM Hackathon · 2nd Place",
    summary:
      "LLM agents rewrite radiology reports as patient-friendly letters, then check each letter against the original's ICD-10 codes.",
    image: images.agent00hl7,
    imageFit: "contain",
    detail: {
      descriptor: "LLM agents × radiology reports × patient literacy",
      overview:
        "Mission accepted: creating trustworthy, patient-friendly letters from radiology reports with an agentic LLM workflow.",
      team: "With Alina Yang and Estella Yee · SIIM 2024",
      problem:
        "The 21st Century Cures Act gave patients much greater access to their health records — but radiology reports are full of difficult language and medical jargon, which can lead to misinterpretation and anxiety.",
      built: [
        "AI-generated letters that explain a radiology report in plain language while preserving its medical context and accuracy",
        "An accuracy check that matches ICD-10 codes between the original report and the letter",
        "A readability check using the Flesch-Kincaid metric",
        "A workflow that reduces how much proofreading medical professionals need to do",
      ],
      processLabel: "Agentic workflow",
      process: [
        "Instead of one zero-shot prompt, the letter goes through an iterative self-refinement loop based on the Reflexion framework for AI agents",
        "Each draft is checked for accuracy (do the letter's ICD-10 codes match the report's?) and readability (Flesch-Kincaid)",
        "The loop is programmatic, so it improves accuracy while minimizing the need for human input",
      ],
      tech: ["LLM agents", "Reflexion", "ICD-10 codes", "Flesch-Kincaid"],
      screenshots: [], // TODO
      outcomes: [
        "Tested on 20 randomized radiology reports",
        "94.94% ICD-10 verification accuracy with the multi-agent approach, vs. 68.23% with zero-shot prompting",
        "81.25% of final letters needed no corrections for accuracy or readability, vs. 25% of zero-shot letters",
        "2nd place at the SIIM Hackathon",
      ],
      links: [
        {
          label: "Slides",
          href: "https://docs.google.com/presentation/d/1NYz9PMY-VRUH5TXXdrn-F39_1K8a4C-nPN4Km93GL4g/edit?usp=sharing",
        },
      ],
    },
  },
  {
    number: "03",
    slug: "dreamteam",
    title: "Dream Team",
    context: "SIIM Hackathon · 2nd Place",
    summary:
      "A team of LLM agents that reads a radiology report, finds the right specialist, and books the consultation.",
    image: images.dreamTeam,
    detail: {
      descriptor: "LLM agents × MCP × specialist access",
      overview:
        "Find your dream team of global medical experts for your health condition, through an agentic LLM workflow.",
      team: "With Joey Hentel and Kurt Teichman · SIIM 2025",
      problem:
        "Over 100 million people in the U.S. face barriers to reaching medical specialists. 20% of Americans live in rural areas, but only 9% of physicians practice there — so a patient handed a report reading “left renal mass” may have no qualified expert to ask.",
      built: [
        "An orchestrated system of autonomous LLM agents that covers the whole referral journey, from report to booked consult",
        "Imaging access through DICOM MCP — agents can query DICOM servers for studies, series and image instances, and analyze clinical metadata in context",
        "Tool access through the Model Context Protocol, one unified access point instead of separate authentication and custom integration logic for every system",
      ],
      processLabel: "How it works",
      process: [
        "Diagnosis agent — extracts the key findings from a radiology report and classifies them into an actionable category, like kidney cancer",
        "Referral agent — queries an expert database and matches the patient to a specialist by disease category, location, and preferences like experience and rating",
        "Secretary agent — checks availability with scheduling tools and sets up a video consultation",
        "Research + summary agents — produce a shareable consultation plan, including the latest research on the key findings",
      ],
      tech: ["LLM agents", "Model Context Protocol", "DICOM MCP", "Scheduling tools"],
      screenshots: [], // TODO
      outcomes: [
        "A repeatable end-to-end workflow: summarize → classify → query → schedule → synthesize",
        "Presented with a live demo",
        "2nd place at the SIIM Hackathon",
      ],
      links: [
        { label: "dreamteam.health", href: "https://dreamteam.health" },
        {
          label: "Slides",
          href: "https://docs.google.com/presentation/d/1HsQiOYT7-UfFO6YSU_EJYOC7zDnYghLq0JbolNES2Q8/edit?usp=sharing",
        },
      ],
    },
  },
];

export function projectHref(project: Project) {
  return `/work/${project.slug}`;
}
