"use client";

import { motion } from "framer-motion";

// replace these with your real links
const links = [
  { label: "Email", href: "mailto:sophie59595@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/REPLACE-ME" },
  { label: "GitHub", href: "https://github.com/REPLACE-ME" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex min-h-screen flex-col justify-center bg-brand-yellow px-6 py-24 text-brand-blue md:px-20 lg:pl-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl"
      >
        <h2 className="text-4xl font-medium sm:text-6xl">Let&apos;s connect.</h2>
        <p className="mt-4 text-brand-blue/80 sm:text-lg">
          I&apos;m always happy to talk about research, technology,
          neuroscience, interesting ideas, or whatever you&apos;re building.
        </p>

        <div className="mt-10 flex flex-col gap-3 font-pixel text-sm">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="w-fit border-b border-brand-blue/30 pb-1 transition-colors duration-200 hover:border-navy hover:text-navy"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* drop resume.pdf into /public and this just works */}
        <a
          href="/resume.pdf"
          className="group mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-brand-blue px-6 py-3 font-pixel text-sm text-brand-yellow transition-transform duration-300 hover:scale-[1.03]"
        >
          Download resume
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      </motion.div>

      <footer className="mt-24 font-pixel text-sm text-brand-blue/50">
        <p>Sophie Shih</p>
        <p className="mt-1">Different pursuits, same curiosity.</p>
      </footer>
    </section>
  );
}
